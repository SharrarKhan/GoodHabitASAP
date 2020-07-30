import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="LandingContainer">
      <div>
        <h2 className="landingText">Welcome to GoodHabitASAP!</h2>
      </div>

      <div>
        <p className="loginOrSignUpText">Login. Don't have an account? No problem, sign up! Let's make our neighborhoods a cleaner place to live</p>
      </div>

      <div className="buttonsWrapper">
        <Link to="/login"><button type="button" id="loginButton" className="btn btn-primary btn-lg btn-block">Log In</button></Link>
        <Link to="/signup"><button type="button" id="signupButton" className="btn btn-secondary btn-lg btn-block">Sign Up</button></Link>
      </div>
    </div>
  );
}

export default Landing;