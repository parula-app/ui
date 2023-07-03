import { Message } from "../abstract/Message";

export class ParulaMessage extends Message {
  /** The app ID/name from the IntentParser.
   * May be null. */
  app: string;
  /** The intent ID/name from the IntentParser.
   * May be null. */
  intent: string;
  /** The intent specific arguments from the IntentParser */
  appArgs: { [prop in string]: any };
  results: { any };

  constructor() {
    super();
    this.sent = new Date();
    this.received = new Date();
  }
}
