import { ArrayColl } from "svelte-collections";
import { loadRecipes } from "../../apps/recipe/RecipesDB";
import { Person } from "../abstract/Person";
import { ParulaMessage } from "./ParulaMessage";
import { connect } from "./ContextListener";
import { nillyWillyParser } from "./NillyWillyParser";
import { Context } from "./Context";
import axios from "axios";

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
      const answer = new ParulaMessage();
      answer.contact = parula;
      answer.outgoing = false;

      const context = nillyWillyParser(question.text);
      answer.html = answer.text = context.resultText;
      answer.context = context;

      /*
      try {
        const context = await askParula(question.text);
        answer.html = answer.text = context.resultText;
        answer.context = context;
      } catch (ex) {
        console.error(ex);
        answer.html = answer.text = ex.message;
      }
      */
      messages.push(answer);
    });

    connect((context: Context) => {
      const answer = new ParulaMessage();
      answer.contact = parula;
      answer.outgoing = false;
      answer.text = context.resultText;
      answer.html = context.resultText;
      answer.context = context;
      messages.push(answer);
    });
  }
}

export const parula = new Parula();
export const parulaClient = new ParulaClient();

export async function loadData() {
  await loadRecipes();
}

async function askParula(question: string): Promise<Context> {
  let queryJSON = {
    question: question,
  };
  const kPort = 12777;
  let queryResponse = await axios.put(`${window.location.protocol}//${window.location.hostname}:${kPort}/assistant/text`, queryJSON);
  let contextJSON = JSON.parse(queryResponse.data);
  if (contextJSON.errorMessage) {
    let ex = new Error(contextJSON.errorMessage);
    ex.code = contextJSON.errorCode;
    throw ex;
  }
  console.log("context JSON", contextJSON);
  return Context.fromJSON(contextJSON);
}
