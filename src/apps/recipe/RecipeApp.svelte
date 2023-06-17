<RecipeDisplay recipe={args.recipe} />

<script lang="ts">
  import type { Recipe } from "./Recipe";
  import RecipeDisplay from "./RecipeDisplay.svelte";

  export let args: { recipe: Recipe };
</script>
