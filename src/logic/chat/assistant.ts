import { ArrayColl } from "svelte-collections";
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
  // TODO replace with Pia NLP
  // let { intent, args } = await this.intentParser.match(question.text);
  // return await this.intentParser.startIntent(intent, args);

  // dummy parser
  if (question.includes("time")) {
    return { response: "", app: "clock", appArgs: {} };
  }
  if (question.includes("hotel")) {
    const words = question.split(" ");
    const inPos = words.indexOf("in");
    let city: string = inPos ? words[inPos + 1] : null;
    return {
      response: "Here are some hotels" + (city ? " in " + city : ""), app: "hotel", appArgs: { city: city }
    };
  }
  return { response: "Why did you ask?", app: null, appArgs: {} }
}
