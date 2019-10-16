'''
if ParsedResults[0][TextOverlay][Lines][i][Words][j][Left] is in between 315 and 320 (inclusive) then
move combine it with the previous line
Remove the line that was just combined.
'''

import os, json

def clean(text):
    final_text = []
    lines = text["ParsedResults"][0]["TextOverlay"]["Lines"]
    
    final_line = ""
    for i in range(len(lines)):
        line_text = lines[i]["LineText"]
        final_line += line_text

        words = lines[i]["Words"]
        for j in range(len(words)):
            word_left_value = words[j]["Left"]

            if (315 <= word_left_value and word_left_value <= 320) or (724 <= word_left_value and word_left_value <= 727):
                word_text = words[j]["WordText"]
                final_line += " " + word_text
        
            
        print(final_line)
        final_text.append(final_line)
        final_line = ""

files = os.listdir("ocr/")
for f in files:
    if not (".jpeg.json" in f):
        files.remove(f)

print(files)

for f in files:
    with open("ocr/" + f) as read_file:
        text = read_file.read()
        parsed = json.loads(text)

        cleaned = clean(parsed)