# Mecmath Elementary Calculus — Work Log

Building an Eleventy website that renders the mecmath *Elementary Calculus*
textbook (Michael Corral) with the LaTeX source as ground truth, mirroring the
`mecmath-trigonometry` project architecture, deployable to GitHub Pages under
the `QuadriviumPress` org.

## Status

- **Repository:** created
- **LaTeX source:** not yet downloaded
- **Build engine:** not started (will adapt from `mecmath-trigonometry`)

## Planned steps

1. Download `calc12book-1.0-src.tar.gz` into `mecmath-elementary-calculus/`
2. Inventory corpus (master `.tex`, chapters, figures, custom macros)
3. Compare structure with `mecmath-trigonometry` (KOMA scrbook, shared styling)
4. Copy and adapt Eleventy framework (`lib/`, `scripts/`, templates, CI)
5. Handle TeX Live compatibility shims (upstream targets TeX Live 2020)
6. Deploy to `https://quadriviumpress.github.io/mecmath-elementary-calculus/`

## Upstream references

- Homepage: https://www.mecmath.net/calculus/
- Latest PDF: ElementaryCalculus.pdf (2022-11-22)
- Related: Trigonometry (prequel), Vector Calculus (sequel)
