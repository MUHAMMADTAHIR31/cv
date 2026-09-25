const puppeteer = require('puppeteer');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: process.env.CI ? ['--no-sandbox', '--disable-setuid-sandbox'] : []
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600 });
    await page.goto(pathToFileURL(path.join(__dirname, 'index.html')).href, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: path.join(__dirname, 'Muhammad-Tahir-Korejo-CV.pdf'),
      format: 'A4', printBackground: true, preferCSSPageSize: true
    });
    console.log('Printable portfolio saved. The September 2026 CV is unchanged.');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error.message); process.exitCode = 1; });
