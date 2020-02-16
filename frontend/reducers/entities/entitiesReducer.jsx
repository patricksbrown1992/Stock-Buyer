import usersReducer from './usersReducer';
import { combineReducers } from 'redux';
import businessReducer from './businessReducer';
import transactionsReducer from './transactionsReducer'

const entitiesReducer = combineReducers({
    user: usersReducer,
    businesses: businessReducer,
    transactions: transactionsReducer

});
export default entitiesReducer;
