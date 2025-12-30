<div class="grain"></div>

<style>
  .grain {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    /* 
      User-provided Grain Image.
      Served from static folder: /grain-bg.jpg
    */
    background-image: url("/grain-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    opacity: 0.15;
    mix-blend-mode: overlay;
  }
</style>
