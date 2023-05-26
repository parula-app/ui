<script lang="ts">
  import CustomFilters from "./CustomFilters.svelte";
  import CustomFiltersSettings from "./CustomFiltersSettings.svelte";
</script>

<vbox>
  <CustomFilters />
  <CustomFiltersSettings />
</vbox>

<style>
  vbox {
    gap: 1rem;
  }
</style>