import { Task, TODOList } from "../../apps/todo/Task";
import { allRecipes, loadRecipes } from "../../apps/recipe/RecipesDB";
import { getTime } from "../../utils/date";

export function nillyWillyParser(question: string): { response: string, app: string, appArgs: {}, results: any } {
  // dummy parser
  const words = question.split(" ");
  const lowercase = question.toLowerCase().split(" ");
  if (lowercase.includes("time")) {
    return { response: "", app: "clock", appArgs: {}, results: null };
  }
  if (lowercase.includes("hotel") || lowercase.includes("hotels")) {
    const inPos = lowercase.indexOf("in");
    let city: string = inPos >= 0 ? words[inPos + 1] : null;
    return {
      response: `Here are some hotels${city ? " in " + city : ""}`, app: "hotel", appArgs: { city: city }, results: null
    };
  }
  if (lowercase.includes("todo") || lowercase.includes("list")) {
    let inPos = lowercase.indexOf("add");
    if (inPos < 0) {
      inPos = lowercase.indexOf("put");
    }
    let task: string = inPos >= 0 ? words[inPos + 1] : null;
    if (task) {
      TODOList.add(new Task(task));
      return {
        response: `I've added ${task} to your TODO list`, app: "todo", appArgs: { task: task }, results: TODOList
      };
    } else {
      return { response: `This is on your TODO list:`, app: "todo", appArgs: {}, results: null };
    }
  }
  if (lowercase.includes("cook") || lowercase.includes("meal")) {
    let inPos = lowercase.indexOf("cook");
    if (inPos < 0) {
      inPos = lowercase.indexOf("meal");
    }
    let meal: string = inPos >= 0 ? words[inPos + 1] : null;
    if (meal) {
      let recipe = allRecipes.find(r => r.name.toLowerCase().includes(meal) || r.description.toLowerCase().includes(meal));
      if (!recipe) {
        return { response: "Sorry, I don't know how to prepare this meal.", app: null, appArgs: {}, results: null }
      }
      recipe = recipe.newPreparation(recipe.servings);
      return {
        response: `How to prepare ${recipe.name}`, app: "recipe", appArgs: {}, results: recipe,
      };
    }
  }
  if (lowercase.includes("remind") || lowercase.includes("reminder")) {
    let seconds = getTime(question.toLowerCase());
    if (seconds) {
      return {
        response: `Setting timer for ${seconds / 60} minutes from now`, app: "timer", appArgs: { seconds: seconds }, results: null
      };
    }
  }
  return { response: "Why did you ask?", app: null, appArgs: {}, results: null }
}
