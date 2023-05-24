<vbox>
  <CardHeader {hotel} on:toggle={() => {expanded = !expanded}}/> 
  {#if expanded}
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quod, non ut expedita dicta saepe? Reiciendis, quas amet id ipsum accusantium eligendi fugit, perspiciatis recusandae quibusdam eos incidunt! Minima, a!</p>
    </div>
  {/if}
</vbox>

<script lang="ts">
  import CardHeader from "./CardHeader.svelte";
  export let expanded = false;
  export let hotel: IHotel;
</script>

<style>
  vbox {
    gap: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    padding: 1rem;
  }
</style>