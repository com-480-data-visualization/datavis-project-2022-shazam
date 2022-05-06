#!/bin/bash

pandoc milestone2.md \
-V colorlinks=true \
-V linkcolor=blue \
-V urlcolor=red \
-V toccolor=gray \
--pdf-engine=xelatex -o milestone2.pdf

# https://stackoverflow.com/questions/58866818/pandoc-conversion-to-pdf-not-providing-colored-hyptertext-links
# https://pandoc.org/demos.html