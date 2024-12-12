import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Cleats Recommendation App</h1>
        <p>Find the best cleats for your needs by answering a few simple questions.</p>
      </header>
      <main className="home-main">
        <Link to="/Question1" className="home-button">Get Started</Link>
      </main>
      <footer className="home-footer">
        <p>Web App by Deepit Regmi.</p>
      </footer>
    </div>
  );
};

export default Home;