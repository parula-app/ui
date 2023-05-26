<vbox>
  <CustomFilters />
  <CustomFiltersSettings />
  <DoubleRangeSlider start={200} end={300} min={0} max={400}/>
</vbox>

<script lang="ts">
  import CustomFilters from "./CustomFilters.svelte";
  import CustomFiltersSettings from "./CustomFiltersSettings.svelte";
  import DoubleRangeSlider from "../lib/DoubleRangeSlider.svelte";
</script>

<style>
  vbox {
    gap: 1rem;
  }
</style>