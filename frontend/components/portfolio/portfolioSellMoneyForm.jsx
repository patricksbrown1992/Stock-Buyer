import React from "react";
import { Redirect } from "react-router-dom";

const PortfolioSellMoney = (props) => {
  return (
    <div className="portfolio-buy-modal">
      <div className="portfolio-buy-top">
        <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      </div>
      <h3>You don't have that many shares</h3>
    </div>
  );
};

export default PortfolioSellMoney;
