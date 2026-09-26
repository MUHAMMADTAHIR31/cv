const fs = require('node:fs');
const path = require('node:path');
// Explicit allowlist keeps private drafts and working documents out of publication.
const assets = ['index.html', 'styles.css', 'portfolio.js', 'assets/muhammad-tahir-graduation.jpg', 'Muhammad-Tahir-CV-2026-Sept.pdf'];
const output = path.join(__dirname, 'dist');
for (const asset of assets) {
  if (!fs.statSync(path.join(__dirname, asset)).isFile()) {
    throw new Error(`Missing public asset: ${asset}`);
  }
}
// Rebuild only this repository's generated directory, so removed assets cannot linger.
if (path.dirname(path.resolve(output)) !== path.resolve(__dirname) || path.basename(output) !== 'dist') {
  throw new Error('Refusing to clean a directory outside the build target.');
}
if (fs.existsSync(output)) {
  if (fs.lstatSync(output).isSymbolicLink()) throw new Error('Build directory must not be a symbolic link.');
  fs.rmSync(output, { recursive: true, force: true });
}
fs.mkdirSync(output, { recursive: true });
for (const asset of assets) {
  const destination = path.join(output, asset);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(path.join(__dirname, asset), destination);
}
console.log(`Portfolio built: ${assets.length} public files in dist/`);
