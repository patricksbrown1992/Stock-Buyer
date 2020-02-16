import {RECEIVE_TRANSACTION, RECEIVE_TRANSACTIONS, CLEAR_TRANSACTION} from '../../actions/transactionActions';
import { merge } from 'lodash';

const transactionReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type){
        case RECEIVE_TRANSACTION:
            debugger
            if(state[action.transaction.company_ticker]){
                // debugger
                let before = state[action.transaction.company_ticker]
                let now = before.net_shares += action.transaction.net_shares;
                action.transaction.net_shares = now;
                // debugger
                return merge({}, state, { [action.transaction.company_ticker]: action.transaction });
            } else {
                debugger
                return merge({}, state, { [action.transaction.company_ticker]: action.transaction });

            }
        case RECEIVE_TRANSACTIONS:
            const transactions = {};

            action.transactions.forEach((transaction) => {
                if(transactions[transaction.company_ticker]){
                    // debugger
                    let curr = transactions[transaction.company_ticker]
                    let now = curr.net_shares += transaction.net_shares;
                    transaction.net_shares = now;
                    transactions[transaction.company_ticker] = transaction
                } else {
                    transactions[transaction.company_ticker] = transaction;
                }
            });
            // debugger
            return merge({}, state, transactions);
        default: return state;
    }
}

export default transactionReducer;