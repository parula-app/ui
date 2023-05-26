<script>
  import DoubleRangeSlider from "../lib/DoubleRangeSlider.svelte";
  let min = 25;
  let max = 80;
  let start = 30;
  let end = 50;
</script>

<vbox>
  <hbox>
    <span>Price</span>
    <span>{start}€ - {end}€</span>
  </hbox>
  <DoubleRangeSlider bind:start bind:end {min} {max} />
</vbox>

<style>
  vbox, hbox {
    gap: 1rem;
  }
</style>