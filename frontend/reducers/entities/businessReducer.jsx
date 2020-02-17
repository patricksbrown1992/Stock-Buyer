import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES, DESTROY_BUSINESS, CLEAR_BUSINESSES} from '../../actions/businessActions';
 import { merge } from 'lodash';

 const businessReducer = (state={}, action) => {

     Object.freeze(state);
     switch (action.type){
        case RECEIVE_BUSINESS:
             return merge( {}, state, {[action.business.ticker]: action.business})
        case RECEIVE_BUSINESSES:
             const businesses = {};
             action.businesses.forEach((business) => {
                 businesses[business.ticker] = business;
             });

             return merge({}, state, businesses);
        case DESTROY_BUSINESS:

            const newState = merge({}, state);
            delete newState[action.business.ticker];
            return newState;
        case CLEAR_BUSINESSES:
            return {};
        default: 
            return state;
     }
 };

 export default businessReducer; 