import { connect } from 'react-redux';
import PortfolioForm from './portfolioForm';
import { clearErrors, logout, updateUser } from '../../actions/sessionActions';
import {getTransactions,createTransaction} from '../../actions/transactionActions';
import {portfolioBuy, portfolioTicker, portfolioMoney} from '../../actions/modalActions';




const msp = state => {

    return {
    errors: state.errors,
    user: state.entities.user[state.session.id], 
    transactions: Object.values(state.entities.transactions)
    }
};

const mdp = dispatch => ({

    clearErrors: (user) => dispatch(clearErrors(user)),
    logout: () => dispatch(logout()),
    getTransactions: user => dispatch(getTransactions(user)),
    createTransaction: transaction => dispatch(createTransaction(transaction)),
    portfolioBuy: () => dispatch(portfolioBuy()),
    portfolioTicker: () => dispatch(portfolioTicker()),
    portfolioMoney: () => dispatch(portfolioMoney()),
    updateUser: user => dispatch(updateUser(user))


 
});

export default connect(msp, mdp)(PortfolioForm);