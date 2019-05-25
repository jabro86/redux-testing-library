import * as React from "react";

import { render } from "../src/redux-testing-library";
import { TodoApp, store } from "./example";
import { addTodo } from "./example/actions";

describe("example: todo-list", () => {
  describe("when addTodo action is dispatched", () => {
    it("adds one todo item to the store", async () => {
      const {
        reduxStore: { getState, dispatch },
        waitForStoreChange
      } = render(<TodoApp />, store);

      dispatch(addTodo("Go to bed!"));

      await waitForStoreChange(state => state.todos.length === 1);

      expect(getState().todos).toStrictEqual([{ id: 0, completed: false, text: "Go to bed!" }]);
    });
  });
});
