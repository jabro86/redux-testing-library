import * as React from "react";

import { render } from "../src/redux-testing-library";
import { TodoApp, TodoActions, TodoSelectors } from "./example";

describe("when addTodo action is dispatched", () => {
  it("adds todo item to the store", async () => {
    const { store, waitForStoreChange } = render(<TodoApp.UI />, TodoApp.store);

    store.dispatch(TodoActions.addTodo("Test your application"));

    await waitForStoreChange(state => {
      const todos = TodoSelectors.getTodos(state);
      expect(todos[0].text).toBe("Test your application");
    });
  });
});
