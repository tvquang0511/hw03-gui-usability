/**
 * checklist_runner.js — Thực thi các checklist item kiểm tra được tự động.
 *
 * Chạy:
 *   $env:PLAYWRIGHT_BROWSERS_PATH="...\ms-playwright"
 *   node scripts/checklist_runner.js
 *
 * Output:
 *   evidence/checklist_results.json  — { itemId: {status, note, evidence} }
 *   screenshots/checklist/<itemId>.png — chỉ cho item Failed
 */
const fs = require('fs');
const path = require('path');
const os = require('os');
const { chromium, firefox, webkit, devices } = require('playwright');

const WEB = process.env.SUT_WEB || 'http://localhost:5173';
const ADMIN = process.env.SUT_ADMIN || 'http://localhost:5174';
const API = process.env.SUT_API || 'http://localhost:3001/api';
const ROOT = path.join(__dirname, '..');
const BROWSER_KIND = (process.env.BROWSER_KIND || 'chromium').toLowerCase();
const XPLAT = process.env.XPLAT === '1';
const PLATFORM_LABEL = process.env.PLATFORM_LABEL || `${os.type()} ${os.release()} · ${BROWSER_KIND}`;
const STUDENT_EMAIL = '23120372@student.hcmus.edu.vn';
const OUT_JSON = process.env.OUT_JSON
  ? path.resolve(ROOT, process.env.OUT_JSON)
  : path.join(ROOT, 'evidence', 'checklist_results.json');
const SHOT_DIR = process.env.SHOT_DIR
  ? path.resolve(ROOT, process.env.SHOT_DIR)
  : path.join(ROOT, 'screenshots', 'checklist');
const AXE = require.resolve('axe-core/axe.min.js');

const CREDS = { email: 'test@eshop.com', password: 'Test1234!' };
const results = {};

function record(id, status, note, evidence) {
  results[id] = { status, note: note || '', evidence: evidence || null };
  console.log(`${id}: ${status}${note ? ' — ' + note : ''}`);
}

const { addOverlay } = require('./lib/overlay');

async function shot(page, id) {
  if (XPLAT) await addOverlay(page, PLATFORM_LABEL).catch(() => {});
  fs.mkdirSync(SHOT_DIR, { recursive: true });
  const file = path.join(SHOT_DIR, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  return path.relative(ROOT, file).replace(/\\/g, '/');
}

async function loginUI(page) {
  await page.goto(WEB + '/login', { waitUntil: 'networkidle' });
  const inputs = page.locator('input');
  await inputs.nth(0).fill(CREDS.email);
  await inputs.nth(1).fill(CREDS.password);
  await page.getByRole('button', { name: /Sign In|Đăng nhập/i }).click();
  await page.waitForTimeout(1200);
}

async function apiLogin() {
  const r = await fetch(API + '/login', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(CREDS),
  });
  return r.json();
}

