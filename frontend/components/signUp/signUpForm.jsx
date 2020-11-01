import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SignUpForm = (props) => {
  const [email, updateEmail] = useState(() => "");
  const [password, updatePassword] = useState(() => "");
  const [name, updateName] = useState(() => "");

  function demoLogIn(e) {
    e.preventDefault();
    const demoEmail = "admin@admin.com";
    const demoPassword = "123456";
    const person = { email: demoEmail, password: demoPassword };
    props.login(person);
    updateEmail("");
    updateName("");
    updatePassword("");
    props.clearErrors();
  }

  function handleSignUp(e) {
    e.preventDefault();
    props.signup({ name, email, password });
    updateEmail("");
    updateName("");
    updatePassword("");
    props.clearErrors();
  }

  return (
    <div className="outerdiv">
      <div className="sign-up-form">
        <div className="sign-up-top">
          <h1 className="log-in-stockbuyer">Register</h1>
        </div>

        <div className="sign-up-middle">
          <form className="demo-form">
            <div className="demo-button">
              <button onClick={demoLogIn} type="submit">
                Demo for Free
              </button>
            </div>
          </form>
          <div className="sign-up-inputs">
            <input
              className="sign-up-email-input"
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => updateEmail(e.target.value)}
            />
            <input
              className="sign-up-email-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
            />
            <input
              className="sign-up-email-input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => updateName(e.target.value)}
            />
          </div>
          <ul>
            <br />
            {props.errors.length
              ? props.errors.map((error, idx) => {
                  return <li key={idx}>{error}</li>;
                })
              : ""}
            <br />
          </ul>
          <form className="enter-user-form">
            <div className="enter-username">
              <button onClick={handleSignUp} type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
        <div className="sign-up-bottom">
          <h3>Already have an account?</h3>
          <div className="redirect-to-login-signup">
            <Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
