const fs = require('fs');
const path = require('path');

const b64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=';
const buffer = Buffer.from(b64, 'base64');

fs.writeFileSync(path.join(__dirname, '../public/og-image.png'), buffer);
fs.writeFileSync(path.join(__dirname, '../public/icon-192.png'), buffer);
fs.writeFileSync(path.join(__dirname, '../public/icon-512.png'), buffer);

console.log('Created placeholder PNGs');
