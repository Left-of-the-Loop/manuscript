# The Spec Session

*The working template, live. Appendix B of the book is this template frozen at printing; this page is the one that keeps moving.*

Take it, run it, and rebuild it for your team. Then [tell me where it fails](https://github.com/Left-of-the-Loop/manuscript/issues) — I don't have years of experience running these, and neither does anyone else. The ritual is younger than the problem it solves.

## The two files

- **[spec.md](/templates/spec.md)** — what a session produces. One session, one spec, versioned in the repo next to the code.
- **[spec-review-request.md](/templates/spec-review-request.md)** — the async adaptation, for teams that are never in a room together. See [Async](#async) below.

Both are plain markdown with the guidance in HTML comments, so you delete the comments as you fill them in. Your browser will download them rather than display them; that is the point, they are meant to land in your repo.

Both are released under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), apart from the rest of the book. Copy them, adapt them, use them at work; credit the book and go.

## Need the fast path?

Skip the template. Grab one coworker, agree on intent and non-goals on a single scratchpad, and run the agent. Use the full template when the work crosses boundaries or involves more of the team.

## The run sheet

Everything below is the short form. The reasoning behind each rule, and the arguments against it, are in [Appendix B](/chapters/spec-session).

**Cadence and size.** 60 to 90 minutes, hard stop. Overrun means the ticket wasn't ready or is too big, and both are findings, not failures. Three to seven people: below three, someone is prompting with witnesses; above seven, split by domain and accept the coverage tension that comes with splitting. One session, one spec. No batch grooming of a backlog.

This is not a weekly ceremony. A team runs one when a piece of work is ready — most weeks that is two or three sessions, not two or three a day. Three in a day is a ceiling, not a target, and treating it as one wrecks people: sustained group thinking exhausts faster than solo implementation, and a tired room produces a worse spec. The session is the work now, not the meeting before the work.

**Roles, rotating per session.**

| Role | Owns |
| --- | --- |
| Session lead | The room that day, not the product forever. Closes discussions, calls the timebox, decides when a disagreement gets logged instead of resolved. |
| Driver | Types the spec on the shared screen, and types only what the group says. Their confusion is a feature: a sentence the driver can't write down is a sentence the agent can't run with. |
| Everyone else | Navigates. Intent, edge cases, system constraints. |

If you use AI during the session, you use it together: one model, on the shared screen, driven by the driver. Not a private second opinion, because the moment people validate against their own tab instead of the room, the session is just parallel prompting with attendance.

The Stakeholder Navigator is deliberately absent unless intent needs clarifying.

**The five phases.**

| Phase | Time | What happens |
| --- | --- | --- |
| Intent | 10 min | One person states the why in plain language, uninterrupted. The group's only job is to find where they disagree with it. No solution talk yet. |
| The walls | 15–20 min | Constraints, non-goals, blast radius. What must not change, which systems this touches, what the agent must not decide on its own. |
| The gaps | 20–30 min | The core. The group asks the questions the agent won't ask. Every answered question becomes a sentence of behavior; every unanswerable one becomes an open decision with an owner. |
| Read-back | 10 min | The driver reads the spec aloud, top to bottom. Then the lead asks each person, by name: consent or objection. Silence isn't an answer. |
| The gate | 5 min | The four checks below. If the gate fails, the ticket goes back and the agent doesn't run. |

**The gate.**

- Intent stated
- Non-goals listed
- Edge cases answered or explicitly deferred
- No sentence a new team member would misread

**What the spec looks like.** The sections mirror the session, which is the whole trick — the document is a recording of the room, not a document the room was held to produce.

```markdown
# Spec: <what this work is>

## Intent
## Constraints and Non-Goals
## Behavior and Edge Cases
## Open Decisions
## Gate
## Consent
```

Open Decisions is the honest section: it tells the agent and the reviewers where judgment was deferred on purpose rather than omitted by accident.

**Between the gate and the run.** The spec is visible before the agent runs, and the Stakeholder Navigator carries it to whoever the outcome touches. The window is short, the default is that the agent runs, and an objection is a new session, not a veto scribbled in a comment. Nobody approves the spec, because approval is a handoff wearing a safety vest.

## Async

*The fuller async build, as it evolves. The printed treatment is [Appendix D](/chapters/async-spec-planning).*

For distributed teams the session becomes a review request on the spec. The draft opens, comments come in, and the what, the why and the not-building get challenged asynchronously. It merges when the team has converged, meaning the concerns have been addressed and the understanding is shared.

The phases map directly:

| In the room | Async |
| --- | --- |
| Intent, walls | The draft, carrying intent, constraints and non-goals before it opens |
| The gaps | The comment thread. Every named reviewer responds, or the spec doesn't merge |
| Consent round | The approval set, with objections as blocking comments |
| Read-back | The revision note: what changed under challenge, and why |
| The lead's clock | The merge owner, rotating like the room's lead. Their job is to call convergence at the deadline, not to win the thread |
| The timebox | A deadline. Two working days, not two weeks |

One mechanic can't be replaced. In the room, an idea reaches the document only by passing through someone else's hands, so no framing arrives unfiltered. Async has no filter: one person holds the pen, their framing is the document, and everyone else reacts to it. The thread compensates only partly, and that is the honest cost of working apart. The mitigation is minimum viable context applied to the proposal itself — rich enough that a reviewer cannot respond meaningfully without actually thinking about it. That is what the "What I am least sure about" section in [spec-review-request.md](/templates/spec-review-request.md) is for.

A spec drafted by an agent and reviewed by an agent merges without anyone having understood it. The review request is the session; if no human thinks in it, it didn't happen.

## What this doesn't solve

The run will surface things the room didn't. That's another session, not an edit, and it's why sessions have to stay cheap enough to re-run.

There is no estimation ritual anywhere. The sizing question moved: it is no longer how long this will take, it's whether this is small enough to spec in one session. A gated spec typically produces a single agent run and one review — small enough that the room's picture is still current when the output comes back. The when comes from flow, counting gated specs finished rather than guessing.

A room can nod along the way a model does. The consent round forces everyone to answer, but consent can be performed just like silence can. The rotating lead helps, and it doesn't fix it.

## What changed here

The template evolves faster than the draft does. Changes to this page and to the two files are listed here, newest first.

- **2026-09-01** — cadence corrected to match Appendix B, which lowered it: two or three sessions in a *week*, with three in a day named as a ceiling rather than a target. This page had carried the older, harder claim. Sizing also picks up what a gated spec is sized to, one agent run and one review.
- **2026-08-09** — first live version, matching Appendix B and Appendix D as printed in the 2026-08-09 draft.

---

*From [Left of the Loop](/), a book by Simon Schrottner. The book is CC BY-NC-ND 4.0; this template and the two files it links are CC BY 4.0.*
