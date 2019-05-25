import * as React from "react";

interface Props {
  onClick(): void;
  completed: boolean;
  text: string;
}

const Todo: React.ComponentType<Props> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);

export default Todo;
