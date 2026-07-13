# Left of the Loop

Landing page and draft PDF for *Left of the Loop*, a book by Simon Schrottner.

Live at [leftoftheloop.dev](https://leftoftheloop.dev).

> As implementation becomes abundant, shared understanding becomes the
> scarce resource, and constructive friction is the mechanism that
> protects it.

## What's in this repo

- `index.html` — the landing page. Hand-written HTML/CSS, no framework, no
  build step.
- `left-of-the-loop-draft.pdf` — the current working draft. Stable
  filename; the URL never changes, only the file behind it.
- `CNAME` — GitHub Pages custom domain config.
- `LICENSE` — CC BY-NC-ND 4.0.

This repo intentionally does **not** contain the chapter sources or the
pandoc build tooling yet. Those live in a private working repo. This repo
is where reader feedback happens and where the built PDF gets published.

## How feedback flows

1. Readers download the PDF from this site and leave feedback as
   [issues on this repo](https://github.com/Left-of-the-Loop/manuscript/issues).
2. Feedback is incorporated in the private working repo.
3. The PDF is rebuilt there and committed here manually, replacing
   `left-of-the-loop-draft.pdf` in place.

There is no CI wired up between the two repos yet. If manual updates
become frequent, that's worth automating; for now it's a deliberate,
reviewed step.

## Updating the PDF

When a new draft is committed here:

1. Replace `left-of-the-loop-draft.pdf` (same filename, so the public
   download URL doesn't change).
2. Re-check the introduction excerpt in `index.html` against the current
   `00-introduction.md` in the private repo, and update it in the same
   commit if the opening has changed. The excerpt is verbatim text, not a
   summary — it should read exactly as edited, cut where marked "The full
   draft continues in the PDF."

## Analytics

Pageviews are tracked with [GoatCounter](https://www.goatcounter.com/),
same account as schrottner.at, under a separate site code
(`left-of-the-loop.goatcounter.com`).

The PDF download link is tracked as a GoatCounter click event
(`data-goatcounter-click="pdf-download"`). Direct hits on the PDF URL
(e.g. shared links, crawlers) bypass the page's JS entirely and are not
counted. Acceptable for now.

## License

CC BY-NC-ND 4.0 — see [LICENSE](LICENSE). Share it freely with
attribution; no commercial use, no derivatives.
