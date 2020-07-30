import React from 'react';

const LoginForm = ({ username, password, handleChange, loginUser }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  }

  return (
    <div>
      <h3 className="loginFormText"> Log In </h3>
      <form className="LoginFormFormElement" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input 
                type="email" 
                className="loginFormInputs form-control" 
                id="exampleInputEmail1" 
                name="username"
                value={username} 
                placeholder="Email Address"
                onChange={handleChange}
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input 
                type="password" 
                className="loginFormInputs form-control" 
                id="exampleInputPassword1" 
                type="password"
                name="password"
                value={password}
                placeholder="***"
                onChange={handleChange}
                required
            />
        </div>
        <input type="submit" id="loginFormComponentButton" className="btn btn-primary" value="Log in" />
      </form>
    </div>
  );
}

export default LoginForm;