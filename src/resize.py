from PIL import Image
import os

# NEW_SIZE = (1333, 1000)
NEW_SIZE = (1466, 1100)

img_name = "IMG_0238.jpeg"
img = Image.open("img/raw/" + img_name)
img = img.resize(NEW_SIZE)

img.save("img/resized/" + img_name)
