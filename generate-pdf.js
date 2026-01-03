const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new'
  });

  const page = await browser.newPage();
  
  // Set viewport for consistent rendering
  await page.setViewport({
    width: 1200,
    height: 1600,
    deviceScaleFactor: 2
  });

  // Load the HTML file
  const htmlPath = 'file://' + path.resolve(__dirname, 'index.html');
  console.log('📄 Loading CV from:', htmlPath);
  
  await page.goto(htmlPath, {
    waitUntil: 'networkidle0'
  });

  // Wait for any images to load
  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log('🖨️  Generating PDF...');
  
  // Generate PDF
  await page.pdf({
    path: 'Muhammad-Tahir-Korejo-CV.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0.5cm',
      right: '0.5cm',
      bottom: '0.5cm',
      left: '0.5cm'
    },
    preferCSSPageSize: false
  });

  await browser.close();
  
  console.log('✅ PDF created successfully: Muhammad-Tahir-Korejo-CV.pdf');
  console.log('📍 Location:', path.resolve(__dirname, 'Muhammad-Tahir-Korejo-CV.pdf'));
})();
