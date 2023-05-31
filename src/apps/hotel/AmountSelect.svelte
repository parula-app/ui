<hbox>
  <NumberInput {value} min={1} max={99} icon={People} />
</hbox>

<script lang="ts">
  import { NumberInput } from '@svelteuidev/core';
  import People from "svelte-material-icons/AccountMultiple.svelte";
  
  export let value: number;
</script>

<style>
  hbox {
    width: 6rem;
  }
</style>