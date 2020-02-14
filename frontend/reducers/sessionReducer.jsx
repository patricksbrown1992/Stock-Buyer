import {
    RECEIVE_USER,
    REMOVE_USER,
} from '../actions/sessionActions';
import { merge } from 'lodash';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER:
            return { id: action.user.id };
        case REMOVE_USER:
            return _nullUser;
        default:
            return state;
    }
};

export default sessionReducer;