<hbox class="ingredient">
  <CheckCircle bind:checked={ingredient.done}>
    <hbox slot="label" class="label">
      <span class="value">{$ingredient.amount}</span>
      <span class="value">{$ingredient.unit}</span>
      <span class="value">{$ingredient.name}</span>
    </hbox>
  </CheckCircle>
  {#if !inCart}
    <button on:click={addToCart}><Cart /></button>
  {/if}
</hbox>

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
  .ingredient {
    align-items: center;
  }
  .value {
    margin-right: 0.4em;
  }
  button {
    border: none;
    margin-left: 1.5em;
  }
</style>
