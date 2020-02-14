import { connect } from 'react-redux';
import SignUpForm from './signUpForm';
import { signup, login, clearErrors } from '../../actions/sessionActions';

const msp = (state) => ({
    errors: state.errors
});


const mdp = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});


export default connect(msp, mdp)(SignUpForm);