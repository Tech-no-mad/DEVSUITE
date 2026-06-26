const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '../src/pages/word-counter.astro');
let c = fs.readFileSync(p, 'utf8');

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'How do you count words?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Our algorithm counts words by detecting boundaries between characters, primarily spaces and line breaks. It handles multiple spaces, tabs, and punctuation intelligently so that you get an accurate count that matches industry standards like Microsoft Word and Google Docs.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Does a word counter include spaces?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'A word count inherently relies on spaces to separate words, but spaces themselves are not counted as words. However, our character counter provides two separate metrics: Characters (including spaces) and Characters (no spaces). This distinction is crucial for academic assignments or specialized formatting requirements.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What is a paragraph?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'In our tool, a paragraph is defined by a block of text separated by one or more blank lines (carriage returns/line breaks). Pressing the "Enter" or "Return" key creates a new paragraph.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How are sentences counted?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Our sentence counter analyzes terminal punctuation marks, specifically periods, exclamation marks, and question marks (. ! ?). It includes logic to handle common edge cases, ensuring that ellipses or abbreviations do not artificially inflate your sentence count.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can I count words in a PDF or Word document?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Currently, our tool is a plain text web application. To count words from a PDF, Microsoft Word (.docx), or Apple Pages document, simply highlight the text (Ctrl+A / Cmd+A), copy it (Ctrl+C / Cmd+C), and paste it (Ctrl+V / Cmd+V) into the text area above. The count will appear instantly.'
      }
    }
  ]
};

if (!c.includes('"@type": "FAQPage"')) {
    const scriptTag = '\n<script type="application/ld+json" set:html={JSON.stringify(' + JSON.stringify(faqSchema) + ')} />\n';
    c = c.replace('</MainLayout>', scriptTag + '</MainLayout>');
    fs.writeFileSync(p, c);
    console.log('FAQ Schema added');
} else {
    console.log('FAQ Schema already present');
}
