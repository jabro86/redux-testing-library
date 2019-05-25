import { Store, Unsubscribe } from "redux";

export interface Options {
  store: Store;
  select?(state: object): any;
  onChange(currentState: object): void;
}

export default function observeStore({ store, onChange, select }: Options): Unsubscribe {
  let currentState: object;

  function handleChange() {
    const nextState = select ? select(store.getState()) : store.getState();
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  const unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}
