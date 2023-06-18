  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <hbox class="check-button" class:checked on:click={toggle}>
    {#if checked}
      <Checked size={24} />
    {:else}
      <Unchecked size={24} />
    {/if}
    {#if label}
      <hbox class="name">{label}</hbox>
    {:else}
      <slot name="label" />
    {/if}
  </hbox>

<script lang="ts">
  import Checked from "svelte-material-icons/CheckCircleOutline.svelte";
  import Unchecked from "svelte-material-icons/CircleOutline.svelte";

  export let checked: boolean; /* in/out */
  export let label: string = null; /* optional */

  function toggle() {
    checked = !checked;
  }
</script>

<style>
  .check-button :global(svg) {
    margin-right: 7px;
    min-width: 24px;
    min-height: 24px;
  }
</style>
