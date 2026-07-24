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
  update, newest first. Rendered at `/changelog` by the same client-side
  reader as the chapter pages, and linked from the "Version history"
  details on the landing page.
- `chapters/` — unlisted per-chapter reading pages (see below).
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
  basename (`05-the-agora`), which names both the markdown source and
  the per-chapter PDF (`chapters/pdf/<file>.pdf`). The file basename
  works as a URL alias, and `/404.html?chapter=<slug>` works too.
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
4. Update the "Current draft" commit line in the version-history
   `<details>` in `index.html`'s footer. The bullets are no longer
   duplicated there — the footer links to `/changelog`, which renders
   `CHANGELOG.md` directly.
5. Refresh the chapter pages from the same manuscript commit the build
   was pulled from: re-download `chapters/md/*.md`, `chapters/pdf/*.pdf`
   (per-chapter A4 PDFs from the release), and `chapters/figures/*` if
   figures changed. If a chapter was added, renamed, or removed upstream,
   update the manifest in `chapters/reader.js` to match.

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
