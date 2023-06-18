import { ArrayColl } from "svelte-collections";
import { Task, TODOList } from "../../apps/todo/Task";
import { allRecipes, loadRecipes } from "../../apps/recipe/RecipesDB";
import { Person } from "../abstract/Person";
import { ParulaMessage } from "./ParulaMessage";
// import { Client } from 'pia/client/Client.js';

export let messages = new ArrayColl<ParulaMessage>();

class Parula extends Person {
  constructor() {
    super();
    this.id = "parula";
    this.name = "Parula";
    this.firstName = "Parula";
    this.lastName = "Digital Assistant";
    this.picture = "/logo/parula.svg";
  }
}

class ParulaClient {
  // class ParulaClient extends Client {
  constructor() {
    // super();
    messages.subscribe(async () => {
      const question = messages.get(messages.length - 1);
      if (!question || question.contact != parula || !question.outgoing) {
        return;
      }
      const { response, app, appArgs } = parulaParser(question.text);
      // TODO replace with Pia NLP
      // let { intent, args } = await this.intentParser.match(question.text);
      // return await this.intentParser.startIntent(intent, args);
      const answer = new ParulaMessage();
      answer.contact = parula;
      answer.outgoing = false;
      answer.text = response;
      answer.html = response;
      answer.app = app;
      answer.appArgs = appArgs;
      messages.push(answer);
    });
  }
}

export const parula = new Parula();
export const parulaClient = new ParulaClient();

function parulaParser(question: string): { response: string, app: string, appArgs: {} } {
  // dummy parser
  const words = question.split(" ");
  const lowercase = question.toLowerCase().split(" ");
  if (lowercase.includes("time")) {
    return { response: "", app: "clock", appArgs: {} };
  }
  if (lowercase.includes("hotel") || lowercase.includes("hotels")) {
    const inPos = lowercase.indexOf("in");
    let city: string = inPos >= 0 ? words[inPos + 1] : null;
    return {
      response: `Here are some hotels${city ? " in " + city : ""}`, app: "hotel", appArgs: { city: city }
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
        response: `I've added ${task} to your TODO list`, app: "todo", appArgs: { task: task }
      };
    } else {
      return { response: `This is on your TODO list:`, app: "todo", appArgs: {} };
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
        return { response: "Sorry, I don't know how to prepare this meal.", app: null, appArgs: {} }
      }
      recipe = recipe.newPreparation(recipe.servings);
      return {
        response: `How to prepare ${recipe.name}`, app: "recipe", appArgs: { recipe: recipe }
      };
    }
  }
  return { response: "Why did you ask?", app: null, appArgs: {} }
}

export async function loadData() {
  await loadRecipes();
}
