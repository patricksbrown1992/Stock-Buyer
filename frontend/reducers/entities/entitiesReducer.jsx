import usersReducer from './usersReducer';
import { combineReducers } from 'redux';

import transactionsReducer from './transactionsReducer'

const entitiesReducer = combineReducers({
    user: usersReducer,
    transactions: transactionsReducer

});
export default entitiesReducer;
