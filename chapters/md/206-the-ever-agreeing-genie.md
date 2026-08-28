# The Ever-Agreeing Genie

*Kent Beck calls his AI pair a genie: it grants wishes without judgment, exactly what you asked for, whether or not it is what you needed.[^c6-genie] The danger was never the genie. It was the wish.*

*If a team builds understanding together, what keeps it honest?*

I'm building a demo for my next talk on JoustMania again: OpenTelemetry and OpenFeature wired together into what I'm calling an agentic nervous system, a game that runs its own experiments over time and tracks what happened.

I got it working and watched it run.

And right behind the working demo came the doubt. Is this worth building, or does a framework already exist that does this better? Observability data is what the system already tells you about itself while it runs, so is it actually a sound foundation for the agent's experiments, or a convenient one I've talked myself into? I don't know which. The talk isn't even accepted yet. Nobody has seen it.

I research the answers with AI, and I notice what that research doesn't give me. It's fluent inside the architecture I hand it: ask whether the design is sound and it reasons about the design I described. Ask whether something already solves this and it searches for the thing I named, not the thing I didn't know to look for.

So I have a system that works, and a talk that might never get a stage. Either way, I still don't know if the shape of it is right.

---

There are four things you don't get from an AI, four things only another person can provide.

The first is *weighted validation*. When someone with their own hard-won experience, their own perspective, their own reasons to disagree, looks at what you're building and says "yes, that's right," it changes something, because they're independent of your framing. Their agreement costs them something: they considered it and chose to agree.

Someone who has built observability pipelines telling me the foundation holds would settle something the model's agreement can't.

> AI agreement is cheap. Human agreement from the right person is not.

The second is scope judgment. Am I reaching too high or not high enough? Is an agentic nervous system too ambitious for a conference demo, or not ambitious enough to deserve a stage? I can't see that from inside it. An AI will help a person execute whatever direction they've chosen. That takes someone who has seen both failure modes: the plan that collapsed under its own weight and the one that never got anywhere, and can recognize, from the outside, which one the work is heading toward.

> The agent will hold any direction. It can't tell you yours is wrong.

The third is the unknown unknown. The tool no one in the room is aware of. The approach that would make everything simpler but hasn't been encountered. If a framework already does what I built over the demo, the model and I are both searching for a name I don't know.

AI can surface unknown unknowns within the space it has been pointed at. Ask it "what am I missing here" and it will often find something useful. The harder gap is context-specific: the thing someone with direct experience of the situation would see that neither you nor the model would think to name. That requires someone looking in from outside the framing.

> You can't prompt for what you don't know to name.

The fourth is teaching. This one has no JoustMania version. There is a difference between a thing being explained and a thing being taught. AI explains well. It can walk a person through a concept, surface the relevant literature, answer follow-up questions patiently. But teaching requires someone who recognizes when the learner doesn't know something yet and can hold them through that state until the understanding arrives. The scar tissue matters, and so does the presence of someone who notices they're there and knows what to do about it.

> Research is a substitute for teaching, slower and lonelier.

---

The room is where the first three happen, before the agent runs.

The distributed async team loses these things first. The timezone gap, the Kanban board, the scoping documents that arrive as finished artifacts, all of it slowly drains the moments where weighted validation happens, where someone challenges the scope, where an unknown unknown gets surfaced by someone who happened to know the thing no one else did.

And AI accelerates the drain through usefulness. The tool is faster, always available, never in a meeting, so the maker stops reaching for the person and starts reaching for the tool.

Until you have a working demo and no stage to test it against, and the question of whether the shape is right sits with you in a way it wouldn't if someone else had checked the architecture first.

---

Another person can provide all four, but a person isn't a structure. The structural answer is the team.

This isn't only the solo builder's problem. The same gap opened on a team a few chapters back, where the junior catching what the agent and I had both stopped seeing was supplying exactly this, a check against reality that no prompt produced. Take that junior out of the room, let everyone review alone against their own prompt, and the agreement gets cheap again.

The team is the environment where independent judgment can happen, the place where judgment gets tested. Where someone pushes back from a starting point that isn't yours, the one place an agent, working from your framing, can never stand.

AI is frictionless by design. It finds a way to make an instinct seem reasonable. It smooths the edges off the direction already chosen. That's useful for execution and dangerous for judgment.

The team has friction by nature. Different experience, different exposure, different mental models of where the system is going and why. That friction is the mechanism. The reason the team's judgment is different from the AI's agreement is precisely that the team doesn't have to agree.

