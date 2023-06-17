import { CookingStep, Ingredient, Recipe } from "./Recipe";
import { ArrayColl } from "svelte-collections";
import csvParser from "csvtojson";
import axios from "axios";

export const allRecipes = new ArrayColl<Recipe>();

export async function loadRecipes(): Promise<ArrayColl<Recipe>> {
  const response = await axios.get("data/recipes.csv");
  const json = await csvParser().fromString(response.data);
  for (let fields of json) {
    try {
      let name = fields.recipe_name;
      let recipe = new Recipe(name);
      let ingredientsStrs: string[] = fields.ingredients?.split(", ");
      let ingredient: Ingredient;
      console.log("ingredientsStrs", ingredientsStrs);
      for (let ingredientStr of ingredientsStrs) {
        console.log("ingredientStr", ingredientStr);
        let ingredientFields = ingredientStr.split(" ");
        let amountStr: string = ingredientFields[0];
        console.log(amountStr);
        let amount = parseFloat(ingredientFields[0]);
        if (amountStr == "½") {
          amount = 0.5;
        } else if (amountStr == "⅓") {
          amount = 0.33;
        } else if (amountStr == "¼") {
          amount = 0.25;
        } else if (amountStr.includes("/")) {
          let fraction = amountStr.split("/");
          if (fraction.length == 2) {
            amount = parseFloat(fraction[0]) / parseFloat(fraction[1]);
          }
        }
        if (isNaN(amount)) {
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
        recipe.steps.add(step);
      }
      let pic = fields.img_src;
      if (pic) {
        recipe.pictures.add(pic);
      }
      recipe.servings = parseInt(fields.servings);
      allRecipes.add(recipe);
      return allRecipes;
    } catch (ex) {
      console.log("Failed to parse recipe:", fields);
      console.error(ex);
    }
  }
  return allRecipes;
};
