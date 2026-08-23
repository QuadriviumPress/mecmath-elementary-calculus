# Elementary Calculus — Web Edition

Eleventy build of **Elementary Calculus** by Michael Corral, rendering the original
LaTeX source to a searchable, offline-capable web textbook.

- **Repository:** https://github.com/QuadriviumPress/mecmath-elementary-calculus
- **Original text:** https://www.mecmath.net/calculus/
- **License:** [GNU FDL 1.3](https://www.gnu.org/licenses/fdl-1.3.html)

## Source materials (upstream)

| Asset | URL |
|---|---|
| LaTeX source | https://www.mecmath.net/calculus/calc12book-1.0-src.tar.gz |
| PDF (reference) | https://www.mecmath.net/calculus/ElementaryCalculus.pdf |
| Code samples | https://www.mecmath.net/calculus/code_samples.zip |
| Computer labs | https://www.mecmath.net/calculus/calc_labs.zip |

The verbatim mecmath source will live in [`mecmath-elementary-calculus/`](mecmath-elementary-calculus/)
— **ground truth, never modified**. Build tooling mirrors
[`mecmath-trigonometry`](https://github.com/QuadriviumPress/mecmath-trigonometry).

## Book overview

Single-variable calculus (Calculus I & II): 9 chapters, 943 exercises, appendix
with answers and hints. Built with TeX Live 2020; stylistically aligned with
Corral's Trigonometry and Vector Calculus books.

## Status

**Scaffolding only.** Next steps: download LaTeX source, port the Eleventy build
framework from `mecmath-trigonometry`, adapt parsers for this book's macros and
structure, deploy to GitHub Pages.

## Attribution

Content © Michael Corral, licensed under the GNU Free Documentation License,
Version 1.3.
