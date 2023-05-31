<hbox>
  <NumberInput {value} min={1} max={99} icon={PeopleIcon} />
</hbox>

<script lang="ts">
  import { NumberInput } from '@svelteuidev/core';
  import PeopleIcon from "../../icons/PersonIcon.svelte";
  
  export let value: number;
</script>

<style>
  hbox {
    width: 6rem;
  }
</style>