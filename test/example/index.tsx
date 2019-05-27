import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import rootReducer from "./reducers";
import * as TodoActions from "./actions";
import * as TodoSelectors from "./selectors";

export const TodoApp = {
  store: createStore(rootReducer),
  UI: () => (
    <Provider store={TodoApp.store}>
      <App />
    </Provider>
  )
};

export { TodoActions, TodoSelectors };
