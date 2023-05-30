<grid>
  {#each mockedData as item (item.id)}
    <Card src={item.src} alt={item.alt} prompt={item.prompt} />
  {/each}
</grid>

<script lang="ts">
  import Card from "./Card.svelte";

  import { mockedData } from "./data";
</script>

<style>
  grid   {
    --cols: auto-fit;
    display: grid;
    grid-template-columns: repeat(var(--cols), 200px);
    gap: 1rem;
    justify-content: center;
  }
  @media (width >= 880px) {
    grid {
      --cols: 4;
    }
  }
</style>
