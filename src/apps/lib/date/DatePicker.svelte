<div class="dateInput"> 
  <DateInput class={classes}  {value} {format}/>
  <UnfoldMoreVertical class="icon" size={24} />
</div>

<script lang="ts">
  import { DateInput } from 'date-picker-svelte'
  import UnfoldMoreVertical from "svelte-material-icons/UnfoldMoreVertical.svelte";

  let classes: string = '';
  export {classes as class};
  export let value: Date;
  export let format: string = 'dd.MM.yyyy';
</script>

<style>
  .dateInput {
    position: relative;
  }
  :global(.dateInput .icon) {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
  :global(.dateInput input) {
    padding: 1rem !important;
    border: none;
  }
  :global(.dateInput input:focus) {
    position: relative;
    z-index: 1;
  }
</style>