async function addFirstProduct(page) {
  await page.goto(WEB + '/', { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Thêm vào giỏ' }).first().click();
  await page.waitForTimeout(400);
}

/**
 * Điều hướng trong SPA (click navbar) thay vì page.goto — page.goto làm reload
 * và xoá React state (giỏ hàng), không phản ánh thao tác thật của người dùng.
 */
async function clickCart(page) {
  await page.locator('nav a', { hasText: 'Giỏ hàng' }).first().click();
  await page.waitForTimeout(600);
}

async function clickCheckout(page) {
  await page.getByRole('button', { name: /Tiến hành thanh toán/i }).click();
  await page.waitForTimeout(700);
}

async function loginAndAdd(page) {
  await loginUI(page);
  await addFirstProduct(page);
}

async function createOrder(token) {
  const r = await fetch(API + '/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ items: [{ id: 1, name: 'iPhone 15 Pro Max', price: 30000000, quantity: 1 }], total_amount: 30000000 }),
  });
  return r.json();
}

const checks = {};
const manualIds = new Set([
  'IA-01-04', 'IA-01-06', 'IA-01-07',
  'IA-02-06', 'IA-02-17',
  'IA-03-12', 'IA-03-13', 'IA-03-14', 'IA-03-15',
  'IA-04-10', 'IA-04-14', 'IA-04-16',
]);

/* ---------------- IA-01 ---------------- */

checks['IA-01-01'] = async (page) => {
  await page.goto(WEB + '/', { waitUntil: 'networkidle' });
  const n = await page.locator('h1').count();
  return n === 1
    ? { status: 'Passed', note: '' }
    : { status: 'Failed', note: `Trang chủ có ${n} thẻ <h1>: ${(await page.locator('h1').allInnerTexts()).join(' | ')}` };
};

checks['IA-01-02'] = async (page) => {
  const paths = ['/', '/product/1', '/login', '/register', '/forgot-password', '/cart', '/profile'];
  const bad = [];
  for (const p of paths) {
    await page.goto(WEB + p, { waitUntil: 'networkidle' });
    const info = await page.evaluate(() => ({
      h1: document.querySelectorAll('h1').length,
      firstHeading: document.querySelector('h1,h2,h3')?.tagName || 'none',
    }));
    if (info.h1 !== 1) bad.push(`${p}=${info.h1} h1 (heading đầu: ${info.firstHeading})`);
  }
  return bad.length === 0
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Sai số lượng <h1>: ${bad.join('; ')}` };
};

checks['IA-01-03'] = async (page) => {
  await page.goto(WEB + '/', { waitUntil: 'networkidle' });
  const lang = await page.evaluate(() => document.documentElement.lang);
  return lang && lang.toLowerCase().startsWith('vi')
    ? { status: 'Passed', note: `lang="${lang}"` }
    : { status: 'Failed', note: `html lang="${lang}" trong khi nội dung là tiếng Việt` };
};

checks['IA-01-05'] = async (page) => {
  await page.goto(WEB + '/', { waitUntil: 'networkidle' });
  const homePrices = await page.locator('p.text-red-500').allInnerTexts();
  await addFirstProduct(page);
  await clickCart(page);
  const cartPrices = await page.locator('td').allInnerTexts();
  const hasDong = cartPrices.some((t) => t.includes('₫'));
  const homeVnd = homePrices.some((t) => /VND/i.test(t));
  return hasDong && homeVnd
    ? { status: 'Failed', note: `Home dùng "VND" (${homePrices[0]}), Cart dùng "₫" — không nhất quán đơn vị` }
    : { status: 'Passed' };
};

checks['IA-01-08'] = async (page) => {
  const auth = await apiLogin();
  await page.goto(WEB + '/', { waitUntil: 'domcontentloaded' });
  await page.evaluate((t) => localStorage.setItem('token', t), auth.token);
  await createOrder(auth.token);
  await page.goto(WEB + '/profile', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const cell = (await page.locator('tbody td').allInnerTexts()).find((t) => /\d{1,4}[/-]\d{1,2}[/-]\d{1,4}/.test(t));
  if (!cell) return { status: 'Not executed', note: 'Không có đơn hàng để kiểm tra định dạng ngày' };
  const [a, b] = cell.trim().split('/').map(Number);
  const ok = a <= 31 && b <= 12; // dd/mm/yyyy: tháng không thể > 12
  return ok
    ? { status: 'Passed', note: cell }
    : { status: 'Failed', note: `Ngày hiển thị "${cell}" theo M/D/YYYY (tháng=${a}, ngày=${b}), không phải dd/mm/yyyy` };
};

checks['IA-01-09'] = async (page) => {
  await page.goto(WEB + '/', { waitUntil: 'networkidle' });
  const imgs = await page.evaluate(() =>
    Array.from(document.images).map((i) => ({ alt: i.getAttribute('alt'), src: i.src.split('/').pop() }))
  );
  const bad = imgs.filter((i) => !i.alt || !i.alt.trim());
  return bad.length === 0
    ? { status: 'Passed' }
    : { status: 'Failed', note: `${bad.length}/${imgs.length} ảnh có alt rỗng (ví dụ: ${bad[0].src})` };
};

checks['IA-01-10'] = async (page) => {
  await page.goto(WEB + '/', { waitUntil: 'networkidle' });
  await page.addScriptTag({ path: AXE });
  const res = await page.evaluate(async () => await axe.run(document, { runOnly: ['color-contrast'] }));
  const v = res.violations.filter((x) => x.id === 'color-contrast');
  const nodes = v.reduce((s, x) => s + x.nodes.length, 0);
  return nodes === 0
    ? { status: 'Passed' }
    : { status: 'Failed', note: `${nodes} node vi phạm color-contrast (ví dụ: ${v[0].nodes[0].html.slice(0, 90)})` };
};

checks['IA-01-11'] = async (page) => {
  await page.goto(WEB + '/login', { waitUntil: 'networkidle' });
  await page.keyboard.press('Tab');
  const info = await page.evaluate(() => {
    const el = document.activeElement;
    const cs = getComputedStyle(el);
    return { tag: el.tagName, text: (el.innerText || '').slice(0, 30), outline: cs.outlineStyle, width: cs.outlineWidth, boxShadow: cs.boxShadow };
  });
  const visible = (info.outline !== 'none' && info.width !== '0px') || (info.boxShadow && info.boxShadow !== 'none');
  return visible
    ? { status: 'Passed', note: `focus trên ${info.tag} có outline/box-shadow` }
    : { status: 'Failed', note: `Phần tử focus đầu tiên (${info.tag}) không có outline/box-shadow` };
};

checks['IA-01-12'] = async (page) => {
  const ctx = page.context();
  const p = await ctx.newPage();
  await p.setViewportSize({ width: 375, height: 812 });
  const bad = [];
  for (const [name, url] of [['Home', '/'], ['Cart', '/cart'], ['Checkout', '/checkout']]) {
    await p.goto(WEB + url, { waitUntil: 'networkidle' });
    const o = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
    if (o.sw > o.iw + 1) bad.push(`${name}: ${o.sw}px > ${o.iw}px`);
  }
  await p.close();
  return bad.length === 0
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Tràn ngang ở 375px: ${bad.join('; ')}` };
};

