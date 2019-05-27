import * as React from "react";

import { render } from "../src/redux-testing-library";
import { TodoApp, store, TodoActions, TodoSelectors } from "./example";

describe("todo app", () => {
  describe("when addTodo action is dispatched with a given text as payload", () => {
    it("adds a todo item with the given text to the store", async () => {
      const {
        store: { dispatch },
        waitForStoreChange
      } = render(<TodoApp />, store);

      dispatch(TodoActions.addTodo("Do homework!"));

      await waitForStoreChange(state => {
        expect(TodoSelectors.getTodos(state)).toStrictEqual([
          { id: 0, completed: false, text: "Do homework!" }
        ]);
      });
    });
  });
});
