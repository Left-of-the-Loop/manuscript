# Changelog

Every entry marks a point where the published draft PDF/EPUB
(`left-of-the-loop-draft.pdf` / `left-of-the-loop-draft.epub`) were
updated. Newest first.

Each entry has two commit references:

- **Site** — the commit in this repo (`Left-of-the-Loop/manuscript`)
  that performed the update.
- **Manuscript** — the commit in the private `aepfli/left-of-the-loop`
  source repo the build was pulled from.

## 2026-08-09 — manuscript `5e68165`

Site: `PENDING`

The book starts becoming a printed object. It is now trimmed to KDP's
5.5×8.5 inches rather than A5, it carries an interim cover, and a
separate print interior is built alongside the reader's copy. The draft
runs 109 pages at the new size, up from 101 at the old one — the same
book in a narrower measure, not a longer one.

- New **Appendix E: Further reading**, readable at
  /chapters/further-reading. The Agora's further-reading footnote had
  grown into a survey of tools, papers and adjacent framings; it is an
  appendix now, and the chapter points at it
- Trim changed to 5.5×8.5 for KDP, with small caps restored in the
  running heads and inserted versos left blank
- Both whole-book EPUBs carry the interim cover
- The DORA footnote is split so each citation carries its own report
  rather than three sources sharing one marker
- Typesetting: penalties set for widows, page-turn hyphens and final
  hyphens, and the footnote citations are now links. TeX had been
  inventing a hyphen inside `aihero.dev`
- The em-dash law is restated to describe the manuscript as it stands,
  and the one remaining splice is fixed
- The section law is re-grounded on current text, cutting two seams
- The doctrine fragment and the Trireme's close are repaired

Nothing on the landing page changed beyond the footer: the introduction
is untouched in this range, so the excerpt still matches.

From the `latest` release, built at `5e68165` on push. Note for the next
update: the reader-facing PDF is now published as
`left-of-the-loop-draft.pdf`. It was `left-of-the-loop-a5-draft.pdf`
until the retrim, and the release also carries a print interior that is
not the file the site wants.

## 2026-08-08 — manuscript `5d8456f`

Site: `e89e66c`

A cuts pass, a citation sweep, and the book gives up a word it had been
leaning on. Fifteen commits across seven chapters, almost all of it text
coming out — the draft ends a page shorter than it started.

- The Agora drops *Bewusstsein*. The climbing circle now creates "a
  shared awareness of where everyone is", and the callback at the end of
  the passage is "that's the circle, before the agent runs". The German
  term appeared nowhere else in the book, and the English says the same
  thing without asking the reader to carry a loan word
- The Agora also loses the tools survey's repeated gap and its second
  ending — the survey had stated the single-developer gap twice and
  closed twice
- The Astrolabe: the paragraph summarizing the two above it is gone, and
  the autonomy point is now a warning rather than an architecture to
  adopt
- The Oracle: two duplicated sentences cut, and the evidence paragraph
  split so the studies stop arriving in one block
- The Curse of Sisyphus: the scoping document was diagnosed twice, three
  paragraphs apart; the second diagnosis goes, which also lets "that gap"
  point at the understanding rather than at a restatement
- The Agora then loses its closing recap as well, so the section ends on
  the question it hands to the next chapter rather than on a summary
- A Fool with a Tool: the private-learning passage stops listing what the
  tool needed and simply says it
- The Product Owner is Dead: the title inventory goes; the chapter was
  already about the seat rather than the title, and said so twice
- Both EPUBs now carry a valid `dc:date`

All 44 footnotes were then checked against primary sources, and five
were wrong:

- *The Goal* is by Goldratt **and Jeff Cox**, who is credited on the
  cover of every edition and was missing from the footnote
- The Star and Griesemer quotation was not verbatim: it had dropped a
  clause without an ellipsis, changed "yet" to "but", and paraphrased
  "across sites". It is now quoted as written
- Consent as a decision rule was formalized by Gerard Endenburg in the
  early 1970s, not "in Sociocracy 3.0" — off by about forty years, and
  at odds with the chapter's own line about sociocracy using it for
  decades. "Consent, not consensus" loses its quotation marks, being a
  slogan rather than a sourced quote
- Fowler's piece is *The Phoenix Architecture*, singular and with the
  article
- The Thoughtworks Radar called the spec files lengthy, not the
  workflows
- The Product Owner chapter no longer says OpenAI and Böckeler arrived
  at "harness engineering" independently. Böckeler's own earlier memo
  opens by citing OpenAI's write-up, so the record shows a term
  spreading rather than being coined twice — a weaker claim, and the
  true one

Nothing on the landing page changed: the introduction is untouched in
this range, so the excerpt still matches.

Back to the `latest` release for artifacts — CI ran on push and the
release is built from `5d8456f`. 101 pages, and the EPUB's `dc:date`
reads `2026-08-08` where it used to be malformed.

## 2026-08-06 — manuscript `c98ab45`

Site: `6042ffe`

