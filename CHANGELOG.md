# Changelog

Every entry marks a point where the published draft PDF/EPUB
(`left-of-the-loop-draft.pdf` / `left-of-the-loop-draft.epub`) were
updated. Newest first.

Each entry has two commit references:

- **Site** — the commit in this repo (`Left-of-the-Loop/manuscript`)
  that performed the update.
- **Manuscript** — the commit in the private `aepfli/left-of-the-loop`
  source repo the build was pulled from.

## 2026-07-22 — manuscript `e9f0cb2`

Site: `a58b480`

- Acknowledgments: added a thesis-reframe opener, cut a hedge word

## 2026-07-22 — manuscript `9fe61ed`

Site: `c1f05aa`

- Acknowledgments: wrote the full back matter draft

## 2026-07-22 — manuscript `c794363`

Site: `2a193fb`

- Intro, Sisyphus, End of a Craft: de-spec word-choice pass. Changes
  the landing-page excerpt: "we never quite specced it together"
  becomes "we never quite planned it together."

## 2026-07-21 — manuscript `ba57479`

Site: `52c41f8`

- CI: consolidated the separate build workflows into one `build.yml`
  with shared LaTeX setup; chapter PDFs are now A4-only
- Intro & End of a Craft: voice-pass trims
- Alexandria: cut the stranger-paragraph opener
- Oracle, Alexandria, Astrolabe: three micro-cuts of surviving echoes

## 2026-07-20 — manuscript `d184b8e`

Site: `9c676be`

- Glossary: filled in terms, verified against source chapters
- Oracle & Astrolabe: cut restatement paragraphs and buttons
- Alexandria: deduped against End of a Craft and Astrolabe, trimmed
  restatements
- Agora: tightened culture and convergence passages; reworded the
  appendix pointer to name the working template
- Desert and Forest: moved the "Until" paragraph to the bottleneck
  pivot
- Oracle: pointed sizing to the working template; reapplied the
  estimate-to-commit swap
- Spec Session appendix: added "Between the gate and the run";
  renamed to the 80-prefix
- Revised Astrolabe, Trireme, Phoenix, Oracle, Alexandria Problem,
  Spec Session

## 2026-07-19 — manuscript `4687555`

Site: `7be5669`

- Added the EPUB build for the review draft
- Added a Mermaid diagram figure pipeline, then reverted it; Sisyphus
  got a placeholder loop-diagram figure instead
- Astrolabe: cut a duplicate platform-knowledge passage
- Ch07: de-quoted a repeated instance of the signature question
- Intro & Oracle: cut redundant asides and restatements
- Genie: sharpened scope-judgment and unknown-unknown beats
- Fool with a Tool: cut a redundant qualifier
- Appendix: added "The Spec Session" (working template)

## 2026-07-15 — manuscript commit not recorded

Site: `65b6f20`

The upstream commit wasn't captured at update time; this entry is
reconstructed from commit dates and approximate (through `91096b5`).

- Alexandria: de-duplicated the core claim
- Oracle: added a reflexive Goodhart beat near the sandbagging passage
- Astrolabe: added a self-dating sentence after the closing metaphor
- Agora: positioned against AI-DLC / Mob Elaboration
- CI: fixed per-chapter A5 PDFs colliding with A4 names in release
  assets
- Draft PDF: stamped the title page with the build git hash
- Marketing: canonized the subtitle in the back-cover designer brief

## 2026-07-12 — manuscript `de8f3f8` (tag `v0.1`)

Site: `91e504`

Initial publish: landing page, working-draft PDF, CC BY-NC-ND license.
