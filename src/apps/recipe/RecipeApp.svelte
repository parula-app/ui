{#if recipe }
  <RecipeDisplay {recipe} />
{/if}

<script lang="ts">
  import { Recipe } from "./Recipe";
  import RecipeDisplay from "./RecipeDisplay.svelte";

  export let intent: string;
  export let args: { [prop in string]: any };
  export let results: { any };

  $: recipe = results as unknown as Recipe;
  $: console.log("recipe", recipe);
</script>
