<script>
  import { siteConfig } from "$lib/config";
  import StickyHeader from "./StickyHeader.svelte";

  const { reading, listening, speaking } = siteConfig.interests;
</script>

<div class="interests-wrapper" style="position: relative;">
  <!-- BOOKS SECTION -->
  <section class="interest-section">
    <StickyHeader id="lab" title="Reading" compact />
    <div class="bento books-bento">
      {#each reading as book}
        <div class="bento-item" class:featured={book.featured}>
          <img
            src={book.image}
            alt={book.title}
            class="item-bg"
            loading="lazy"
          />
          <div class="item-overlay"></div>
          <div class="item-content">
            <span class="item-title">{book.title}</span>
            <span class="item-take">{book.take}</span>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- MUSIC SECTION -->
  <section class="interest-section">
    <StickyHeader title="Listening" compact />
    <div class="bento music-bento">
      {#each listening as item}
        <div class="bento-item" class:featured={item.featured}>
          <img
            src={item.image}
            alt={item.track}
            class="item-bg"
            loading="lazy"
          />
          <div class="item-overlay"></div>
          <div class="item-content">
            <span class="item-title">{item.track}</span>
            <span class="item-sub">{item.artist}</span>
            <span class="item-take">{item.take}</span>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- TALKS SECTION -->
  <section class="interest-section">
    <StickyHeader title="Speaking" compact />
    <div class="bento talks-bento">
      {#each speaking as talk}
        <div class="bento-item" class:featured={talk.featured}>
          <img
            src={talk.image}
            alt={talk.title}
            class="item-bg"
            loading="lazy"
          />
          <div class="item-overlay"></div>
          <div class="item-content">
            <span class="item-title">{talk.title}</span>
            <span class="item-sub">{talk.event}</span>
            <span class="item-take">{talk.take}</span>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- WATCHING SECTION -->
  <!-- <section class="interest-section">
    <StickyHeader title="Watching" compact />
    <div class="bento watch-bento">
      {#each watching as item}
        <div
          class="bento-item"
          class:featured={item.featured}
          data-type={item.type}
        >
          <img
            src={item.image}
            alt={item.title}
            class="item-bg"
            loading="lazy"
          />
          <div class="item-overlay"></div>
          <div class="item-content">
            <span class="item-title">{item.title}</span>
            <span class="item-type">{item.type}</span>
            <span class="item-take">{item.take}</span>
          </div>
        </div>
      {/each}
    </div>
  </section> -->
</div>

<style>
  .interests-wrapper {
    padding: 4rem 2rem 6rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .interest-section {
    margin-bottom: 4rem;
  }

  .interest-section:last-child {
    margin-bottom: 0;
  }

  .section-label {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-secondary);
    margin: 0 0 1.25rem 0;
  }

  /* Base Bento Grid */
  .bento {
    display: grid;
    gap: 0.75rem;
  }

  .bento-item {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    min-height: 120px;
  }

  .item-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .item-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
    transition: background 0.3s ease;
  }

  .item-content {
    position: relative;
    z-index: 1;
    height: 100%;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .item-title {
    font-size: 1rem;
    font-weight: 600;
    color: white;
    line-height: 1.3;
  }

  .item-sub {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 0.2rem;
  }

  .item-type {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 0.25rem;
  }

  /* Personal take - hidden by default, shows on hover */
  .item-take {
    display: block;
    font-size: 0.8rem;
    font-style: italic;
    color: var(--accent-3);
    margin-top: 0.5rem;
    opacity: 0;
    transform: translateY(8px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Hover state */
  .bento-item:hover .item-bg {
    transform: scale(1.08);
  }

  .bento-item:hover .item-overlay {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.6) 60%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }

  .bento-item:hover .item-take {
    opacity: 1;
    transform: translateY(0);
  }

  /* Featured items */
  .bento-item.featured {
    min-height: 180px;
  }

  .bento-item.featured .item-title {
    font-size: 1.25rem;
  }

  /* BOOKS: 3-column with featured spanning 2 */
  .books-bento {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
  }

  .books-bento .bento-item.featured {
    grid-column: span 2;
    grid-row: span 2;
  }

  /* MUSIC: Asymmetric 3-column */
  .music-bento {
    grid-template-columns: 1.2fr 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
  }

  .music-bento .bento-item.featured {
    grid-row: span 2;
  }

  /* TALKS: Wide emphasis */
  .talks-bento {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(2, 1fr);
  }

  .talks-bento .bento-item.featured {
    grid-row: span 2;
  }

  /* WATCHING: Masonry-ish */
  .watch-bento {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
  }

  .watch-bento .bento-item.featured {
    grid-column: span 2;
  }

  /* Responsive */
  @media (max-width: 640px) {
    .books-bento,
    .music-bento,
    .talks-bento,
    .watch-bento {
      grid-template-columns: 1fr 1fr;
    }

    .books-bento .bento-item.featured,
    .music-bento .bento-item.featured,
    .talks-bento .bento-item.featured,
    .watch-bento .bento-item.featured {
      grid-column: span 2;
      grid-row: span 1;
    }

    .bento-item {
      min-height: 100px;
    }
  }
</style>
