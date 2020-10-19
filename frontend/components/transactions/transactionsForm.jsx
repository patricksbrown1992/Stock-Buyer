import React from "react";
import { Link, Redirect } from "react-router-dom";

class PortfolioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props
      .getTransactions(this.props.user)
      .then(() => this.setState({ loaded: true }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearBusinesses();
    this.props.clearTransactions();
    this.props.logout();
  }

  render() {
    let transactions;
    if (!this.state.loaded) {
      return null;
    }
    if (this.props.transactions.length < 1) {
      transactions = "";
    } else {
      transactions = this.props.transactions.map((transaction) => {
        if (transaction.buy) {
          return (
            <li className="transaction-li" key={transaction.id}>
              Buy ({transaction.company_ticker}) - {transaction.net_shares} @{" "}
              {transaction.purchase_price}
            </li>
          );
        } else {
          return (
            <li className="transaction-li" key={transaction.id}>
              Sell ({transaction.company_ticker}) - {transaction.net_shares} @{" "}
              {transaction.purchase_price}
            </li>
          );
        }
      }, this);
    }

    return (
      <div className="portfolio-page">
        <div className="portfolio-nav-bar">
          <button
            className="logout-button"
            onClick={this.handleSubmit}
            type="submit"
          >
            Sign Out
          </button>
          <Link to="/portfolio">Portfolio</Link>
          <a
            href="https://patricksbrown1992.github.io/portfolio/"
            target="_blank"
          >
            Patrick's Profile Site
          </a>
          <a
            href="https://www.linkedin.com/in/patricksbrown1992/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/patricksbrown1992" target="_blank">
            Github
          </a>
        </div>
        <div className="portfolio-body">
          <div className="transactions-left">
            <h3 id="username"> Hi {this.props.user.name}</h3>
            <br />
            <h1 id="transactions-title">Transactions</h1>

            <ul>{transactions}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioForm;
