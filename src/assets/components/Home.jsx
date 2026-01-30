import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import profileImage from '../Images/profile.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="profile-wrapper">
        <motion.div
          className="profile-image-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        >
          <img src={profileImage} alt="Profile" className="profile-image" />
        </motion.div>

        <motion.div
          className="intro"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1>Hi, I'm <span className="highlight">Bahati</span></h1>
          <p className="subtitle">
            A passionate frontend developer with a love for clean design and intuitive user interfaces.
            I specialize in building responsive, accessible, and performant web applications using modern technologies like React, Tailwind CSS, and Framer Motion.
          </p>

          <motion.a
            href="/CV.pdf"
            download
            className="download-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="btn-icon" />
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
