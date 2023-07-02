<vbox class="recipe">
  <header class="value">{$recipe.name}</header>
  <hbox class="pictures">
    {#each $recipe.pictures.each as url }
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src={url} class="picture" width={400} />
    {/each}
  </hbox>
  {#if $recipe.description}
    <div class="value">{$recipe.description}</div>
  {/if}
  <header>Ingredients</header>
  <vbox class="ingredients">
    {#each $recipe.ingredients.each as ingredient }
      <IngredientDisplay {ingredient} />
    {/each}
    <hbox class="servings">
      For <input type="number" bind:value={$recipe.servings} size={2} min={1} step={1} /> people
    </hbox>
  </vbox>
  <header>Preparation</header>
  <vbox class="preparation">
    {#each $recipe.steps.each as step }
      <StepDisplay {step} />
    {/each}
  </vbox>
</vbox>

<script lang="ts">
  import type { Recipe } from "./Recipe";
  import IngredientDisplay from "./IngredientDisplay.svelte";
  import StepDisplay from "./StepDisplay.svelte";

  export let recipe: Recipe;
</script>

<style>
  .recipe {
    align-items: start;
  }
  header {
    font-size: 150%;
    font-weight: bold;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  .ingredients {
    display: grid;
    grid-template-columns: auto 1fr auto auto auto;
    align-items: start;
  }
  .preparation {
    display: grid;
    grid-template-columns: auto auto 1fr;
    align-items: start;
  }
  .servings {
    margin-top: 0.5em;
    align-self: end;
    grid-column: 3 / span 3;
  }
  .servings input {
    margin: 0 0.5em;
  }
  img.picture {
    margin: 5px;
  }
</style>
