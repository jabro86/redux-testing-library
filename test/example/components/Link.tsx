import * as React from "react";

import { VisibilityFilter } from "../reducers";

export interface OwnProps {
  filter: VisibilityFilter;
  children?: React.ReactNode;
}

export interface StateProps {
  active: boolean;
}

export interface DispatchProps {
  onClick: () => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const Link: React.ComponentType<Props> = ({ active, children, onClick }) => (
  <button onClick={onClick} disabled={active} style={{ marginLeft: "4px" }}>
    {children}
  </button>
);

export default Link;
