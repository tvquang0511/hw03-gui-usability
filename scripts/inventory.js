/**
 * inventory.js — Dump DOM inventory của các màn hình phục vụ bước 1 (Interface inventory).
 * Chỉ đọc DOM, không click, không thay đổi dữ liệu.
 *
 * Chạy:
 *   $env:PLAYWRIGHT_BROWSERS_PATH="C:\HCMUS\hk7\Testing\gui-testing-playwright-exercise\.cache\ms-playwright"
 *   node scripts/inventory.js
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const BASE = process.env.SUT_WEB || 'http://localhost:5173';
const OUT = path.join(__dirname, '..', 'evidence', 'inventory.json');

const PAGES = [
  { id: 'home', url: '/' },
  { id: 'product-detail', url: '/product/1' },
  { id: 'login', url: '/login' },
  { id: 'register', url: '/register' },
  { id: 'forgot-password', url: '/forgot-password' },
  { id: 'cart-empty', url: '/cart' },
  { id: 'checkout-guest', url: '/checkout' },
  { id: 'profile-guest', url: '/profile' },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  const result = { baseUrl: BASE, capturedAt: new Date().toISOString(), pages: [] };

  for (const p of PAGES) {
    await page.goto(BASE + p.url, { waitUntil: 'networkidle' });
    const data = await page.evaluate(() => {
      const txt = (el) => (el.innerText || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 120);
      const q = (sel) => Array.from(document.querySelectorAll(sel));
      return {
        title: document.title,
        h1: q('h1').map(txt),
        h2: q('h2').map(txt),
        h3: q('h3').map(txt),
        headingsOrder: q('h1,h2,h3').map((e) => e.tagName + ':' + txt(e)),
        inputs: q('input,textarea,select').map((e) => ({
          tag: e.tagName.toLowerCase(),
          type: e.getAttribute('type') || '',
          name: e.getAttribute('name') || '',
          id: e.id || '',
          placeholder: e.getAttribute('placeholder') || '',
          required: e.hasAttribute('required'),
          disabled: e.disabled,
          readOnly: e.readOnly,
          tabIndex: e.getAttribute('tabindex'),
          ariaLabel: e.getAttribute('aria-label') || '',
          hasLabel: !!(e.labels && e.labels.length) || !!e.getAttribute('aria-label'),
          labelText: e.labels && e.labels[0] ? e.labels[0].innerText.trim() : '',
          autocomplete: e.getAttribute('autocomplete') || '',
        })),
        buttons: q('button').map((e) => ({ text: txt(e), type: e.getAttribute('type') || 'submit', disabled: e.disabled, tabIndex: e.getAttribute('tabindex') })),
        links: q('a').map((e) => ({ text: txt(e), href: e.getAttribute('href') })),
        images: q('img').map((e) => ({ src: (e.getAttribute('src') || '').slice(0, 80), alt: e.getAttribute('alt'), hasAlt: e.hasAttribute('alt'), altEmpty: e.getAttribute('alt') === '' })),
        tables: q('table').map((t) => ({ headers: Array.from(t.querySelectorAll('th')).map(txt), rows: t.querySelectorAll('tbody tr').length, hasCaption: !!t.querySelector('caption') })),
        nav: q('nav').map((n) => ({ links: Array.from(n.querySelectorAll('a')).map(txt), activeMarks: Array.from(n.querySelectorAll('[aria-current], .active, [class*="active"], [class*="font-bold"]')).map(txt) })),
        breadcrumb: !!document.querySelector('[aria-label*="breadcrumb" i], .breadcrumb, nav[aria-label*="Breadcrumb" i]'),
        lang: document.documentElement.lang,
        dir: document.documentElement.dir || '(none)',
        darkModeQuery: Array.from(document.styleSheets).some((s) => { try { return Array.from(s.cssRules).some((r) => r.media && /prefers-color-scheme/.test(r.media.mediaText)); } catch { return false; } }),
        bodyTextSample: (document.body.innerText || '').slice(0, 400).replace(/\s+/g, ' '),
      };
    });
    result.pages.push({ ...p, ...data });
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(result, null, 2), 'utf8');
  console.log('Wrote', OUT);
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
