# Left of the Loop

Landing page and draft PDF/EPUB for *Left of the Loop*, a book by Simon Schrottner.

Live at [leftoftheloop.dev](https://leftoftheloop.dev).

> As implementation becomes abundant, shared understanding becomes the
> scarce resource, and constructive friction is the mechanism that
> protects it.

## What's in this repo

- `index.html` — the landing page. Hand-written HTML/CSS, no framework, no
  build step.
- `left-of-the-loop-draft.pdf` — the current working draft (PDF). Stable
  filename; the URL never changes, only the file behind it.
- `left-of-the-loop-draft.epub` — the current working draft (EPUB). Same
  stable-filename convention as the PDF.
- `CHANGELOG.md` — what changed in the manuscript between each PDF/EPUB
  update, newest first. Linked from the "Version history" details on the
  landing page.
- `chapters/` — unlisted per-chapter reading pages (see below).
- `CNAME` — GitHub Pages custom domain config.
- `LICENSE` — CC BY-NC-ND 4.0.

The pandoc build tooling lives in a private working repo; this repo is
where reader feedback happens and where the built PDF/EPUB get published.
The `chapters/md/` files are copies pulled from that repo at update time,
not the working sources.

## Chapter pages

Each chapter is readable online at `/chapters/<slug>.html` (e.g.
`/chapters/05-the-agora.html`). These pages are **unlisted**: nothing on
the landing page links to them and they carry `noindex`, but the URLs are
stable and meant for sharing individual chapters directly — nicer than
mailing someone a PDF attachment.

How they work — there is no build step:

- Each `<slug>.html` is a tiny static stub, identical except for its
  `<title>`. It fetches `chapters/md/<slug>.md` and renders it in the
  browser with [markdown-it](https://github.com/markdown-it/markdown-it)
  plus its footnote plugin (vendored in `chapters/vendor/`, no CDN at
  runtime).
- `chapters/reader.js` holds the ordered chapter manifest and drives
  rendering, prev/next navigation, and the per-chapter PDF link
  (`chapters/pdf/<slug>.pdf`).
- Figures referenced by the markdown live in `chapters/figures/`.

To add a chapter: copy any stub to `<slug>.html`, adjust its `<title>`,
and add one entry to the manifest in `reader.js` in reading order.

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
   (same filenames, so the public download URLs don't change).
2. Re-check the introduction excerpt in `index.html` against the current
   `00-introduction.md` in the private repo, and update it in the same
   commit if the opening has changed. The excerpt is verbatim text, not a
   summary — it should read exactly as edited, cut where marked "The full
   draft continues in the PDF."
3. Add an entry to the top of `CHANGELOG.md`: the date, the manuscript
   commit the build was pulled from, this repo's commit once it exists,
   and a plain-language bullet list of what changed upstream since the
   last entry (summarized from the source repo's commit log).
4. Update the version-history `<details>` in `index.html`'s footer: the
   "Current draft" commit line and the "What changed in this update" list
   should mirror the new changelog entry (the same bullets, or a shorter
   version of them — this one is reader-facing and inline, so keep it
   tight).
5. Refresh the chapter pages from the same manuscript commit the build
   was pulled from: re-download `chapters/md/*.md`, `chapters/pdf/*.pdf`
   (per-chapter A4 PDFs from the release), and `chapters/figures/*` if
   figures changed. If a chapter was added, renamed, or removed upstream,
   update the manifest in `chapters/reader.js` and the stub `.html` files
   to match.

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
