const fs = require('fs');
const p = 'd:/UIUTIL/src/pages/index.astro';
let c = fs.readFileSync(p, 'utf8');

const target = '</section>\n  </div>\n\n  <script>';
const replace = `  </section>
  <div class="seo-fade" id="seo-fade" aria-hidden="true"></div>
  <button class="seo-expand-btn" id="seo-expand-btn" aria-expanded="false" aria-controls="seo-prose">
    Learn more about DevSuite tools ↓
  </button>
</div>
  </div>

  <script>`;

if (c.includes(target)) {
  c = c.replace(target, replace);
  fs.writeFileSync(p, c);
  console.log('Fixed wrapper div closing tag');
} else {
  console.log('Target string not found');
}
