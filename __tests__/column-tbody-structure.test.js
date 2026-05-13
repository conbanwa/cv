/**
 * Universal guard for table.column layout: the outer column table's tbody may only
 * contain <tr> rows in the authored markup. Stray <table> / <iframe> / etc. as
 * direct tbody children break the HTML table model and commonly cause section CSS
 * (e.g. Project Experience) to stop applying consistently across browsers.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { getAllHtmlFiles } = require('../dist/js/util/paths.js');

const rootDir = path.join(__dirname, '..');

/**
 * @param {string} html
 * @returns {{ skip: true } | { ok: true } | { ok: false, message: string }}
 */
function validateFirstColumnTableOuterTbody(html) {
  const tableIdx = findFirstTableWithClassColumn(html);
  if (tableIdx === -1) {
    return { skip: true };
  }

  const afterTableOpen = skipOpenTag(html, tableIdx);
  if (afterTableOpen === -1) {
    return { ok: false, message: 'Unterminated <table class="column"> opening tag' };
  }

  let p = afterTableOpen;
  while (p < html.length && /\s/.test(html[p])) {
    p++;
  }

  const tbodyOpen = matchAt(html, p, '<tbody');
  if (!tbodyOpen) {
    return {
      ok: false,
      message: 'Expected <tbody> as first child of table.column (explicit tbody required)',
    };
  }

  const tbodyContentStart = skipOpenTag(html, p);
  if (tbodyContentStart === -1) {
    return { ok: false, message: 'Unterminated <tbody> opening tag' };
  }

  let tbodyNest = 1;
  p = tbodyContentStart;

  while (p < html.length) {
    while (p < html.length && /\s/.test(html[p])) {
      p++;
    }
    if (p >= html.length) {
      return { ok: false, message: 'Unexpected EOF inside column <tbody>' };
    }

    if (html.startsWith('<!--', p)) {
      const end = html.indexOf('-->', p + 4);
      if (end === -1) {
        return { ok: false, message: 'Unterminated HTML comment inside column <tbody>' };
      }
      p = end + 3;
      continue;
    }

    if (html[p] !== '<') {
      return {
        ok: false,
        message: `Unexpected non-whitespace text in column <tbody> at offset ${p}`,
      };
    }

    const lower = html.slice(p, p + 8).toLowerCase();
    if (lower.startsWith('</tbody')) {
      const gt = html.indexOf('>', p);
      if (gt === -1) {
        return { ok: false, message: 'Unterminated </tbody>' };
      }
      tbodyNest--;
      p = gt + 1;
      if (tbodyNest === 0) {
        return { ok: true };
      }
      continue;
    }

    if (lower.startsWith('<tbody')) {
      const gt = html.indexOf('>', p);
      if (gt === -1) {
        return { ok: false, message: 'Unterminated nested <tbody>' };
      }
      tbodyNest++;
      p = gt + 1;
      continue;
    }

    if (tbodyNest === 1 && isTrOpen(html, p)) {
      p = skipTrElement(html, p);
      if (p === -1) {
        return { ok: false, message: 'Unterminated <tr> inside column <tbody>' };
      }
      continue;
    }

    if (tbodyNest === 1) {
      const snippet = html.slice(p, Math.min(html.length, p + 120)).replace(/\s+/g, ' ');
      return {
        ok: false,
        message:
          'Invalid direct child of table.column <tbody> (expected <tr> only). ' +
          `Found: ${snippet}`,
      };
    }

    const gt = html.indexOf('>', p);
    if (gt === -1) {
      return { ok: false, message: 'Unterminated tag inside nested tbody' };
    }
    p = gt + 1;
  }

  return { ok: false, message: 'Unexpected EOF: column <tbody> not closed' };
}

function findFirstTableWithClassColumn(html) {
  const lower = html.toLowerCase();
  let i = 0;
  while (i < html.length) {
    const idx = lower.indexOf('<table', i);
    if (idx === -1) {
      return -1;
    }
    const gt = html.indexOf('>', idx);
    if (gt === -1) {
      return -1;
    }
    const tag = html.slice(idx, gt + 1);
    const classAttr = tag.match(/\bclass\s*=\s*["']([^"']*)["']/i);
    if (classAttr) {
      const classes = classAttr[1].trim().split(/\s+/).filter(Boolean);
      if (classes.includes('column')) {
        return idx;
      }
    }
    i = gt + 1;
  }
  return -1;
}

function skipOpenTag(html, ltIndex) {
  const gt = html.indexOf('>', ltIndex);
  return gt === -1 ? -1 : gt + 1;
}

function matchAt(html, i, prefix) {
  return html.slice(i, i + prefix.length).toLowerCase() === prefix.toLowerCase();
}

function isTrOpen(html, i) {
  if (!matchAt(html, i, '<tr')) {
    return false;
  }
  const ch = html[i + 3];
  if (ch === undefined) {
    return false;
  }
  return ch === '>' || ch === '/' || /\s/.test(ch);
}

/**
 * Skip from opening <tr ...> through its matching </tr> (nested <tr> balanced).
 * @returns {number} index after </tr>, or -1 on error
 */
function skipTrElement(html, trStart) {
  let depth = 1;
  let p = skipOpenTag(html, trStart);
  if (p === -1) {
    return -1;
  }
  const lower = html.toLowerCase();
  while (depth > 0 && p < html.length) {
    const lt = lower.indexOf('<', p);
    if (lt === -1) {
      return -1;
    }
    if (lower.startsWith('<!--', lt)) {
      const end = html.indexOf('-->', lt + 4);
      if (end === -1) {
        return -1;
      }
      p = end + 3;
      continue;
    }
    if (lower.startsWith('</tr', lt)) {
      depth--;
      const gt = html.indexOf('>', lt);
      if (gt === -1) {
        return -1;
      }
      p = gt + 1;
      continue;
    }
    if (isTrOpen(html, lt)) {
      depth++;
      const gt = html.indexOf('>', lt);
      if (gt === -1) {
        return -1;
      }
      p = gt + 1;
      continue;
    }
    const gt = html.indexOf('>', lt);
    if (gt === -1) {
      return -1;
    }
    p = gt + 1;
  }
  return depth === 0 ? p : -1;
}

describe('table.column outer tbody structure (layout / style precondition)', () => {
  const htmlFiles = getAllHtmlFiles(rootDir);

  test('discovers HTML files from package paths', () => {
    expect(htmlFiles.length).toBeGreaterThan(0);
  });

  htmlFiles.forEach((posixPath) => {
    const abs = path.join(rootDir, ...posixPath.replace(/^\//, '').split('/'));

    test(`column tbody: ${posixPath}`, () => {
      const html = fs.readFileSync(abs, 'utf8');
      const result = validateFirstColumnTableOuterTbody(html);
      if ('skip' in result && result.skip) {
        return;
      }
      assert.strictEqual(result.ok, true, result.ok ? '' : result.message);
    });
  });
});
