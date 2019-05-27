import { createSelector } from "reselect";

import { TodoItem, VisibilityFilter } from "../reducers";

export function getVisibilityFilter(state: any): VisibilityFilter {
  return state.visibilityFilter;
}

export function getTodos(state: any): TodoItem[] {
  return state.todos;
}

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case "SHOW_ALL":
        return todos;
      case "SHOW_COMPLETED":
        return todos.filter(t => t.completed);
      case "SHOW_ACTIVE":
        return todos.filter(t => !t.completed);
    }
  }
);
