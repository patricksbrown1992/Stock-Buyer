import { connect } from "react-redux";
import LogInForm from "./logInForm";
import { login, clearErrors } from "../../actions/sessionActions";

const msp = (state) => {
  return {
    errors: state.errors,
  };
};

const mdp = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(LogInForm);
