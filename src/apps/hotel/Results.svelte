<grid>
  <vbox>
    {#each mockedHotels as hotel (hotel.id)}
       <Card {hotel} />
    {/each}
  </vbox>
  <Map />
</grid>

<script lang="ts">
  import Map from "./Map.svelte"; 
  import Card from "./Card.svelte";
  import { mockedHotels } from "./mockedHotels";
</script>

<style>
  grid {
    display: grid;
    grid-template-columns: minmax(370px, 505px) 1fr;
    gap: 1rem;
  }

  h3, p {
    margin: 0;
    padding: 0;
  }

  vbox {
    gap: 1rem;
  }
</style>