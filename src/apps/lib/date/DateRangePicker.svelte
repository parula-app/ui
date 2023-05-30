<script lang="ts">
  import DatePicker from "./DatePicker.svelte";

  export let fromDate: Date;
  export let toDate: Date;
</script>

<hbox>
  <DatePicker class="left" bind:value={fromDate} />
  <DatePicker class="right" bind:value={toDate} />
</hbox>

<style>
  hbox {
    gap: 1px;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    background-color: #ccc;
    width: fit-content;
  }

  :global(.dateInput .left input) {
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
  }

  :global(.dateInput .right input) {
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
  }
</style>