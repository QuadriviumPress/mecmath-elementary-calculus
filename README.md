# Elementary Calculus — Web Edition

Eleventy build of **Elementary Calculus** by Michael Corral, rendering the original
LaTeX source to a searchable, offline-capable web textbook.

- **Repository:** https://github.com/QuadriviumPress/mecmath-elementary-calculus
- **Original text:** https://www.mecmath.net/calculus/
- **License:** [GNU FDL 1.3](https://www.gnu.org/licenses/fdl-1.3.html)

## How it works

The verbatim mecmath source lives in [`mecmath-elementary-calculus/`](mecmath-elementary-calculus/)
— **ground truth, never modified**. Build tooling mirrors
[`mecmath-trigonometry`](https://github.com/QuadriviumPress/mecmath-trigonometry).

```
mecmath-elementary-calculus/   LaTeX source (calc12book.tex + 9 chapters)
lib/config.js                  book-specific paths and metadata
lib/figure-preamble.js         TeX macros for figure compilation
tex/calc12book-compat.sty      TeX Live 2023+ shims
lib/parse/                     calc12book.tex tokenizer
scripts/                       figure conversion, search index, verify, CI
```

## Developing

Requires Node ≥ 22. For figure conversion also install TeX Live plus
`ghostscript`, `dvisvgm`, and `mupdf-tools`.

```sh
npm install
npm run update:vendor
npm run build
npm run verify
npm run serve    # http://localhost:4000/mecmath-elementary-calculus/
```

## Deployment

Pushes to `main` deploy to GitHub Pages at
https://quadriviumpress.github.io/mecmath-elementary-calculus/

## Attribution

Content © Michael Corral, licensed under the GNU Free Documentation License,
Version 1.3.
