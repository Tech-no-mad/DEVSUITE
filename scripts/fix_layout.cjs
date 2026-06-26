const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, '../src/layouts/MainLayout.astro');
let content = fs.readFileSync(filepath, 'utf8');

// 1. Update Props interface for Task 3 and Task 4
const oldProps = `interface Props {
  title: string;
  description: string;
  canonicalPath?: string;
}`;
const newProps = `interface Props {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  toolName?: string;
  toolDescription?: string;
}`;
if (content.includes(oldProps)) {
  content = content.replace(oldProps, newProps);
}

// 2. Update astro.props destructuring for Task 3 and Task 4
const oldDestruct = /const \{ title, description, canonicalPath = '' \} = Astro\.props;/;
const newDestruct = `const { title, description, canonicalPath = '/', ogImage = '/og-image.png', toolName, toolDescription } = Astro.props;`;
if (oldDestruct.test(content)) {
  content = content.replace(oldDestruct, newDestruct);
}

// 3. Update Google Fonts Link for Task 2
const oldFontLink = /<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Inter:wght@400;450;500;600;700;800&display=swap" rel="stylesheet" \/>/;
const newFontLink = `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />`;
if (oldFontLink.test(content)) {
  content = content.replace(oldFontLink, newFontLink);
}

// 4. Update og:image and Twitter card for Task 3
const oldOgDesc = `<meta property="og:description" content={description} />`;
const newOgDesc = `<meta property="og:description" content={description} />
  <meta property="og:image" content={\`\${siteUrl}\${ogImage}\`} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />`;
if (content.includes(oldOgDesc) && !content.includes('og:image"')) {
  content = content.replace(oldOgDesc, newOgDesc);
}

const oldTwitterCard = `<meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />`;
const newTwitterCard = `<meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={\`\${siteUrl}\${ogImage}\`} />`;
if (content.includes(oldTwitterCard)) {
  content = content.replace(oldTwitterCard, newTwitterCard);
}

// 5. Update JSON-LD for Task 4
const oldJsonLd = /<script type="application\/ld\+json" set:html=\{JSON\.stringify\(\{[\s\S]*?\}\)\} \/>/;
const newJsonLd = `<script type="application/ld+json" set:html={JSON.stringify(toolName ? {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": toolName,
    "url": fullCanonical,
    "description": toolDescription || description,
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  } : {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DevSuite",
    "url": siteUrl,
    "description": "All-in-one developer and creator utility hub.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": \`\${siteUrl}/?q={search_term_string}\`,
      "query-input": "required name=search_term_string"
    }
  })} />`;
if (oldJsonLd.test(content) && !content.includes('SoftwareApplication')) {
  content = content.replace(oldJsonLd, newJsonLd);
}

// 6. Add Breadcrumb Schema for Task 13 (After JSON-LD)
const breadcrumbCode = `{toolName && (
  <script type="application/ld+json" set:html={JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": toolName, "item": fullCanonical }
    ]
  })} />
)}`;
if (!content.includes('BreadcrumbList')) {
  // insert after newJsonLd
  content = content.replace(newJsonLd, newJsonLd + '\n\n  ' + breadcrumbCode);
}

// 7. Update AdSense script for Task 11
const oldAdsense = /<!-- <script async src="https:\/\/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js\?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"><\/script> -->/;
const newAdsense = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>`;
if (oldAdsense.test(content)) {
  content = content.replace(oldAdsense, newAdsense);
}

// 8. Fix Mobile Dropdown Navigation script for Task 6
const mobileNavScript = `
    // ========== Mobile Dropdown ==========
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdownContent?.classList.contains('is-open');
      dropdownContent?.classList.toggle('is-open', !isOpen);
    });

    document.addEventListener('click', () => {
      dropdownContent?.classList.remove('is-open');
    });
`;
if (!content.includes('Mobile Dropdown')) {
  // insert before closing </script>
  content = content.replace(/<\/script>(\s*)<\/body>/, mobileNavScript + '\n  </script>$1</body>');
}

fs.writeFileSync(filepath, content, 'utf8');
console.log('MainLayout.astro fixed successfully!');
