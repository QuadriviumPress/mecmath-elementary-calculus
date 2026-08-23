/** Standalone LaTeX wrappers for figure compilation (calc12book preamble subset). */

const CALC12_MACROS = String.raw`
\providecommand{\dy}{d\!y}
\providecommand{\df}{d\negmedspace f}
\providecommand{\dg}{d\negmedspace g}
\providecommand{\dP}{d\negmedspace P}
\providecommand{\dV}{d\negmedspace V}
\providecommand{\dT}{d\negmedspace T}
\providecommand{\dG}{d\negmedspace G}
\providecommand{\dA}{d\negmedspace A}
\providecommand{\dr}{d\!r}
\providecommand{\du}{d\!u}
\providecommand{\dv}{d\!v}
\providecommand{\dx}{d\!x}
\providecommand{\dt}{d\!t}
\providecommand{\dm}{d\!m}
\providecommand{\dtheta}{d\!\theta}
\providecommand{\da}{d\!a}
\providecommand{\ds}{d\!s}
\providecommand{\dalpha}{d\!\alpha}
\providecommand{\dphi}{d\!\phi}
\providecommand{\dydx}{\frac{d\negmedspace y}{d\!x}}
\providecommand{\Dydx}{\dfrac{d\negmedspace y}{d\!x}}
\providecommand{\dxdy}{\frac{d\negmedspace x}{d\!y}}
\providecommand{\dfdx}{\frac{d\negmedspace f}{d\!x}}
\providecommand{\dgdx}{\frac{d\negmedspace g}{d\!x}}
\providecommand{\dydu}{\frac{d\negmedspace y}{d\!u}}
\providecommand{\dfdu}{\frac{d\negmedspace f}{d\!u}}
\providecommand{\dudx}{\frac{d\negmedspace u}{d\!x}}
\providecommand{\dvdu}{\frac{d\negmedspace v}{d\!u}}
\providecommand{\dfdv}{\frac{d\negmedspace f}{d\!v}}
\providecommand{\dfdt}{\frac{d\negmedspace f}{d\!t}}
\providecommand{\dxdt}{\frac{d\negmedspace x}{d\!t}}
\providecommand{\dydt}{\frac{d\negmedspace y}{d\!t}}
\providecommand{\Dxdt}{\dfrac{d\negmedspace x}{d\!t}}
\providecommand{\Dydt}{\dfrac{d\negmedspace y}{d\!t}}
\providecommand{\dsdt}{\frac{d\negmedspace s}{d\!t}}
\providecommand{\drdt}{\frac{d\negmedspace r}{d\!t}}
\providecommand{\dvdt}{\frac{d\negmedspace v}{d\!t}}
\providecommand{\dVdt}{\frac{d\negmedspace V}{d\!t}}
\providecommand{\ddx}{\frac{d}{d\!x}}
\providecommand{\Ddx}{\dfrac{d}{d\!x}}
\providecommand{\ddt}{\frac{d}{d\!t}}
\providecommand{\Ddt}{\dfrac{d}{d\!t}}
\providecommand{\ddu}{\frac{d}{d\!u}}
\providecommand{\ddy}{\frac{d}{d\!y}}
\providecommand{\Reals}{\mathbb{R}}
\providecommand{\Complex}{\mathbb{C}}
\providecommand{\Rationals}{\mathbb{Q}}
\providecommand{\Naturals}{\mathbb{N}}
\providecommand{\Integers}{\mathbb{Z}}
\providecommand{\Degrees}[0]{\ensuremath{^\circ}}
\providecommand{\ival}[2]{\lbrack #1,#2 \rbrack}
\providecommand{\lival}[2]{\lbrack #1,#2 )}
\providecommand{\rival}[2]{( #1,#2 \rbrack}
\providecommand{\seq}[1]{\left\lbrace\mspace{3mu}#1\mspace{3mu}\right\rbrace}
\providecommand{\bigsum}[2]{\displaystyle\mathlarger{\sum}\limits_{#1}^{#2}}
\providecommand{\abs}[1]{\lvert\mspace{1mu}#1\mspace{1mu}\rvert}
\providecommand{\Abs}[1]{\bigl\lvert\mspace{1mu}#1\mspace{1mu}\bigr\rvert}
\providecommand{\ABS}[1]{\Biggl\lvert\mspace{1mu}#1\mspace{1mu}\Biggr\rvert}
\providecommand{\norm}[1]{\lVert\mspace{1mu}#1\mspace{1mu}\rVert}
\providecommand{\Norm}[1]{\bigl\lVert\mspace{1mu}#1\mspace{1mu}\bigr\rVert}
\providecommand{\NORM}[1]{\Biggl\lVert\mspace{1mu}#1\mspace{1mu}\Biggr\rVert}
\providecommand{\avg}[1]{\langle\mspace{1mu}#1\mspace{1mu}\rangle}
\providecommand{\Avg}[1]{\left\langle\mspace{1mu}#1\mspace{1mu}\right\rangle}
\providecommand{\ssub}[2]{#1_{\scriptscriptstyle #2}}
\providecommand{\ssubsum}[3]{#1_{\scriptscriptstyle #3} + #2_{\scriptscriptstyle #3}}
\DeclareMathOperator{\sech}{sech}
\DeclareMathOperator{\csch}{csch}
\DeclareMathOperator{\arccot}{arccot}
\DeclareMathOperator{\arccsc}{arccsc}
\DeclareMathOperator{\arcsec}{arcsec}
\DeclareMathOperator{\sgn}{sgn}
\DeclareMathOperator{\sn}{sn}
\DeclareMathOperator{\cn}{cn}
\DeclareMathOperator{\dn}{dn}
`;

