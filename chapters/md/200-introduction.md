# Introduction {-}

This book is not what it looks like.

It looks like a book about AI: about agents, specs, workflows, and the changing shape of software development. Those things are in here. But they're not what the book is about.

What the book is about started with a university friend and 18 PlayStation Move controllers.

The two of us were building a KubeCon demo for a talk called "18 Bluetooth Controllers Walk Into a Bar." It was about observability and runtime configuration for JoustMania, an open-source party game where players jostle motion controllers until someone falls over. Complex execution: multiple Bluetooth adapters, battery-powered devices, sensors firing at 100Hz. When a player complains their controller "felt different," how do you find out what happened at 2 a.m. at a convention? We wanted to figure out what was actually happening while it was still happening.

An interesting problem, and two people who knew the domain and cared about the project.

Because we had different schedules, we just started hacking on our own. We both made progress. We moved fast.

And we never planned it together.

The knowledge gap opened quietly. Decisions got made that the other person didn't know about. Assumptions turned out not to be shared. Work that should have built on itself didn't fit. Not because either of us was wrong, but because we never built the shared picture before we started building the thing.

The fix wasn't better tools, a different framework, or a smarter approach to Bluetooth telemetry. What we'd skipped was the conversation.

Our gap took a week to surface. The same gap now opens in the time it takes an agent to answer.

AI gave every engineer a tool that makes starting to hack immediately feel productive. The agent is ready. The prompt is right there. Why stop to talk? The output comes streaming back, it looks right, the ticket will close. And somewhere in the space between all that individual motion, the understanding stops being shared.

Engineers who go heads-down with AI tools stop talking to each other. The output keeps coming, confidence stays high, and the errors accumulate quietly, until a teammate catches them, until production does, or until nobody does.

AI has this problem for a structural reason. A model generates with the same confidence whether the output is right or wrong. The checks that catch it, the tests, the linters, the code review, sit around the model, not inside it. Strip them away and nothing changes in the generation. No peer review. No colleague who reads it and says, "that's not how it works."

AI hallucination and team misalignment aren't the same mechanism, but they rhyme: both produce confident output that nobody is checking against shared intent.

The industry's response to AI has been, mostly, to go faster.

Add the tool. Ship more. Reduce the headcount that feels redundant when the agent can implement. Optimize the individual. Measure the output. Skip the room.

That's a familiar move. The industry has cut the deliberate conversation before, rationally, because the process it had was tedious and wasn't bringing value, and learned, sometimes painfully, that the conversation was the work. Extreme Programming (XP) understood what was at stake in the nineties.[^i-xp] Pair programming, mob programming, collective ownership: an entire practice built on the conviction that software development is fundamentally a social activity. The understanding built through collaboration was the point.

The industry moved on. Faster frameworks. Individual metrics. Optimized handoffs. The team became a coordination cost to minimize. Now, under the pressure of AI, we are rediscovering what XP already knew.

> AI erodes the incidental friction that used to produce shared understanding as a byproduct of the work. That makes shared understanding the scarce resource, and constructive friction the mechanism that protects and tests it.

Output got cheap faster than our ability to absorb it, and that is why this is happening now, at scale. The organizations that preserve the constructive kind will outperform those that optimize it away.

What gets cheap changes, but the direction the constraint travels does not.[^i-brooks] Agents are simply the largest instance of that move.

The argument unfolds in three parts, and each chapter asks one question, building on the answer before it.

The shift:

*The Curse of Sisyphus.* If implementation is the cheap part, where does the hard part go?

*The End of a Craft?* If the agent does the building, what's left that only a person can do?

*A Fool with a Tool is Still a Fool.* If judgment is the craft that's left, what does it catch that the tool can't?

*The Product Owner is Dead. Long Live Product Thinking.* If the team can catch the wrong shape, who catches the wrong ask?

The practice:

*The Agora.* If no one person owns the understanding, how does a team build it together?

*The Ever-Agreeing Genie.* If a team builds understanding together, what keeps it honest?

*The Alexandria Problem.* If the understanding holds today, how does it survive the people who leave?

The test:

*The Oracle.* If you can't see understanding, how do you know it's there?

*The Trireme.* If predictability is the proof, what kind of team produces it?

*The Astrolabe.* If one team can sustain it, how does it scale to many without thinning?

*The Forest and the Desert.* If the right structure holds understanding, what keeps it alive over time?

*The Phoenix.* If all of this is possible, what do you choose?

This is a practitioner's book. It doesn't claim to be the first to notice that teams matter or that shared understanding is valuable. Those ideas have lineage: Peter Naur's theory-building view,[^i-naur] XP, domain-driven design,[^i-ddd] collective code ownership, and an academic literature of their own.[^i-shared]

What's new is the gap: every current tool and framework for AI-assisted development solves alignment between one person and one agent. None of them address what happens when the spec needs to emerge from a room of people who don't yet share the same understanding.

The spec: what to build and why, held in common. Not a document.[^i-spec] This book is the argument for that layer: the human and social conditions that make any spec-first approach work.

The conversation that feels slower than prompting alone is doing something the prompt cannot do.

---

There is an absence that runs the length of the book. The failures in it happened, and I was there for all of them. The practice I propose has no comparable record, because nobody has been running it long enough to have one, and the session in Appendix C is one I reconstructed rather than one I sat in. The diagnosis is evidence. The prescription is a bet, and I would rather you took it knowing that.

If you feel like something is wrong but can't point to it, if the speed feels good and the output looks right but something is missing, this book was written for you.

We started hacking, and we never built the picture together.

This is the conversation we should have had first.

[^i-xp]: Kent Beck, *Extreme Programming Explained: Embrace Change* (Addison-Wesley, 1999).
[^i-brooks]: Fred Brooks made the general case in "No Silver Bullet: Essence and Accident in Software Engineering" (1986; reprinted in *The Mythical Man-Month*, anniversary edition, Addison-Wesley, 1995). The accidental complexity of software — the part tooling can remove — keeps falling, while the essential complexity of specifying and designing the conceptual construct does not. This book is an argument about what happens to the essential part when a very large amount of the accidental part disappears at once.
[^i-naur]: Peter Naur, "Programming as Theory Building" (1985; reprinted in *Computing: A Human Activity*, ACM Press/Addison-Wesley, 1992). Naur argued that a program is the theory its builders hold, that the theory cannot be fully captured in documentation, and that a program whose builders have dispersed is effectively dead.
[^i-ddd]: Eric Evans, *Domain-Driven Design: Tackling Complexity in the Heart of Software* (Addison-Wesley, 2003).
[^i-shared]: Martin Glinz and Samuel Fricker, "On Shared Understanding in Software Engineering: An Essay," *Computer Science — Research and Development* 30, nos. 3–4 (2015): 363–376.
[^i-spec]: Throughout this book, *spec* means this shared understanding. Where the formal sense is meant — a contract, like the OpenFeature specification — the full word is used.
