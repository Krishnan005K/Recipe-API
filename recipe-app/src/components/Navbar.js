import React from 'react';
import '../assets/styles/Navbar.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Recipe Finder</h1>
        <div className="navbar-links">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#about" className="navbar-link">Nutrition</a> {/* Updated to Nutrition */}
          <a href="#contact" className="navbar-link">Recipe</a>  {/* Updated to Recipe */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
