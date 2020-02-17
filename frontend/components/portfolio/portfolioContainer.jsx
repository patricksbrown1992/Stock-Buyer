import { connect } from 'react-redux';
import PortfolioForm from './portfolioForm';
import { clearErrors, logout, updateUser } from '../../actions/sessionActions';
import {getTransactions,createTransaction, clearTransactions} from '../../actions/transactionActions';
import {portfolioBuy, portfolioTicker, portfolioMoney, portfolioMoneySell, portfolioSell} from '../../actions/modalActions';
import {updateBusiness, getBusinesses, getBusiness, deleteBusiness, createBusiness, clearBusinesses} from '../../actions/businessActions';
import {getPrice, getNews} from '../../util/iexUtil';




const msp = state => {

    return {
    errors: Object.values(state.errors),
    user: state.entities.user[state.session.id], 
    businesses: state.entities.businesses,
    transactions: state.entities.transactions
    }
};

const mdp = dispatch => ({

    clearErrors: () => dispatch(clearErrors()),
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
    createBusiness: (id, business) => dispatch(createBusiness(id,business)),
    updateBusiness: (id, business) => dispatch(updateBusiness(id,business)),
    deleteBusiness: business => dispatch(deleteBusiness(business)),
    getPrice: ticker => dispatch(getPrice(ticker)),
    clearTransactions: () => dispatch(clearTransactions()),
    clearBusinesses: () => dispatch(clearBusinesses())
    


 
});

export default connect(msp, mdp)(PortfolioForm);