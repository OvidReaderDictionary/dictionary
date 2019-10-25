import os, fileinput

files = os.listdir("./ocr/final/")

all_text = []
for f in files:
    with open("./ocr/final/" + f) as read_file:
        all_text.append(read_file.read())

with open("./ocr/final.txt", "w") as write_file:
    for text in all_text:
        write_file.write(text)

with fileinput.FileInput("./ocr/final.txt", inplace=True, backup='.bak') as file:
    for line in file:
        # print(line.replace("ä", "a"), end='')
        # print(line.replace("é", "e"), end='')
        # print(line.replace("ï", "i"), end='')
        # print(line.replace("ö", "o"), end='')
        # print(line.replace("ü", "u"), end='')
        
        print(line.replace("ä", "a").replace("é", "e").replace("ï", "i").replace("ö", "o").replace("ü", "u"), end="")