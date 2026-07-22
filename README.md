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
- `CNAME` — GitHub Pages custom domain config.
- `LICENSE` — CC BY-NC-ND 4.0.

This repo intentionally does **not** contain the chapter sources or the
pandoc build tooling yet. Those live in a private working repo. This repo
is where reader feedback happens and where the built PDF/EPUB get published.

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
4. Update the "Current draft" line in the version-history `<details>` in
   `index.html`'s footer to match the new changelog entry.

## Analytics

Pageviews are tracked with [GoatCounter](https://www.goatcounter.com/),
same account as schrottner.at, under a separate site code
(`left-of-the-loop.goatcounter.com`).

The PDF and EPUB download links are tracked as GoatCounter click events
(`data-goatcounter-click="pdf-download"` / `"epub-download"`). Direct hits
on the file URLs (e.g. shared links, crawlers) bypass the page's JS
entirely and are not counted. Acceptable for now.

## License

CC BY-NC-ND 4.0 — see [LICENSE](LICENSE). Share it freely with
attribution; no commercial use, no derivatives.
