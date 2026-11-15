/**
 * overlay.js — Watermark bắt buộc cho screenshot Task 3:
 * email sinh viên + platform (browser/OS/device) + URL localhost + timestamp.
 */
const STUDENT_EMAIL = process.env.STUDENT_EMAIL || '23120372@student.hcmus.edu.vn';

async function addOverlay(page, platformLabel) {
  const stamp = new Date().toLocaleString('vi-VN', { hour12: false });
  await page.evaluate(({ email, platform, stamp }) => {
    document.getElementById('hw03-xplat-overlay')?.remove();
    const bar = document.createElement('div');
    bar.id = 'hw03-xplat-overlay';
    bar.textContent = `${email}  |  ${platform}  |  ${location.href}  |  ${stamp}`;
    Object.assign(bar.style, {
      position: 'fixed', top: '0', left: '0', right: '0', zIndex: '2147483647',
      background: 'rgba(17,24,39,0.92)', color: '#fff', font: '600 12px/1.6 monospace',
      padding: '6px 10px', textAlign: 'center', letterSpacing: '0.2px',
    });
    document.body.prepend(bar);
    document.body.style.paddingTop = bar.offsetHeight + 2 + 'px';
  }, { email: STUDENT_EMAIL, platform: platformLabel, stamp });
}

module.exports = { addOverlay, STUDENT_EMAIL };
