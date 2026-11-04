"""Turn Artworks/** into web-sized images in img/ (full) and img/t/ (thumbs).
Re-run after adding new art:  python make_images.py
"""
import os
from PIL import Image, ImageFilter, ImageOps

SRC, OUT = "Artworks", "img"
SKIP = {"Main.jpg"}  # reference photo, not artwork

# Manual crops (left, top, right, bottom as fractions) for sketchbook photos with table/binder edges.
CROPS = {
    "Untitled231_20261003192501": (0, 0, 1, 0.865),
    "IMG20251213155617": (0.07, 0, 1, 0.93),
    "IMG20260127144959": (0.06, 0.02, 1, 0.92),
    "IMG20260322120844": (0.07, 0, 1, 1),
    "IMG20260406154150": (0.07, 0, 1, 0.92),
    "IMG20251218161840": (0.04, 0.04, 1, 1),
    "IMG20250814123532": (0, 0.04, 0.96, 1),
}


def trim_white(im):
    """Cut big empty white margins off digital pieces; leaves paper photos alone."""
    g = im.convert("L").filter(ImageFilter.GaussianBlur(6))
    box = g.point(lambda p: 255 if p < 238 else 0).getbbox()
    if not box:
        return im
    w, h = im.size
    if (box[2] - box[0]) * (box[3] - box[1]) > 0.9 * w * h:
        return im
    pad = int(0.04 * max(w, h))
    return im.crop((max(0, box[0] - pad), max(0, box[1] - pad), min(w, box[2] + pad), min(h, box[3] + pad)))


def main():
    os.makedirs(f"{OUT}/t", exist_ok=True)
    done = set()
    for root, _, files in os.walk(SRC):
        for f in sorted(files):
            name, ext = os.path.splitext(f)
            if f in SKIP or name in done or ext.lower() not in (".jpg", ".jpeg", ".png"):
                continue
            done.add(name)
            im = ImageOps.exif_transpose(Image.open(os.path.join(root, f))).convert("RGB")
            if name in CROPS:
                l, t, r, b = CROPS[name]
                w, h = im.size
                im = im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))
            else:
                im = trim_white(im)
            slug = name.replace(" ", "").replace("(", "").replace(")", "")
            full = im.copy(); full.thumbnail((1600, 1600), Image.LANCZOS)
            full.save(f"{OUT}/{slug}.webp", quality=82)
            th = im.copy(); th.thumbnail((720, 1100), Image.LANCZOS)
            th.save(f"{OUT}/t/{slug}.webp", quality=78)
            print(slug, im.size, "->", th.size)


if __name__ == "__main__":
    main()
