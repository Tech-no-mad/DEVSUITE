const fs = require('fs');
const p = 'd:/UIUTIL/src/pages/index.astro';
let c = fs.readFileSync(p, 'utf8');

const searchStr = '<section class="prose" style="margin-top: 100px; border-top: 1px solid var(--color-border); padding-top: 64px;">';
const replaceStr = `<div class="seo-expand-wrapper">
  <section class="prose seo-prose-collapsed" id="seo-prose" style="margin-top: 100px; border-top: 1px solid var(--color-border); padding-top: 64px;">`;

if(c.includes(searchStr)) {
  c = c.replace(searchStr, replaceStr);
}

const sectionEnd = '</section>\n</MainLayout>';
const newSectionEnd = `  </section>
  <div class="seo-fade" id="seo-fade" aria-hidden="true"></div>
  <button class="seo-expand-btn" id="seo-expand-btn" aria-expanded="false" aria-controls="seo-prose">
    Learn more about DevSuite tools ↓
  </button>
</div>
</MainLayout>`;
if(c.includes(sectionEnd)) {
  c = c.replace(sectionEnd, newSectionEnd);
}

const cssToAdd = `
.seo-expand-wrapper {
  position: relative;
}
.seo-prose-collapsed {
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.seo-prose-collapsed.is-expanded {
  max-height: 99999px;
}
.seo-fade {
  position: absolute;
  bottom: 52px;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, transparent, var(--color-bg));
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.seo-fade.is-hidden {
  opacity: 0;
}
.seo-expand-btn {
  display: block;
  margin: 0 auto 80px;
  padding: 10px 24px;
  font-size: 14px;
  font-family: var(--font-sans);
  font-weight: 500;
  color: var(--color-text-secondary);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 150ms ease;
}
.seo-expand-btn:hover {
  color: var(--color-text);
  border-color: var(--color-border-hover);
}
.seo-expand-btn.is-hidden {
  display: none;
}
</style>
`;
if(!c.includes('.seo-expand-wrapper')) {
  c = c.replace('</style>', cssToAdd);
}

const jsToAdd = `
  const expandBtn = document.getElementById('seo-expand-btn');
  const seoProse = document.getElementById('seo-prose');
  const seoFade = document.getElementById('seo-fade');

  expandBtn?.addEventListener('click', () => {
    seoProse?.classList.add('is-expanded');
    seoFade?.classList.add('is-hidden');
    expandBtn.classList.add('is-hidden');
  });
</script>
`;
if(!c.includes('seo-expand-btn')) {
  c = c.replace('</script>', jsToAdd);
}

fs.writeFileSync(p, c);
console.log('Update complete.');
