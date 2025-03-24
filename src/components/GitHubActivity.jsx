import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

const GitHubActivity = ({ username }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Handle resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById("github-activity-section");
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  // Calculate responsive sizes
  const getBlockSize = () => {
    if (windowWidth < 640) return 8; // Small screens
    if (windowWidth < 1024) return 12; // Medium screens
    return 14; // Large screens
  };

  const getBlockMargin = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  const getFontSize = () => {
    if (windowWidth < 640) return 12;
    if (windowWidth < 1024) return 14;
    return 16;
  };

  return (
    <motion.div
      id="github-activity-section"
      className="p-8 rounded-xl relative overflow-hidden border border-gray-700"
      style={{
        background: "linear-gradient(135deg, rgba(17, 24, 39, 0.85), rgba(15, 18, 25, 0.9))",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4), 0 0 20px rgba(44, 130, 201, 0.15)"
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background subtle glow effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <motion.h2 
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 font-bold text-3xl mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          My GitHub Contributions
        </motion.h2>
        
        <motion.div 
          className="flex justify-center overflow-x-auto px-2 py-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-md border border-gray-800 shadow-lg" 
            style={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.15)" }}>
            <GitHubCalendar
              username={username}
              colorScheme="dark"
              blockSize={getBlockSize()}
              blockMargin={getBlockMargin()}
              fontSize={getFontSize()}
              theme={{
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
              to={new Date()} 
              renderLoading={() => (
                <div className="flex justify-center items-center h-24">
                  <div className="animate-pulse flex space-x-2">
                    <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                    <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                    <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                  </div>
                </div>
              )}
            />
          </div>
        </motion.div>
        
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a 
            href={`https://github.com/${username}`} 
            className="text-gray-300 text-sm hover:text-blue-400 transition-all inline-flex items-center group"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="mr-2">View more on GitHub</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GitHubActivity;