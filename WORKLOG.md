# Mecmath Elementary Calculus — Work Log

## Status

- **Repository:** https://github.com/QuadriviumPress/mecmath-elementary-calculus
- **LaTeX source:** downloaded (`calc12book-1.0-src.tar.gz`, 54 files)
- **Build engine:** ported from `mecmath-trigonometry`
- **Site:** 82 pages, search index, book index (519 refs)
- **Figures:** ~287/320 SVG conversions (MetaPost/gnuplot edge cases remain)
- **Verify:** `npm run build && npm run verify` passes locally
- **Deploy:** GitHub Pages on push to `main`

## Source

- Homepage: https://www.mecmath.net/calculus/
- LibreTexts: https://math.libretexts.org/Bookshelves/Calculus/Elementary_Calculus_2e_(Corral)
- Master: `calc12book.tex` (9 chapters + appendix A + FDL 1.3 + History)
- Also includes Greek alphabet reference page (`calc12book-greek.tex`)

## Math rendering

`assets/js/math-config.js` holds the MathJax mirror of the `calc12book.tex`
preamble (`\ddx`, `\dydx`, `\bigsum`, the `\DeclareMathOperator` list, …).
`npm run verify:math` typesets every math span in `_site` with that exact file
and fails on any control sequence MathJax cannot resolve, plus any backslash
command left in the prose; `npm run verify` runs it too, so CI covers it. When
the upstream preamble grows a macro, add it to the config or the check goes red.

## Next steps

- Fix remaining ~33 figure conversions (MetaPost `.0`, some gnuplot)
- Add chapter PDF generation once Playwright CI is confirmed
