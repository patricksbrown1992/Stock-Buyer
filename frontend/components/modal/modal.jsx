import React from "react";
import { closeModal } from "../../actions/modalActions";
import { connect } from "react-redux";
import PortfolioBuy from "../portfolio/portfolioBuyContainer";
import PortfolioTicker from "../portfolio/portfolioTickerContainer";
import PortfolioMoney from "../portfolio/portfolioMoneyContainer";
import PortfolioSellMoneyContainer from "../portfolio/PortfolioSellMoneyContainer";
import PortfolioSellContainer from "../portfolio/portfolioSellContainer";

function Modal({ modal, closeModal }) {
  if (!modal.type) {
    return null;
  }
  let component;
  switch (modal.type) {
    case "portfolio-buy":
      component = <PortfolioBuy />;
      break;
    case "portfolio-ticker":
      component = <PortfolioTicker />;
      break;
    case "portfolio-money":
      component = <PortfolioMoney />;
      break;
    case "portfolio-sell-money":
      component = <PortfolioSellMoneyContainer />;
      break;
    case "portfolio-sell":
      component = <PortfolioSellContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
