const fs = require('fs');
const p = 'd:/UIUTIL/src/pages/index.astro';
let c = fs.readFileSync(p, 'utf8');

c = c.replace(
`.seo-expand-wrapper {
  position: relative;
}
.seo-prose-collapsed {
  max-height: 0px;`,
`.seo-expand-wrapper {
  position: relative;
  margin-top: 100px;
  padding-top: 64px;
  border-top: 1px solid var(--color-border);
  padding-bottom: 50px;
}
.seo-prose-collapsed {
  max-height: 250px;`
);

c = c.replace(
`.seo-fade {
  position: absolute;
  bottom: 52px;
  left: 0;
  right: 0;
  height: 80px;`,
`.seo-fade {
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  height: 150px;`
);

c = c.replace(
`.seo-expand-btn {
  display: block;
  margin: 0 auto 80px;
  padding: 10px 24px;`,
`.seo-expand-btn {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  padding: 10px 24px;`
);

c = c.replace(
`<div class="seo-expand-wrapper">
  <section class="prose seo-prose-collapsed" id="seo-prose" style="margin-top: 100px; border-top: 1px solid var(--color-border); padding-top: 64px;">`,
`<div class="seo-expand-wrapper">
  <section class="prose seo-prose-collapsed" id="seo-prose">`
);

c = c.replace(
`  <script>
  const expandBtn = document.getElementById('seo-expand-btn');
  const seoProse = document.getElementById('seo-prose');
  const seoFade = document.getElementById('seo-fade');
  if (expandBtn) {
    expandBtn.addEventListener('click', () => {
      if (seoProse) seoProse.classList.add('is-expanded');
      if (seoFade) seoFade.classList.add('is-hidden');
      expandBtn.classList.add('is-hidden');
    });
  }`,
`  <script>
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#seo-expand-btn');
    if (btn) {
      const prose = document.getElementById('seo-prose');
      const fade = document.getElementById('seo-fade');
      if (prose) prose.classList.add('is-expanded');
      if (fade) fade.classList.add('is-hidden');
      btn.classList.add('is-hidden');
    }
  });`
);

fs.writeFileSync(p, c);
console.log('Fixed button layout and script');
