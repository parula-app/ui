import { ArrayColl } from "svelte-collections";
import { Task, TODOList } from "../../apps/todo/Task";
import { allRecipes, loadRecipes } from "../../apps/recipe/RecipesDB";
import { Person } from "../abstract/Person";
import { ParulaMessage } from "./ParulaMessage";
import { connect } from "./ContextListener";
import { nillyWillyParser } from "./NillyWillyParser";

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
      const { response, app, appArgs, results } = nillyWillyParser(question.text);
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
      answer.results = results;
      messages.push(answer);
    });

    connect((contextJSON: any) => {
      const answer = new ParulaMessage();
      answer.contact = parula;
      answer.outgoing = false;
      answer.text = contextJSON.resultText;
      answer.html = contextJSON.resultText;
      answer.app = contextJSON.app;
      answer.appArgs = contextJSON.args;
      answer.results = contextJSON.results?.slice().pop(); // last result only, for now
      messages.push(answer);
    });
  }
}

export const parula = new Parula();
export const parulaClient = new ParulaClient();

export async function loadData() {
  await loadRecipes();
}
