import {RECEIVE_TRANSACTION, RECEIVE_TRANSACTIONS, CLEAR_TRANSACTIONS} from '../../actions/transactionActions';
import { merge } from 'lodash';
import { CLEAR_BUSINESSES } from '../../actions/businessActions';

const transactionReducer = (state={}, action) => {
   
    Object.freeze(state);

    switch (action.type){
        case RECEIVE_TRANSACTION:
       
            return merge({}, state, { [action.transaction.id]: action.transaction });
        case RECEIVE_TRANSACTIONS:
            const transactions = {};

            action.transactions.forEach((transaction) => {
                
                transactions[transaction.id] = transaction;
         
            });
           
            return merge({}, state, transactions);
        case CLEAR_BUSINESSES:
            return {};

        default: return state;
    }
}

export default transactionReducer;