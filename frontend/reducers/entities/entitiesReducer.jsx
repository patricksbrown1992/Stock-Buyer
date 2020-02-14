import usersReducer from './usersReducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
    user: usersReducer,

});
export default entitiesReducer;