const BASE_PREAMBLE = String.raw`
\pdfminorversion=7
\pdfmapfile{+fourier.map}
\pdfmapfile{+phaistos.map}
\usepackage{amsmath,amssymb,mathtools,bm,relsize}
\usepackage{fouriernc}
\usepackage{phaistos}
\usepackage{pifont}
\providecommand{\smallpencil}{\ding{118}}
\usepackage{graphicx}
\usepackage{epstopdf}
\usepackage{xcolor}
\usepackage[T1]{fontenc}
\usepackage{lmodern}
\definecolor{captioncolor}{HTML}{000000}
\definecolor{linecolor}{HTML}{0074C8}
\definecolor{linecolor2}{HTML}{E14B4B}
\definecolor{linecolor3}{HTML}{657822}
\definecolor{fillcolor}{cmyk}{0.1,0.05,0,0}
\definecolor{fillcolor2}{HTML}{96CBE9}
\definecolor{brickcolor}{HTML}{F0D8B2}
\definecolor{blockcolor}{HTML}{B6B6B6}
\definecolor{groundcolor}{HTML}{E4D8C5}
\definecolor{earthcolor}{HTML}{C5FFFF}
\definecolor{watercolor}{cmyk}{0.1,0.05,0,0}
\definecolor{codecolor}{HTML}{FFF7E0}
\definecolor{linenumcolor}{HTML}{8C8C8C}
\definecolor{headercolor}{HTML}{DEDEDE}
\definecolor{insideo}{HTML}{798084}
\definecolor{insidei}{HTML}{F0F0F0}
\definecolor{outer}{HTML}{424296}
\definecolor{inner}{HTML}{D8D8FF}
\definecolor{planecolor}{HTML}{5AB487}
\definecolor{conicfillcolor}{HTML}{31805A}
\definecolor{spherecolor}{HTML}{80DCFF}
\definecolor{mred}{HTML}{EC1E0B}
${CALC12_MACROS}
`;

const TIKZ_PREAMBLE = String.raw`
\usetikzlibrary{arrows,patterns,decorations,intersections,matrix,snakes,calc,backgrounds,shadows,decorations.pathreplacing,decorations.markings,decorations.pathmorphing}
\usepackage{tkz-euclide}
\newcommand*{\sector}{%
  \begin{pgfpicture}
   \pgfpathmoveto{\pgforigin}%
   \pgfpathlineto{\pgfpointpolar{45}{1ex}}%
   \pgfarc{45}{-45}{1ex}%
   \pgfpathclose%
   \pgfsetlinewidth{0.4pt}%
   \pgfusepath{stroke}%
  \end{pgfpicture}%
}
\newcommand*{\hypsector}{%
  \begin{pgfpicture}
   \pgfpathmoveto{\pgfpoint{2ex}{0ex}}%
   \pgfarc{225}{135}{1ex}%
   \pgfpathlineto{\pgfpoint{0ex}{0.7ex}}%
   \pgfpathclose%
   \pgfsetlinewidth{0.4pt}%
   \pgfusepath{stroke}%
  \end{pgfpicture}%
}
`;

export function tikzStandalone(content) {
  return `\\documentclass[border=2pt,tikz]{standalone}
${BASE_PREAMBLE}
${TIKZ_PREAMBLE}
\\begin{document}
${content}
\\end{document}
`;
}

export function gnuplotStandalone(file) {
  return `\\documentclass[border=2pt]{standalone}
\\usepackage{graphicx}
\usepackage{epstopdf}
${BASE_PREAMBLE}
\\begin{document}
\\input{${file}.tex}
\\end{document}
`;
}

export function imageStandalone(file, options = '') {
  const opts = options ? `[${options}]` : '';
  return `\\documentclass[border=2pt]{standalone}
\\usepackage{graphicx}
\usepackage{epstopdf}
${BASE_PREAMBLE}
\\begin{document}
\\includegraphics${opts}{${file}}
\\end{document}
`;
}
