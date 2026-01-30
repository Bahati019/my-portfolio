import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import profileImage from '../Images/profile.jpg'; 
import '../styles/Home.css'; 

function Home() {
  return (
    <section id="home" className="home-section">
      <motion.div 
        className="profile-wrapper"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          src={profileImage} 
          alt="Profile" 
          className="profile-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
        <motion.div 
          className="intro"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <FaDownload className="btn-icon" />
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
