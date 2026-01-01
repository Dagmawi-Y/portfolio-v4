---
title: "The Art of Doing Less"
date: "2026-01-01"
description: "Why we overbuild, and how to stop."
category: "Engineering"
---

<script>
  import { Motion } from 'svelte-motion';
</script>

# The Art of Doing Less

I've noticed a pattern in how we build things lately. We start with a simple problem and somehow end up with a hundred dependencies and five different architectural layers before the first user even signs up.

We’re avoiding the hard work of making things small.

![The serenity of focus](https://images.unsplash.com/photo-1573403092240-26095e118918?q=80&w=1080&auto=format&fit=crop)

### One String is Enough

There’s a traditional instrument here called the Masenqo. It’s got one string. That’s it. It looks primitive, but in the hands of someone who knows what they’re doing, it can carry an entire room. It doesn't need a full orchestra to move people because the focus is entirely on the soul of that one note.

In music, specifically Ethio-jazz, everything is built on a five-note scale. It’s limited, but those constraints are exactly what make it a universe. You don't need twelve notes to express complex emotions. You just need to know what to do with the five you have.

**Engineering is exactly like this.** If your logic can’t survive on "one string," adding more frameworks or microservices won't fix it. It just makes the noise louder.

### The "Good Enough" Principle

Real engineering isn't about the most expensive tools. It's about solving the problem with exactly what you have on the table. If a piece of wire works as well as a sensor, use the wire.

Over-engineering is usually just fancy procrastination. We build for "scale" that might never come because we're afraid to face the reality of the product today.

<Motion initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} client:visible>

  <div style="padding: 2rem; border: 1px dashed var(--accent-2); border-radius: 16px; margin: 2rem 0; text-align: center; background: var(--surface-1);">
    <h4 style="margin-top: 0; color: var(--accent-2);">The Constraint Lemma</h4>
    <p style="font-size: 0.9rem; margin-bottom: 0;">If it works without a library, don't install one. If it works without a server, don't provision one.</p>
  </div>
</Motion>

### Stop Building for Ghosts

"What if we hit 10 million users?"
You don't have ten users yet. Stop building for ghosts. Build for the one person using it right now.

Simplicity isn't about being lazy. It’s about being incredibly focused. It's about having the discipline to say "no" to the shiny things that don't actually move the needle.

![Coffee ceremony - the art of patience](https://images.unsplash.com/photo-1630861413071-a424a4d6d155?q=80&w=1080&auto=format&fit=crop)

### Slow and Steady

There's an old saying about things moving slowly until the egg eventually walks on its own feet.

It means starting small. You start with the egg. You don't start with the farm. You focus on the one thing that needs to happen right now.

#### My Rules:

1. **Don't build it** until it's a problem.
2. **Don't import it** if you can write it yourself in ten minutes.
3. **If it needs a manual**, it's broken.

---

Keep it simple. Keep it real.

- D.
