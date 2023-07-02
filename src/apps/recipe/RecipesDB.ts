import { CookingStep, Ingredient, Recipe } from "./Recipe";
import { getTime, wordToNumber } from "../../utils/date";
import { ArrayColl } from "svelte-collections";
import csvParser from "csvtojson";
import axios from "axios";

export const allRecipes = new ArrayColl<Recipe>();

/** Takes 160 ms for 7000 recipes */
export async function loadRecipes(): Promise<ArrayColl<Recipe>> {
  const response = await axios.get("data/recipes.csv");
  const json = await csvParser().fromString(response.data);
  for (let fields of json) {
    try {
      let name = fields.recipe_name;
      let recipe = new Recipe(name);
      let ingredientsStrs: string[] = fields.ingredients?.split(", ");
      let ingredient: Ingredient;
      for (let ingredientStr of ingredientsStrs) {
        let ingredientFields = ingredientStr.split(" ");
        let amount = wordToNumber(ingredientFields[0]);
        if (!amount && ingredient) { // TODO
          ingredient.name += ", " + ingredientStr;
          continue;
        }
        ingredient = new Ingredient();
        ingredient.amount = amount;
        ingredient.unit = ingredientFields[1];
        ingredient.name = ingredientFields.slice(2).join(" ");
        recipe.ingredients.add(ingredient);
      }
      let stepsStrs = fields.directions?.split(". ");
      for (let stepStr of stepsStrs) {
        let step = new CookingStep();
        step.description = stepStr;
        parseStep(step);
        recipe.steps.add(step);
      }
      let pic = fields.img_src;
      if (pic) {
        recipe.pictures.add(pic);
      }
      recipe.servings = parseInt(fields.servings);
      allRecipes.add(recipe);
    } catch (ex) {
      console.log("Failed to parse recipe:", fields);
      console.error(ex);
    }
  }
  return allRecipes;
};

function parseStep(step: CookingStep) {
  step.duration = getTime(step.description);
}
