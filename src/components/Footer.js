// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <h4>CONNECT WITH NEWVOX</h4>
      </div>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message</label>
        <input type="text" id="message" name="message" />
        <button type="submit">Send</button>
      </form>
    </footer>
  );
};

export default Footer;
