# The Agora

*The agora was the heart of the ancient Greek city, a public space where citizens gathered not just to trade, but to think, argue, and decide together. It was where the polis became more than a collection of individuals.*

*If no one person owns the understanding, how does a team build it together?*

Every team has a place where the real thinking happens.

Sometimes it's a formal meeting. More often it's a corridor conversation, a Slack thread that ran long, a one-on-one where someone finally said the thing they'd been sitting on for a week. The technical lead and the product manager talking through a problem before it becomes a ticket. The senior engineer pulling a junior aside to explain why the approach won't work. The offhand comment in a code review that reframes the whole feature.

That thinking is the most valuable work the team does, and even in well-documented teams, part of it stays invisible, dependent on the right people being in the right conversation.

The Spec Session is what happens when a team makes that space intentional, the whole team converging on one spec before the agent runs. It's not a new idea: XP called it the planning game.[^c5-xp] What's different is the stakes: where XP had an individual coder, the Spec Session has an agent. And the quality of the shared thinking before it runs determines everything that follows.

The individual coder was doing a second job nobody ever named. A human who doesn't understand what they're building gets uncomfortable, gets stuck, walks over to a desk and asks whether we meant this or that. That discomfort was a safety net no process designed: it caught planning failures in week two instead of production. An agent has no such habit. It runs with its best interpretation or it stops, and neither looks like walking over to a desk. It can ask a clarifying question, but it asks the person who wrote the prompt, from inside that framing. The old process could afford an ambiguous spec because the implementer and the circuit breaker were the same person. The agent split them apart, and the Spec Session is what replaces the walk to the desk: the same catch, moved to the cheapest moment.

---

Before the Spec Session starts, one thing needs to exist: a reason to build anything at all. The business need and the user problem, as well as the organizational imperative. These come first, and none of them is more important than the others. The Spec Session aligns the team on what exactly gets built and how, not whether it's worth building. Without a clear need upstream, the best-run Spec Session produces a beautifully shared understanding of the wrong thing.

This is a dedicated space and not a meeting: meetings have agendas, action items, owners. A Spec Session produces something different: a room full of people who hold the same picture of what's being built, why, and what done actually looks like. The document is just the record of that convergence. It doesn't need everyone to read it the same way, only to keep pointing at the same thing.[^c5-boundary]

That's why the path is the goal. A team could be handed a perfectly written spec and skip the session entirely. They'd own none of it, having inherited someone else's thinking rather than built their own. And when the agent runs and something unexpected surfaces, the team that built the understanding together knows what to do. The team that received the spec has to go find the person who wrote it.

---

I run climbing courses for children. At the start of every session we sit in a circle: everyone speaks, everyone listens, no rushing past. We reflect on the last time. We let the room breathe. We create what in German has a better word than English offers: Bewusstsein. A shared awareness. A common consciousness of where everyone is before anyone starts climbing.[^c5-tomasello]

What happens after that circle isn't engineered. The peer learning emerges. The child who felt heard speaks up on the wall. The one who listened offers help without being asked. The group becomes something that supports itself.

When we skip the circle, whether because there's no time, the energy is off, or someone rushes past it, the session feels disconnected. Just individuals climbing in parallel rather than a group climbing together. The difference is subtle, real, and almost impossible to point to for anyone who hasn't felt it.

That's the Agora, the condition that makes a room more than a collection of individuals.

Software teams need the same thing, but as a disposition the team carries continuously and not as a ceremony: the habit of making thinking visible before acting on it, of listening before building, of checking where everyone actually is before assuming the team already knows. The climbing circle is one way to make that instinct visible. Some teams do it in how they write issues, or in the way a senior pauses before running the agent to ask whether the spec is actually clear. The form doesn't matter, but the instinct does — the moment of shared Bewusstsein before the agent runs.

