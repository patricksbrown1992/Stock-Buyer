import usersReducer from './usersReducer';
import { combineReducers } from 'redux';
import companyReducer from './companiesReducer';

const entitiesReducer = combineReducers({
    user: usersReducer,
    companies: companyReducer

});
export default entitiesReducer;
