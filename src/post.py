import requests, json, os

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

    with open("ocr/" + img_name + ".json", "w") as f:
        f.write(r.text)

    with open("ocr/final/" + img_name + ".json", "w") as f:
        parsed = json.loads(r.text)
        final_text = parsed["ParsedResults"]["ParsedText"]
        f.write(final_text)
