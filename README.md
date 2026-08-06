# Left of the Loop

Landing page and draft PDF/EPUB for *Left of the Loop*, a book by Simon Schrottner.

Live at [leftoftheloop.dev](https://leftoftheloop.dev).

> AI erodes the incidental friction that used to produce shared
> understanding as a byproduct of the work. That makes shared
> understanding the scarce resource, and constructive friction the
> mechanism that protects and tests it.

## What's in this repo

- `index.html` — the landing page. Hand-written HTML/CSS, no framework, no
  build step.
- `left-of-the-loop-draft.pdf` — the current working draft (PDF). Stable
  filename; the URL never changes, only the file behind it.
- `left-of-the-loop-draft.epub` — the current working draft (EPUB). Same
  stable-filename convention as the PDF.
- `CHANGELOG.md` — what changed in the manuscript between each PDF/EPUB
  update, newest first. Rendered at `/changelog` by the same client-side
  reader as the chapter pages, and linked from the "Version history"
  details on the landing page.
- `chapters/` — unlisted per-chapter reading pages (see below).
- `og-the-loop.png` — the social preview card, built from the Loop
  figure. It is its own file rather than a reference to
  `chapters/figures/the-loop.png` because the card is 1.91:1 and the
  figure is 1.49:1; pointing the meta tags at the figure would let the
  platforms crop the LEFT/LOOP/RIGHT headings off the top. Rebuild it by
  trimming the figure to its ink and centring that on a 1200×630 white
  canvas with a 48px margin. Two things to get right: flatten it onto
  solid white, because a transparent og image composites to black on
  several platforms, and threshold the alpha channel at ~25/255 before
  taking the bounding box — the background removal leaves a noise floor,
  so a bare `getbbox()` returns almost the whole canvas and the card ends
  up mostly margin.
- `CNAME` — GitHub Pages custom domain config.
- `LICENSE` — CC BY-NC-ND 4.0.

The pandoc build tooling lives in a private working repo; this repo is
where reader feedback happens and where the built PDF/EPUB get published.
The `chapters/md/` files are copies pulled from that repo at update time,
not the working sources.

## Chapter pages

Each chapter is readable online at `/chapters/<slug>` (e.g.
`/chapters/agora`). These pages are **unlisted**: nothing on the landing
page links to them and they carry `noindex`, but the URLs are stable and
meant for sharing individual chapters directly — nicer than mailing
someone a PDF attachment.

How they work — there is no build step and no page per chapter:

- GitHub Pages serves `404.html` for any URL that doesn't match a file
  (the standard single-page-app fallback). That page is the chapter
  reader: `chapters/reader.js` matches `/chapters/<slug>` against its
  manifest, fetches `chapters/md/<file>.md`, and renders it in the
  browser with [markdown-it](https://github.com/markdown-it/markdown-it)
  plus its footnote plugin (vendored in `chapters/vendor/`, no CDN at
  runtime). Unmatched URLs show a plain "page not found".
- The manifest maps a short share slug (`agora`) to the upstream file
  basename (`205-the-agora`), which names the markdown source. The file
  basename works as a URL alias, and `/404.html?chapter=<slug>` works
  too.
- Upstream numbers its files by book section — `0xx` front-matter
  apparatus, `1xx` foreword, `2xx` body, `3xx` appendices, `4xx` back
  matter — and its builds glob `[1-9][0-9][0-9]-*.md`. The `0xx` band is
  the copyright page and its live ISBNs: it is deliberately in no build
  artifact, and it does not belong here either. Nothing in the manifest
  maps to it.
- The files were renumbered upstream in August 2026 (`00-introduction`
  → `200-introduction`, and so on). Because the basename doubles as a
  URL alias, every pre-renumbering name is kept in `aliases`, so links
  shared before the move still resolve.
- There is no per-chapter download. The upstream build used to emit a
  PDF per chapter and no longer does — the only per-chapter artifact it
  still produces is an EPUB, and that one is a workflow artifact, not a
  release asset. Rather than ship copies that drift from the prose,
  chapter pages link the whole-book PDF and EPUB, which stay current.
- Figures referenced by the markdown live in `chapters/figures/`.
- Known tradeoff of the 404 route: responses carry HTTP status 404, so
  link unfurls in messengers won't show a preview or chapter title. The
  pages themselves render normally, and GoatCounter still counts them.

To add a chapter: add one entry to the manifest in `reader.js` in
reading order.

`scripts/serve.py` mimics both GitHub Pages behaviors locally
(extensionless URLs and the 404 fallback) for testing:
`python scripts/serve.py`.

## How feedback flows

1. Readers download the PDF or EPUB from this site and leave feedback as
   [issues on this repo](https://github.com/Left-of-the-Loop/manuscript/issues).
2. Feedback is incorporated in the private working repo.
3. The PDF and EPUB are rebuilt there and committed here manually,
   replacing `left-of-the-loop-draft.pdf` and `left-of-the-loop-draft.epub`
   in place.

There is no CI wired up between the two repos yet. If manual updates
become frequent, that's worth automating; for now it's a deliberate,
reviewed step.

## Updating the PDF/EPUB

When a new draft is committed here:

1. Replace `left-of-the-loop-draft.pdf` and/or `left-of-the-loop-draft.epub`
   (same filenames, so the public download URLs don't change). The
   upstream build publishes exactly two whole-book assets on its `latest`
   release: `left-of-the-loop-a5-draft.pdf` becomes the PDF here, and
   `left-of-the-loop-draft.epub` becomes the EPUB. The A4 and A5 combined
   PDFs it used to also build are gone.
2. Re-check the introduction excerpt in `index.html` against the current
   `200-introduction.md` in the private repo, and update it in the same
   commit if the opening has changed. The excerpt is verbatim text, not a
   summary — it should read exactly as edited, cut where marked "The full
   draft continues in the PDF."
3. Add an entry to the top of `CHANGELOG.md`: the date, the manuscript
   commit the build was pulled from, this repo's commit once it exists,
   and a plain-language bullet list of what changed upstream since the
   last entry (summarized from the source repo's commit log).
4. Update the "Current draft" commit line in the version-history
   `<details>` in `index.html`'s footer. The bullets are no longer
   duplicated there — the footer links to `/changelog`, which renders
   `CHANGELOG.md` directly.
5. Refresh the chapter pages from the same manuscript commit the build
   was pulled from: re-download `chapters/md/*.md`, and
   `chapters/figures/*` if figures changed. If a chapter was added,
   renamed, or removed upstream, update the manifest in
   `chapters/reader.js` to match — and on a rename, move the old
   basename into that entry's `aliases`.
6. Re-encode any figure that changed. Upstream keeps the archival PNGs,
   which is right for print and heavy for a phone. Quantizing to 128
   colours costs nothing visible on ink-drawn art and takes about an
   eighth of the bytes:

   ```python
   from PIL import Image
   im = Image.open(src).convert("RGBA")       # RGBA — do NOT convert("RGB")
   mask = im.getchannel("A").point(lambda p: 255 if p > 25 else 0)
   l, t, r, b = mask.getbbox()
   pad = 8
   art = im.crop((max(0, l-pad), max(0, t-pad),
                  min(im.width, r+pad), min(im.height, b+pad)))
   art.quantize(colors=128, method=Image.FASTOCTREE).save(dst, optimize=True)
   ```

   The figures are transparent PNGs, so two details are load-bearing:
   `convert("RGB")` discards the alpha channel, and `FASTOCTREE` is the
   only PIL quantizer that carries it through. Check the result still
   reports `"transparency" in Image.open(dst).info`.

   The crop matters as much as the encoding. Upstream's figures carry a
   wide transparent margin — `the-loop.png` is blank for its top 151 of
   848 rows — which on a web page reads as a large unexplained gap above
   the drawing that no CSS margin explains, because it is inside the
   image. Trimming it lets the stylesheet own the spacing. Threshold the
   alpha before taking the bounding box: the background removal leaves a
   noise floor, so a bare `getbbox()` returns almost the whole canvas.

   Don't scale the figures down. They are 1264px wide against a 40em
   column, which is already about the 2× source a high-DPI screen wants.

   Cropping changes the pixel height, so update the `width`/`height`
   attributes on the `<img>` in `index.html` to match — they are what
   stops the page reflowing as the image loads. If a figure that appears
   on the landing page changes, rebuild `og-the-loop.png` too (see
   above).

## Analytics

Pageviews are tracked with [GoatCounter](https://www.goatcounter.com/),
same account as schrottner.at, under a separate site code
(`left-of-the-loop.goatcounter.com`).

The PDF and EPUB download links are tracked as GoatCounter click events
(`data-goatcounter-click="pdf-download"` / `"epub-download"`). Direct hits
on the file URLs (e.g. shared links, crawlers) bypass the page's JS
entirely and are not counted. Acceptable for now.

Chapter pages load the same GoatCounter script, so shared-chapter reads
show up as pageviews on `/chapters/<slug>.html`.

## License

CC BY-NC-ND 4.0 — see [LICENSE](LICENSE). Share it freely with
attribution; no commercial use, no derivatives.
