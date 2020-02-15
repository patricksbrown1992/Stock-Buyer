import { connect } from 'react-redux';
import PortfolioForm from './portfolioForm';
import { clearErrors, logout, } from '../../actions/sessionActions';
import { getCompanies } from '../../actions/companyActions';
import {getTransactions,createTransaction} from '../../actions/transactionActions';
import {portfolioBuy, portfolioTicker, portfolioMoney} from '../../actions/modalActions';




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
    getTransactions: user => dispatch(getTransactions(user)),
    createTransaction: transaction => dispatch(createTransaction(transaction)),
    portfolioBuy: () => dispatch(portfolioBuy()),
    portfolioTicker: () => dispatch(portfolioTicker()),
    portfolioMoney: () => dispatch(portfolioMoney())

 
});

export default connect(msp, mdp)(PortfolioForm);