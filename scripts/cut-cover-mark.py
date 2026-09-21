"""Cut the loop mark out of the cover art for use on the landing page.

The mark on the site is the cover's, not a redrawing of it. This script is how
loop-mark.png and loop-badge.png get made, so that when the cover changes they
can be remade the same way instead of being traced again by hand.

Three things happen here beyond the crop:

- The vertical band is found rather than hardcoded. The cover has three bands of
  cream on red -- title, mark, author -- so the rows containing cream are
  scanned and the largest run between gaps is taken as the mark. The crop keeps
  the full width, because the rails are meant to run off both edges.

- Every pixel is projected back onto the line between the two cover colours.
  The cover ships as JPEG and the flat red is full of ringing and colour noise;
  projecting onto the palette axis removes all of it while keeping the
  anti-aliasing, which is the one thing worth keeping from that encode.

- The red is taken down from the cover's #e52a33 to #dc2530 on the way through.
  At the cover's own value nothing reaches 4.5:1 against it -- not even pure
  white, which manages 4.46 -- so no colour would let the small type in the hero
  pass. This is the smallest step down that clears the bar, it is inside the
  JPEG's own noise, and baking it into the image is what keeps the artwork and
  the page's own background one flat field of red with no seam between them.

Usage: python scripts/cut-cover-mark.py path/to/cover.jpg
"""
import os
import sys

import numpy as np
from PIL import Image

COVER_RED = np.array([229, 42, 51], float)   # as published
PAGE_RED = np.array([220, 37, 48], float)    # as served, see above
CREAM = np.array([253, 229, 157], float)

MARK_WIDTH = 1240   # ~2x the widest the mark is ever rendered
BADGE_SIZE = 256
PALETTE = 24        # two flat colours and a ramp; 24 is lossless to the eye
PAD = 34            # red left above and below the mark, in cover pixels


def cream_bands(im, gap=20):
    """Row ranges containing cream, split wherever there is a run of red."""
    a = np.asarray(im.convert("L"), float)
    rows = np.where((a > 180).any(axis=1))[0]
    if not len(rows):
        raise SystemExit("no cream found; is this the right cover?")
    bands, start, prev = [], rows[0], rows[0]
    for y in rows[1:]:
        if y - prev > gap:
            bands.append((start, prev))
            start = y
        prev = y
    bands.append((start, prev))
    return bands


def snap(im):
    """Project onto the palette axis, swapping the cover red for the page red."""
    a = np.asarray(im, float)
    axis = CREAM - COVER_RED
    t = np.clip(((a - COVER_RED) @ axis) / (axis @ axis), 0.0, 1.0)[..., None]
    return Image.fromarray(np.round(PAGE_RED + t * (CREAM - PAGE_RED)).astype("uint8"))


def quantized(im, path):
    im.quantize(colors=PALETTE, method=Image.MEDIANCUT,
                dither=Image.Dither.NONE).save(path, optimize=True)
    print("%s  %dx%d  %d bytes" % (path, im.width, im.height, os.path.getsize(path)))


def main(src, out_dir):
    im = Image.open(src).convert("RGB")
    top, bottom = max(cream_bands(im), key=lambda b: b[1] - b[0])
    crop = im.crop((0, max(0, top - PAD), im.width, min(im.height, bottom + PAD)))
    crop = crop.resize((MARK_WIDTH, round(crop.height * MARK_WIDTH / crop.width)),
                       Image.LANCZOS)
    mark = snap(crop)
    quantized(mark, os.path.join(out_dir, "loop-mark.png"))

    # The favicon is the bottom loop with its rail: one revolution and the line
    # leaving to the left is all that still reads at 16 pixels.
    w, h = mark.size
    box = (round(w * 0.343), round(h * 0.681), round(w * 0.665), round(h * 0.997))
    badge = mark.crop(box).resize((BADGE_SIZE, BADGE_SIZE), Image.LANCZOS)
    quantized(badge, os.path.join(out_dir, "loop-badge.png"))


if __name__ == "__main__":
    if len(sys.argv) < 2:
        raise SystemExit(__doc__.strip().splitlines()[-1])
    main(sys.argv[1], os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
