<script>
  import { siteConfig } from "$lib/config";
  import { ArrowDown, Github, Linkedin, Twitter } from "lucide-svelte";
</script>

<section class="hero">
  <div class="content">
    <!-- Simple, honest intro -->
    <p class="greeting">Hey, I'm</p>

    <h1 class="name">Dagmawi</h1>

    <p class="tagline">
      I write code that actually works.
      <span class="muted">Most of the time.</span>
    </p>

    <div class="bio">
      <p>
        Building things on the internet since 2018. Currently obsessed with
        making apps feel <em>fast</em> and look <em>good</em>.
      </p>
      <p>
        When I'm not coding, I'm probably reading, arguing about fonts, or
        making coffee I'll forget to drink.
      </p>
    </div>

    <!-- Simple social links -->
    <div class="socials">
      <a
        href={siteConfig.socials.github}
        class="social-link"
        aria-label="GitHub"
      >
        <Github size={20} />
      </a>
      <a
        href={siteConfig.socials.twitter}
        class="social-link"
        aria-label="Twitter"
      >
        <Twitter size={20} />
      </a>
      <a
        href={siteConfig.socials.linkedin}
        class="social-link"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
    </div>

    <!-- Scroll hint -->
    <a href="#work" class="scroll-hint">
      <span>See my work</span>
      <ArrowDown size={16} />
    </a>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    position: relative;
  }

  .content {
    max-width: 600px;
    position: relative;
    z-index: 1;
  }

  .greeting {
    font-size: 1rem;
    color: var(--text-secondary);
    margin: 0 0 0.5rem 0;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .name {
    font-size: clamp(3.5rem, 10vw, 6rem);
    font-weight: 900;
    margin: 0;
    line-height: 1;
    letter-spacing: -0.05em;
    color: var(--text-primary);
  }

  .tagline {
    font-size: 1.25rem;
    margin: 1.5rem 0 0 0;
    font-weight: 500;
    color: var(--text-primary);
  }

  .muted {
    color: var(--text-secondary);
    font-weight: 400;
  }

  .bio {
    margin-top: 2rem;
    line-height: 1.6;
    color: var(--text-secondary);
    font-size: 1rem;
    max-width: 500px;
  }

  .bio p {
    margin: 0 0 1rem 0;
  }

  .bio em {
    color: var(--text-primary);
    font-style: normal;
    font-weight: 600;
  }

  .socials {
    display: flex;
    gap: 0.75rem;
    margin-top: 2.5rem;
  }

  .social-link {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    background: var(--surface-1);
    border: 1px solid var(--surface-2);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .social-link:hover {
    color: var(--text-primary);
    background: var(--surface-2);
    transform: translateY(-2px);
  }

  .scroll-hint {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 4rem;
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.6;
    transition: all 0.2s;
  }

  .scroll-hint:hover {
    opacity: 1;
    color: var(--text-primary);
  }

  @media (max-width: 768px) {
    .content {
      text-align: left;
    }
    .socials {
      justify-content: flex-start;
    }
  }
</style>
