import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="logo" style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: '700', marginRight: 'auto' }}>
          Bahati<span style={{ color: 'var(--accent-color)' }}>.</span>
        </div>
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li><Link activeClass="active" spy={true} to="home" smooth={true} duration={500} offset={-70} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link activeClass="active" spy={true} to="skills" smooth={true} duration={500} offset={-70} onClick={() => setMenuOpen(false)}>Skills</Link></li>
          <li><Link activeClass="active" spy={true} to="projects" smooth={true} duration={500} offset={-70} onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link activeClass="active" spy={true} to="contact" smooth={true} duration={500} offset={-70} onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* Menu Icon */}
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
