const fs = require('fs');
const path = require('path');

const tools = {
  'case-converter.astro': { name: "Case Converter", desc: "Instantly convert text to UPPERCASE, lowercase, Title Case, or Sentence case." },
  'lorem-ipsum.astro': { name: "Lorem Ipsum Generator", desc: "Generate professional placeholder text by paragraph, sentence, or word." },
  'word-counter.astro': { name: "Word Counter", desc: "Real-time analytics for words, characters, reading time, and keyword density." },
  'markdown-preview.astro': { name: "Markdown Previewer", desc: "Write Markdown and see the rendered HTML preview instantly." },
  'json-formatter.astro': { name: "JSON Formatter & Validator", desc: "Free online tool to format, validate, beautify and minify JSON data. 100% client-side." },
  'base64.astro': { name: "Base64 Encoder / Decoder", desc: "Encode text to Base64 or decode Base64 strings safely in your browser." },
  'uuid-generator.astro': { name: "UUID Generator", desc: "Generate secure, random Version 4 UUIDs (GUIDs) individually or in bulk." },
  'regex-tester.astro': { name: "Regex Tester", desc: "Test and debug regular expressions with live visual match highlighting." },
  'px-to-rem.astro': { name: "PX to REM Converter", desc: "Convert pixels to REM or EM units for accessible responsive design." },
  'color-converter.astro': { name: "Color Converter", desc: "Convert seamlessly between HEX, RGB, HSL, and select colors visually." },
  'css-gradient.astro': { name: "CSS Gradient Generator", desc: "Visually create beautiful linear and radial CSS backgrounds." },
  'box-shadow.astro': { name: "Box Shadow Generator", desc: "Generate perfect CSS drop shadows with multiple layer support." },
  'jwt-decoder.astro': { name: "JWT Decoder", desc: "Decode JSON Web Tokens and inspect header, payload, and claims locally." },
  'hash-generator.astro': { name: "Hash Generator", desc: "Generate MD5, SHA-1, SHA-256, and SHA-512 cryptographic hashes." },
  'password-generator.astro': { name: "Password Generator", desc: "Create cryptographically strong, random passwords with a strength meter." },
  'text-encrypt.astro': { name: "Text Encryptor", desc: "Encrypt and decrypt messages using AES-256-GCM and the Web Crypto API." }
};

for (const [file, meta] of Object.entries(tools)) {
  const filepath = path.join(__dirname, '../src/pages', file);
  if (!fs.existsSync(filepath)) {
    console.log(`Missing: ${filepath}`);
    continue;
  }
  
  let content = fs.readFileSync(filepath, 'utf8');

  // Task 1: Fix CSS Variables
  content = content.replace(/var\(--surface-1\)/g, 'var(--color-surface)');
  content = content.replace(/var\(--surface-2\)/g, 'var(--color-surface-hover)');
  content = content.replace(/var\(--border-color\)/g, 'var(--color-border)');
  content = content.replace(/var\(--text-color\)/g, 'var(--color-text)');
  content = content.replace(/var\(--text-muted\)/g, 'var(--color-text-muted)');

  // Task 4: Add toolName and toolDescription to <MainLayout ...>
  // Find <MainLayout tag
  const layoutMatch = content.match(/<MainLayout([\s\S]*?)>/);
  if (layoutMatch) {
    let attrs = layoutMatch[1];
    // Check if already added
    if (!attrs.includes('toolName=')) {
      attrs = attrs + `\n  toolName="${meta.name}"\n  toolDescription="${meta.desc}"\n`;
      content = content.replace(layoutMatch[0], `<MainLayout${attrs}>`);
    }
  }

  // Task 11: AdSense placeholders
  const adRegex = /<div class="ad-placeholder vertical-ad">AdSense 160x600<\/div>/g;
  const newAd = `<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="SIDEBAR_SLOT_ID"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>`;
  
  content = content.replace(adRegex, newAd);

  fs.writeFileSync(filepath, content, 'utf8');
  console.log(`Processed: ${file}`);
}
