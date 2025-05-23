import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className='github'> 
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/charity-bahati-55512123b" target="_blank" rel="noopener noreferrer" className='linkedin'>
          <FaLinkedin />
        </a>
        <a href="https://x.com/cB_Bahati?t=wzYkI2kp2p87WtAdSO1j0Q&s=09" target="_blank" rel="noopener noreferrer" className='twitter'>
          <FaTwitter />
        </a>
      </div>
      <button className='scroll-to-top' onClick={scrollToTop} aria-label='Back to top'> 
        <FaArrowUp />
      </button>
      <p className="footer-text">© {new Date().getFullYear()} Bahati. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
