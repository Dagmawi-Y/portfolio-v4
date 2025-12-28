<script>
  import { Motion } from "svelte-motion";
  import { ArrowUpRight } from "lucide-svelte";

  export let project;
  export let index = 0;
</script>

<Motion
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.05 }}
  let:motion
>
  <a href={project.link} class="card" use:motion>
    <div class="image-wrapper">
      <img src={project.image} alt={project.title} loading="lazy" />
      <div class="stats-badge">{project.stats}</div>
    </div>

    <div class="details">
      <div class="header">
        <div class="main-meta">
          <span class="category">{project.category}</span>
          <span class="dot">·</span>
          <span class="type">{project.type}</span>
        </div>
        <ArrowUpRight size={18} class="arrow" />
      </div>

      <h3 class="title">{project.title}</h3>
      <p class="description">{project.description}</p>

      <div class="tags">
        {#each project.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    </div>
  </a>
</Motion>

<style>
  .card {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 2rem;
    text-decoration: none;
    padding: 1.5rem;
    background: var(--surface-1);
    border: 1px solid var(--surface-2);
    border-radius: var(--radius-md);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .card:hover {
    border-color: var(--text-secondary);
    background: var(--surface-2);
    transform: translateY(-2px);
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 160px;
    border-radius: 8px;
    overflow: hidden;
    background: var(--surface-2);
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .card:hover .image-wrapper img {
    transform: scale(1.08);
  }

  .stats-badge {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    color: white;
    padding: 0.25rem 0.6rem;
    border-radius: 6px;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 1rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .main-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .category {
    color: var(--accent-2);
  }

  .dot {
    opacity: 0.2;
  }

  .type {
    color: var(--text-secondary);
    opacity: 0.8;
  }

  .arrow {
    color: var(--text-secondary);
    opacity: 0;
    transform: translate(-10px, 10px);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .card:hover .arrow {
    opacity: 1;
    transform: translate(0, 0);
    color: var(--text-primary);
  }

  .title {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-primary);
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .description {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0 0 1.25rem 0;
    max-width: 90%;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--text-secondary);
    background: rgba(128, 128, 128, 0.1);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.03);
  }

  @media (max-width: 768px) {
    .card {
      grid-template-columns: 1fr;
      gap: 1.25rem;
      padding: 1rem;
    }

    .image-wrapper {
      height: 180px;
    }

    .details {
      padding-right: 0;
    }

    .title {
      font-size: 1.25rem;
    }

    .arrow {
      display: none;
    }
  }
</style>
