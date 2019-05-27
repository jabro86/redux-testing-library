import { AnyAction, Store } from "redux";

import observeStore from "./observeStore";

interface Options {
  timeout?: number;
}

export type WaitFor = (
  assertionCallback: (state: any) => void,
  options?: Options
) => Promise<boolean | undefined>;

export default function waitFor(store: Store<object, AnyAction>): WaitFor {
  return (assertionCallback, options = {}) =>
    new Promise((resolve, reject) => {
      let lastError: Error;
      const { timeout = 4500 } = options;
      const timer = setTimeout(onTimeout, timeout);
      const unsubscribe = observeStore({ store, onChange });

      function onDone({ error, result }: { error?: Error; result?: boolean }): void {
        clearTimeout(timer);
        setImmediate(() => {
          unsubscribe();
        });
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }

      function onChange(currentState: object): void {
        try {
          assertionCallback(currentState);
          onDone({ result: true });
        } catch (error) {
          lastError = error;
        }
      }
      function onTimeout(): void {
        onDone({ error: lastError || new Error("Timed out in waitForElement.") });
      }
      onChange(store.getState());
    });
}
