{#if recipe }
  <RecipeDisplay {recipe} />
{/if}

<script lang="ts">
  import { Recipe } from "./Recipe";
  import RecipeDisplay from "./RecipeDisplay.svelte";
  import type { Context } from "../../logic/chat/Context";

  export let context: Context;

  $: recipe = context?.results as unknown as Recipe;
  $: console.log("recipe", recipe);
</script>
