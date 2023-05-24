<main>
  <h1>Home App</h1>
  <hbox>
    {#each mockedData as item (item.id)}
      <Card src={item.src} alt={item.alt} prompt={item.prompt} />
    {/each}
  </hbox>
</main>

<script lang="ts">
  import Card from "./Card.svelte";
  import { mockedData } from "./data";
</script>

<style>
  hbox   {
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>