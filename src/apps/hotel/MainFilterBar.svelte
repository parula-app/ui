<hbox>
  <DateRangePicker {fromDate} {toDate} />
  <AmountSelect value={1} />
</hbox>

<script lang="ts">
  import dayjs from "dayjs";
  import DateRangePicker from "../lib/date/DateRangePicker.svelte";
  import AmountSelect from "./AmountSelect.svelte";

  export let fromDate: Date = new Date();
  export let toDate: Date = dayjs(fromDate).add(7, "day").toDate();
</script>

<style>
  hbox {
    gap: 2rem;
  }
</style>