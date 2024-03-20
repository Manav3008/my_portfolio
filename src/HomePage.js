import React from 'react';
import './HomePage.css'; // Make sure to create a corresponding CSS file
import developerWorkspace from './images/com.png';

const HomePage = () => {
  return (
    <div className="home">
      <nav className="navbar">
        {/* Add your navigation items here */}
        <a href="#contact" className="contact-button">Contact</a>
      </nav>
      <div className="content">

      <section className="hero">
        <h1>Front-End Software Developer</h1>
        <p>Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.</p>
        <a href="#about" className="about-button">About me </a>
        </section>

        <div class="image-container">
        <img src={developerWorkspace} alt="Developer Workspace" />
        </div>
        </div>
        {/* Add more content and sections as needed */}
      <footer className="footer">
        <span>Scroll Down</span>
        {/* Include any additional information or icons here */}
      </footer>
    </div>
  );
};

export default HomePage;
