<hbox>
  <input type="number" min="0" max="99" step="1" bind:value />
  <vbox>
    <button class="up" on:click={() => value += 1}><ChevronUp size={16}/></button>
    <button class="down" on:click={() => value -= 1}><ChevronDown size={16}/></button>
  </vbox>
</hbox>

<script lang="ts">
  import  ChevronUp from "svelte-material-icons/ChevronUp.svelte";
  import  ChevronDown from "svelte-material-icons/ChevronDown.svelte";
  export let value: number;
</script>

<style>
  hbox {
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    overflow: hidden;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button{
    -webkit-appearance:none;
  }
  input {
    width: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    outline: none;
    border: none;
  }
  button {
    outline: none;
    border: none;
    flex-grow: 1;
    padding: 0 0.5rem;
    background: white;
  }

  button.up {
    padding-top: 0.25rem;
  }
</style>