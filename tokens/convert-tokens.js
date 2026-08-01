const fs = require('fs');

const colourTokens = JSON.parse(fs.readFileSync('colour-tokens.json', 'utf8'));
const designTokens = JSON.parse(fs.readFileSync('design-tokens.tokens.json', 'utf8'));

function kebab(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/_/g, '-');
}

function px(val) {
  if (typeof val === 'number' && val !== 0) return `${val}px`;
  if (typeof val === 'number') return '0';
  return val;
}

let css = '';

// ============================================================
// COLOR TOKENS - Light Theme (color roles only)
// ============================================================
css += '/* Color Roles - Light Theme */\n';
css += '[data-theme="light"],\n:root {\n';
for (const [key, val] of Object.entries(colourTokens.color.light)) {
  const name = kebab(key).replace(/-color$/, '');
  css += `  --color-${name}: ${val};\n`;
}
css += '}\n\n';

// ============================================================
// COLOR TOKENS - Dark Theme (color roles only)
// ============================================================
css += '/* Color Roles - Dark Theme */\n';
css += '[data-theme="dark"] {\n';
for (const [key, val] of Object.entries(colourTokens.color.dark)) {
  const name = kebab(key).replace(/-color$/, '');
  css += `  --color-${name}: ${val};\n`;
}
css += '}\n\n';

// ============================================================
// SEMANTIC COLOR ALIASES
// ============================================================
css += '/* Semantic Color Aliases */\n';
css += ':root {\n';
css += '  --color-bg: var(--color-background);\n';
css += '  --color-text: var(--color-on-background);\n';
css += '  --color-text-secondary: var(--color-on-surface-variant);\n';
css += '  --color-border: var(--color-outline);\n';
css += '  --color-border-light: var(--color-outline-variant);\n';
css += '}\n\n';

// ============================================================
// TYPOGRAPHY - Individual tokens from colour-tokens.json
// ============================================================
css += '/* Typography Tokens */\n';
css += ':root {\n';
for (const [key, val] of Object.entries(colourTokens.typography)) {
  let v = val;
  if (key.startsWith('font-family') && typeof v === 'string') {
    v = `'${v}'`;
  }
  css += `  --${kebab(key)}: ${v};\n`;
}
css += '}\n\n';

// ============================================================
// TYPOGRAPHY - Composite font styles from design-tokens.tokens.json
// ============================================================
css += '/* Composite Font Styles */\n';
css += ':root {\n';
for (const [styleName, styleData] of Object.entries(designTokens.font)) {
  const base = `--font-${kebab(styleName)}`;
  const v = styleData.value;
  if (v.fontSize !== undefined) css += `  ${base}-size: ${px(v.fontSize)};\n`;
  if (v.fontFamily !== undefined) css += `  ${base}-family: '${v.fontFamily}';\n`;
  if (v.fontWeight !== undefined) css += `  ${base}-weight: ${v.fontWeight};\n`;
  if (v.lineHeight !== undefined) css += `  ${base}-line-height: ${px(v.lineHeight)};\n`;
  if (v.letterSpacing !== undefined) css += `  ${base}-letter-spacing: ${px(v.letterSpacing)};\n`;
  if (v.fontStyle !== undefined) css += `  ${base}-style: ${v.fontStyle};\n`;
  if (v.textDecoration !== undefined && v.textDecoration !== 'none') css += `  ${base}-decoration: ${v.textDecoration};\n`;
  if (v.textCase !== undefined && v.textCase !== 'none') css += `  ${base}-case: ${v.textCase};\n`;
}
css += '}\n\n';

// ============================================================
// SPACING TOKENS
// ============================================================
css += '/* Spacing Tokens */\n';
css += ':root {\n';
for (const [key, val] of Object.entries(colourTokens.spacing)) {
  css += `  --${kebab(key)}: ${val};\n`;
}
css += '}\n\n';

// ============================================================
// BORDER RADIUS TOKENS
// ============================================================
css += '/* Border Radius Tokens */\n';
css += ':root {\n';
for (const [key, val] of Object.entries(colourTokens.borderRadius)) {
  css += `  --${kebab(key)}: ${val};\n`;
}
css += '}\n\n';

// ============================================================
// SHADOW TOKENS
// ============================================================
css += '/* Shadow Tokens */\n';
css += ':root {\n';
for (const [key, val] of Object.entries(colourTokens.shadows)) {
  css += `  --${kebab(key)}: ${val};\n`;
}
css += '}\n\n';

// ============================================================
// ELEVATION TOKENS
// ============================================================
css += '/* Elevation Tokens */\n';
css += ':root {\n';
for (const [key, val] of Object.entries(colourTokens.elevation)) {
  css += `  --${kebab(key)}: ${val};\n`;
}
css += '}\n';

fs.writeFileSync('tokens.css', css, 'utf8');
console.log('✓ tokens.css generated successfully');
