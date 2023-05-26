<script lang="ts">
  import CustomFilters from "./CustomFilters.svelte";
  import CustomFiltersSettings from "./CustomFiltersSettings.svelte";
  import FilterPrice from "./FilterPrice.svelte";
</script>

<vbox>
  <CustomFilters />
  <CustomFiltersSettings />
  <FilterPrice />
</vbox>

<style>
  vbox {
    gap: 1rem;
  }
</style>