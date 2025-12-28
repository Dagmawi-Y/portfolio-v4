<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import Interests from "$lib/components/Interests.svelte";
  import { siteConfig } from "$lib/config";

  let activeFilter = "All";

  const categories = [
    "All",
    ...new Set(siteConfig.projects.map((p) => p.category)),
  ];

  $: filteredProjects =
    activeFilter === "All"
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === activeFilter);

  $: projectTypes = [...new Set(filteredProjects.map((p) => p.type))].sort(
    (a: string, b: string) => {
      const order: Record<string, number> = { Work: 1, Personal: 2, Course: 3 };
      return (order[a] || 99) - (order[b] || 99);
    }
  );
</script>

<svelte:head>
  <title>{siteConfig.name} — {siteConfig.title}</title>
  <meta name="description" content={siteConfig.description} />
</svelte:head>

<main>
  <Hero />

  <section id="work" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Projects</h2>
        <p class="section-subtitle">Selected works and experiments</p>
      </div>

      <!-- Simple pill filters -->
      <div class="filters">
        {#each categories as cat}
          <button
            class="filter-pill"
            class:active={activeFilter === cat}
            on:click={() => (activeFilter = cat)}
          >
            {cat}
          </button>
        {/each}
      </div>

      <div class="projects-container">
        {#each projectTypes as type}
          <div class="type-group">
            <h3 class="type-label">{type}</h3>
            <div class="projects-list">
              {#each filteredProjects.filter((p) => p.type === type) as project, i (activeFilter + "-" + type + "-" + project.title)}
                <div class="project-wrapper">
                  <ProjectCard {project} index={i} />
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <div id="lab">
    <Interests />
  </div>
</main>

<style>
  .section {
    padding: 6rem 2rem;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.04em;
    color: var(--text-primary);
  }

  .section-subtitle {
    color: var(--text-secondary);
    font-size: 1rem;
    margin: 0;
    opacity: 0.8;
  }

  /* Simple pill filters */
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 4rem;
  }

  .filter-pill {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-family: inherit;
    border: 1px solid var(--surface-2);
    border-radius: 8px;
    background: var(--surface-1);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .filter-pill:hover {
    background: var(--surface-2);
    color: var(--text-primary);
  }

  .filter-pill.active {
    background: var(--text-primary);
    color: var(--bg-color);
    border-color: var(--text-primary);
  }

  /* Projects structure */
  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .type-group {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .type-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-secondary);
    opacity: 0.5;
    margin: 0;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--surface-2);
    width: fit-content;
    min-width: 60px;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .project-wrapper {
    animation: fadeSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 640px) {
    .section {
      padding: 4rem 1.5rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .projects-container {
      gap: 3rem;
    }
  }
</style>
