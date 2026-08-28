/**
 * fix-paths.js
 * ---------------------------------------------------------------
 * 모든 HTML 안의 상대·루트 경로를 절대 주소로 바꿉니다.
 *   ./tools-data.js        →  https://mnledu.com/tools-data.js
 *   ../tools-data-en.js    →  https://mnledu.com/tools-data-en.js
 *   /privacy.html          →  https://mnledu.com/privacy.html
 *   /en/                   →  https://mnledu.com/en/
 *
 * 다른 스크립트를 모두 돌린 뒤 마지막에 실행하세요.
 *   node fix-paths.js
 * 여러 번 실행해도 안전합니다.
 * ---------------------------------------------------------------
 */
const fs = require('fs');
const path = require('path');
const SITE = 'https://mnledu.com';
const ROOT = __dirname;

function walk(dir, out) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(d => {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) { if (d.name !== '.git') walk(p, out); }
    else if (d.name.endsWith('.html')) out.push(p);
  });
  return out;
}

const files = walk(ROOT, []).filter(f => path.basename(f) !== 'en-template.html');
let changed = 0;

files.forEach(f => {
  const original = fs.readFileSync(f, 'utf8');
  let s = original;

  // 자료 파일
  s = s.replace(/(src|href)="\.\.?\/(tools-data(?:-en)?\.js)"/g, '$1="' + SITE + '/$2"');
  // 루트 절대경로 → 전체 주소  (// 로 시작하는 프로토콜 상대 주소는 건드리지 않음)
  s = s.replace(/(src|href)="\/(?!\/)([^"]*)"/g, '$1="' + SITE + '/$2"');

  if (s !== original) { fs.writeFileSync(f, s, 'utf8'); changed++; }
});

console.log('  HTML ' + files.length + '개 검사, ' + changed + '개 수정');
