import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LogInForm = (props) => {
  const [email, updateEmail] = useState(() => "");
  const [password, updatePassword] = useState(() => "");

  function handleSubmit(e) {
    e.preventDefault();
    props.login({ email, password });
    props.clearErrors();
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
            value={email}
            onChange={(e) => updateEmail(e.target.value)}
          />
          <input
            className="log-in-email-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => updatePassword(e.target.value)}
          />
          <br />

          {props.errors.length
            ? props.errors.map((error, idx) => {
                return <li key={idx}>{error}</li>;
              })
            : ""}
          <br />
          <div className="enter-username">
            <button onClick={handleSubmit}>Sign In</button>
          </div>
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
};

export default LogInForm;
