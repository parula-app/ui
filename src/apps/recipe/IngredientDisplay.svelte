<CheckCircle bind:checked={ingredient.done} />
<span class="value name">{$ingredient.name}</span>
{#if !inCart}
  <button on:click={addToCart}><Cart /></button>
{:else}
  <hbox />
{/if}
<span class="value amount">{$ingredient.amount}</span>
<span class="value unit">{$ingredient.unit}</span>

<script lang="ts">
  import type { Ingredient } from "./Recipe";
  import { TODOList, Task } from "../todo/Task";
  import CheckCircle from "../lib/CheckCircle.svelte";
  import Cart from "svelte-material-icons/CartArrowDown.svelte";

  export let ingredient: Ingredient;

  $: inCart = $TODOList.find(task => task.name == ingredient.name);

  function addToCart() {
    TODOList.add(new Task(ingredient.name));
  }
</script>

<style>
  .value {
    margin-right: 0.4em;
  }
  .name {
    max-width: 40em;
    margin-left: 4px;
  }
  button {
    border: none;
    margin-top: 3pt;
    margin-right: 8px;
  }
</style>
