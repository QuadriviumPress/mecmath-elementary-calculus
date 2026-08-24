// MathJax configuration for the rendered book.
//
// `macros` mirrors the author's preamble in mecmath-elementary-calculus/
// calc12book.tex (the \providecommand / \DeclareMathOperator block) plus the
// package commands the text uses. MathJax only knows what is listed here:
// anything missing reaches the reader as red LaTeX source rather than math.
// scripts/check-math.js typesets the built HTML with this exact file and fails
// the build on any control sequence MathJax cannot resolve — so when the
// upstream preamble grows a macro, add it here too.

// MathJax resolves fonts against loader.paths.fonts, which defaults to the
// jsdelivr CDN. npm run update:vendor copies the newcm font next to the
// MathJax bundle, so point the loader there: a blocked or offline CDN
// otherwise aborts typesetting for the whole page and every equation on it
// falls back to raw LaTeX source. Derived from this script's own URL, since
// GitHub Pages serves the site under a path prefix and Vercel does not.
var MATHJAX_ASSETS = (function () {
  var self = typeof document !== 'undefined' && document.currentScript;
  return self ? new URL('.', self.src).href : '';
})();

MathJax = {
  loader: {
    load: ['[tex]/cancel', '[tex]/ams', '[tex]/mathtools', '[tex]/textmacros'],
    paths: { fonts: MATHJAX_ASSETS + 'mathjax/fonts' },
  },
  options: {
    ignoreHtmlClass: 'mathjax-skip',
    enableMenu: true,
    menuOptions: {
      settings: {
        enrich: true,
        speech: true,
        braille: true,
        help: true,
        inTabOrder: true,
        assistiveMml: false,
      },
    },
    a11y: {
      subtitles: true,
      viewBraille: false,
      voicing: false,
    },
  },
  tex: {
    packages: { '[+]': ['cancel', 'ams', 'mathtools', 'textmacros'] },
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]'],
    ],
    processEscapes: true,
    processEnvironments: true,
    tags: 'none',
    macros: {
      // --- differentials -------------------------------------------------
      // The book spaces the d apart from its variable: \dx is "d x", not "dx".
      dy: 'd\\!y',
      df: 'd\\negmedspace f',
      dg: 'd\\negmedspace g',
      dP: 'd\\negmedspace P',
      dV: 'd\\negmedspace V',
      dT: 'd\\negmedspace T',
      dG: 'd\\negmedspace G',
      dA: 'd\\negmedspace A',
      dr: 'd\\!r',
      du: 'd\\!u',
      dv: 'd\\!v',
      dx: 'd\\!x',
      dt: 'd\\!t',
      dm: 'd\\!m',
      dtheta: 'd\\!\\theta',
      da: 'd\\!a',
      ds: 'd\\!s',
      dalpha: 'd\\!\\alpha',
      dphi: 'd\\!\\phi',

      // --- derivatives ---------------------------------------------------
      dydx: '\\frac{d\\negmedspace y}{d\\!x}',
      Dydx: '\\dfrac{d\\negmedspace y}{d\\!x}',
      dxdy: '\\frac{d\\negmedspace x}{d\\!y}',
      dfdx: '\\frac{d\\negmedspace f}{d\\!x}',
      dgdx: '\\frac{d\\negmedspace g}{d\\!x}',
      dydu: '\\frac{d\\negmedspace y}{d\\!u}',
      dfdu: '\\frac{d\\negmedspace f}{d\\!u}',
      dudx: '\\frac{d\\negmedspace u}{d\\!x}',
      dvdu: '\\frac{d\\negmedspace v}{d\\!u}',
      dfdv: '\\frac{d\\negmedspace f}{d\\!v}',
      dfdt: '\\frac{d\\negmedspace f}{d\\!t}',
      dxdt: '\\frac{d\\negmedspace x}{d\\!t}',
      dydt: '\\frac{d\\negmedspace y}{d\\!t}',
      Dxdt: '\\dfrac{d\\negmedspace x}{d\\!t}',
      Dydt: '\\dfrac{d\\negmedspace y}{d\\!t}',
      dsdt: '\\frac{d\\negmedspace s}{d\\!t}',
      drdt: '\\frac{d\\negmedspace r}{d\\!t}',
      dvdt: '\\frac{d\\negmedspace v}{d\\!t}',
      dVdt: '\\frac{d\\negmedspace V}{d\\!t}',
      ddx: '\\frac{d}{d\\!x}',
      Ddx: '\\dfrac{d}{d\\!x}',
      ddt: '\\frac{d}{d\\!t}',
      Ddt: '\\dfrac{d}{d\\!t}',
      ddu: '\\frac{d}{d\\!u}',
      ddy: '\\frac{d}{d\\!y}',

      // --- number systems, intervals, delimiters -------------------------
      Reals: '\\mathbb{R}',
      Complex: '\\mathbb{C}',
      Rationals: '\\mathbb{Q}',
      Naturals: '\\mathbb{N}',
      Integers: '\\mathbb{Z}',
      Degrees: '^\\circ',
      ival: ['\\lbrack #1,#2 \\rbrack', 2],
      lival: ['\\lbrack #1,#2 )', 2],
      rival: ['( #1,#2 \\rbrack', 2],
      seq: ['\\left\\lbrace\\mspace{3mu}#1\\mspace{3mu}\\right\\rbrace', 1],
      bigsum: ['\\displaystyle\\mathlarger{\\sum}\\limits_{#1}^{#2}', 2],
      abs: ['\\lvert\\mspace{1mu}#1\\mspace{1mu}\\rvert', 1],
      Abs: ['\\bigl\\lvert\\mspace{1mu}#1\\mspace{1mu}\\bigr\\rvert', 1],
      ABS: ['\\Biggl\\lvert\\mspace{1mu}#1\\mspace{1mu}\\Biggr\\rvert', 1],
      norm: ['\\lVert\\mspace{1mu}#1\\mspace{1mu}\\rVert', 1],
      Norm: ['\\bigl\\lVert\\mspace{1mu}#1\\mspace{1mu}\\bigr\\rVert', 1],
      NORM: ['\\Biggl\\lVert\\mspace{1mu}#1\\mspace{1mu}\\Biggr\\rVert', 1],
      avg: ['\\langle\\mspace{1mu}#1\\mspace{1mu}\\rangle', 1],
      Avg: ['\\left\\langle\\mspace{1mu}#1\\mspace{1mu}\\right\\rangle', 1],
      ssub: ['#1_{\\scriptscriptstyle #2}', 2],
      ssubsum: ['#1_{\\scriptscriptstyle #3} + #2_{\\scriptscriptstyle #3}', 3],

      // --- operators (\DeclareMathOperator in the preamble) --------------
      sech: '\\operatorname{sech}',
      csch: '\\operatorname{csch}',
      arccot: '\\operatorname{arccot}',
      arccsc: '\\operatorname{arccsc}',
      arcsec: '\\operatorname{arcsec}',
      sgn: '\\operatorname{sgn}',
      sn: '\\operatorname{sn}',
      cn: '\\operatorname{cn}',
      dn: '\\operatorname{dn}',

      // --- package commands MathJax does not ship -------------------------
      bm: ['\\boldsymbol{#1}', 1], // bm
      mathlarger: ['{\\large #1}', 1], // relsize
      enskip: '\\mskip9mu', // 0.5em, as in plain TeX
      wideparen: ['\\overparen{#1}', 1], // yhmath
      bigintss: '{\\large\\int}', // bigints
      // clrscode pseudocode names, used inside the codebox algorithms.
      proc: ['\\text{#1}', 1],
      const: ['\\text{#1}', 1],
      // pgfpicture drawings in the print edition; the closest Unicode shapes.
      // U+2314 SECTOR; U+2313 SEGMENT stands in for the hyperbolic sector,
      // which has no code point of its own.
      sector: '\\unicode{x2314}',
      hypsector: '\\unicode{x2313}',
    },
  },
  chtml: {
    displayOverflow: 'overflow',
    scale: 1.0,
    minScale: 0.5,
  },
};
