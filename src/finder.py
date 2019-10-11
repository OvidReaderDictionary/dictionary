import os, sys, subprocess

if len(sys.argv) == 2:

    # out = subprocess.check_output([
    #     "sh src/finder.sh",
    #     sys.argv[1]
    # ])

    out = os.system("find ./ocr/final/ -type f -exec cat {} + | grep " + sys.argv[1])
    # print(out)