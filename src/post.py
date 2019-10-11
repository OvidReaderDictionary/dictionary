import requests

with open("key.txt") as f:
    api_key = f.read()

url = "https://github.com/xoreo/dictionary/raw/master/img/resized/IMG_0251.jpeg"
language = "chs"
is_overlay_required = "true"

request = "https://api.ocr.space/parse/imageurl?apikey=" + api_key + "&url=" + url + "&language=" + language + "&isOverlayRequired=true"

r = requests.get(request)

print(r.text)
