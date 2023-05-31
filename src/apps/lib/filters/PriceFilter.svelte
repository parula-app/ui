<script>
  import FilterButton from "./FilterButton.svelte";
  import DoubleRangeSlider from "../DoubleRangeSlider.svelte";
  
  let min = 25;
  let max = 250;
  let start = 25;
  let end = 180;

</script>
<FilterButton>
  <b slot="icon">€ {end + ' <'}</b> 
  <svelte:fragment slot="label">
    Price
  </svelte:fragment>
  <svelte:fragment slot="settings">
    <vbox>
      <hbox>
        <span>Price</span>
        <span>{start}€ - {end}€</span>
      </hbox>
      <DoubleRangeSlider bind:start bind:end {min} {max} />
    </vbox>
  </svelte:fragment>
</FilterButton>

<style>
  hbox {
    gap: 1rem;
  }

  b {
    line-height: 2rem;
  }

  vbox {
    gap: 1.5rem;
    width: 12rem;
    max-width: 18rem;
  }
</style>