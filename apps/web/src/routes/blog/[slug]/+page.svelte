<script lang="ts">
  import { onMount } from "svelte";
  import { Motion } from "svelte-motion";
  export let data;

  let scrollProgress = 0;

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    scrollProgress = (winScroll / height) * 100;
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };
</script>

<svelte:head>
  <title>{data.meta.title} — Brain Dump</title>
  <meta name="description" content={data.meta.description} />
</svelte:head>

<!-- Progress Bar -->
<div class="progress-wrap">
  <div class="progress-bar" style="width: {scrollProgress}%"></div>
</div>

<div class="post-layout">
  <nav class="post-nav">
    <Motion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      let:motion
    >
      <a href="/blog" class="back-link" use:motion>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg
        >
        Writing
      </a>
    </Motion>
  </nav>

  <article class="post-article">
    <header class="post-header">
      <Motion
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        let:motion
      >
        <div class="header-content" use:motion>
          <div class="post-meta">
            <span class="category">{data.meta.category || "Note"}</span>
            <span class="divider">/</span>
            <time datetime={data.meta.date}>{formatDate(data.meta.date)}</time>
          </div>
          <h1 class="post-title">{data.meta.title}</h1>
        </div>
      </Motion>
    </header>

    <Motion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      let:motion
    >
      <div class="post-content markdown-body" use:motion>
        <svelte:component this={data.content} />
      </div>
    </Motion>

    <footer class="post-footer">
      <div class="footer-line"></div>
      <div class="footer-info">
        <p>
          Thanks for reading. Thoughts? <a href="mailto:dagmawi@example.com"
            >Email</a
          >.
        </p>
        <div class="footer-nav">
          <a href="/blog" class="footer-back">All Entries</a>
        </div>
      </div>
    </footer>
  </article>
</div>

<style>
  /* Progress Bar */
  .progress-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: rgba(128, 128, 128, 0.1);
    z-index: 1000;
  }

  .progress-bar {
    height: 100%;
    background: var(--text-primary);
    width: 0%;
    transition: width 0.1s linear;
  }

  .post-layout {
    max-width: 100%;
    margin: 0 auto;
    padding: 6rem 1.5rem 8rem;
  }

  .post-nav {
    max-width: 680px;
    margin: 0 auto 4rem;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.2s;
  }

  .back-link:hover {
    color: var(--text-primary);
    transform: translateX(-4px);
  }

  .post-article {
    max-width: 680px;
    margin: 0 auto;
  }

  .post-header {
    margin-bottom: 4rem;
  }

  .post-meta {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: var(--text-secondary);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1.5rem;
    opacity: 0.6;
  }

  .category {
    color: var(--text-primary);
  }

  .divider {
    opacity: 0.2;
  }

  .post-title {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.04em;
    margin: 0;
    color: var(--text-primary);
  }

  /* Markdown Styles - Optimized for Readability */
  :global(.markdown-body) {
    font-size: 1.15rem;
    line-height: 1.75;
    color: var(--text-primary);
    opacity: 0.9;
  }

  :global(.markdown-body p) {
    margin-bottom: 1.75rem;
  }

  :global(.markdown-body h2) {
    font-size: 1.75rem;
    font-weight: 800;
    margin: 3.5rem 0 1.25rem;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  :global(.markdown-body h3) {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 2.5rem 0 1rem;
    color: var(--text-primary);
  }

  :global(.markdown-body pre) {
    background: var(--surface-1) !important;
    border: 1px solid var(--surface-2);
    border-radius: 12px;
    padding: 1.5rem;
    margin: 2.5rem 0;
    overflow-x: auto;
  }

  :global(.markdown-body code) {
    font-family: inherit;
    background: var(--surface-1);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
    color: var(--accent-1);
  }

  :global(.markdown-body blockquote) {
    margin: 3rem 0;
    padding: 0 0 0 1.5rem;
    border-left: 3px solid var(--text-primary);
    font-style: italic;
    color: var(--text-secondary);
    font-size: 1.25rem;
    line-height: 1.6;
  }

  :global(.markdown-body ul, .markdown-body ol) {
    margin-bottom: 2rem;
    padding-left: 1.5rem;
  }

  /* Footer */
  .post-footer {
    margin-top: 8rem;
    padding-top: 4rem;
  }

  .footer-line {
    width: 40px;
    height: 1px;
    background: var(--text-primary);
    margin-bottom: 3rem;
    opacity: 0.2;
  }

  .footer-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .footer-info p {
    font-size: 1rem;
    color: var(--text-secondary);
    margin: 0;
  }

  .footer-info a {
    color: var(--text-primary);
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .footer-back {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-primary);
    text-decoration: none !important;
  }

  @media (max-width: 768px) {
    .post-layout {
      padding: 4rem 1.25rem 6rem;
    }

    .post-title {
      font-size: 2.25rem;
    }

    :global(.markdown-body) {
      font-size: 1.1rem;
    }

    .footer-info {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
    }
  }
</style>
