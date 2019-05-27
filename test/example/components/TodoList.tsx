import * as React from "react";

import { TodoItem } from "../reducers";
import Todo from "./Todo";

export interface StateProps {
  todos: TodoItem[];
}
export interface DispatchProps {
  toggleTodo(id: number): void;
}
export interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

const TodoList: React.ComponentType<Props> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
