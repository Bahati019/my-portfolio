import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import profileImage from '../Images/profile.jpg';

function Home() {
  return (
    <section id="home" className="min-h-screen flex justify-center items-center relative overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(59,130,246,0.2)_0%,rgba(15,23,42,0)_70%)] rounded-full blur-[80px] z-0 animate-blobFloat pointer-events-none"></div>
      <div className="absolute -bottom-[10%] -right-[10%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(139,92,246,0.2)_0%,rgba(15,23,42,0)_70%)] rounded-full blur-[80px] z-0 animate-blobFloat animation-delay-2000 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-[1000px] px-5">
        <motion.div
          className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Bahati</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-[500px] mx-auto md:mx-0 leading-relaxed">
            A passionate frontend developer with a love for clean design and intuitive user interfaces.
            I specialize in building responsive, accessible, and performant web applications using modern technologies like React, Tailwind CSS, and Framer Motion.
          </p>

          <motion.a
            href="/CV.pdf"
            download
            className="inline-flex items-center gap-3 py-3.5 px-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/40 text-base transition-all hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/60"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="text-lg" />
            Download CV
          </motion.a>
        </motion.div>

        <motion.div
          className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        >
          {/* Rotating Ring */}
          <div className="absolute inset-[-10px] rounded-full bg-gradient-to-tr from-blue-500 to-transparent z-0 opacity-50 animate-spin-slow"></div>

          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-[0_0_30px_rgba(59,130,246,0.3)] relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
