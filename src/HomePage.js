import React from 'react';
import './HomePage.css'; // Make sure to create a corresponding CSS file

const HomePage = () => {
  return (
    <div className="home">
      <nav className="navbar">
        {/* Add your navigation items here */}
        <a href="#contact" className="contact-button">Contact</a>
      </nav>
      <section className="hero">
        <h1>Front-End Software Developer</h1>
        <p>Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.</p>
        <a href="#about" className="about-button">About me</a>
        {/* Add more content and sections as needed */}
      </section>
      <footer className="footer">
        <span>Scroll Down</span>
        {/* Include any additional information or icons here */}
      </footer>
    </div>
  );
};

export default HomePage;
