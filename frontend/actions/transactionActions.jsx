import * as APITransactionsUtil from '../util/transactionsUtil';

export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const CLEAR_TRANSACTION = 'CLEAR_TRANSACTION';

const receiveTransaction = transaction => {


    return {
        type: RECEIVE_TRANSACTION,
        transaction
    }
}

const receiveTransactions = transactions => {
    return {
        type: RECEIVE_TRANSACTIONS,
        transactions
    }
}




export const receiveClearTransaction = () => {
    return {
        type: CLEAR_TRANSACTION
    }
}

export const getTransactions = (user) => dispatch => {
    return APITransactionsUtil.getTransactions(user)
        .then( transactions => dispatch(receiveTransactions(transactions)))
}

export const createTransaction = transaction => dispatch => {
    
    return APITransactionsUtil.createTransaction(transaction)
        .then( 
            transaction => dispatch(receiveTransaction(transaction))),err => (dispatch(receiveErrors(err.responseJSON)))
}