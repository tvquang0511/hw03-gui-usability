const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Simple Markdown to HTML converter with GitHub styling
function mdToHtml(mdText, title) {
  let html = mdText
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>');

  // Handle tables
  const lines = html.split('\n');
  let inTable = false;
  let newLines = [];

  for (let line of lines) {
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (!inTable) {
        inTable = true;
        newLines.push('<table>');
      }
      if (line.includes('---')) continue; // Skip header divider
      const cells = line.split('|').filter(c => c.trim() !== '');
      const tag = newLines.includes('<tbody>') ? 'td' : 'th';
      const row = '<tr>' + cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('') + '</tr>';
      if (!newLines.includes('<tbody>') && tag === 'td') {
        newLines.push('<tbody>');
      }
      newLines.push(row);
    } else {
      if (inTable) {
        inTable = false;
        newLines.push('</tbody></table>');
      }
      newLines.push(line);
    }
  }
  if (inTable) newLines.push('</tbody></table>');

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <style>
      body { font-family: "Segoe UI", Arial, sans-serif; line-height: 1.6; padding: 40px; color: #24292e; max-width: 900px; margin: auto; }
      h1 { color: #1f4e78; border-bottom: 2px solid #eaecef; padding-bottom: 8px; }
      h2 { color: #205493; border-bottom: 1px solid #eaecef; padding-bottom: 6px; margin-top: 24px; }
      h3 { color: #2e6c80; margin-top: 18px; }
      table { border-collapse: collapse; width: 100%; margin: 16px 0; }
      th, td { border: 1px solid #dfe2e5; padding: 8px 12px; font-size: 13px; }
      th { background-color: #f6f8fa; font-weight: bold; }
      code { background-color: #f0f3f6; padding: 2px 5px; border-radius: 4px; font-family: Consolas, monospace; }
      pre { background-color: #f6f8fa; padding: 12px; border-radius: 6px; overflow-x: auto; }
      blockquote { border-left: 4px solid #0366d6; margin: 16px 0; padding: 8px 16px; background-color: #f1f8ff; color: #032f62; }
      li { margin-bottom: 4px; }
    </style>
  </head>
  <body>
    ${newLines.join('\n')}
  </body>
  </html>
  `;
}

async function convertMdToPdf() {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const page = await browser.newPage();

  const files = [
    { src: 'reports/Main_Report.md', dest: 'reports/Main_Report.pdf', title: 'HW03 Main Report - Tran Vu Quang' },
    { src: 'reports/AI_Audit_and_Critique.md', dest: 'reports/AI_Audit_and_Critique.pdf', title: 'HW03 AI Audit & Critique - Tran Vu Quang' }
  ];

  for (const f of files) {
    const mdPath = path.join(__dirname, '..', f.src);
    const pdfPath = path.join(__dirname, '..', f.dest);
    if (fs.existsSync(mdPath)) {
      const mdContent = fs.readFileSync(mdPath, 'utf-8');
      const htmlContent = mdToHtml(mdContent, f.title);
      await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' },
        printBackground: true
      });
      console.log(`Da xuat thanh cong PDF: ${f.dest}`);
    }
  }

  await browser.close();
}

convertMdToPdf().catch(console.error);