The Spec Session is not a planning gate or waterfall with better tooling. The team still iterates. Still puts things in front of users. Still discovers that what got built isn't quite what was needed. The difference is that the team iterates with everyone holding the same picture, so when the direction turns out to be wrong, everyone understands why, and the correction is faster. In truly complex domains, where cause and effect only become visible in retrospect, the Spec Session doesn't replace iteration; it makes iteration less expensive by ensuring the team is wrong together rather than separately.

What that condition makes possible is more than shared understanding. It makes trust possible.

In climbing, trust has a physical form. Belaying, holding the rope that keeps another person safe, is the most literal expression of it. One person's life, in a meaningful sense, in another's hands. In my children's courses, we build to that point deliberately. The circle first. The shared awareness. The environment where everyone feels safe enough to be uncertain out loud.

And then something that still surprises me happens. Five year olds belay each other. Supervised, of course, but the trust is real, the technique is real, and the care they take with each other is genuine. I have watched five year olds belay more attentively than adults I've seen on real rock, because the environment built the trust before the task required it. That's the standard software teams are measured against.

How many engineering teams have the trust required to say "I don't understand this spec" in a planning meeting? To tell a senior their approach is wrong? To admit mid-implementation that something doesn't make sense and risk looking slow?

That trust is built deliberately, the same way the circle builds it before anyone climbs.

---

The hardest part is building this culture, regardless of the format.

A Spec Session breaks when people don't say what they actually think: the junior who spots a problem but doesn't feel safe raising it, the engineer who thinks the approach is over-engineered but defers to the senior, the concern that never gets voiced because the culture doesn't make it safe.

Psychological safety[^c5-edmondson] is the prerequisite for a Spec Session. Without it, the team has a meeting where people perform agreement and the real thinking still happens in corridors afterward.

The Spec Session makes that culture structural rather than personal. It says: this is the time, this is the room, this is the moment where it's not just safe but expected to say what you actually think. The format protects the behavior that good leads were trying to create informally.

---

The Spec Session produces minimum viable context: the agent runs without guessing, the team reviews without re-learning, the stakeholder recognizes what they asked for when they see it.

Acceptance criteria are a contract, not an understanding.

The session needs to surface three things before it closes.

What are we actually building. The specific behavior, the boundary conditions, the thing that would make a skeptic say "yes, that's done." The team needs to be able to describe it without looking at the document.

Why this approach and not another. Not for the audit trail, but for the moment six months from now when the system has changed and someone needs to know whether to revisit this or discard it. The why is what survives the what becoming obsolete.

What we're not building. The explicit scope boundary. The thing that's out of scope this iteration, that will be a different ticket, that the agent should not attempt. Without this, the agent fills the silence with reasonable guesses, wrong half the time.

When those three things are in the room and have been shared, challenged, and confirmed, the session is done.

The spec that comes out is not a user story wearing a new name. A story was a placeholder for a conversation that would happen during implementation, because the implementer could ask; the spec is the record of a conversation that already happened, because the implementer can't.

The difference fits on half a page. The ask, as I typed it that day: this pull request is too large to review properly, split it into two for a better overview and an easier follow. What a session would have recorded instead: two pull requests, split by feature, not by module, each reviewable on its own. The shared logic stays in one place; neither duplicates it. Why: a better overview, and a follow that doesn't require holding two diffs in your head at once. Not doing: no restructuring of the existing module layout, no new abstractions for the shared code. Done when each pull request reviews cleanly by itself and the shared logic exists exactly once.

That's one task's record, not a form. Yours will look different, because your gaps are different.

Consensus is too high a bar and too slow to reach. The Spec Session produces consent, the decision-making distinction sociocracy has used for decades[^c5-sociocracy]. Nobody objects strongly enough to block, and that's enough. The team can move with a shared picture even when individuals would have made different choices. The document captures them. The team owns them. The agent can run.

---

Async Spec Planning is the same thing with a different form factor.

For teams that can't be in the same room, distributed, different timezones, permanently async, the session becomes a review request on the spec. The draft opens. Comments come in. The what, the why, and the not-building get challenged asynchronously. The merge condition is when the team has converged, meaning the concerns have been addressed and the understanding is shared.

