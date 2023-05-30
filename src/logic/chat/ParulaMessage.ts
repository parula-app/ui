import { Message } from "../abstract/Message";

export class ParulaMessage extends Message {
  /** The intent from the IntentParser.
   * May be null. */
  app: string;
  /** The intent specific arguments from the IntentParser */
  appArgs: {};

  constructor() {
    super();
    this.sent = new Date();
    this.received = new Date();
  }
}
