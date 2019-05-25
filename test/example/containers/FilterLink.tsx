import { connect } from "react-redux";

import { setVisibilityFilter } from "../actions";
import Link, { DispatchProps, OwnProps, StateProps } from "../components/Link";

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: any, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
  }),
  (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  })
)(Link);
