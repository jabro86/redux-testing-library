import { connect } from "react-redux";

import { toggleTodo, VisibilityFilters } from "../actions";
import TodoList, { StateProps, DispatchProps, OwnProps, TodoItem } from "../components/TodoList";

const getVisibleTodos = (todos: TodoItem[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: any) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }),
  dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
  })
)(TodoList);
