import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[70px] md:h-20 flex justify-between md:justify-center items-center z-[1000] px-6 md:px-6 bg-slate-900/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="text-slate-50 text-2xl font-bold mr-auto cursor-pointer">
          Bahati<span className="text-blue-500">.</span>
        </div>

        {/* Desktop & Mobile Menu */}
        <ul className={`fixed top-0 right-0 w-[70%] h-screen bg-slate-800 flex flex-col justify-center items-center gap-10 shadow-[-5px_0_15px_rgba(0,0,0,0.5)] z-[1000] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:shadow-none md:gap-12 md:translate-x-0 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                activeClass="text-blue-500 after:w-full"
                spy={true}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="text-slate-400 text-xl md:text-base font-medium relative transition-colors duration-300 py-1.5 cursor-pointer hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-blue-500 after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu Icon */}
        <div className="block md:hidden text-slate-50 cursor-pointer z-[1001]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 w-screen h-screen bg-black/60 z-[999] backdrop-blur-[4px] animate-fadeIn"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
