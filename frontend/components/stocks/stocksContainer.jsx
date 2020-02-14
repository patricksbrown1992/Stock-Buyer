import { connect } from 'react-redux';
import StocksForm from './stocksForm';
import { clearErrors, logout, } from '../../actions/sessionActions';



const msp = state => {

    return {
    errors: state.errors,
    user: state.entities.user[state.session.id], 
    }
};

const mdp = dispatch => ({

    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout()),
 
});

export default connect(msp, mdp)(StocksForm);