
let wsConnection;

/**
 * Connects to Parula core via WebSocket, to listen for context changes.
 *
 * @param onMessage Called once a new context is received from Parula core.
 */
export function connect(onMessage: (contextJSON: any) => void) {
  try {
    const port = 12779;
    let ws = new WebSocket(`ws://${window.location.hostname}:${port}`);
    wsConnection = ws;
    ws.onerror = (event: Event) => {
      let error = event.data;
      console.error(error);
    }
    ws.onmessage = (event: Event) => {
      try {
        console.log("event", event, "data", event.data);
        let json = JSON.parse(event.data);
        onMessage(json);
      } catch (ex) {
        console.error(ex);
      }
    }
    console.log("Context WebSocket connected");
  } catch (ex) {
    console.error(ex);
  }
}

/**
 * Allows to send a new context to Parula core.
 *
 * This is helpful, when the user changed the state
 * using the UI, and allows Parula core to consider
 * the changes that the user did in the UI,
 * for interpreting the next voice command,
 *
 * @param contextJSON
 */
export function send(contextJSON: any) {
  wsConnection.send(JSON.stringify(contextJSON, null, 2));
}
