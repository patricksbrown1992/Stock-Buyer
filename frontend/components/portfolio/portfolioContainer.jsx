import { connect } from 'react-redux';
import PortfolioForm from './portfolioForm';
import { clearErrors, logout, updateUser } from '../../actions/sessionActions';
import {getTransactions,createTransaction} from '../../actions/transactionActions';
import {portfolioBuy, portfolioTicker, portfolioMoney, portfolioMoneySell, portfolioSell} from '../../actions/modalActions';
import {updateBusiness, getBusinesses, getBusiness, deleteBusiness, createBusiness} from '../../actions/businessActions';




const msp = state => {

    return {
    errors: state.errors,
    user: state.entities.user[state.session.id], 
    businesses: state.entities.businesses,
    transactions: state.entities.transactions
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
    updateUser: user => dispatch(updateUser(user)),
    portfolioMoneySell: () => dispatch(portfolioMoneySell()),
    portfolioSell: () => dispatch(portfolioSell()),
    getBusinesses: user => dispatch(getBusinesses(user)),
    getBusiness: business => dispatch(getBusiness(business)),
    createBusiness: (user, business) => dispatch(createBusiness(user,business)),
    updateBusiness: (user, business) => dispatch(updateBusiness(user,business)),
    deleteBusiness: business => dispatch(deleteBusiness(business))


 
});

export default connect(msp, mdp)(PortfolioForm);