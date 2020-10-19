import React from "react";
import { Redirect } from "react-router-dom";

class PortfolioSell extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  render() {
    return (
      <div className="portfolio-buy-modal">
        <div className="portfolio-buy-top">
          <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
        </div>
        <h3>You don't own this stock</h3>
      </div>
    );
  }
}

export default PortfolioSell;
