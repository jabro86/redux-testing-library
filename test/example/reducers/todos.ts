import { AnyAction } from "redux";

export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const todos = (state: TodoItem[] = [], action: AnyAction): TodoItem[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
