<script>
  import {
    Compass,
    FolderKanban,
    Sparkles,
    NotebookPen,
    Send,
  } from "lucide-svelte";

  const navItems = [
    { icon: Compass, label: "Home", href: "/" },
    { icon: FolderKanban, label: "Work", href: "/#work" },
    { icon: Sparkles, label: "Lab", href: "/#lab" },
    { icon: NotebookPen, label: "Notes", href: "/blog" },
    { icon: Send, label: "Contact", href: "mailto:hello@example.com" },
  ];
</script>

<aside class="vertical-nav">
  <div class="nav-group">
    {#each navItems as item}
      <a href={item.href} class="nav-item" aria-label={item.label}>
        <svelte:component this={item.icon} size={22} strokeWidth={1.5} />
        <span class="tooltip">{item.label}</span>
      </a>
    {/each}
  </div>
</aside>

<style>
  .vertical-nav {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 50;
    border-right: 1px solid var(--surface-2);
    background: var(--surface-1);
    backdrop-filter: blur(12px);
  }

  .nav-group {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  .nav-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    cursor: pointer;
    text-decoration: none;
    color: var(--text-secondary);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    background: transparent;
  }

  .nav-item:hover {
    background: var(--surface-2);
    color: var(--text-primary);
    transform: scale(1.05);
  }

  .tooltip {
    position: absolute;
    left: 60px;
    background: var(--text-primary);
    color: var(--bg-color);
    padding: 0.4rem 0.6rem;
    border-radius: 6px;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-8px);
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .nav-item:hover .tooltip {
    opacity: 1;
    transform: translateX(0);
  }
</style>