It's slower than a synchronous session. It's faster than the alternative, which is a document that gets written, inherited, and silently misunderstood.

But async spec planning carries a risk synchronous sessions don't. What stops one developer from using an agent to write the spec proposal, and another from using an agent to review it? If both sides of the conversation are AI-mediated, the human understanding loop is bypassed before the code loop even starts. The spec merges. The understanding was never built.

The mitigation is minimum viable context, but applied to the spec proposal itself. A proposal rich enough that a reviewer cannot respond meaningfully without actually thinking about it. One that surfaces the assumptions, names the edge cases, explains the reasoning behind the decisions, demanding engagement rather than permitting rubber-stamping.

The same culture requirement applies. The async version needs people to actually comment, actually raise the concern, actually say "I don't think this covers the edge case where X" — not approve because nobody wanted to slow things down, or because an AI generated a plausible-sounding approval.

The test for whether async spec planning worked is whether the team could explain the decisions without looking at the document, not whether the review request merged. A merged spec that collected silent agreement is a session that never happened. If the understanding lives only in the artifact, the session failed.[^c5-fowler]

---

Spec Sessions can become the new endless grooming when the team circles the problem, surfaces every concern, explores every edge case, and never converges. Three hours later there's a rich document and no decision.

The antidote is a rotating session lead: someone whose job that day is to get to convergence, to close the discussion when the understanding is good enough — not perfect, just sufficient for the agent to run without guessing on the things that matter. Their job is also to protect the session from becoming the thing it was designed to replace.

---

Most teams never make that space intentional. The thinking happens, but it happens in fragments. The Spec Session is the one place where the thinking that was happening anyway gets done together, gets documented, gets owned by the whole team. Not a ceremony added to a full calendar; the replacement for the fragments.

The room has to be made, and protected; everything the agent produces is downstream of what happens in it.

---

If you want to try any of this, start small. Smaller, even, than the team this book will argue for.

Grab a coworker before your next task. Define the plan together. Define the prompt together. Then hand it to the agent and let it run against what you agreed. If you want to change something mid-run, stop: that's another spec, not an edit to this one.

Let the output tell you whether the spec was good enough.

If it worked, iterate from there. You don't need to change your whole process from one day to the next.

If it didn't, ask why together, not each of you privately at your own desk. Where did the agent take the wrong turn? Would a better explanation have prevented it? Did it fill a gap you didn't know you'd left? Did you hand it so much context that the signal drowned? There are many ways a run can fail, and you and your coworker are the only ones who can tell which one you hit. A failed run is the cheapest teaching material you'll ever get, but only if the lesson lands in both heads. A lesson learned alone is the problem this book is about, in miniature.

Figure out what works, and build on it. One experiment at a time, one task at a time. That's the thing engineers are good at anyway: fixing broken things.

A fuller starting shape waits in the working template at the back.

Tools will make this easier. They already are: better async collaboration, lighter spec formats, smarter review workflows. The question isn't whether to use them. It's whether the conversation happens before or after you do.

---

Tools are beginning to encode this instinct.[^c5-further] Birgitta Böckeler[^c5-sdd], a Distinguished Engineer at ThoughtWorks, has analyzed the leading tools and identified the central gap: all of them assume a single developer does the requirements analysis. None address what happens when multiple people need to arrive at the same picture together. That's the Agora, the human condition that makes any spec-first approach work. A tool can encode the instinct, but it can't replace the room. A CONTEXT.md nobody owns is just a Confluence page.

ThoughtWorks, in their Technology Radar[^c5-radar], flag a real risk: spec-driven workflows become "lengthy" and "elaborate and opinionated" when the spec becomes the goal. The Spec Session is the antidote, not an instance of it. The document is proof the conversation happened, a record of reasoning.

Kief Morris[^c5-morris] introduces the closest external framing to this book's argument: humans "on the loop," building and maintaining the harness. The difference is precise: Morris solves where humans sit in the process. This book solves what they need to do before it starts — the harness enforces how code gets written, and the Spec Session ensures the team holds a common picture of what users need before the agent writes a line.[^c5-harness]

