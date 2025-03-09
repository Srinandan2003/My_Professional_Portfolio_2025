import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClick = (sectionId) => {
    // Close mobile menu first
    setIsOpen(false);
    
    // Small delay to ensure menu closing animation doesn't interfere with scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 64; // height of navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex flex-shrink-0 items-center">
            <button 
              onClick={() => handleClick('home')} 
              className="text-xl font-bold relative overflow-hidden group"
            >
              <span className=" font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text animate-gradient-x">
                PORTFOLIO
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'technologies', 'projects', 'contact'].map((link) => (
              <button 
                key={link}
                onClick={() => handleClick(link)} 
                className="relative text-white hover:text-gray-300 transition-colors py-1 group"
                onMouseEnter={() => setActiveLink(link)}
                onMouseLeave={() => setActiveLink(null)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Social Links with text labels */}
          <div className="hidden md:flex items-center justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/srinandan-m-n-b55bab321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition-all duration-300 group relative"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl transform transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-medium relative">
                LinkedIn
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <a 
              href="https://github.com/Srinandan2003"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-all duration-300 group relative"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl transform transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-medium relative">
                GitHub
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-[72px] bg-black/95 backdrop-blur-sm"
          >
            <div className="container mx-auto px-8 py-4 flex flex-col gap-4">
              {['home', 'technologies', 'projects', 'contact'].map((link) => (
                <button 
                  key={link}
                  onClick={() => handleClick(link)} 
                  className="py-2 text-left text-white hover:text-gray-300 transition-colors text-lg group relative"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-1/4"></span>
                </button>
              ))}
              
              {/* Mobile Social Links with text labels */}
              <div className="flex flex-col gap-4 pt-4 border-t border-gray-700">
                <a 
                  href="https://www.linkedin.com/in/srinandan-m-n-b55bab321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-blue-400 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl transform transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-base relative">
                    LinkedIn
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                <a 
                  href="https://github.com/Srinandan2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-gray-300 transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl transform transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-base relative">
                    GitHub
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Add this to your global CSS or tailwind.config.js


export default NavBar;