A line-level pass over the whole book, and two new drawings. Twenty-eight
commits, and almost every chapter is touched, but the argument is where
it was — this is the book saying the same things in fewer and plainer
words.

- Voice: twenty-four sentences cut that the book already says elsewhere,
  eleven standalone lines folded back into the paragraph above them, and
  thirty-two scaffolding negations rewritten as what they actually claim
- The em-dash purge is finished, and the voice guide no longer argues
  with itself about it
- Spelling settled on en-US throughout, and HTML comments no longer
  reach the build
- The Ever-Agreeing Genie: a new figure, the harness against the room —
  a planner/generator/evaluator loop that converges on one framing,
  beside three people whose separate histories meet at the spec
- The desk figure moved to the Agora, the chapter that actually coins
  the walk to the desk
- The scattered-loops placeholder is replaced with a legible drawing;
  the typeset headings it was flagged for are gone
- Appendix B gains a fast path and says what it replaces; Appendix A
  names the errors that run for its argument, not only the one against it
- Glossary: the two independence entries separated, the two spec entries
  cross-referenced
- The Trireme separates the function count from the headcount
- Footnote markers, block order, and spacing normalised throughout
- The Note cuts the evaluative half of its writing admission
- The landing page's excerpt tracks one change: "2am" is now "2 a.m."

Taken from a `workflow_dispatch` build at `c98ab45` rather than the
`latest` release. Six merges landed in quick succession and GitHub
cancelled each queued run as the next superseded it, so the release is
still built from `001c129` and the publish step only runs on push. The
artifacts are the same build the release would have carried. 101 pages.

## 2026-08-06 — manuscript `ee6bd43`

Site: `6860555`

A figures update. The four diagrams are now hand-drawn rather than
vector, and they read as one set: ink over a faint grid, one warm-orange
accent that means a human is deciding, and a diamond that means the
merge gate.

- All four figures replaced with the hand-drawn versions — the Loop, the
  Desk, the Trireme fields, and the scattered loops
- The Curse of Sisyphus: the Loop's gates are now labelled "merge gate",
  the book's own coinage from later in the same chapter, and annotated
  "the team decides" and "a human accepts", so the two human moments
  bracket "machine speed"
- The Trireme: the caption moved with its art — the overlap is now "the
  spec" rather than "the work", and the agent runs from it rather than
  in it
- The Astrolabe: the loop-contained figure is cut. It illustrated
  containment and a feedback arrow while the prose around it argues
  centralized infrastructure and cost visibility, and it was close to a
  redraw of the Loop besides
- All four figures then had their backgrounds removed. The scattered
  loops had come back on a graded cream paper fill that printed as an
  off-white rectangle on a white page; the other three sat on plain
  white. None of them carries page colour now, and the stray artifact in
  the corner of the scattered loops went with the cream
- The scattered-loops figure is still not final; its headings are typeset
  rather than hand-lettered
- No prose changed beyond the Trireme caption and the cut figure's line

The landing page gains the Loop figure, which is the one diagram that
explains the book's title, and a social preview card built from it.
Chapter pages serve the figures re-encoded for the web — same images,
an eighth of the bytes — and both pages now declare themselves
light-only, so a browser that force-darkens the page can't composite
near-black ink into an invisible figure.

First build taken from upstream CI rather than built locally: the
Actions quota is clear again, and the release now carries the whole-book
PDF and EPUB. `ee6bd43` is four commits past the last prose change, all
of them build infrastructure, so the book here is the `5c4766f` text.
99 pages.

## 2026-07-28 — manuscript `4702417`

Site: `2f406cd`

A reviewer-driven honesty pass: several chapters now concede the limits
of their own claims rather than leaving the reader to find them.

- Introduction: says at the front that the prescription is a bet, not a
  proven practice; aligned with the Oracle's narrowed premise
- Oracle: split the premise into the half the book can support and the
  half it can't; restored the antecedent for "all three"
- Agora: closed the door on the better-agent objection, said when
  iterating beats the room and when it cannot, conceded the refinement
  overlap before the reader raises it, dropped the XY label
- Appendix A: priced the room as substitution rather than addition
- Appendix C: stopped citing the engineer-hours figure Appendix A
  retracts, and stopped timing a session that did not happen
- Appendix B: stopped redefining predictability as a count
- Sisyphus: made the falsification test capable of failing; the test's
  lists aligned and stated once
- Trireme: three kinds of attention on the work rather than three people
  in the room; epigraph history fixed and the number pun dropped
- Astrolabe: the platform makes the test continuous, it does not make it
  possible
- Citation and spacing fixes: Boeckeler's harness-engineering piece cited
  by full title, epigraph-to-question spacing normalised

Built locally again, same container as the previous entry; upstream CI is
still out of Actions minutes, so the release assets remain behind.

## 2026-07-27 — manuscript `55ea356`

Site: `3f68b8d`

- Astrolabe: compression pass and the Majors passage recast; the Section
  Law run over it (eight breaks to four); PullOps cut and the validation
  section rebuilt on Majors; open/closed framing, promoted label cut
