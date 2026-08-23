#!/usr/bin/env bash
# Build calc12book.pdf from the pristine mecmath source on TeX Live 2023+.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/mecmath-elementary-calculus"
OUT="${BOOK_OUT:-$ROOT/generated/book}"
JOB=calc12book
COMPAT=calc12book-compat

export TEXINPUTS="$ROOT/tex:"
export TEXMFHOME="$ROOT/vendor/texmf"

for tool in latex makeindex dvips ps2pdf mktexlsr; do
  command -v "$tool" >/dev/null || { echo "error: $tool not found" >&2; exit 1; }
done

mktexlsr "$TEXMFHOME" >/dev/null

rm -rf "$OUT"
mkdir -p "$OUT"
cp "$SRC"/*.tex "$SRC"/*.eps "$SRC"/*.ist "$OUT/" 2>/dev/null || true
cp "$SRC"/*.mp "$SRC"/*.0 "$SRC"/*.mpx "$SRC"/*.table "$OUT/" 2>/dev/null || true
cd "$OUT"

run_latex() {
  latex -interaction=nonstopmode -halt-on-error -file-line-error \
        -jobname="$JOB" "\\RequirePackage{$COMPAT}\\input{$JOB.tex}"
}

echo "==> pass 1"; run_latex >pass1.log
makeindex -s myindex.ist -o "$JOB.ind" "$JOB.idx" 2>/dev/null || true
echo "==> pass 2"; run_latex >pass2.log
makeindex "$JOB.nlo" -s nomencl.ist -o "$JOB.nls" 2>/dev/null || true
echo "==> pass 3"; run_latex >pass3.log
echo "==> pass 4"; run_latex >pass4.log

echo "==> dvips"
dvips -Ppdf -t letter -G0 -z "$JOB.dvi" -o "$JOB.ps"

echo "==> ps2pdf"
ps2pdf -dMaxSubsetPct=100 -dSubsetFonts=true -dEmbedAllFonts=true \
       -dPDFSETTINGS=/printer -dCompatibilityLevel=1.7 \
       "$JOB.ps" "$JOB.pdf"

echo "Built $OUT/$JOB.pdf"
grep -a "Output written" pass4.log || true
