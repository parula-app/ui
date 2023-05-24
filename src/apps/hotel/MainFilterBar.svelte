<hbox>
  <DateRangePicker fromDate="Wed, 10 May 2024" toDate="Wed, 17 May 2024" />
  <AmountSelect value={1} />
</hbox>

<script lang="ts">
  import DateRangePicker from "./DateRangePicker.svelte";
  import AmountSelect from "./AmountSelect.svelte";
</script>

<style>
  hbox {
    gap: 2rem;
  }
</style>