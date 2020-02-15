import usersReducer from './usersReducer';
import { combineReducers } from 'redux';
import companyReducer from './companiesReducer';
import transactionsReducer from './transactionsReducer'

const entitiesReducer = combineReducers({
    user: usersReducer,
    companies: companyReducer,
    transactions: transactionsReducer

});
export default entitiesReducer;
