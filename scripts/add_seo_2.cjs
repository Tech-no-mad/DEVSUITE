const fs = require('fs');
const path = require('path');

const seoBlocks = {
  'json-formatter.astro': `
      <!-- MASSIVE SEO PROSE SECTION -->
      <section class="prose" style="margin-top: 4rem; border-top: 1px solid var(--color-border); padding-top: 2rem;">
        <h2>The Best Free JSON Formatter, Validator & Beautifier</h2>
        <p>Working with JSON (JavaScript Object Notation) is a daily reality for modern software developers. However, raw API responses and minified data payloads are essentially unreadable to the human eye. Our <strong>free online JSON formatter</strong> and <strong>JSON validator</strong> solves this problem instantly. By pasting your minified JSON into our tool, you can beautifully format the data with proper indentation, syntax highlighting, and validate its structural integrity with a single click.</p>
        
        <h3>What is JSON?</h3>
        <p>JSON is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It has largely replaced XML as the standard format for transmitting data between a server and web application. An <strong>online JSON viewer</strong> is an essential tool for debugging REST APIs, webhooks, and configuration files (like package.json or tsconfig.json).</p>

        <h3>Why Do I Need a JSON Beautifier?</h3>
        <p>When servers transmit JSON, they typically "minify" it—removing all spaces, tabs, and line breaks to reduce the payload size and save bandwidth. While machines can parse minified JSON instantly, it looks like an incomprehensible wall of text to developers. A <strong>JSON beautifier</strong> parses this minified string and injects standardized spacing (usually 2 or 4 spaces per indentation level) and carriage returns, transforming the wall of text into a clean, nested, hierarchical tree.</p>

        <h3>Built-In JSON Syntax Validator</h3>
        <p>A missing comma, an unescaped quote, or a trailing comma can break your entire application. Debugging these syntax errors manually in a massive 5,000-line JSON file is a nightmare. Our tool includes an integrated <strong>JSON syntax checker</strong>. When you click "Validate", the engine strictly parses the string according to the official JSON specification (RFC 8259). If there is an error, our <strong>JSON debugger</strong> will highlight exactly what went wrong and print the precise line number and character position of the syntax error so you can fix it immediately.</p>

        <h3>Minify JSON for Production</h3>
        <p>While formatting is great for debugging, you should never send formatted JSON over a network in production. Our tool also acts as a <strong>JSON minifier</strong>. If you have a beautifully formatted JSON configuration file and you need to strip its whitespace to reduce file size, simply click "Minify". The algorithm will safely remove all unnecessary characters without breaking the data structure.</p>

        <h3>100% Secure Client-Side Processing</h3>
        <p>Security and privacy are non-negotiable when dealing with JSON data. API responses often contain highly sensitive information: user PII (Personally Identifiable Information), financial transactions, authentication tokens, and proprietary business logic. Most online JSON formatters send your data to a backend server to process it, creating a massive data leak vulnerability. Our <strong>secure JSON formatter</strong> executes all parsing, validating, and formatting strictly client-side using native JavaScript APIs (JSON.parse and JSON.stringify). Your data never leaves your browser, ensuring absolute privacy.</p>
      </section>`,

  'base64.astro': `
      <!-- MASSIVE SEO PROSE SECTION -->
      <section class="prose" style="margin-top: 4rem; border-top: 1px solid var(--color-border); padding-top: 2rem;">
        <h2>Free Online Base64 Encoder and Decoder</h2>
        <p>Whether you need to embed an image directly into CSS, encode an authentication token, or transmit binary data across text-only protocols, Base64 is the universal standard. Our <strong>free online Base64 encoder and decoder</strong> is a robust, developer-friendly utility that allows you to instantly convert plain text strings to Base64 ciphertext, and safely decode Base64 back to human-readable text. It fully supports UTF-8 character encoding, ensuring emojis, foreign languages, and special characters are handled flawlessly.</p>
        
        <h3>What is Base64 Encoding?</h3>
        <p>Base64 is a binary-to-text encoding scheme. It is designed to represent arbitrary binary data as an ASCII string format by translating it into a radix-64 representation. The Base64 alphabet consists of 64 characters: A-Z, a-z, 0-9, plus the '+' and '/' symbols (and '=' for padding). An <strong>online Base64 encoder</strong> is primarily used when there is a need to encode binary data that needs to be stored and transferred over media that are designed to deal with textual data. This ensures that the data remains intact without modification during transport.</p>

        <h3>Common Use Cases for a Base64 Decoder/Encoder</h3>
        <p>Developers rely on a <strong>Base64 converter</strong> daily for various technical tasks:</p>
        <ul>
          <li><strong>Data URIs:</strong> Instead of making an HTTP request for a small icon or image, developers can encode the image file into a Base64 string and embed it directly into the HTML <code>&lt;img src="data:image/png;base64,..."&gt;</code> or CSS background property.</li>
          <li><strong>Basic Authentication:</strong> In HTTP Basic Auth, credentials are transmitted as a Base64 encoded string containing the username and password joined by a colon (e.g., <code>Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=</code>). Our <strong>Base64 text encoder</strong> is perfect for generating these headers for API testing.</li>
          <li><strong>JSON Web Tokens (JWT):</strong> The header and payload of a JWT are Base64Url encoded. While we have a dedicated JWT Decoder tool, a standard <strong>Base64 decoder</strong> can also be used to inspect these payloads.</li>
          <li><strong>Email Attachments:</strong> The MIME standard uses Base64 to encode binary attachments (like PDFs and JPEGs) so they can be transmitted safely over SMTP email protocols.</li>
        </ul>

        <h3>UTF-8 and Unicode Support</h3>
        <p>A common issue with poorly built <strong>Base64 translators</strong> is that they break when confronted with non-ASCII characters (like emojis 🚀, or Japanese Kanji). Native JavaScript functions (btoa and atob) only support 8-bit ASCII. If you try to encode a Unicode string natively, it throws an InvalidCharacterError. Our tool implements a robust UTF-8 text encoder/decoder layer before the Base64 conversion, ensuring 100% accurate translation of all global character sets.</p>

        <h3>Is Base64 Encryption?</h3>
        <p>This is a critical security distinction: <strong>Base64 is NOT encryption.</strong> It is merely encoding. There is no cryptographic key involved, and anyone with access to the Base64 string can instantly decode it back to the original data using a <strong>free Base64 decoder</strong> like ours. Never use Base64 to secure sensitive data or passwords. If you need true security, use our AES-256 Text Encryptor tool instead.</p>

        <h3>Zero-Data Retention Policy</h3>
        <p>Because Base64 strings often contain sensitive API keys or credentials, sending them to a third-party server is a severe security risk. Our tool is a <strong>secure, client-side Base64 converter</strong>. All encoding and decoding algorithms are executed locally inside your web browser. No network requests are made, and your data is never logged, stored, or transmitted to any server.</p>
      </section>`,

  'uuid-generator.astro': `
      <!-- MASSIVE SEO PROSE SECTION -->
      <section class="prose" style="margin-top: 4rem; border-top: 1px solid var(--color-border); padding-top: 2rem;">
        <h2>The Ultimate Online UUID / GUID Generator</h2>
        <p>When designing distributed systems, databases, or microservices, you need a reliable way to generate universally unique identifiers without relying on a centralized database auto-incrementing ID. Our <strong>free online UUID generator</strong> allows developers to instantly create cryptographically secure, version 4 UUIDs (Universally Unique Identifiers). Generate a single UUID or bulk-generate thousands of GUIDs at once, perfectly formatted for your specific programming language or database schema.</p>
        
        <h3>What is a UUID (or GUID)?</h3>
        <p>A UUID (Universally Unique Identifier) is a 128-bit label used for information in computer systems. Microsoft commonly refers to them as GUIDs (Globally Unique Identifiers), but they are functionally the same thing. A standard UUID is represented as 32 hexadecimal digits, displayed in five groups separated by hyphens, in the form <code>8-4-4-4-12</code> (e.g., <code>123e4567-e89b-12d3-a456-426614174000</code>). A <strong>random UUID generator</strong> ensures that the probability of generating a duplicate ID is so close to zero that it can be ignored for all practical purposes.</p>

        <h3>Version 4 UUIDs: Cryptographically Secure Randomness</h3>
        <p>There are several versions of UUIDs, but Version 4 (v4) is the industry standard for general-purpose ID generation. A v4 UUID is generated using completely random numbers. However, the quality of that randomness matters. Many cheap <strong>online GUID generators</strong> use standard pseudo-random number generators (like JavaScript's <code>Math.random()</code>), which are predictable and not cryptographically secure.</p>
        <p>Our <strong>secure UUID generator</strong> utilizes the Web Crypto API (<code>crypto.randomUUID()</code> or <code>crypto.getRandomValues()</code>), ensuring high-entropy, cryptographically secure randomness. This guarantees that every UUID generated on our platform meets strict security compliance standards and is safe to use as a primary key in production databases or as secure session tokens.</p>

        <h3>Why Use UUIDs Instead of Auto-Incrementing IDs?</h3>
        <p>Many legacy systems rely on auto-incrementing integers (1, 2, 3...) for database primary keys. While simple, this approach has several massive drawbacks that an <strong>online UUID creator</strong> solves:</p>
        <ul>
          <li><strong>Security & Enumeration Attacks:</strong> If a user's profile is at <code>/users/500</code>, they can easily guess that user 501 exists and attempt to access it. UUIDs are impossible to guess, protecting your API endpoints from enumeration vulnerabilities.</li>
          <li><strong>Distributed Systems:</strong> If you have multiple database servers scaling horizontally, auto-incrementing IDs will clash unless complex, centralized coordination is implemented. A <strong>bulk UUID generator</strong> allows any node to generate a unique ID independently without consulting a central authority.</li>
          <li><strong>Offline Data Creation:</strong> Mobile apps and progressive web apps (PWAs) can create data records while offline by generating a UUID locally, and safely sync them to the server later without fear of primary key collisions.</li>
        </ul>

        <h3>Bulk GUID Generation and Formatting Options</h3>
        <p>Sometimes you need more than just one ID. Our <strong>bulk GUID generator</strong> allows you to instantly generate up to 10,000 unique identifiers in milliseconds. Because different programming languages and systems require different syntax, our tool provides multiple formatting options:</p>
        <ul>
          <li><strong>Standard (Hyphens):</strong> The RFC 4122 standard format (e.g., <code>123e4567-e89b-12d3-a456-426614174000</code>).</li>
          <li><strong>No Hyphens (Stripped):</strong> Useful for compact storage in specific database engines or as URL safe tokens (e.g., <code>123e4567e89b12d3a456426614174000</code>).</li>
          <li><strong>Uppercase vs Lowercase:</strong> While UUIDs are officially case-insensitive, some legacy systems strictly require uppercase GUIDs. Toggle the case with a single click.</li>
        </ul>

        <h3>Client-Side Generation for Privacy</h3>
        <p>Like all tools on DevSuite, our <strong>UUID v4 generator</strong> operates entirely in your browser. The cryptographic generation happens locally on your device's CPU. No IDs are generated on our servers, tracked, or logged. This ensures that the tokens you generate are truly secret and known only to you.</p>
      </section>`,

  'color-converter.astro': `
      <!-- MASSIVE SEO PROSE SECTION -->
      <section class="prose" style="margin-top: 4rem; border-top: 1px solid var(--color-border); padding-top: 2rem;">
        <h2>The Ultimate CSS Color Converter and Picker</h2>
        <p>Web designers and front-end developers work with multiple color formats every day. A brand guidelines document might provide colors in HEX, but your CSS animation requires RGB, and your Tailwind configuration is based on HSL. Our <strong>free online color converter</strong> acts as a universal bridge, instantly translating any color into all major web formats. With a built-in visual color picker and real-time conversion, this <strong>CSS color tool</strong> is an essential utility for modern UI development.</p>

        <h3>Why We Need Multiple Color Formats</h3>
        <p>The web supports various ways to declare a color, and a reliable <strong>color format translator</strong> is necessary because each format serves a unique purpose:</p>
        
        <h4>HEX (Hexadecimal)</h4>
        <p>HEX codes (e.g., <code>#FF5733</code>) are the most common way to define solid colors in CSS. They are concise, easy to copy-paste, and widely supported. However, they are not human-readable—it is mathematically difficult for a human to look at a HEX code and know how to make it 10% darker. Our <strong>hex to rgb converter</strong> helps bridge this gap.</p>
        
        <h4>RGB and RGBA (Red, Green, Blue, Alpha)</h4>
        <p>RGB (e.g., <code>rgb(255, 87, 51)</code>) represents colors based on light emission. The true power of this format is RGBA, which introduces the alpha channel for transparency. If you have a HEX code and need to apply 50% opacity, you must use an <strong>hex to rgba converter</strong> to translate it so you can write <code>rgba(255, 87, 51, 0.5)</code>.</p>
        
        <h4>HSL (Hue, Saturation, Lightness)</h4>
        <p>HSL (e.g., <code>hsl(11, 100%, 60%)</code>) is the most human-friendly color format. The Hue is a degree on the color wheel (0-360), Saturation is a percentage, and Lightness is a percentage. If you want to create a hover state that is 10% darker, you simply reduce the Lightness value. Many modern CSS frameworks use HSL for their theming engines. Our <strong>hex to hsl converter</strong> makes setting up these design systems effortless.</p>
        
        <h4>CMYK (Cyan, Magenta, Yellow, Key/Black)</h4>
        <p>While the web uses RGB, the print industry uses CMYK. If a graphic designer hands you print assets, you will need a <strong>cmyk to rgb converter</strong> to translate those ink-based colors into screen-based colors accurately.</p>

        <h3>How the Online Color Picker Works</h3>
        <p>You don't need to know the exact code to use this tool. You can utilize the visual <strong>HTML color picker</strong> to select a color visually from the spectrum. As you drag the selector, the tool dynamically generates the precise HEX, RGB, and HSL values in real-time. You can then copy these CSS-ready strings to your clipboard with a single click.</p>

        <h3>Designing Accessible Color Palettes</h3>
        <p>A crucial part of web development is ensuring your text is readable against its background, satisfying WCAG (Web Content Accessibility Guidelines) contrast ratios. By using our <strong>color code generator</strong> to translate your brand's HEX colors into HSL, you can easily tweak the lightness variable to find a shade that provides sufficient contrast for visually impaired users.</p>

        <h3>100% Client-Side Color Translation</h3>
        <p>Like all utilities on DevSuite, our <strong>CSS color converter</strong> runs entirely in your browser using optimized JavaScript algorithms. There are no server delays, no API limits, and no tracking. You get instantaneous, mathematically perfect color translations the millisecond you alter an input.</p>
      </section>`,

  'lorem-ipsum.astro': `
      <!-- MASSIVE SEO PROSE SECTION -->
      <section class="prose" style="margin-top: 4rem; border-top: 1px solid var(--color-border); padding-top: 2rem;">
        <h2>The Best Online Lorem Ipsum Generator</h2>
        <p>When designing a website, testing a database, or mocking up a user interface, you rarely have the final copywriting available. Waiting for content can stall the entire design process. Our <strong>free online Lorem Ipsum generator</strong> solves this by instantly producing high-quality placeholder text. Whether you need a few words for a button label or dozens of paragraphs for a blog template, this <strong>dummy text generator</strong> provides properly formatted, natural-looking copy in milliseconds.</p>

        <h3>What is Lorem Ipsum?</h3>
        <p>Lorem Ipsum is dummy text used by the typesetting and printing industry. It has been the industry standard placeholder text since the 1500s. The text is derived from sections of "De finibus bonorum et malorum" (The Extremes of Good and Evil), a classical Latin work by Cicero written in 45 BC. A <strong>placeholder text generator</strong> uses a scrambled version of this text because it has a more-or-less normal distribution of letters, making it look like readable English.</p>

        <h3>Why Not Just Use "Test test test"?</h3>
        <p>Many novice developers fill mockups with repetitive text like "Test text here test text here." This is a poor practice because it creates unnatural visual patterns. It doesn't accurately represent how real words wrap at the end of lines, how varying word lengths affect typography, or how paragraphs look en masse. Using a professional <strong>Lorem Ipsum tool</strong> provides text that perfectly mimics the visual weight and flow of actual content, allowing designers to focus on typography, spacing, and layout.</p>

        <h3>Customizable Dummy Text Generation</h3>
        <p>Different UI elements require different amounts of text. Our <strong>random text generator</strong> provides granular control over your output:</p>
        <ul>
          <li><strong>Paragraphs:</strong> Perfect for simulating blog posts, article bodies, and long-form content areas. Generating 3 to 5 paragraphs gives you a great sense of vertical rhythm and line-height.</li>
          <li><strong>Sentences:</strong> Ideal for product descriptions, hero section subtitles, or review quotes.</li>
          <li><strong>Words:</strong> Need a fake username, a navigation link label, or a button CTA? Generating 1 to 3 words provides the exact micro-copy placeholder you need.</li>
        </ul>

        <h3>A Tool for Web Designers and Developers</h3>
        <p>If you are building themes for WordPress, Shopify, or Ghost, you must populate your templates with sample data before submitting them for review or sale. Our <strong>website placeholder text generator</strong> outputs clean, unformatted text that can easily be wrapped in HTML tags. Simply specify the amount of text you need, click generate, and hit the "Copy" button to transfer the text directly into your IDE or design software like Figma, Sketch, or Adobe XD.</p>

        <h3>Lightning Fast Client-Side Generation</h3>
        <p>Most online text generators rely on backend servers to process the request, which introduces latency and requires an internet connection. Our <strong>JavaScript Lorem Ipsum generator</strong> is built entirely with client-side logic. The Latin vocabulary dictionary is stored locally, and the randomization algorithms execute in your browser. This means you can generate thousands of words of dummy text instantaneously, without ever making a network request.</p>
      </section>`
};

Object.entries(seoBlocks).forEach(([filename, block]) => {
  const filepath = path.join(process.cwd(), 'src/pages', filename);
  if (fs.existsSync(filepath)) {
    let content = fs.readFileSync(filepath, 'utf8');
    
    // Replace existing <section class="prose"> block
    if (content.includes('<section class="prose"')) {
      content = content.replace(/<section class="prose"[\s\S]*?<\/section>/, block);
      fs.writeFileSync(filepath, content);
      console.log('Successfully replaced SEO block in ' + filename);
    } else {
      console.log('No prose section found in: ' + filename);
    }
  } else {
    console.log('File not found: ' + filepath);
  }
});
