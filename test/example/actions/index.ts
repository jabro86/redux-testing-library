import { VisibilityFilter } from "../reducers";

let nextTodoId = 0;
export const addTodo = (text: string) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = (filter: VisibilityFilter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = (id: number) => ({
  type: "TOGGLE_TODO",
  id
});
