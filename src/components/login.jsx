import React from 'react';
import '../styles/login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>LOG IN</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="#">Make an account →</a></p>
      <p> <a href="#">Forgot password?</a></p>
    </div>
  );
};

export default Login;