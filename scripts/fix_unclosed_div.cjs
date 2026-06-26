const fs = require('fs');
const p = 'd:/UIUTIL/src/pages/index.astro';
let c = fs.readFileSync(p, 'utf8');

const targetStr = '</section>\n    </div>\n\n    <aside class="ad-sidebar right-ad">';
const replaceStr = `  </section>
  <div class="seo-fade" id="seo-fade" aria-hidden="true"></div>
  <button class="seo-expand-btn" id="seo-expand-btn" aria-expanded="false" aria-controls="seo-prose">
    Learn more about DevSuite tools ↓
  </button>
</div>
    </div>

    <aside class="ad-sidebar right-ad">`;

if (c.includes(targetStr)) {
  c = c.replace(targetStr, replaceStr);
  fs.writeFileSync(p, c);
  console.log('Fixed unclosed div');
} else {
  console.log('Could not find target string');
}
