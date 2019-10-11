from PIL import Image
import os

# NEW_SIZE = (1333, 1000)
NEW_SIZE = (1466, 1100)

images = os.listdir("img/raw")

# im = Image.open(infile)
# im.thumbnail(size, Image.ANTIALIAS)
# im.save(outfile, "jpeg")

for img in images:
    img_name = img
    
    new_img = Image.open("img/raw/" + img_name)
    new_img = new_img.rotate(90)
    new_img = new_img.resize(NEW_SIZE)

    new_img.save("img/resized/" + img_name)