checks['IA-01-13'] = async (page) => {
  await page.setViewportSize({ width: 640, height: 400 }); // tương đương reflow khi zoom 200% trên 1280
  await page.goto(WEB + '/checkout', { waitUntil: 'networkidle' });
  const o = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
  return o.sw <= o.iw + 1
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Nội dung tràn ngang khi zoom 200%: ${o.sw}px > ${o.iw}px` };
};

checks['IA-01-14'] = async (page) => {
  const browser = page.context().browser();
  const runAxe = async (colorScheme) => {
    const ctx = await browser.newContext({ colorScheme, viewport: { width: 1280, height: 800 } });
    const p = await ctx.newPage();
    await p.goto(WEB + '/', { waitUntil: 'networkidle' });
    await p.addScriptTag({ path: AXE });
    const res = await p.evaluate(async () => await axe.run(document, { runOnly: ['color-contrast'] }));
    const nodes = res.violations.reduce((s, x) => s + x.nodes.length, 0);
    const bg = await p.evaluate(() => getComputedStyle(document.body).backgroundColor);
    await ctx.close();
    return { nodes, bg };
  };
  const light = await runAxe('light');
  const dark = await runAxe('dark');
  // App chưa có dark theme: tiêu chí là dark mode KHÔNG làm phát sinh thêm lỗi đọc được.
  return dark.nodes <= light.nodes
    ? { status: 'Passed', note: `Không có dark theme; nền vẫn sáng (${dark.bg}) và không phát sinh thêm lỗi contrast so với light (${dark.nodes} node).` }
    : { status: 'Failed', note: `Dark mode làm tăng lỗi contrast: light=${light.nodes} node, dark=${dark.nodes} node` };
};

checks['IA-01-15'] = async (page) => {
  await page.goto(WEB + '/cart', { waitUntil: 'networkidle' });
  await page.evaluate(() => { document.documentElement.dir = 'rtl'; });
  const o = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
  return o.sw <= o.iw + 1
    ? { status: 'Passed' }
    : { status: 'Failed', note: `RTL gây tràn ngang: ${o.sw}px > ${o.iw}px` };
};

checks['IA-01-16'] = async (page) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(WEB + '/', { waitUntil: 'networkidle' });
  const small = await page.evaluate(() => {
    const els = Array.from(document.querySelectorAll('button, a'));
    return els.map((e) => ({ text: (e.innerText || '').trim().slice(0, 25), w: Math.round(e.getBoundingClientRect().width), h: Math.round(e.getBoundingClientRect().height) }))
      .filter((e) => e.w > 0 && e.h > 0 && (e.h < 44 || e.w < 44));
  });
  return small.length === 0
    ? { status: 'Passed' }
    : { status: 'Failed', note: `${small.length} control < 44px (ví dụ "${small[0].text}": ${small[0].w}×${small[0].h})` };
};

/* ---------------- IA-02 ---------------- */

checks['IA-02-01'] = async (page) => {
  const bad = [];
  for (const url of ['/login', '/register']) {
    await page.goto(WEB + url, { waitUntil: 'networkidle' });
    const info = await page.evaluate(() =>
      Array.from(document.querySelectorAll('input[required]')).map((i) => ({
        label: i.labels?.[0]?.innerText || '',
        star: !!i.labels?.[0]?.innerText?.includes('*'),
      }))
    );
    info.filter((x) => !x.star).forEach((x) => bad.push(`${url}: "${x.label || '(không nhãn)'}"`));
  }
  return bad.length === 0 ? { status: 'Passed' } : { status: 'Failed', note: `Thiếu dấu * ở ${bad.length} trường: ${bad.slice(0, 3).join(', ')}` };
};

checks['IA-02-02'] = async (page) => {
  const bad = [];
  for (const url of ['/login', '/register']) {
    await page.goto(WEB + url, { waitUntil: 'networkidle' });
    const types = await page.evaluate(() => Array.from(document.querySelectorAll('input')).map((i) => i.type));
    if (!types.includes('email')) bad.push(`${url}: types=[${types.join(',')}]`);
  }
  return bad.length === 0 ? { status: 'Passed' } : { status: 'Failed', note: `Không có input type=email — ${bad.join('; ')}` };
};

checks['IA-02-03'] = async (page) => {
  await page.goto(WEB + '/login', { waitUntil: 'networkidle' });
  const types = await page.evaluate(() => Array.from(document.querySelectorAll('input')).map((i) => i.type));
  return types[1] === 'password'
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Ô mật khẩu ở /login có type="${types[1]}" — ký tự hiện rõ` };
};

