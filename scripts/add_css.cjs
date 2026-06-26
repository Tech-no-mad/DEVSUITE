const fs = require('fs');
const filepath = 'src/styles/global.css';
let css = fs.readFileSync(filepath, 'utf8');

const newStyles = `
/* ===== Premium UI Extensions ===== */
.hero-section {
  text-align: center;
  padding: 80px 20px 40px;
  position: relative;
  overflow: hidden;
}
.hero-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);
  opacity: 0.15;
  z-index: -1;
  border-radius: 50%;
  filter: blur(60px);
}
.hero-title {
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin-bottom: 24px;
  background: linear-gradient(to right, var(--color-text), var(--color-text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto 40px auto;
}
.glass-card {
  background: color-mix(in srgb, var(--color-surface) 70%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);
}
.card.premium-card {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}
.card.premium-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(135deg, var(--color-accent), transparent 60%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.card.premium-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px color-mix(in srgb, var(--color-accent) 15%, transparent);
  border-color: transparent;
}
.card.premium-card:hover::before {
  opacity: 1;
}
.category-header {
  margin: 48px 0 24px 0;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
}
.category-header::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, var(--color-border), transparent);
}
.hero-stats {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;
}
.hero-stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero-stat-value {
  font-size: 2rem;
  font-weight: 800;
  font-family: var(--font-mono);
  color: var(--color-text);
}
.hero-stat-label {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
`;

if (!css.includes('Premium UI Extensions')) {
  css += '\n' + newStyles;
  fs.writeFileSync(filepath, css);
  console.log('Premium styles added to global.css');
} else {
  console.log('Premium styles already exist.');
}
