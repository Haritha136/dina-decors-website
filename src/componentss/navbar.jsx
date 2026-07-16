import { useState } from "react";
import logo from "../assetso/logo6.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo-section">
        <img src={logo} alt="Dina Decor And Event Planners" />
        <h2>DINA DECOR AND EVENT PLANNERS</h2>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="mobile-menu">
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      )}

    </nav>
  );
}

export default Navbar;