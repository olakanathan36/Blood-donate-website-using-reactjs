import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';


function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMobile(false);
  };

  return (

    <header className="header">
        <div className="top-bar">
          <div className="contact-info">
            <p>
              <b>Contact:</b> Poonamalle, Chennai-600056 <b>Call us:</b> +91 9345476918
            </p>
          </div>
          <div className="social-media">
            <ul>
              <li className="icon">
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li className="icon">
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li className="icon">
                <a href="#">
                  <FaYoutube />
                </a>
              </li>
              <li className="icon">
                <a href="#">
                  <SiGmail />
                </a>
              </li>
            </ul>
          </div>
        </div>
    <nav className="navigation">
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
      <div className="logo">
            <h1>
              <span style={{ color: '#ff5f6d' }}>BLOOD </span>PULSE
            </h1>
      </div>
      <ul className={isMobile ? "nav-links-mobile active" : "nav-links"}>
        <li onClick={closeMenu}><Link to="/">Home</Link></li>
        <li onClick={closeMenu}><Link to="/register">Register</Link></li>
        <li onClick={closeMenu}><Link to="/donate">Donate</Link></li>
        <li onClick={closeMenu}><Link to="/request">Request Blood</Link></li>
        <li onClick={closeMenu}><Link to="/about">About</Link></li>
        <li onClick={closeMenu}><Link to="/contact">Contact</Link></li>
        <li onClick={closeMenu}><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    </header>
  );
}

export default Header;
