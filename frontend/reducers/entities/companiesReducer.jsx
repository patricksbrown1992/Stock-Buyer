import { RECEIVE_COMPANIES, RECEIVE_COMPANY} from '../../actions/companyActions';
import { merge } from 'lodash';

const companyReducer = (state={}, action) => {
    debugger
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_COMPANY:
            return merge( {}, state, {[action.company.id]: action.company})
        case RECEIVE_COMPANIES:
            return merge( {}, state, action.companies)
        default: return state;
    }
};

export default companyReducer;