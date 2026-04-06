from PIL import Image

img = Image.open('src/app/icon.png').convert("RGBA")
data = img.getdata()
new_data = []

for r, g, b, a in data:
    brightness = (r + g + b) / 3
    if brightness < 15:
        new_data.append((r, g, b, 0))
    elif brightness < 60:
        alpha = int((brightness - 15) / 45 * 255)
        new_data.append((r, g, b, alpha))
    else:
        new_data.append((r, g, b, 255))

img.putdata(new_data)
img.save('public/logo-transparent.png', 'PNG')
