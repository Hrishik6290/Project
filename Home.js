import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure this CSS file includes styles inspired by the screenshot

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="brand-title">Transport Management System</div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>
      </nav>

      <section className="hero">
        <h1>Welcome to Our Transport Management System</h1>
        <p>Efficient, Reliable, and User-friendly</p>
        <div className="hero-image"></div> {/* Background image is set via CSS */}
      </section>

      <div className="features">
        <div className="feature-card">
          <h3>Real-time Tracking</h3>
          <p>Monitor your shipments every step of the way.</p>
        </div>
        <div className="feature-card">
          <h3>Cost Reduction</h3>
          <p>Reduce operational costs with optimized logistics.</p>
        </div>
        <div className="feature-card">
          <h3>Enhanced Efficiency</h3>
          <p>Improve your supply chain with advanced analytics.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
