import os, sys

if len(sys.argv) == 2:
    os.system("find ./ocr/final/ -type f -exec cat {} + | grep " + sys.argv[1])