checks['IA-02-04'] = async (page) => {
  const bad = [];
  for (const url of ['/login', '/register', '/checkout', '/']) {
    await page.goto(WEB + url, { waitUntil: 'networkidle' });
    const info = await page.evaluate(() =>
      Array.from(document.querySelectorAll('input,textarea,select')).map((i) => ({
        has: !!i.labels?.length || !!i.getAttribute('aria-label') || !!i.getAttribute('aria-labelledby'),
        ph: i.getAttribute('placeholder') || '',
      }))
    );
    info.filter((x) => !x.has).forEach((x) => bad.push(`${url}: "${x.ph}"`));
  }
  return bad.length === 0 ? { status: 'Passed' } : { status: 'Failed', note: `${bad.length} input không có label liên kết: ${bad.slice(0, 4).join(', ')}` };
};

checks['IA-02-05'] = async (page) => {
  await page.goto(WEB + '/login', { waitUntil: 'networkidle' });
  const inputs = page.locator('input');
  await inputs.nth(0).fill('wrong@eshop.com');
  await inputs.nth(1).fill('Wrong123!');
  await page.getByRole('button', { name: /Sign In/i }).click();
  await page.waitForTimeout(1200);
  const order = await page.evaluate(() => {
    const err = Array.from(document.querySelectorAll('div')).find((d) => /thất bại/i.test(d.innerText || '') && d.children.length === 0);
    const btn = document.querySelector('button[type="submit"]');
    if (!err || !btn) return null;
    return { errorBeforeButton: !!(err.compareDocumentPosition(btn) & Node.DOCUMENT_POSITION_FOLLOWING), text: err.innerText.trim() };
  });
  return order && order.errorBeforeButton
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Lỗi nằm dưới nút submit${order ? ` ("${order.text}")` : ' hoặc không tìm thấy'}` };
};

checks['IA-02-07'] = async (page) => {
  await page.goto(WEB + '/forgot-password', { waitUntil: 'networkidle' });
  const txt = (await page.locator('body').innerText()).toLowerCase();
  return /bước\s*1|step\s*1/.test(txt)
    ? { status: 'Passed' }
    : { status: 'Failed', note: 'Không có step indicator ("Bước 1/2") ở bước lấy OTP' };
};

checks['IA-02-08'] = async (page) => {
  await page.goto(WEB + '/login', { waitUntil: 'networkidle' });
  const inputs = page.locator('input');
  await inputs.nth(0).fill('wrong@eshop.com');
  await inputs.nth(1).fill('Wrong123!');
  await page.getByRole('button', { name: /Sign In/i }).click();
  await page.waitForTimeout(1200);
  const v = await page.evaluate(() => Array.from(document.querySelectorAll('input')).map((i) => i.value));
  return v[0] === 'wrong@eshop.com'
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Dữ liệu bị xóa sau lỗi (email="${v[0]}")` };
};

checks['IA-02-09'] = async (page) => {
  await page.goto(WEB + '/login', { waitUntil: 'networkidle' });
  const inputs = page.locator('input');
  await inputs.nth(0).fill(CREDS.email);
  await inputs.nth(1).fill(CREDS.password);
  const btn = page.getByRole('button', { name: /Sign In/i });
  await btn.click();
  const disabledRightAfter = await btn.isDisabled().catch(() => false);
  const textRightAfter = (await btn.innerText().catch(() => '')).trim();
  await page.waitForTimeout(1500);
  return disabledRightAfter || /đang|loading/i.test(textRightAfter)
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Nút vẫn enabled và giữ nhãn "${textRightAfter || 'Sign In'}" ngay sau khi bấm — có thể submit 2 lần` };
};

checks['IA-02-10'] = async (page) => {
  await page.goto(WEB + '/product/1', { waitUntil: 'networkidle' });
  const attrs = await page.locator('input[type="number"]').first().evaluate((el) => ({
    min: el.getAttribute('min'), step: el.getAttribute('step'), max: el.getAttribute('max'),
  }));
  return attrs.min === '1' && attrs.step === '1'
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Ô số lượng thiếu ràng buộc (min=${attrs.min}, step=${attrs.step})` };
};

checks['IA-02-11'] = async (page) => {
  await loginUI(page);
  await addFirstProduct(page);
  await clickCart(page);
  await clickCheckout(page);
  const editable = await page.evaluate(() =>
    Array.from(document.querySelectorAll('input')).some((i) => i.type === 'number' && !i.readOnly && !i.disabled)
  );
  return editable
    ? { status: 'Failed', note: 'Tổng tiền là input number editable (không readonly/disabled)' }
    : { status: 'Passed' };
};

