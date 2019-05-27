import { connect } from "react-redux";

import { setVisibilityFilter } from "../actions";
import Link, { DispatchProps, OwnProps, StateProps } from "../components/Link";
import * as TodoSelectors from "../selectors";

export default connect<StateProps, DispatchProps, OwnProps>(
  (state, ownProps) => ({
    active: ownProps.filter === TodoSelectors.getVisibilityFilter(state)
  }),
  (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  })
)(Link);
