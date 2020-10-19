import React from "react";
import { Link } from "react-router-dom";

class LogInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    let errors;
    if (this.props.errors.length > 0) {
      errors = this.props.errors.map((error, idx) => {
        return <li key={idx}>{error}</li>;
      });
    }

    return (
      <div className="outerdiv">
        <div className="log-in-form">
          <div className="log-in-top">
            <h1 className="log-in-stockbuyer">StockBuyer</h1>
          </div>

          <div className="log-in-middle">
            <input
              className="log-in-email-input"
              placeholder="Email address"
              type="text"
              value={this.state.email}
              onChange={this.handleChange("email")}
            />
            <input
              className="log-in-email-input"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange("password")}
            />
            <br />

            {errors}
            <br />
            <form className="enter-user-form" onSubmit={this.handleSubmit}>
              <div className="enter-username">
                <button type="submit">Sign In</button>
              </div>
            </form>
          </div>
          <div className="log-in-bottom">
            <h3>Don't have an account?</h3>
            <div className="redirect-to-login-signup">
              <Link to="/signup">Create account</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogInForm;
