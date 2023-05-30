import { Message } from "../abstract/Message";

export class ChatMessage extends Message {
  constructor() {
    super();
    this.sent = new Date();
    this.received = new Date();
  }
}
