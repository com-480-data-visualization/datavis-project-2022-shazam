#!/bin/bash

pandoc milestone2.md \
-V colorlinks=true \
-V linkcolor=blue \
-V urlcolor=red \
-V toccolor=gray \
--pdf-engine=xelatex -o milestone2.pdf