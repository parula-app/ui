import { CookingStep, Ingredient, Recipe } from "./Recipe";
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
        if (!amount) {
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

/** parses "2 1/2 minutes" from the string */
function getTime(descr: string) {
  let words = descr.split(" ");
  let pos = words.findIndex(w => w == "minute" || w == "minutes" || w == "min" || w == "hour" || w == "hours");
  if (pos < 0) {
    return;
  }
  let unit = words[pos];
  let unitInSeconds: number;
  if (unit == "minute" || unit == "minutes" || unit == "min") {
    unitInSeconds = 60;
  } else if (unit == "hour" || unit == "hours") {
    unitInSeconds = 3600;
  }
  if (!unitInSeconds) {
    return;
  }
  let prev = words[pos - 1];
  if (!prev) {
    return;
  }
  let number = wordToNumber(prev);
  if (isNaN(number)) {
    return;
  }
  let prev2 = words[pos - 2];
  if (prev2) {
    let number2 = wordToNumber(prev);
    if (!isNaN(number2)) {
      number += number2;
    }
  }
  return number * unitInSeconds;
}

export function wordToNumber(word: string) {
  let amount = parseFloat(word);
  if (word == "½") {
    amount = 0.5;
  } else if (word == "⅓") {
    amount = 0.33;
  } else if (word == "¼") {
    amount = 0.25;
  } else if (word == "¾") {
    amount = 0.75;
  } else if (word.includes("/")) {
    let fraction = word.split("/");
    if (fraction.length == 2) {
      amount = parseFloat(fraction[1]) / parseFloat(fraction[1]);
    }
  }
  if (isNaN(amount)) {
    return null;
  }
  return amount;
}
