<vbox>
  <slot />
  {#if expanded}
    <slot name="details" />
  {/if}
  <button on:click={() => {expanded = !expanded}}>Show details</button>
</vbox>

<script lang="ts">
  export let expanded = false;
</script>

<style>
  vbox {
    gap: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    padding: 1rem;
  }

  button {
    width: fit-content;
    margin-left: auto;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 0.25rem;
    background: #20466A;
    color: white;
  }
</style>