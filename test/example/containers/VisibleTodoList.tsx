import { connect } from "react-redux";

import { toggleTodo } from "../actions";
import TodoList, { DispatchProps, OwnProps, StateProps } from "../components/TodoList";
import { TodoItem, VisibilityFilter } from "../reducers";
import * as TodoSelectors from "../selectors";

const getVisibleTodos = (todos: TodoItem[], filter: VisibilityFilter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default connect<StateProps, DispatchProps, OwnProps>(
  function mapStateToProps(state, ownProps) {
    const todos = TodoSelectors.getTodos(state);
    const visibilityFilter = TodoSelectors.getVisibilityFilter(state);
    return {
      todos: getVisibleTodos(todos, visibilityFilter)
    };
  },
  function mapDispatchToProps(dispatch, ownProps): DispatchProps {
    return {
      toggleTodo: id => dispatch(toggleTodo(id))
    };
  }
)(TodoList);
