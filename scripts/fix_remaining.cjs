const fs = require('fs');
const path = require('path');

// Task 7: package.json
const pkgPath = path.join(__dirname, '../package.json');
let pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.name = 'devsuite-tools';
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log('Task 7: package.json updated');

// Task 9: manifest.json
const manifestPath = path.join(__dirname, '../public/manifest.json');
let manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
manifest.icons = [
  { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
  { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" },
  { "src": "/favicon.svg", "sizes": "any", "type": "image/svg+xml" }
];
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log('Task 9: manifest.json updated');

// Task 10: sitemap.xml
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
sitemap = sitemap.replace(/<lastmod>2025-\d\d-\d\d<\/lastmod>/g, '<lastmod>2026-06-26</lastmod>');
fs.writeFileSync(sitemapPath, sitemap);
console.log('Task 10: sitemap.xml updated');

// Task 12: privacy.astro
const privacyPath = path.join(__dirname, '../src/pages/privacy.astro');
let privacy = fs.readFileSync(privacyPath, 'utf8');
privacy = privacy.replace('Last updated: June 2025', 'Last updated: June 2026');
fs.writeFileSync(privacyPath, privacy);
console.log('Task 12: privacy.astro updated');

// Task 8: contact.astro
const contactPath = path.join(__dirname, '../src/pages/contact.astro');
let contact = fs.readFileSync(contactPath, 'utf8');

const contactScriptOld = /document\.getElementById\('contact-form'\)\?\.addEventListener\('submit'[\s\S]*?<\/script>/;
const contactScriptNew = `document.getElementById('contact-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const btn = form.querySelector('button[type="submit"]');
  
  btn.textContent = 'Sending...';
  btn.disabled = true;
  
  try {
    const res = await fetch('https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    
    if (res.ok) {
      form.reset();
      window.showToast?.('Message sent! We\\'ll reply within 48 hours.');
      btn.textContent = 'Message Sent ✓';
    } else {
      throw new Error('Form submission failed');
    }
  } catch {
    window.showToast?.('Something went wrong. Email us at hello@devsuite.tools');
    btn.textContent = 'Send Message';
    btn.disabled = false;
  }
});
</script>`;
if (contactScriptOld.test(contact)) {
  contact = contact.replace(contactScriptOld, contactScriptNew);
}

// Fallback email link
if (!contact.includes('mailto:hello@devsuite.tools')) {
  contact = contact.replace(/<form\b/, '<p>Or email us directly: <a href="mailto:hello@devsuite.tools">hello@devsuite.tools</a></p>\n      <form');
}

fs.writeFileSync(contactPath, contact);
console.log('Task 8: contact.astro updated');
