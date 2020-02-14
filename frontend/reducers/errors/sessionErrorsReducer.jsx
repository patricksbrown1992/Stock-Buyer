import {
    RECEIVE_ERRORS,
    RECEIVE_USER,
    CLEAR_ERRORS

} from '../../actions/sessionActions';
import { merge } from 'lodash';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ERRORS:
            return merge([], state, action.errors);



        case RECEIVE_USER:

            return merge([], state, []);
        case CLEAR_ERRORS:
            return {};
        default:
            return state;
    }
};

export default sessionErrorsReducer;