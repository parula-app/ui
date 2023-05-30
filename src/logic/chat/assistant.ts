import { ArrayColl } from "svelte-collections";
import { Person } from "../abstract/Person";
import { ChatMessage } from "./Message";
// import { Client } from 'pia/client/Client.js';

export let messages = new ArrayColl<ChatMessage>();

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
      const question = messages[messages.length - 1];
      if (question.contact != parula || !question.outgoing) {
        return;
      }
      // let { intent, args } = await this.intentParser.match(question.text);
      // let response = await this.intentParser.startIntent(intent, args);
      let response = "Why did you ask?";
      const answer = new ChatMessage();
      answer.contact = parula;
      answer.outgoing = false;
      answer.text = response;
      messages.push(answer);
    });
  }
}

export const parula = new Parula();
export const parulaClient = new ParulaClient();
