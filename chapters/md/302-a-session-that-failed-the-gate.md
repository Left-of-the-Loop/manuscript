# Appendix C: A session that failed the gate {-}

Appendix B describes the ritual. This is one running, on a ticket from this book: JoustMania's player history, the wrong turn Appendix A could not put a clean number on, built in full and never merged.

Two warnings before it starts.

This is a reconstruction, not a transcript. The session never happened, which is exactly why the feature got built. I am writing the room I did not have, about a failure I already know the ending of, which is the most flattering possible position to write from. The test is not whether this room would have caught it. Of course it does; I built it to. The test is whether the questions it asks are the ones a room asks, and whether you have sat in a session where nobody asked them.

The second warning is that I have put three people in a room that had two. Me and a university friend, different schedules, both of us wanting the feature. The book's own floor is three, and the third seat here is the one that asks the question that ends the session. That is convenient. Take it with the appropriate suspicion, and notice that the convenience is the claim: a pair has no one who can see its framing from outside, and this is what that costs.

---

## The ticket as it arrived

*Remember how players have played before, and adapt the game over time.*

That is the whole ticket. It is a good idea, it is one sentence, and every person who read it understood something slightly different by it.

## Intent (10 minutes)

One person states the why, uninterrupted.

Returning players should find the game has learned something about them. Someone who plays aggressively gets a game tuned for that. Someone who has played ten times should not get the same experience as someone picking up a controller for the first time. The game gets to be a little different for each person over time.

The group's only job is to find where they disagree with it.

The first disagreement arrives on the word *returning*. Returning to what? To the same evening, the same party, the same living room six months later? Three people in the room, three different pictures, all of them reasonable, none of them stated in the ticket. Nobody has proposed a solution yet and the intent is already three intents. This is the friction being scheduled rather than hoped for, and it costs a few minutes of the ten.

## The walls (15 to 20 minutes)

Constraints, non-goals, blast radius.

**Must not change:** the joust detection loop. Motion thresholds, the accelerometer read, the thing that decides you moved too fast and you are out. It works, it is the game, and it is not what this ticket is about.

**Non-goals:** accounts, logins, profiles, leaderboards. Nothing that adds a step between picking up a controller and playing.

**Blast radius:** session lifecycle, whatever holds state between rounds, storage that has to survive a power cycle.

And then the constraint nobody wrote in the ticket, surfacing because the walls phase exists to surface it: a party game has no registration step. Not "we would prefer not to add one." There is no moment in the physical situation, six people, a living room, controllers coming out of a bag, where anyone would stop to identify themselves. Adding that step does not add friction to the game. It changes what the game is.

That constraint is now written down, out loud, in front of everyone. Hold onto it.

## The gaps (20 to 30 minutes)

The core, where the behavior gets written. The group asks the questions the agent will not.

*What happens when a player hands their controller to someone else mid-session?*

They do. Constantly. That is most of what happens at a party.

*What happens when the same controller gets picked up by a different person the next time the game runs?*

Also constantly. The controllers live in a bag.

*So how does the system know a player has returned?*

The room works at this one for a while, because it feels like it must have an answer. Pairing is per-controller and persists. Motion signature? People play differently when drunk, tired, or on a rug. Ask at the start? See the wall we just built.

The driver, who types only what the group says, tries to write the behavior sentence:

::: spec
When a player begins a round, the game loads that player's history and adjusts difficulty accordingly.
:::

And stops. Because *that player* has no referent. The system has a controller ID. It does not have a person, it has never had a person, and there is no cheap path from one to the other that survives the constraint on the wall.

A sentence the driver cannot write down is a sentence the agent cannot run with. That is the whole rule, and this is what it looks like when it fires.

What the room can write, once it stops trying to write the other thing:

::: spec
The system can attach state to a controller across rounds within a single power-on session.

It cannot attach state to a person, in any session, ever, without a registration step this spec has ruled out.
:::

Both true. Both writeable. Together they say the feature as scoped has no anchor.

## Read-back (10 minutes)

The driver reads the spec aloud, top to bottom. It takes less time than usual, because there is less of it than anyone expected an hour ago.

The lead asks each person by name: consent or objection.

Two consents. One objection, from the person who asked what *returning* meant: the intent as stated cannot be built under the constraints as stated, and everything downstream of that is us agreeing to build something we have not described.

Logged, not resolved.

## The gate (5 minutes)

**Intent stated.** Yes, and now visibly three intents wearing one sentence.

**Non-goals listed.** Yes.

**Edge cases answered or explicitly deferred.** *No.* The controller-handoff case is not an edge. It is the ordinary case, it has no answer, and deferring it defers the feature.

**No sentence a new team member would misread.** Not applicable to a spec that does not describe a buildable thing.

The gate fails. The ticket goes back. The agent does not run.

One session, inside the timebox. Nothing built. Several weeks of calendar time not spent.

## Open decisions

The honest section, which is the point of having it.

- **Is there a version of this that attaches to the controller rather than the person?** Owner: me. A controller that remembers its own last three rounds is a different feature, possibly a smaller and better one, and nobody in the room could say whether it is interesting.
- **What was the actual need?** Owner: the person who raised the objection. The ticket says *player history*. Nobody in the room could state the problem that solves.
- **Does the demo need adaptation at all, or does it need to look adaptive on stage?** Owner: me. Different question, different build, and it was never asked.

## What went back

The ticket came back a week later, reframed by the second open decision.

The need underneath was not player history. It was that the game feels identical on the tenth round, and a demo where nothing changes is a demo about nothing. Both of those are about *the session*, not about *the person*. State the need that way and the identity problem disappears, because there is nothing left that needs to know who is holding anything.

That version is smaller, it is buildable under every constraint on the wall, closer to what the talk was actually about, and it is the version a room reaches in an hour. Two people, heads down and enthusiastic, did not reach it in several weeks.

The gate failing is not the session going wrong. It is the session working. The ticket that goes back is cheaper than every ticket that goes through and should not have.

---

*One more time, because the arithmetic is the point: one session against the weeks Appendix A prices. The agent wrote it in an afternoon. That was never the expensive part.*
