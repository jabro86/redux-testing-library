import * as React from "react";
import { render, RenderOptions } from "react-testing-library";
import { Store } from "redux";

import observeStore from "./observeStore";
import waitForStoreChange from "./waitFor";

function customRender(ui: React.ReactElement<any>, store: Store, options?: RenderOptions) {
  const result = render(ui, options);
  return {
    ...result,
    reduxStore: store,
    waitForStoreChange: waitForStoreChange(store)
  };
}

export * from "react-testing-library";
export { customRender as render, observeStore, waitForStoreChange };