checks['IA-02-12'] = async (page) => {
  await page.goto(WEB + '/checkout', { waitUntil: 'networkidle' });
  const txt = await page.locator('body').innerText();
  const hasForm = await page.locator('button', { hasText: 'Xác Nhận Thanh Toán' }).count();
  const blocked = /đăng nhập|login/i.test(txt) && hasForm === 0;
  return blocked
    ? { status: 'Passed' }
    : { status: 'Failed', note: 'Người chưa đăng nhập vẫn thấy form thanh toán đầy đủ (không bị chặn)' };
};

checks['IA-02-13'] = async (page) => {
  const bad = [];
  for (const url of ['/login', '/register']) {
    await page.goto(WEB + url, { waitUntil: 'networkidle' });
    const info = await page.evaluate(() => Array.from(document.querySelectorAll('input')).map((i) => ({ type: i.type, ac: i.getAttribute('autocomplete') })));
    info.forEach((x, idx) => { if (!x.ac) bad.push(`${url} input#${idx} (${x.type})`); });
  }
  return bad.length === 0 ? { status: 'Passed' } : { status: 'Failed', note: `Thiếu autocomplete: ${bad.join(', ')}` };
};

checks['IA-02-14'] = async (page) => {
  await page.goto(WEB + '/', { waitUntil: 'networkidle' });
  const info = await page.locator('input').first().evaluate((el) => ({
    label: !!el.labels?.length, aria: !!el.getAttribute('aria-label'), ph: el.getAttribute('placeholder'),
  }));
  return info.label || info.aria
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Ô tìm kiếm chỉ có placeholder "${info.ph}", không có label/aria-label` };
};

checks['IA-02-15'] = async (page) => {
  await page.goto(WEB + '/login', { waitUntil: 'networkidle' });
  const inputs = page.locator('input');
  await inputs.nth(0).fill('  ' + CREDS.email + '  ');
  await inputs.nth(1).fill(CREDS.password);
  await page.getByRole('button', { name: /Sign In/i }).click();
  await page.waitForTimeout(1500);
  const loggedIn = await page.locator('text=Giỏ hàng').count();
  const err = await page.locator('text=/thất bại/i').count();
  return loggedIn > 0 && err === 0
    ? { status: 'Passed' }
    : { status: 'Failed', note: 'Email có khoảng trắng đầu/cuối bị từ chối (không trim trước khi gửi)' };
};

checks['IA-02-16'] = async (page) => {
  await page.goto(WEB + '/register', { waitUntil: 'networkidle' });
  const n = await page.locator('input[type="password"]').count();
  return n >= 2
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Chỉ có ${n} trường mật khẩu — thiếu "Xác nhận mật khẩu" (FR-01)` };
};

/* ---------------- IA-03 ---------------- */

checks['IA-03-01'] = async (page) => {
  const got = [];
  for (const url of ['/cart', '/login']) {
    await page.goto(WEB + url, { waitUntil: 'networkidle' });
    const marked = await page.evaluate(() =>
      Array.from(document.querySelectorAll('nav a')).filter((a) => a.getAttribute('aria-current') || /active|font-bold|underline/.test(a.className)).length
    );
    got.push(marked);
  }
  return got.every((x) => x > 0)
    ? { status: 'Passed' }
    : { status: 'Failed', note: 'Navbar không đánh dấu mục đang hiển thị (không aria-current/active style)' };
};

checks['IA-03-02'] = async (page) => {
  await page.goto(WEB + '/', { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Thêm vào giỏ' }).first().click();
  await page.waitForTimeout(400);
  const nav = await page.locator('nav').innerText();
  const hasBadge = await page.evaluate(() => !!document.querySelector('nav [class*="badge"], nav sup, nav [class*="rounded-full"]'));
  return /\d/.test(nav) || hasBadge
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Link "Giỏ hàng" không có badge số lượng (nav text: "${nav.replace(/\n/g, ' | ')}")` };
};

checks['IA-03-03'] = async (page) => {
  await loginUI(page);
  const btnText = (await page.locator('header button').first().innerText()).trim();
  return btnText === 'Đăng xuất'
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Nút đăng xuất có nhãn "${btnText}" (FR-23 yêu cầu "Đăng xuất")` };
};

checks['IA-03-04'] = async (page) => {
  const bad = [];
  for (const url of ['/cart', '/checkout', '/product/1']) {
    await page.goto(WEB + url, { waitUntil: 'networkidle' });
    const has = await page.evaluate(() =>
      !!document.querySelector('[aria-label*="breadcrumb" i], .breadcrumb, nav[aria-label*="Breadcrumb" i]')
    );
    if (!has) bad.push(url);
  }
  return bad.length === 0 ? { status: 'Passed' } : { status: 'Failed', note: `Không có breadcrumb ở: ${bad.join(', ')}` };
};

checks['IA-03-05'] = async (page) => {
  await page.goto(WEB + '/cart', { waitUntil: 'networkidle' });
  const href = await page.locator('header a').first().getAttribute('href');
  return href === '/'
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Logo header trỏ tới "${href}"` };
};

checks['IA-03-06'] = async (page) => {
  const navMap = [['Giỏ hàng', '/cart'], ['Đăng nhập', '/login'], ['Đăng ký', '/register']];
  const bad = [];
  for (const [name, expected] of navMap) {
    await page.goto(WEB + '/', { waitUntil: 'networkidle' });
    await page.locator('nav a', { hasText: name }).first().click();
    await page.waitForTimeout(600);
    if (!page.url().includes(expected)) bad.push(`${name} → ${page.url()}`);
  }
  return bad.length === 0 ? { status: 'Passed' } : { status: 'Failed', note: `Link điều hướng sai: ${bad.join('; ')}` };
};

checks['IA-03-07'] = async (page) => {
  await page.goto(WEB + '/cart', { waitUntil: 'networkidle' });
  const emptyHas = await page.getByRole('link', { name: /Tiếp tục mua sắm/i }).count();
  await addFirstProduct(page);
  await clickCart(page);
  const filledHas = await page.getByRole('link', { name: /Mua tiếp/i }).count();
  return emptyHas > 0 && filledHas > 0
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Thiếu lối quay lại mua sắm (empty=${emptyHas}, có hàng=${filledHas})` };
};

