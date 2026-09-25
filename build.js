const fs = require('node:fs');
const path = require('node:path');
// Explicit allowlist keeps private drafts and working documents out of publication.
const assets = ['index.html', 'styles.css', 'portfolio.js', '1715654961528.jpeg', 'Muhammad-Tahir-CV-2026-Sept.pdf'];
const output = path.join(__dirname, 'dist');
fs.mkdirSync(output, { recursive: true });
for (const asset of assets) fs.copyFileSync(path.join(__dirname, asset), path.join(output, asset));
console.log(`Portfolio built: ${assets.length} public files in dist/`);
