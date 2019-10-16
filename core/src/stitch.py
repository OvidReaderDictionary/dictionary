import os

files = os.listdir("./ocr/final/")

all_text = []
for f in files:
    with open("./ocr/final/" + f) as read_file:
        all_text.append(read_file.read())

with open("./ocr/final.txt", "w") as write_file:
    for text in all_text:
        write_file.write(text)