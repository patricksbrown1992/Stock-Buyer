import React from "react";
import { Link } from "react-router-dom";

const splashHeader = () => (
  <div className="splash-nav">
    <div className="title-div">
      <h1>Patrick's Stock Buyer</h1>
    </div>
    <div className="features-div">
      <ul>
        <a
          href="https://patricksbrown1992.github.io/portfolio/"
          target="_blank"
        >
          Portfolio
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
      </ul>
    </div>
    <div className="splash-buttons">
      <nav className="signup-button">
        <Link to="/signup">Sign up</Link>
      </nav>
      <span>
        <p className="or">or</p>
      </span>

      <nav className="login-button">
        <Link to="/login">Log in</Link>
      </nav>
    </div>
  </div>
);

export default splashHeader;
