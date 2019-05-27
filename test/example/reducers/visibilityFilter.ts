import { AnyAction } from "redux";

export type VisibilityFilter = "SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE";

const visibilityFilter = (
  state: VisibilityFilter = "SHOW_ALL",
  action: AnyAction
): VisibilityFilter => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
