// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../image0.jpg'; // Adjust the path according to your logo location

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="NewVox AI" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="social">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
