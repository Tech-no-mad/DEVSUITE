const fs = require('fs');
const path = require('path');
const https = require('https');

// 1. Update index.astro
const indexPath = path.join(__dirname, '../src/pages/index.astro');
let indexContent = fs.readFileSync(indexPath, 'utf8');

const searchHtml = `
  <div style="max-width: 480px; margin: 0 auto 48px; padding: 0 24px;">
    <input 
      type="search"
      id="tool-search"
      placeholder="Search 16 tools..."
      style="width: 100%; padding: 12px 16px; font-size: 15px; border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface); color: var(--color-text); font-family: var(--font-sans); outline: none; transition: border-color 150ms ease;"
      aria-label="Search tools"
    />
  </div>
`;

const searchScript = `
  <script>
    document.getElementById('tool-search')?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.card.premium-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.parentElement.style.display = text.includes(q) || q === '' ? '' : 'none';
      });
      // Show/hide category headers based on visible children
      document.querySelectorAll('.category-header').forEach(header => {
        const grid = header.nextElementSibling;
        const visible = [...grid?.querySelectorAll('.card')].some(c => c.parentElement.style.display !== 'none');
        header.style.display = visible || q === '' ? '' : 'none';
      });
    });
  </script>
`;

if (!indexContent.includes('tool-search')) {
  // Insert searchHtml after <div class="hero-section">...</div>
  const heroEnd = indexContent.indexOf('</div>\n\n  <div class="container"');
  if (heroEnd !== -1) {
    indexContent = indexContent.slice(0, heroEnd + 6) + '\n' + searchHtml + indexContent.slice(heroEnd + 6);
  }
  
  // Insert script before </MainLayout>
  const layoutEnd = indexContent.lastIndexOf('</MainLayout>');
  if (layoutEnd !== -1) {
    indexContent = indexContent.slice(0, layoutEnd) + searchScript + indexContent.slice(layoutEnd);
  }
  
  fs.writeFileSync(indexPath, indexContent);
  console.log('Task 15: index.astro updated');
}

// 2. Download placeholder images
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err.message));
    });
  });
}

const publicDir = path.join(__dirname, '../public');

async function downloadImages() {
  try {
    console.log('Downloading og-image.png...');
    await downloadFile('https://via.placeholder.com/1200x630/0a0a0a/ffffff.png?text=DevSuite+-+16+Free+Developer+Tools', path.join(publicDir, 'og-image.png'));
    
    console.log('Downloading icon-192.png...');
    await downloadFile('https://via.placeholder.com/192x192/0a0a0a/ffffff.png?text=D', path.join(publicDir, 'icon-192.png'));
    
    console.log('Downloading icon-512.png...');
    await downloadFile('https://via.placeholder.com/512x512/0a0a0a/ffffff.png?text=D', path.join(publicDir, 'icon-512.png'));
    
    console.log('Images downloaded successfully!');
  } catch (err) {
    console.error('Error downloading images:', err);
  }
}

downloadImages();