- New appendix: "Async Spec Planning", readable at
  /chapters/async-spec-planning
- Introduction: cut hedges, collapsed label sentences, trimmed section
  breaks. This rewrote text inside the landing page's excerpt, which is
  updated to match.
- Forest and Desert: reframed around scarcity vs. abundance
- Sisyphus: cuts pass, plus the first section-law merge
- Agora: re-scoped the tooling section, restored three cut clauses; with
  Alexandria, stripped "actually" from the done-looks-like refrain
- Intensifier cuts: eleven words across ten files
- Added the Section Law to the story bible (governs `---` breaks)

Note: the PDF and EPUB in this update were built locally in a container
matching the source repo's CI toolchain, not downloaded from its release.
The upstream Actions runs for the last few commits could not complete, so
the release assets lag the manuscript commit recorded above.

## 2026-07-25 — manuscript `829bb14`

Site: `9435509`

- Em-dash near-zero pass across the Introduction, Agora, Genie,
  Alexandria, and Oracle; Appendix C consistency fixes
- Reviewer round: premise circularity (Oracle), symmetry turned inward
  (Genie)

## 2026-07-25 — manuscript `c173348`

Site: `5a39467`

- Oracle: led with the absorption-gap claim, recruited the data to it
  (with a knock-on trim in The Curse of Sisyphus)
- New appendix: "A session that failed the gate", readable at
  /chapters/session-that-failed-the-gate
- Citation verification pass: DORA supersession, three error fixes,
  one mischaracterization
- Reviewer round: falsifiability, premise-status consistency, and the
  wanting claim narrowed to what it covers; premise tense sweep

- Introduction: reframed the thesis (abundance demoted to accelerant,
  erosion of incidental friction made the mechanism); added the
  "this has happened before" lineage paragraph with a Brooks footnote.
  The landing page's summary paragraph was updated to match.
- Ever-Agreeing Genie: assembled the groupthink objection and answered
  it (split with The Forest and the Desert), un-contradicted the
  weights claim, cut restatements
- Agora: moved the tooling-landscape block earlier, cut a redundant
  closer, made the Bewusstsein line personal
- Trireme: the Simmel structural axis, restatement cuts
- Phoenix & Glossary: fixed the sentence the glossary was patching;
  glossary gained the Agora entry and a repaired "room" drift
- Appendix A: added and repositioned the refinement-swap clause,
  revised the opener
- Oracle and Forest and Desert: placement fixes and post-batch cleanup

- New appendix: "What the room costs", readable at
  /chapters/what-the-room-costs; the Spec Session template is now
  Appendix B
- The seven-hole batch: targeted fixes across End of a Craft (the hinge
  unpacked), Trireme (the pairing tension resolved), Astrolabe
  (signal-law self-applied, convergence confession), Phoenix (the
  concession and the denominator flip, plus a repeated-noun trim), and
  both appendices (denominator clause; scope clause and async
  adaptation)
- Oracle: applied paper-pass edits; split AI-accelerates-breakage into
  its own beat; added the anti-prescription paragraph after the
  Thursday-commitment line
- Foreword: led with the irony, merged the Claude paragraphs
- Phoenix: collapsed the drift paragraph to its two beats
- Astrolabe: cut two paragraphs, landed the left/right ends of the loop
- Spec Session: added the Appendix designation and the
  frozen-at-printing epigraph
- Glossary: three-zone geography fix and completeness pass

## 2026-07-24 — manuscript `b49303c`

Site: `dbbe195`

- A note on how this book was made: use first names only for the first
  readers

## 2026-07-24 — manuscript `45c4632`

Site: `90569f6`

- Retitled chapter 10 to "The Forest and the Desert" (was "Desert and
  Forest"). Its reading page moved to /chapters/forest-and-the-desert;
  the old URL still works.
- Forest and Desert: credited Beth Andres-Beck in the epigraph, named
  Kent Beck in the body

## 2026-07-23 — manuscript `a338151`

Site: `bc8dc2b`

- Alexandria: broadened the code-review opener, tightened a few beats
- Ever-Agreeing Genie: cut a KubeCon reference, italicized weighted
  validation, reworked the structural-answer line
- Desert and Forest: italicized epistemic safety on first use; tightened
  the Trireme recap, cut two restatement passages, landed the forest
  line as the closer
- Oracle: applied two decided-but-unapplied paper-pass edits
- Trireme: moved the minimum-viable-unit conclusion after the
  OpenFeature story, cut a prescription hedge

## 2026-07-22 — manuscript `27a29f4`

Site: `7e74223`

- PO chapter: added a lineage footnote for minimum viable context
- End of a Craft: swapped the opening line back to prompt/prompted

## 2026-07-22 — manuscript `9ffbdb8`

Site: `0c65a92`

- PO chapter: personal opener, cut restatements, tightened the
  spec-review beat
- Fool with a Tool: italicized "recognition work" as a defined term
- Agora: tightened three sentences

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
