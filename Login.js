import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ... other component code

<Link to="/">Home</Link>

import './Login.css'; // This imports the CSS from Login.css

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Login credentials:', credentials);
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1 className="login-title">Login to Your Account</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="username" className="login-label">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="login-input"
            required
          />

          <label htmlFor="password" className="login-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="login-input"
            required
          />

          <button type="submit" className="login-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
