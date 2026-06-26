const fs = require('fs');
const path = require('path');

// 1. Update manifest.json
const manifestPath = path.join(__dirname, '../public/manifest.json');
let manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
manifest.theme_color = "#0070f3";
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log('Updated manifest.json');

// 2. Update MainLayout.astro
const layoutPath = path.join(__dirname, '../src/layouts/MainLayout.astro');
let layout = fs.readFileSync(layoutPath, 'utf8');

const faviconSearch = '<link rel="icon" type="image/svg+xml" href="/favicon.svg" />';
const faviconAdditions = `
    <link rel="shortcut icon" href="/favicon.svg" />
    <meta name="msapplication-TileColor" content="#171717" />`;

if (layout.includes(faviconSearch) && !layout.includes('msapplication-TileColor')) {
    layout = layout.replace(faviconSearch, faviconSearch + faviconAdditions);
}

const shortcutRowSearch = '<div class="shortcut-row"><span>Go to Home</span><kbd>G</kbd> then <kbd>H</kbd></div>';
const shortcutRowAdd = '\n      <div class="shortcut-row"><span>Focus search</span><kbd>/</kbd></div>';
if (layout.includes(shortcutRowSearch) && !layout.includes('Focus search')) {
    layout = layout.replace(shortcutRowSearch, shortcutRowSearch + shortcutRowAdd);
}

fs.writeFileSync(layoutPath, layout);
console.log('Updated MainLayout.astro');
