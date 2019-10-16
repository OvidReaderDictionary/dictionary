import os, sys, subprocess

def find(search_term):
    path = os.path.abspath("src/search.sh")

    out = subprocess.check_output([
        "sh",
        path,
        search_term
    ])
    
    found = str(out.decode("utf-8"))
    print(found)
    
    return found

if len(sys.argv) == 2:
    find(sys.argv[1])