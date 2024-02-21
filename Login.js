import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is used if you have navigation within the component.
import './Login.css'; // Correctly imports the CSS for styling.

const Login = () => {
  // Initialize state for credentials.
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  // Update state based on form input changes.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value // Dynamically set either username or password based on input name.
    }));
  };

  // Handle form submission.
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior.
    console.log('Login credentials:', credentials); // Placeholder for actual login logic.

    // Here you would typically send credentials to your server for validation
    // and handle the response accordingly.
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
        {/* Example of using Link for navigation to a home page. */}
        <Link to="/" className="back-home-link">Back to Home</Link>
      </div>
    </div>
  );
};

export default Login;
