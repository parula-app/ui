<hbox>
  <button>{fromDate} <UnfoldMoreVertical size={24} /></button>
  <button>{toDate} <UnfoldMoreVertical size={24} /></button>
</hbox>

<script lang="ts">
  import UnfoldMoreVertical from "svelte-material-icons/UnfoldMoreVertical.svelte";
  export let fromDate: String;
  export let toDate: String;
</script>

<style>
  hbox {
    gap: 1px;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    background-color: #ccc;
    overflow: hidden;
    width: fit-content;
  }
  hbox button {
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: white
  }
</style>