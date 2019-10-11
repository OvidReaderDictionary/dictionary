import requests, json, os, sys

if len(sys.argv) >= 2:
    if sys.argv[1] == "-c" or sys.argv[1] == "--clean":
        os.system("rm -rf ocr/")

os.system("mkdir -p ocr/final")

with open("key.txt") as f:
    api_key = f.read()

images = os.listdir("img/resized")

for img in images:
    img_name = img
    url = "https://github.com/xoreo/dictionary/raw/master/img/resized/" + img_name
    language = "eng"
    is_overlay_required = "true"

    request = "https://api.ocr.space/parse/imageurl?apikey=" + api_key + "&url=" + url + "&language=" + language + "&isOverlayRequired=true"

    r = requests.get(request)
    print("[GET] " + img_name)

    with open("ocr/" + img_name + ".json", "w") as f:
        f.write(r.text)

    with open("ocr/final/" + img_name + ".txt", "w") as f:
        parsed = json.loads(r.text)
        final_text = parsed["ParsedResults"][0]["ParsedText"]
        # print(final_text)
        f.write(final_text)
