import {
  RECEIVE_USER,
  CLEAR_ERRORS,
  REMOVE_USER,
} from "../../actions/sessionActions";
import { merge } from "lodash";
const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case CLEAR_ERRORS:
      return {};
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
};

export default usersReducer;
