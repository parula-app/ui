import { Task, TODOList } from "../../apps/todo/Task";
import { allRecipes, loadRecipes } from "../../apps/recipe/RecipesDB";
import { getTime } from "../../utils/date";
import { Context } from "./Context";

export function nillyWillyParser(question: string): Context {
  // dummy parser
  const words = question.split(" ");
  const lowercase = question.toLowerCase().split(" ");
  let context = new Context();
  if (lowercase.includes("time")) {
    context.app = "clock";
    context.resultText = "";
    return context;
  }
  if (lowercase.includes("hotel") || lowercase.includes("hotels")) {
    const inPos = lowercase.indexOf("in");
    let city: string = inPos >= 0 ? words[inPos + 1] : null;
    context.app = "hotel";
    context.resultText = `Here are some hotels${city ? " in " + city : ""}`;
    context.args = { city: city };
    return context;
  }
  if (lowercase.includes("todo") || lowercase.includes("list")) {
    let inPos = lowercase.indexOf("add");
    if (inPos < 0) {
      inPos = lowercase.indexOf("put");
    }
    let task: string = inPos >= 0 ? words[inPos + 1] : null;
    context.app = "todolist";
    context.results = TODOList;
    if (task) {
      TODOList.add(new Task(task));
      context.resultText = `I've added ${task} to your TODO list`;
      context.args = { task: task };
      return context;
    } else {
      context.resultText = `This is on your TODO list:`;
      return context;
    }
  }
  if (lowercase.includes("cook") || lowercase.includes("meal")) {
    let inPos = lowercase.indexOf("cook");
    if (inPos < 0) {
      inPos = lowercase.indexOf("meal");
    }
    let meal: string = inPos >= 0 ? words[inPos + 1] : null;
    if (meal) {
      let recipe = allRecipes.find(r => r.name.toLowerCase().includes(meal) || r.description?.toLowerCase().includes(meal));
      if (!recipe) {
        context.resultText = "Sorry, I don't know how to prepare this meal.";
        return context;
      }
      recipe = recipe.newPreparation(recipe.servings);
      context.app = "recipe";
      context.results = recipe;
      context.resultText = `How to prepare ${recipe.name}`;
      return context;
    }
  }
  if (lowercase.includes("remind") || lowercase.includes("reminder")) {
    let seconds = getTime(question.toLowerCase());
    if (seconds) {
      context.app = "timer";
      context.resultText = `Setting timer for ${seconds / 60} minutes from now`;
      context.args = { seconds: seconds };
      return context;
    };
  }
  context.resultText = "Why did you ask?";
  return context;
}
