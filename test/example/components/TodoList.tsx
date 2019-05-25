import * as React from "react";

import Todo from "./Todo";

export interface TodoItem {
  id: number;
  completed: boolean;
  text: string;
}

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
