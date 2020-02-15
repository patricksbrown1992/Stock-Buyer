import {RECEIVE_TRANSACTION, RECEIVE_TRANSACTIONS, CLEAR_TRANSACTION} from '../../actions/transactionActions';
import { merge } from 'lodash';

const transactionReducer = (state={}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type){
        case RECEIVE_TRANSACTION:
            return merge({}, state, { [action.transaction.id]: action.transaction });
        case RECEIVE_TRANSACTIONS:
            const transactions = {};
            action.transactions.forEach((transaction) => {
                transactions[transaction.id] = transaction;
            });

            return merge({}, state, transactions);
        default: return state;
    }
}

export default transactionReducer;