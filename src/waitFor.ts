import { AnyAction, Store } from "redux";

import observeStore from "./observeStore";

interface Options {
  timeout?: number;
}

export type WaitFor = (
  callback: (state: any) => { result: boolean; error: Error } | boolean,
  options?: Options
) => Promise<boolean | undefined>;

export default function waitFor(store: Store<object, AnyAction>): WaitFor {
  return (callback, options = {}) =>
    new Promise((resolve, reject) => {
      let lastError: Error;
      const { timeout = 4500 } = options;
      const timer = setTimeout(onTimeout, timeout);
      const unsubscribe = observeStore({ store, onChange });

      function onDone({ error, result }: { error?: Error; result?: boolean }) {
        clearTimeout(timer);
        setImmediate(() => {
          unsubscribe();
        });
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }

      function onChange(currentState: object) {
        try {
          const response = callback(currentState);
          const { result, error } =
            typeof response === "boolean" ? { result: response, error: undefined } : response;
          if (result) {
            onDone({ result });
          } else if (error) {
            lastError = error;
          }
        } catch (err) {
          lastError = err;
        }
      }
      function onTimeout() {
        onDone({ error: lastError || new Error("Timed out in waitForElement.") });
      }
      onChange(store.getState());
    });
}