The room itself is not entirely missing from the landscape. AWS's AI-DLC puts one back: a ritual called mob elaboration, cross functional and hours long, before any agent runs.[^c5-aidlc] The difference is what each is about. AI-DLC prescribes the ceremony; this book is about what the ceremony exists to produce. And understanding does not require a shared building. The best room I have ever worked in had no walls at all.

---

The Spec Session is where the work happens. Which leaves one question worth sitting with: why does it have to be people in the room at all?

[^c5-xp]: Kent Beck, *Extreme Programming Explained: Embrace Change* — discussed, with citation, in the introduction; "the planning game" is one of its practices.
[^c5-tomasello]: Developmental psychology has a name for this: shared intentionality, the capacity for joint attention and joint goals that Michael Tomasello identifies as the distinctively human cognitive trick, present in infants before language (*Why We Cooperate*, MIT Press, 2009). Joint commitments carry norms: Gräfenhain, Behne, Carpenter, and Tomasello showed that even three-year-olds take leave before abandoning a joint activity rather than walking away silently ("Young Children's Understanding of Joint Commitments," *Developmental Psychology* 45, 2009).
[^c5-radar]: ThoughtWorks Technology Radar, Volume 33 (2025), on spec-driven development (thoughtworks.com/radar).
[^c5-sdd]: Birgitta Böckeler, "Understanding Spec-Driven Development: Kiro, Spec-Kit, and Tessl," "Exploring Gen AI" (martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html). She analyzed Kiro, spec-kit, and Tessl.
[^c5-further]: Further reading on spec-first tooling: GitHub's Spec-Kit (github.com/github/spec-kit), the BMAD-Method (github.com/bmad-code-org/BMAD-METHOD), and Matt Pocock's AI Hero (aihero.dev) — including the `/grill-with-docs` skill, which makes the Spec Session executable. For the concept itself, see "Spec-Driven Development: From Code to Contract in the Age of AI Coding Assistants" (arxiv.org/abs/2602.00180, 2026).
[^c5-morris]: Kief Morris, "Humans and Agents in Software Engineering Loops," "Exploring Gen AI" (martinfowler.com).
[^c5-harness]: Birgitta Böckeler, "Harness Engineering" — discussed, with citation, in the Product Owner is Dead chapter.
[^c5-aidlc]: Raja SP, "AI-Driven Development Life Cycle: Reimagining Software Engineering," AWS DevOps & Developer Productivity Blog (aws.amazon.com/blogs/devops/ai-driven-development-life-cycle, 2025), and the AI-DLC Method Definition paper linked from it. AI-DLC is the notable exception to the single-player pattern: mob elaboration for requirements, mob construction for implementation, a cross-functional team, synchronous and colocated by assumption ("a single room with a shared screen"). It also makes a bet this book argues against. Every artifact AI-DLC produces, from intent to test plan, is persisted and linked as traceable context that AI references across the lifecycle. Naur's answer is this book's answer: the record is not the theory, and the understanding does not live in the markdown.
[^c5-sociocracy]: "Consent, not consensus" is a core distinction in sociocracy, formalized in Sociocracy 3.0 (sociocracy30.org).
[^c5-edmondson]: Amy Edmondson, "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly* (1999); later popularized via Google's Project Aristotle research.
[^c5-boundary]: The sociological term is a boundary object — an artifact "plastic enough to adapt to local needs but robust enough to maintain a common identity" across groups (Susan Leigh Star and James Griesemer, "Institutional Ecology, 'Translations' and Boundary Objects," *Social Studies of Science*, 1989).
[^c5-fowler]: Chad Fowler's Deletion Test poses the same question at the artifact layer — imagine deleting the implementation, then ask whether the knowledge survives or the code was the only place it lived. Same structure, applied to code instead of a spec document. Chad Fowler, "The Deletion Test," *Phoenix Architectures* (aicoding.leaflet.pub).
