<grid>
  {#each mockedData as item (item.id)}
    <SampleCard src={item.src} alt={item.alt} prompt={item.prompt} />
  {/each}
</grid>

<script lang="ts">
  /* This component is not currently used.
  Instead, HomeApp addSamples() adds the samples as chat messages,
  which then indirectly (va MessageList -> ParulaMessageDisplay -> AppLoad)
  goes to SampleCard */

  import SampleCard from "./SampleCard.svelte";

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
