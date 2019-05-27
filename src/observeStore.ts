import { Store, Unsubscribe } from "redux";

export interface Options {
  readonly store: Store;
  onChange(currentState: object): void;
}

export default function observeStore({ store, onChange }: Options): Unsubscribe {
  let currentState: object;

  function handleChange(): void {
    const nextState = store.getState();
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  const unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}