checks['IA-03-08'] = async (page) => {
  await page.goto(WEB + '/profile', { waitUntil: 'networkidle' });
  const txt = await page.locator('body').innerText();
  const hasMsg = /đăng nhập/i.test(txt);
  const hasLink = await page.locator('a', { hasText: /đăng nhập/i }).count();
  return hasMsg && hasLink > 0
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Trang chỉ có "${txt.split('\n').filter(Boolean).slice(0, 2).join(' / ')}", không có link đăng nhập — dead-end` };
};

checks['IA-03-09'] = async (page) => {
  await addFirstProduct(page);
  await page.goto(WEB + '/cart', { waitUntil: 'networkidle' });
  await page.reload({ waitUntil: 'networkidle' });
  const txt = await page.locator('body').innerText();
  return !/đang trống/i.test(txt)
    ? { status: 'Passed' }
    : { status: 'Failed', note: 'Sau F5 giỏ hàng trống — giỏ chỉ lưu trong React state, không persist' };
};

checks['IA-03-10'] = async (page) => {
  await page.goto(WEB + '/', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(200);
  await page.getByRole('link', { name: 'Xem chi tiết' }).first().click();
  await page.waitForTimeout(700);
  const y = await page.evaluate(() => window.scrollY);
  return y < 50
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Sau khi chuyển trang vẫn giữ scrollY=${Math.round(y)}` };
};

checks['IA-03-11'] = async (page) => {
  await loginAndAdd(page);
  await clickCart(page);
  await clickCheckout(page);
  await page.getByRole('button', { name: /Xác Nhận Thanh Toán/i }).click();
  await page.waitForTimeout(2000);
  const ok = await page.getByText(/Thanh toán thành công/i).count();
  const exit = await page.getByText(/Quay lại trang chủ/i).count();
  return ok > 0 && exit > 0
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Sau thanh toán: success=${ok}, lối thoát=${exit}` };
};

checks['IA-03-16'] = async (page) => {
  await page.goto(WEB + '/forgot-password', { waitUntil: 'networkidle' });
  const n = await page.getByRole('link', { name: /quay lại|đăng nhập/i }).count();
  return n > 0 ? { status: 'Passed' } : { status: 'Failed', note: 'Không có link quay lại đăng nhập ở /forgot-password' };
};

/* ---------------- IA-04 ---------------- */

checks['IA-04-01'] = async (page) => {
  await page.goto(WEB + '/', { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Thêm vào giỏ' }).first().click();
  await page.waitForTimeout(700);
  const feedback = await page.evaluate(() =>
    !!document.querySelector('[role="status"], [role="alert"], [class*="toast"], [class*="Toast"], [class*="notification"]')
  );
  const navText = await page.locator('nav').innerText();
  return feedback || /\d/.test(navText)
    ? { status: 'Passed' }
    : { status: 'Failed', note: 'Không có toast/badge sau khi thêm vào giỏ; người dùng không biết thao tác đã thành công' };
};

checks['IA-04-02'] = async (page) => {
  await page.goto(WEB + '/product/1', { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: /Thêm vào giỏ hàng/i }).click();
  await page.waitForTimeout(400);
  await clickCart(page);
  const empty = await page.getByText(/đang trống/i).count();
  return empty === 0
    ? { status: 'Passed' }
    : { status: 'Failed', note: 'Click đầu tiên vào "Thêm vào giỏ hàng" không thêm gì (cart vẫn trống) — phải click 2 lần' };
};

checks['IA-04-03'] = async (page) => {
  await addFirstProduct(page);
  await clickCart(page);
  let sawDialog = false;
  page.once('dialog', async (d) => { sawDialog = true; await d.dismiss(); });
  await page.getByRole('button', { name: 'Xóa' }).first().click();
  await page.waitForTimeout(800);
  const stillThere = !(await page.getByText(/đang trống/i).count());
  return sawDialog
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Click "Xóa" xóa ngay không hỏi xác nhận${stillThere ? '' : ' — item đã bị xóa khỏi giỏ'}` };
};

