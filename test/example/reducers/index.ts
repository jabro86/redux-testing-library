import { combineReducers } from "redux";

import todos, { TodoItem } from "./todos";
import visibilityFilter, { VisibilityFilter } from "./visibilityFilter";

export default combineReducers({
  todos,
  visibilityFilter
});

export { TodoItem, VisibilityFilter };
