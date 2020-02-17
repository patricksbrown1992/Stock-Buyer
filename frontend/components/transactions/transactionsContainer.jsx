import { connect } from 'react-redux';
import TransactionsForm from './transactionsForm';
import { clearErrors, logout, } from '../../actions/sessionActions';
import {getTransactions, clearTransactions} from '../../actions/transactionActions';
import {clearBusinesses} from '../../actions/businessActions';



const msp = state => {
 
    return {
    errors: state.errors,
    user: state.entities.user[state.session.id], 
    businesses: state.entities.businesses,
    transactions: Object.values(state.entities.transactions)
    }
};

const mdp = dispatch => ({

    clearErrors: (user) => dispatch(clearErrors(user)),
    logout: () => dispatch(logout()),
    getTransactions: user => dispatch(getTransactions(user)),
    clearTransactions: () => dispatch(clearTransactions()),
    clearBusinesses: () => dispatch(clearBusinesses())
 
});

export default connect(msp, mdp)(TransactionsForm);