checks['IA-04-04'] = async (page) => {
  await page.goto(WEB + '/cart', { waitUntil: 'networkidle' });
  const art = await page.evaluate(() => document.querySelectorAll('main svg, main img').length);
  const txt = await page.locator('main').innerText();
  return art > 0 && /trống/i.test(txt)
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Empty state chỉ có chữ "${txt.trim().split('\n')[0]}", không có icon/hình minh họa (SVG/IMG=${art})` };
};

checks['IA-04-05'] = async (page) => {
  await page.goto(WEB + '/', { waitUntil: 'networkidle' });
  await page.locator('input').first().fill('zzzz-khong-ton-tai');
  await page.getByRole('button', { name: 'Tìm' }).click();
  await page.waitForTimeout(1200);
  const txt = await page.locator('main').innerText();
  return /không tìm thấy|không có|empty|0 sản phẩm/i.test(txt)
    ? { status: 'Passed' }
    : { status: 'Failed', note: 'Không có empty state; trang chỉ còn tiêu đề + dòng "Kết quả tìm kiếm cho: …", không thông báo 0 kết quả' };
};

checks['IA-04-06'] = async (page) => {
  await page.route('**/api/products**', async (route) => {
    await new Promise((r) => setTimeout(r, 2500));
    await route.continue();
  });
  await page.goto(WEB + '/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(900);
  const txt = await page.locator('main').innerText();
  const spinner = await page.evaluate(() => !!document.querySelector('[class*="animate-spin"], [class*="skeleton"], [role="progressbar"]'));
  return spinner || /đang tải|loading/i.test(txt)
    ? { status: 'Passed' }
    : { status: 'Failed', note: 'Trong 2.5s chờ API không có loading indicator; chỉ hiện tiêu đề và lưới trống' };
};

checks['IA-04-07'] = async (page) => {
  await page.route('**/api/products**', (route) => route.abort());
  await page.goto(WEB + '/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500);
  const txt = await page.locator('main').innerText();
  const retry = await page.getByRole('button', { name: /thử lại|retry/i }).count();
  return /lỗi|thử lại|không thể/i.test(txt) && retry > 0
    ? { status: 'Passed' }
    : { status: 'Failed', note: 'Khi API bị chặn, trang không có thông báo lỗi hay nút thử lại (im lặng thất bại)' };
};

checks['IA-04-08'] = async (page) => {
  await loginAndAdd(page);
  await clickCart(page);
  await clickCheckout(page);
  await page.getByPlaceholder(/Nhập mã giảm giá/i).fill('SAVE10');
  await page.getByRole('button', { name: 'Áp dụng' }).click();
  await page.waitForTimeout(1500);
  const txt = await page.locator('body').innerText();
  const discount = (txt.match(/Tiết kiệm:\s*(-?[\d.,]+)\s*₫/) || [])[1];
  const final = (txt.match(/Thành tiền:\s*([\d.,]+)\s*₫/) || [])[1];
  const applied = /Áp dụng thành công/i.test(txt);
  const sane = discount && !discount.startsWith('-');
  return applied && sane
    ? { status: 'Passed', note: `Giảm ${discount} ₫ → ${final} ₫` }
    : { status: 'Failed', note: `Feedback hiển thị giảm "${discount} ₫" và thành tiền "${final} ₫" — số tiền giảm âm/lớn hơn tổng, gây hiểu sai` };
};

checks['IA-04-09'] = async (page) => {
  await loginAndAdd(page);
  await clickCart(page);
  await clickCheckout(page);
  const msgs = {};
  for (const code of ['KHONGCO', 'EXPIRED']) {
    await page.getByPlaceholder(/Nhập mã giảm giá/i).fill(code);
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await page.waitForTimeout(1200);
    const err = await page.locator('p.text-red-600').first().innerText().catch(() => '(không thông báo)');
    msgs[code] = err.trim();
  }
  const distinct = new Set(Object.values(msgs)).size;
  return distinct >= 2
    ? { status: 'Passed', note: JSON.stringify(msgs) }
    : { status: 'Failed', note: `Hai nguyên nhân lỗi khác nhau dùng chung một thông báo: "${Object.values(msgs)[0]}"` };
};

checks['IA-04-11'] = async (page) => {
  await loginAndAdd(page);
  await clickCart(page);
  await clickCheckout(page);
  await page.getByRole('button', { name: /Xác Nhận Thanh Toán/i }).click();
  await page.waitForTimeout(2000);
  await page.getByText(/Quay lại trang chủ/i).click();
  await page.waitForTimeout(600);
  await clickCart(page);
  const empty = await page.getByText(/đang trống/i).count();
  return empty > 0
    ? { status: 'Passed' }
    : { status: 'Failed', note: 'Sau khi thanh toán thành công, giỏ hàng vẫn còn sản phẩm (clearCart không được gọi)' };
};

checks['IA-04-12'] = async (page) => {
  await page.goto(WEB + '/', { waitUntil: 'networkidle' });
  await page.locator('input').first().fill('<b id="xss-probe">abc</b>');
  await page.getByRole('button', { name: 'Tìm' }).click();
  await page.waitForTimeout(1200);
  const injected = await page.locator('#xss-probe').count();
  const bold = await page.locator('main b', { hasText: 'abc' }).count();
  return injected === 0 && bold === 0
    ? { status: 'Passed' }
    : { status: 'Failed', note: `Chuỗi "<b>abc</b>" được render thành HTML (<b> xuất hiện ${Math.max(injected, bold)} lần) — dangerouslySetInnerHTML` };
};

checks['IA-04-13'] = async (page) => {
  await loginUI(page);
  await addFirstProduct(page);
  await page.goto(WEB + '/checkout', { waitUntil: 'networkidle' });
  await page.route('**/api/checkout', (route) => route.abort());
  let dialogText = '';
  page.once('dialog', async (d) => { dialogText = d.message(); await d.dismiss(); });
  await page.getByRole('button', { name: /Xác Nhận Thanh Toán/i }).click();
  await page.waitForTimeout(1500);
  return /network error|axios|failed to fetch|err_/i.test(dialogText)
    ? { status: 'Failed', note: `Lộ chi tiết kỹ thuật trong thông báo: "${dialogText}"` }
    : { status: 'Passed', note: dialogText ? `Thông báo: "${dialogText}"` : 'Không có thông báo lỗi (xem IA-04-07)' };
};

checks['IA-04-15'] = async (page) => {
  const auth = await apiLogin();
  await createOrder(auth.token);
  await page.goto(WEB + '/', { waitUntil: 'domcontentloaded' });
  await page.evaluate((t) => localStorage.setItem('token', t), auth.token);
  await page.goto(WEB + '/profile', { waitUntil: 'networkidle' });
  await page.waitForTimeout(900);
  const btn = page.getByRole('button', { name: /Hủy đơn/i }).first();
  if (await btn.count() === 0) return { status: 'Not executed', note: 'Không có đơn pending để test hủy' };
  let dialogBeforeRequest = false;
  let requestMade = false;
  page.on('request', (r) => { if (/\/api\/orders\/\d+\/cancel/.test(r.url())) requestMade = true; });
  page.once('dialog', async (d) => { dialogBeforeRequest = !requestMade; await d.dismiss(); });
  await btn.click();
  await page.waitForTimeout(1000);
  return dialogBeforeRequest
    ? { status: 'Passed' }
    : { status: 'Failed', note: 'Bấm "Hủy đơn" gọi API ngay (dialog xuất hiện sau request chỉ là alert kết quả), không có bước xác nhận' };
};

/* ---------------- Runner ---------------- */

(async () => {
  const engines = { chromium, firefox, webkit };
  const engine = engines[BROWSER_KIND];
  if (!engine) throw new Error(`Unsupported BROWSER_KIND=${BROWSER_KIND}`);
  const browser = await engine.launch();
  const ids = Object.keys(checks).filter((id) => {
    const f = process.env.CHECK_FILTER;
    return !f ? true : f.split(',').map((s) => s.trim()).includes(id);
  });
  const VW = Number(process.env.VIEWPORT_WIDTH || 1280);
  const VH = Number(process.env.VIEWPORT_HEIGHT || 800);
  const DEVICE = process.env.PLATFORM_DEVICE || '';

  for (const id of ids) {
    const ctxOpts = DEVICE && devices[DEVICE]
      ? { ...devices[DEVICE] }
      : { viewport: { width: VW, height: VH } };
    const ctx = await browser.newContext(ctxOpts);
    const page = await ctx.newPage();
    try {
      const r = await checks[id](page);
      let evidence = null;
      if (r.status === 'Failed') evidence = await shot(page, id).catch(() => null);
      record(id, r.status, r.note, evidence);
    } catch (e) {
      const evidence = await shot(page, id).catch(() => null);
      record(id, 'Failed', 'Check error: ' + e.message.split('\n')[0].slice(0, 200), evidence);
    }
    await ctx.close();
  }

  for (const id of manualIds) record(id, 'Not executed', 'Manual check — xem evidence/screenshots');

  await browser.close();
  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify({ ranAt: new Date().toISOString(), results }, null, 2), 'utf8');
  console.log(`\nWrote ${OUT_JSON} (${Object.keys(results).length} items)`);
})();
