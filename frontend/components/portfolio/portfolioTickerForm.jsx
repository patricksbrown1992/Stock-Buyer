import React from "react";
import { Redirect } from "react-router-dom";

const PortfolioTicker = (props) => {
  return (
    <div className="portfolio-buy-modal">
      <div className="portfolio-buy-top">
        <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      </div>
      <h3>Please enter a valid ticker</h3>
    </div>
  );
};

export default PortfolioTicker;
