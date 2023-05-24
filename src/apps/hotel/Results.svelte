<grid>
  <vbox>
    {#each mockedHotels as hotel (hotel.id)}
       <Card>
        <h3>{hotel.name}</h3>
        <p slot="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quod, non ut expedita dicta saepe? Reiciendis, quas amet id ipsum accusantium eligendi fugit, perspiciatis recusandae quibusdam eos incidunt! Minima, a!</p>
       </Card>
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
    grid-template-columns: minmax(320px, 505px) 1fr;
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