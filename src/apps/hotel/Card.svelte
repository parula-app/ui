<vbox>
  <CardHeader {hotel}>
    <button on:click={() => {expanded = !expanded}} slot="expandButton">
      {#if expanded}
        show less 
        <ChevronUp size={24} />
      {:else}
        show more
        <ChevronDown size={24} />
      {/if}
    </button>
  </CardHeader> 
  {#if expanded}
    <CardDetails {hotel} />
  {/if}
</vbox>

<script lang="ts">
  import CardHeader from "./CardHeader.svelte";
  import CardDetails from "./CardDetails.svelte";
  import ChevronUp from "svelte-material-icons/ChevronUp.svelte";
  import ChevronDown from "svelte-material-icons/ChevronDown.svelte";
  export let expanded = false;
  export let hotel: IHotel;
</script>

<style>
  vbox {
    gap: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    padding: 1rem;
  }

  button {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 0.25rem;
    background: #20466A;
    color: white;
  }
</style>