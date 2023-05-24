<grid>
  {#each features as feature (feature)}
     <hbox>
      <svelte:component this={featureMapping[feature.toLowerCase()].icon} size={16}/>
      <span>{featureMapping[feature.toLowerCase()].name}</span>
     </hbox>
  {/each}
</grid>

<script lang="ts">
  import { featureMapping } from "./FeatureMapping.ts";
  export let features: string[];
</script>

<style>
  grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.5rem;
    width: auto;
  }

  hbox {
    gap: 0.25rem;
    align-items: center;
  }

  span {
    font-size: 0.75rem;
  }
</style>