A form of friction can be engineered from an AI: build the context to argue back, load it with counterarguments, instruct it to push back. But the pushback is still downstream of the maker's framing. The AI can challenge stated assumptions. The unstated ones are invisible to it.[^c6-qwen]

Anthropic's own harness engineers supply the strongest version of the counterargument: a planner, a generator, and a skeptical evaluator, converging on a spec before anything runs.[^c6-harness] Scope challenged, validation adversarial by design, and a human in the loop reading the result; the room, the argument goes, automated down to one reader. Even the argument doesn't claim teaching.

Here is what the harness does and doesn't do. It produces a better artifact, and the claim was never about the artifact. The evaluator has nothing to lose by saying no, so its validation carries no weight in the only sense that matters.

Three roles, and that number is worth taking seriously. Without reading a word of this book, the harness converged on the same minimum a room needs to check itself.

But a planner, a generator, and their evaluator are still a converged trio, not three independent rooms. Each has to be tuned differently, or it grades itself generously. However differently they're tuned, all three are handed the same framing. Any of them can challenge the stated assumptions; the unstated ones are as invisible to all three as to one, and for the same reason. Questioning a framing takes a standpoint outside it, and there is no outside inside a context window.

Which leaves the human reading the converged result, and the Agora already named that seat: a team handed a perfectly written spec owns none of it, having inherited someone else's thinking. The harness is the strongest tool yet for writing the record. The theory still lives where it always did.

There is a name for what a convergence ritual invites, and the reader who knows it has been waiting for it: groupthink. Three people in a room can lock onto a shared error faster than one alone, because now the error has social endorsement.

The symmetry is worth naming, since it was just used against someone else's system: a room is handed one framing too, and the assumptions nobody in it states are invisible to all three for the same reason they're invisible to the planner, the generator, and the evaluator. If that objection lands against the harness, it lands here.

No control makes a room immune to it, but its convergence is never total: three people carrying three different decades that predate the team, not one shared tuning. Its composition can change too, a junior added, a lead rotated, someone pulled in from outside the domain. The trio's spread is bounded by how it was tuned; the room's is bounded by who gets let in, which is why consent instead of consensus and a lead who rotates exist in the first place, not to make the room immune, but because rooms converge.

![The harness's planner, generator, and evaluator are handed one framing; the room's three people bring three histories to the same spec.](figures/the-harness-and-the-room.png)

The alternative to imperfect controls is not immunity either: a developer alone with an agent is the most converged group of all, a groupthink of one with an amplifier. The room at least contains controls. The desk contains none.

None of the four is a capability gap. Capability gaps close; that's what model releases do. Wanting takes two things a release doesn't ship: a standpoint outside your framing, and something to lose by using it. Weighted validation, scope judgment, and the unknown unknown all need the first, and this chapter has already watched two attempts fail to manufacture it, the engineered pushback and the converged trio, both still working downstream of the maker's framing. Weighted validation needs the second too: an evaluator tuned to withhold agreement pays nothing for the withholding, while a person who says no carries the consequence of having said it. That's why the human doesn't move out of the loop as the model improves. We were never in it because we were better at something. We're in it because the loop is for us.

Understanding is only useful if it can be challenged. And the place where it gets challenged, by someone who doesn't have to agree, is the team.

> The friction is the point.

Three of the four keep your judgment honest while you build. Teaching does something the other three don't. It is how the judgment survives the person who has it, and it is the first thing the agent takes. So where does the next person learn to be the one who doesn't have to agree, when the tool is always the faster answer?

[^c6-genie]: Kent Beck named the metaphor first. See "Genie Wants to Leap," *Tidy First?* ([tidyfirst.substack.com/p/genie-wants-to-leap](https://tidyfirst.substack.com/p/genie-wants-to-leap)).
[^c6-qwen]: Alibaba's Qwen team makes the same point formally in "The Verification Horizon: No Silver Bullet for Coding Agent Rewards" (2026, [arxiv.org/abs/2606.26300](https://arxiv.org/abs/2606.26300)): every verifier is only a proxy for human intent, never the intent itself.
[^c6-harness]: Agents grading their own work reliably skew positive, and making a generator critical of its own output proved far less tractable than tuning a separate, skeptical evaluator, whose judgment, in turn, had to be calibrated against a human's. Notably, the harness also converged on a spec-first ritual: a planner scoping the work, then generator and evaluator negotiating what "done" looks like before any code is written. Prithvi Rajasekaran, "Harness Design for Long-Running Application Development" ([anthropic.com/engineering](https://anthropic.com/engineering), 24 March 2026).
