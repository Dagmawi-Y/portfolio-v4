<script>
  import StickyHeader from "./StickyHeader.svelte";
  const books = [
    {
      title: "A Philosophy of Software Design",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
      take: "Changed how I think about complexity",
      featured: true,
    },
    {
      title: "Clean Code",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
      take: "A must-read classic",
    },
    {
      title: "Refactoring UI",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
      take: "Made me a better designer",
    },
    {
      title: "The Pragmatic Programmer",
      image:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=300&fit=crop",
      take: "Timeless wisdom",
    },
    {
      title: "Atomic Habits",
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=300&fit=crop",
      take: "Simple but effective",
    },
  ];

  const music = [
    {
      track: "Time",
      artist: "Hans Zimmer",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop",
      take: "Gets me in the zone every time",
      featured: true,
    },
    {
      track: "Digital Love",
      artist: "Daft Punk",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      take: "Pure nostalgia",
    },
    {
      track: "Reckoner",
      artist: "Radiohead",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
      take: "Hauntingly beautiful",
    },
    {
      track: "Midnight City",
      artist: "M83",
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
      take: "Late night coding vibes",
    },
  ];

  const talks = [
    {
      title: "The Future of Simplicity",
      event: "Svelte Summit",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      take: "My favorite talk to give",
      featured: true,
    },
    {
      title: "Local-First Matters",
      event: "DevConf",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
      take: "The future of apps",
    },
    {
      title: "Building for Scale",
      event: "React Conf",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
      take: "Lessons from failures",
    },
  ];

  // const watching = [
  //   {
  //     title: "Severance",
  //     type: "series",
  //     image:
  //       "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop",
  //     take: "Mind-bending masterpiece",
  //     featured: true,
  //   },
  //   {
  //     title: "The Bear",
  //     type: "series",
  //     image:
  //       "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
  //     take: "Beautiful chaos",
  //   },
  //   {
  //     title: "Arrival",
  //     type: "film",
  //     image:
  //       "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=300&fit=crop",
  //     take: "Sci-fi that makes you think",
  //   },
  //   {
  //     title: "Ex Machina",
  //     type: "film",
  //     image:
  //       "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
  //     take: "Unsettling perfection",
  //   },
  //   {
  //     title: "Shogun",
  //     type: "series",
  //     image:
  //       "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&h=300&fit=crop",
  //     take: "Epic storytelling",
  //   },
  // ];
</script>

<div class="interests-wrapper" style="position: relative;">
  <!-- BOOKS SECTION -->
  <section class="interest-section">
    <StickyHeader id="lab" title="Reading" compact />
    <div class="bento books-bento">
      {#each books as book}
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
      {#each music as item}
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
      {#each talks as talk}
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
