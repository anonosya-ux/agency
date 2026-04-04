from PIL import Image

img = Image.open('/tmp/concept_catalog.png')
# Let's crop to just the top 4 images section
# It is somewhere in the upper half.
# Width=1800, Height=1920
# Let's just downsample and print an ASCII outline of the bright/dark to see the slopes.
img_gray = img.convert('L')
# threshold to find the white gaps
def print_strip(y_start, height):
    strip = img_gray.crop((0, y_start, 1800, y_start+height))
    strip = strip.resize((180, 10))
    for y in range(10):
        row = ""
        for x in range(180):
            val = strip.getpixel((x, y))
            row += " " if val > 240 else "X"
        print(row)

print("Top of images:")
print_strip(350, 400) # approximate
