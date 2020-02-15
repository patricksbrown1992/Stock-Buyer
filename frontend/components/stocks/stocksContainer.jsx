import { connect } from 'react-redux';
import StocksForm from './stocksForm';
import { clearErrors, logout, } from '../../actions/sessionActions';
import { getCompanies } from '../../actions/companyActions';



const msp = state => {
    debugger
    return {
    errors: state.errors,
    user: state.entities.user[state.session.id], 
    companies: Object.values(state.entities.companies)
    }
};

const mdp = dispatch => ({

    clearErrors: (user) => dispatch(clearErrors(user)),
    logout: () => dispatch(logout()),
    getCompanies: () => dispatch(getCompanies())
 
});

export default connect(msp, mdp)(StocksForm);