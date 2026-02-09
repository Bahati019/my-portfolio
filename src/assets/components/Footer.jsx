import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 py-10 px-5 text-center mt-auto border-t border-white/10 relative">
      <div className="flex justify-center gap-8 mb-8">
        <a
          href="https://github.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-white/5 text-slate-400 text-2xl transition-all duration-300 hover:text-white hover:-translate-y-1 hover:bg-blue-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/charity-bahati-55512123b"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-white/5 text-slate-400 text-2xl transition-all duration-300 hover:text-white hover:-translate-y-1 hover:bg-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/cB_Bahati?t=wzYkI2kp2p87WtAdSO1j0Q&s=09"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-white/5 text-slate-400 text-2xl transition-all duration-300 hover:text-white hover:-translate-y-1 hover:bg-blue-500"
        >
          <FaTwitter />
        </a>
      </div>
      <button
        className='absolute right-10 top-1/2 -translate-y-1/2 bg-blue-500 text-white w-[45px] h-[45px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 text-xl shadow-lg shadow-black/30 border-none hover:bg-blue-600 hover:scale-110 md:fixed md:bottom-[30px] md:right-[20px] md:top-auto md:translate-y-0 md:z-50 max-md:fixed max-md:bottom-[30px] max-md:right-[20px] max-md:top-auto max-md:translate-y-0 max-md:z-50'
        onClick={scrollToTop}
        aria-label='Back to top'
      >
        <FaArrowUp />
      </button>
      <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Bahati. Designed & Built with ❤️.</p>
    </footer>
  );
}

export default Footer;
