import React from 'react';

const SignupForm = ({ username, password, handleChange, signupUser }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser();
  }

  return (
      <div>
      <h3 className="loginFormText"> Sign Up </h3>
      <form className="LoginFormFormElement" onSubmit={handleSubmit}>
        <div className="form-group">
            <label for="signupUsernameInput">Email Address</label>
            <input 
                type="email" 
                className="loginFormInputs form-control" 
                id="signupUsernameInput" 
                name="username"
                value={username} 
                placeholder="Email Address"
                onChange={handleChange}
                required
            />
        </div>
        <div className="form-group">
            <label for="signupPasswordInput">Password</label>
            <input 
                type="password" 
                className="loginFormInputs form-control" 
                id="signupPasswordInput" 
                type="password"
                name="password"
                value={password}
                placeholder="***"
                onChange={handleChange}
                required
            />
        </div>
        <input type="submit" id="signupFormComponentButton" className="btn btn-primary" value="Sign Up" />
      </form>
    </div>
  );
}

export default SignupForm;