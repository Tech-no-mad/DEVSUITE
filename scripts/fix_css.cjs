const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, '../src/styles/global.css');
let content = fs.readFileSync(filepath, 'utf8');

// Task 2: Replace font-weight: 450 with 500
content = content.replace(/font-weight:\s*450/g, 'font-weight: 500');

// Task 2: Update --font-mono
content = content.replace(
  /--font-mono:\s*[^;]+;/,
  "--font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', ui-monospace, monospace;"
);

// Task 5: Fix --color-success
content = content.replace(
  /--color-success:\s*#0070f3;/g,
  "--color-success: #10b981;"
);
content = content.replace(
  /--color-success:\s*#3291ff;/g,
  "--color-success: #34d399;"
);

// Task 6: Fix dropdown CSS for mobile click
const dropdownTarget = `.dropdown:hover .dropdown-content {
  display: block;
}`;
if (content.includes(dropdownTarget)) {
  content = content.replace(
    dropdownTarget,
    `.dropdown:hover .dropdown-content,
.dropdown-content.is-open {
  display: block;
}`
  );
} else {
  // If exact match isn't there, try regex
  content = content.replace(
    /\.dropdown:hover\s*\.dropdown-content\s*\{\s*display:\s*block;\s*\}/,
    `.dropdown:hover .dropdown-content,
.dropdown-content.is-open {
  display: block;
}`
  );
}

// Task 14: Fix hero typography in mobile breakpoint
const mediaRegex = /@media\s*\(\s*max-width:\s*768px\s*\)\s*\{[\s\S]*?\}/;
const mediaMatch = content.match(mediaRegex);
if (mediaMatch) {
  let mediaBlock = mediaMatch[0];
  mediaBlock = mediaBlock.replace(/\.hero\s+h1/g, '.hero-title');
  mediaBlock = mediaBlock.replace(/\.hero\s+p/g, '.hero-subtitle');
  content = content.replace(mediaRegex, mediaBlock);
} else {
  // Add it if missing
  content += `\n@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
    letter-spacing: -0.03em;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .hero-stats {
    gap: 16px;
    flex-wrap: wrap;
  }
  .hero-stat-value {
    font-size: 1.5rem;
  }
}\n`;
}

fs.writeFileSync(filepath, content, 'utf8');
console.log('global.css fixed successfully!');
