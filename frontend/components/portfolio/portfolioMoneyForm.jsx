import React from "react";
import { Redirect } from "react-router-dom";

const PortfolioMoney = (props) => {
  return (
    <div className="portfolio-buy-modal">
      <div className="portfolio-buy-top">
        <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      </div>
      <h3>You don't have enough money for this transaction</h3>
    </div>
  );
};

export default PortfolioMoney;
