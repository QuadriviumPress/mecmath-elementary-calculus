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

## Next steps

- Improve renderer for calculus macros (`\ddx`, `\dfdx`, clrscode listings)
- Fix remaining ~33 figure conversions (MetaPost `.0`, some gnuplot)
- Add chapter PDF generation once Playwright CI is confirmed
