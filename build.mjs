// Wraps src/page.html (the Claude Artifact source, which has no document skeleton)
// into a standalone index.html for GitHub Pages. Run: node build.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const src = readFileSync(new URL('./src/page.html', import.meta.url), 'utf8');
const cut = src.indexOf('</style>') + '</style>'.length;
const head = src.slice(0, cut).trim();
const body = src.slice(cut).trim();

const favicon = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#1E5C54"/><circle cx="11" cy="13" r="4.5" fill="#F3F6F4"/><circle cx="21" cy="13" r="4.5" fill="#7CCBBB"/><path d="M5 25c1.5-4 4-6 7-6s4 1 4 1 1-1 4-1 5.5 2 7 6" fill="none" stroke="#F3F6F4" stroke-width="2.5" stroke-linecap="round"/></svg>'
)}`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Track and plan how often you see friends and family: drag names onto a monthly calendar, note what you did, set goals, and plan around holidays.">
<meta name="theme-color" content="#F3F6F4" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#111917" media="(prefers-color-scheme: dark)">
<link rel="icon" href="${favicon}">
${head}
</head>
<body>
${body}
</body>
</html>
`;

writeFileSync(new URL('./index.html', import.meta.url), html);
console.log(`index.html written (${html.length.toLocaleString()} bytes)`);
