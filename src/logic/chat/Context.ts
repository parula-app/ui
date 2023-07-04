
export class Context {
  /** Which app, e.g. "recipe", or "clock" will handle this request.
   * The app ID/name from the IntentParser.
   * May be null. */
  app: string;
  /** Which function of the app the user asked for.
   * The intent ID/name from the IntentParser.
   * May be null. */
  intent: string;
  /** What the user asked for, interpreted, in form of objects/JSON
   * The intent specific arguments from the IntentParser */
  args: { [prop in string]: any };
  /** Results of call in form of objects/JSON */
  results: any;
  /** Response to end user. Short human-language string. */
  resultText: string;

  static fromJSON(json: any) {
    let context = new Context();
    context.resultText = json.resultText;
    context.app = json.app;
    context.args = json.args;
    context.results = json.results?.slice().pop(); // last result only, for now
    return context;
  }
}
