import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import rootReducer from "./reducers";
import * as TodoActions from "./actions";
import * as TodoSelectors from "./selectors";

export const store = createStore(rootReducer);
export const TodoApp: React.ComponentType = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export { TodoActions, TodoSelectors };
