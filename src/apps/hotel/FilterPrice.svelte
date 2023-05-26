<script>
  import DoubleRangeSlider from "../lib/DoubleRangeSlider.svelte";
  let min = 25;
  let max = 250;
  let start = 25;
  let end = 180;
</script>

<vbox>
  <hbox>
    <span>Price</span>
    <span>{start}€ - {end}€</span>
  </hbox>
  <DoubleRangeSlider bind:start bind:end {min} {max} />
</vbox>

<style>
  hbox {
    gap: 1rem;
  }

  vbox {
    gap: 1.5rem;
    max-width: 18rem;
    padding: 1rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
  }
</style>