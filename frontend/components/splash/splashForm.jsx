import React from "react";
import SplashHeader from "./splashHeader";
import { Link } from "react-router-dom";

const splashForm = () => (
  <div className="splash-form">
    <SplashHeader />
    <div className="splash-body">
      <div className="splash-left">
        <h1>It’s Time to Do Money</h1>
      </div>
      <div className="splash-right">
        <h2>Updates regularly</h2>
        <h2>Break Free from Commission Fees</h2>
        <Link to="/signup">Free Demo or Sign Up</Link>
      </div>
    </div>
  </div>
);

export default splashForm;
