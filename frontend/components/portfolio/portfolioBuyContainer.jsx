import PortfolioBuyForm from "./portfolioBuyForm";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modalActions";
import { withRouter } from "react-router-dom";

const msp = (state) => ({
  user: state.entities.user,
});

const mdp = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(msp, mdp)(PortfolioBuyForm));
