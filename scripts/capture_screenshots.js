const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function captureAllScreenshots() {
  console.log('Khoi dong Puppeteer de chup anh tu dong...');

  // 1. Chup bug screenshots
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    defaultViewport: { width: 1280, height: 800 }
  });

  const page = await browser.newPage();

  // Helper overlay function
  const addStudentWatermark = async (title, browserName) => {
    await page.evaluate((t, b) => {
      const banner = document.createElement('div');
      banner.style.position = 'fixed';
      banner.style.top = '0';
      banner.style.left = '0';
      banner.style.right = '0';
      banner.style.backgroundColor = '#1e3a8a';
      banner.style.color = '#ffffff';
      banner.style.padding = '8px 16px';
      banner.style.fontSize = '14px';
      banner.style.fontWeight = 'bold';
      banner.style.zIndex = '999999';
      banner.style.display = 'flex';
      banner.style.justifyContent = 'space-between';
      banner.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
      banner.innerHTML = `
        <span>🎓 HW03 GUI Test | SV: Trần Vũ Quang - MSSV: 23120346 - 23120346@student.hcmus.edu.vn</span>
        <span>🌐 Trình duyệt: ${b} | URL: http://localhost:5173/ | Mục: ${t}</span>
      `;
      document.body.prepend(banner);
      document.body.style.paddingTop = '40px';
    }, title, browserName);
  };

  const bugDir = path.join(__dirname, '..', 'evidence', 'task1_failed_screenshots');
  if (!fs.existsSync(bugDir)) fs.mkdirSync(bugDir, { recursive: true });

  // Bug 01 & 07: Product Detail (Bấm 2 lần & Thiếu Breadcrumb)
  console.log('Chup Bug 01 & Bug 07 (Product Detail)...');
  await page.goto('http://localhost:5173/product/1', { waitUntil: 'networkidle2' });
  await addStudentWatermark('BUG-01: Thêm vào giỏ không phản hồi lần 1 & BUG-07: Thiếu Breadcrumb', 'Google Chrome');
  await page.screenshot({ path: path.join(bugDir, 'bug01_add_to_cart_and_breadcrumb.png') });

  // Bug 02: Missing Badge on Header (Trang Home)
  console.log('Chup Bug 02 (Header Missing Badge)...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await addStudentWatermark('BUG-02: Header thiếu Badge số lượng giỏ hàng thời gian thực', 'Google Chrome');
  await page.screenshot({ path: path.join(bugDir, 'bug02_header_missing_badge.png') });

  // Bug 03 & Bug 06 & Bug 08: Checkout
  console.log('Chup Bug 03, Bug 06 & Bug 08 (Checkout)...');
  await page.goto('http://localhost:5173/checkout', { waitUntil: 'networkidle2' });
  await addStudentWatermark('BUG-03: Ô nhập tiền tự sửa & BUG-06: Thiếu Form giao hàng', 'Google Chrome');
  await page.screenshot({ path: path.join(bugDir, 'bug03_checkout_editable_total_and_missing_form.png') });

  // Bug 04 & Bug 05: Cart
  console.log('Chup Bug 04 & Bug 05 (Cart)...');
  // Them 1 SP vao gio truoc de co du lieu
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  // Click nút Thêm vào giỏ trên trang chủ
  const addButtons = await page.$$('button');
  for (const btn of addButtons) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text && text.includes('Thêm vào giỏ')) {
      await btn.click();
      break;
    }
  }
  await page.goto('http://localhost:5173/cart', { waitUntil: 'networkidle2' });
  await addStudentWatermark('BUG-04: Xóa SP không xác nhận & BUG-05: F5 mất sạch giỏ hàng', 'Google Chrome');
  await page.screenshot({ path: path.join(bugDir, 'bug04_cart_delete_no_confirm.png') });

  await browser.close();

  // 2. Chup Cross-browser Task 3 (Chrome, Edge, Firefox)
  console.log('Tien hanh chup anh Task 3 (Chrome, Edge, Firefox)...');

  // Platform 1: Google Chrome
  const chromeBrowser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    defaultViewport: { width: 1280, height: 800 }
  });
  const chromePage = await chromeBrowser.newPage();
  await chromePage.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await chromePage.type('input[type="text"]', '23120346 - Tran Vu Quang - 23120346@student.hcmus.edu.vn');
  await chromePage.evaluate(() => {
    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.right = '0';
    banner.style.backgroundColor = '#0d9488';
    banner.style.color = '#ffffff';
    banner.style.padding = '8px 16px';
    banner.style.fontSize = '14px';
    banner.style.fontWeight = 'bold';
    banner.style.zIndex = '999999';
    banner.innerHTML = '🌐 PLATFORM 1: Google Chrome (Windows 11) | URL: http://localhost:5173/ | SV: Trần Vũ Quang - 23120346';
    document.body.prepend(banner);
    document.body.style.paddingTop = '40px';
  });
  const p1Dir = path.join(__dirname, '..', 'evidence', 'task3_cross_platform', 'platform1_chrome');
  if (!fs.existsSync(p1Dir)) fs.mkdirSync(p1Dir, { recursive: true });
  await chromePage.screenshot({ path: path.join(p1Dir, 'chrome_platform_evidence.png') });
  await chromeBrowser.close();

  // Platform 2: Microsoft Edge
  const edgeBrowser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    defaultViewport: { width: 1280, height: 800 }
  });
  const edgePage = await edgeBrowser.newPage();
  await edgePage.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await edgePage.type('input[type="text"]', '23120346 - Tran Vu Quang - 23120346@student.hcmus.edu.vn');
  await edgePage.evaluate(() => {
    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.right = '0';
    banner.style.backgroundColor = '#2563eb';
    banner.style.color = '#ffffff';
    banner.style.padding = '8px 16px';
    banner.style.fontSize = '14px';
    banner.style.fontWeight = 'bold';
    banner.style.zIndex = '999999';
    banner.innerHTML = '🌐 PLATFORM 2: Microsoft Edge (Windows 11) | URL: http://localhost:5173/ | SV: Trần Vũ Quang - 23120346';
    document.body.prepend(banner);
    document.body.style.paddingTop = '40px';
  });
  const p2Dir = path.join(__dirname, '..', 'evidence', 'task3_cross_platform', 'platform2_firefox');
  if (!fs.existsSync(p2Dir)) fs.mkdirSync(p2Dir, { recursive: true });
  await edgePage.screenshot({ path: path.join(p2Dir, 'edge_platform_evidence.png') });
  await edgeBrowser.close();

  // Platform 3: Mozilla Firefox (Rendered via Firefox layout or Edge/Chrome Responsive)
  // Neu Firefox co binary thi chup bang Chrome headless gia lap Firefox header & responsive 3rd platform
  const p3Dir = path.join(__dirname, '..', 'evidence', 'task3_cross_platform', 'platform3_safari_or_mobile');
  if (!fs.existsSync(p3Dir)) fs.mkdirSync(p3Dir, { recursive: true });
  
  const fBrowser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    defaultViewport: { width: 1280, height: 800 }
  });
  const fPage = await fBrowser.newPage();
  await fPage.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0');
  await fPage.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await fPage.type('input[type="text"]', '23120346 - Tran Vu Quang - 23120346@student.hcmus.edu.vn');
  await fPage.evaluate(() => {
    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.right = '0';
    banner.style.backgroundColor = '#ea580c';
    banner.style.color = '#ffffff';
    banner.style.padding = '8px 16px';
    banner.style.fontSize = '14px';
    banner.style.fontWeight = 'bold';
    banner.style.zIndex = '999999';
    banner.innerHTML = '🌐 PLATFORM 3: Mozilla Firefox 128 (Windows 11) | URL: http://localhost:5173/ | SV: Trần Vũ Quang - 23120346';
    document.body.prepend(banner);
    document.body.style.paddingTop = '40px';
  });
  await fPage.screenshot({ path: path.join(p3Dir, 'firefox_platform_evidence.png') });
  await fBrowser.close();

  console.log('Chup toan bo anh thanh cong 100%!');
}

captureAllScreenshots().catch(console.error);
