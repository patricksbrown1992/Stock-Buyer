import { RECEIVE_COMPANIES, RECEIVE_COMPANY} from '../../actions/companyActions';
import { merge } from 'lodash';

const companyReducer = (state={}, action) => {
 
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_COMPANY:
            return merge( {}, state, {[action.company.id]: action.company})
        case RECEIVE_COMPANIES:
            const companies = {};
            action.companies.forEach((company) => {
                companies[company.ticker] = company;
            });

            return merge({}, state, companies);
    
        default: return state;
    }
};

export default companyReducer;