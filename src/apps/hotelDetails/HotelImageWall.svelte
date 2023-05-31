<grid>
  <img src="https://picsum.photos/200/300" alt="hotel image" class="heroImage" />
  <img src="https://picsum.photos/200/300" alt="hotel image" />
  <img src="https://picsum.photos/200/300" alt="hotel image" />
  <img src="https://picsum.photos/200/300" alt="hotel image" />
  <img src="https://picsum.photos/200/300" alt="hotel image" />
  <img src="https://picsum.photos/200/300" alt="hotel image" />
  <img src="https://picsum.photos/200/300" alt="hotel image" />
</grid>

<style>
  grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.5rem;
  }

  img {
    background-color: aliceblue;
    border-radius: 0.125rem;
    object-fit: cover;
    width: 100%;
    aspect-ratio: 5/3;
  }

  .heroImage {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    aspect-ratio: 10 / 6.1;
  }
  @media (width >= 880px) {
    grid {
      --cols: 4;
    }
  }
</style>