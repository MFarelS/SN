#!/usr/bin/bash

wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm audit fix

#!/usr/bin/bash

tty-clock -s -S -x -c -C 2 -b -B
clear
node index.js
