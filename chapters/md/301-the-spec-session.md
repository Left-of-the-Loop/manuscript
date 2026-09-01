# Appendix B: The Spec Session, a working template {-}

*A starting shape, frozen at printing. Take it, run it, and rebuild it for your team.*

I don't have years of experience running these. Nobody does, because the ritual is younger than the problem it solves. What follows is a construction from the rituals we know, and what it inherits from is sprint planning. Planning did two jobs: work out how much fits, and work out what the work actually is. Capacity stops being the constraint when the agent implements, so the first has nothing left to do. The second is the whole session, run with mob programming's mechanics. Run it, break it, tell me where it fails.

## Cadence and size

60 to 90 minutes, hard stop. Overrun means the ticket wasn't ready or is too big, and both are findings, not failures.

This is not a weekly ceremony. A team runs one when a piece of work is ready. Most weeks that is two or three sessions, not two or three a day; three in a day is a ceiling, and it wrecks people when treated as a target. The session is the work now, not the meeting before the work. Mob programming already taught this lesson: sustained group thinking exhausts faster than solo implementation, and a tired room produces a worse spec. Some weeks most of the work is spec sessions, and that's the team doing engineering.

Three to seven people. Below three, someone is prompting with witnesses. That rule is about the standing session, not the first try: the pair experiment the Agora's door opens with is deliberately below this floor, and it's how you find out whether your team wants the real thing. Above seven, the session splits by domain, and the team accepts the coverage tension that comes with splitting.

One session, one spec. No batch refinement of a backlog.

## The fast path

Need the fast path? Skip the template. Grab one coworker, agree on intent and non-goals on a single scratchpad, and run the agent. Use the full template when the work crosses boundaries or involves more of the team.

## What this replaces

If you run this form, the session is not added to the ceremony stack; it retires most of it. Planning is settled above: half inherited outright, half left with nothing to do. Refinement goes with it, because the only sizing question left is whether the work fits in one session, and the gate answers that. That leaves the daily. Audit it: much of what a standup catches is fragments of understanding traded in status form, and the session now does that work properly, per piece of work. Keep the daily if it still earns its fifteen minutes; on many teams it thins to a blocker-ping. Then count ceremony hours before and after. The seven percent in Appendix A is not always net-new spend; for a team running full Scrum it is often a net cut. If the calendar grows when you adopt this, you didn't adopt it; you added a meeting.

## Roles, rotating per session

*The session lead* owns the room that day, not the product forever. They close discussions, call the timebox, and decide when a disagreement gets logged instead of resolved.

*The driver* types the spec on the shared screen and types only what the group says. The driver's confusion is a feature, because a sentence the driver can't write down is a sentence the agent can't run with. This is strong-style pairing's law applied to planning: for an idea to reach the document it must pass through someone else's hands. The credit belongs to the mob lineage of Woody Zuill and Llewellyn Falco.

If you use AI during specing, you use it together. One model, on the shared screen, driven by the driver. It can challenge the spec, surface prior art, play the agent reading the draft. What it can't be is a private second opinion, because the moment people validate against their own tab instead of the room, the session is just parallel prompting with attendance. This AI is not the agent that runs after the gate, it's a tool the group wields while the spec is still soft.

This rule exists because of what a single private prompt did to a mob session. The Alexandria Problem carries the scene.

*Everyone else navigates.* Intent, edge cases, system constraints.

The Stakeholder Navigator is deliberately absent unless intent needs clarifying. Their job is protecting the room, and their presence inside it turns the session back into a requirements handoff.

## Structure

*Intent, 10 minutes.* One person states the why in plain language, uninterrupted. The group's only job is to find where they disagree with it. No solution talk yet. The friction is scheduled here, not hoped for.

*The walls, 15 to 20 minutes.* Constraints, non-goals, blast radius. What must not change, which systems this touches, what the agent must not decide on its own. This is where system thinking transfers, because it's where the invisible constraints get named out loud.

*The gaps, 20 to 30 minutes.* The core, and where the behavior gets written. The group asks the questions the agent won't ask. Edge cases, failure modes, what happens when. Every answered question becomes a sentence of behavior in the spec. Every unanswerable one becomes an explicit open decision with an owner. By the end of this phase the what exists, built question by question instead of drafted upfront.

*Read-back, 10 minutes.* The driver reads the spec aloud, top to bottom. Then the lead asks each person, by name: consent or objection. Silence isn't an answer, everyone answers. Objections get logged or resolved, and consent gets recorded.

*The gate, 5 minutes.* Intent stated. Non-goals listed. Edge cases answered or explicitly deferred. No sentence a new team member would misread. If the gate fails, the ticket goes back and the agent doesn't run.

## Output

One spec document, versioned, in the repo next to the code. The sections mirror the session: Intent, Constraints and Non-Goals, Behavior and Edge Cases, Open Decisions. Open Decisions is the honest section, because it tells the agent and the reviewers where judgment was deferred on purpose rather than omitted by accident.

## Between the gate and the run

The spec is visible before the agent runs, and the Stakeholder Navigator carries it to whoever the outcome touches. This is the review, moved. Stakeholders used to inspect the increment after the build, because the build was the expensive part, and now the spec is the increment worth inspecting. An objection now costs a conversation, an objection after the run costs the run, the review of the run, and a little trust. So the window is short, the default is the agent runs, and an objection is a new session, not a veto scribbled in a comment. Nobody approves the spec, because approval is a handoff wearing a safety vest.

Distributed teams: the async adaptation of this template is Appendix D.

## What the template doesn't solve

The run will surface things the room didn't. That's another session, not an edit, and it's why sessions have to stay cheap enough to re-run.

There is no estimation ritual anywhere, no points, no poker. The sizing question moved, it's no longer how long this will take, it's whether this is small enough to spec in one session. A gated spec typically produces a single agent run and one review: a piece of work small enough that the room's picture is still current when the output comes back. That sizing is the estimate, made together at the gate. Commitment moved with it. The team no longer commits to estimated capacity, it commits to specs through the gate. The when comes from flow, how many gated specs the team finishes, counted instead of guessed. The count is how the forecast gets made. What gets measured is whether it held. And the count only means something because the session cap keeps the units roughly comparable, the gate normalizes what it passes. The #NoEstimates crowd got here first, Woody Zuill again, with Vasco Duarte writing the book: make the items small and similar, and the counting does the forecasting.

A room can nod along the way a model does. The consent round forces everyone to answer, but consent can be performed just like silence can. The rotating lead helps, and it doesn't fix it.

*This appendix is released under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), apart from the rest of the book. Copy it, adapt it, use it at work; credit the book and go.*
