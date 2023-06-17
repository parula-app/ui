<hbox class="ingredient">
  <CheckCircle bind:checked={ingredient.done}>
    <hbox slot="label">
      <span class="value">{$ingredient.amount}</span>
      <span class="value">{$ingredient.unit}</span>
      <span class="value">{$ingredient.name}</span>
    </hbox>
  </CheckCircle>
</hbox>

<script lang="ts">
  import type { Ingredient } from "./Recipe";
  import CheckCircle from "../lib/CheckCircle.svelte";

  export let ingredient: Ingredient;
</script>

<style>
  .ingredient {
    align-items: start;
  }
  .value {
    margin-right: 0.4em;
  }
</style>
