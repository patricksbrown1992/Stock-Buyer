import { connect } from 'react-redux';
import TransactionsForm from './transactionsForm';
import { clearErrors, logout, } from '../../actions/sessionActions';
import { getCompanies } from '../../actions/companyActions';
import {getTransactions} from '../../actions/transactionActions';



const msp = state => {
 
    return {
    errors: state.errors,
    user: state.entities.user[state.session.id], 
    companies: state.entities.companies,
    transactions: Object.values(state.entities.transactions)
    }
};

const mdp = dispatch => ({

    clearErrors: (user) => dispatch(clearErrors(user)),
    logout: () => dispatch(logout()),
    getCompanies: () => dispatch(getCompanies()),
    getTransactions: user => dispatch(getTransactions(user))
 
});

export default connect(msp, mdp)(TransactionsForm);