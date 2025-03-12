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
      className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 
        className="text-white font-bold text-2xl mb-4 text-center"
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
        <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
          <GitHubCalendar
            username={username}
            colorScheme="dark"
            blockSize={getBlockSize()}
            blockMargin={getBlockMargin()}
            fontSize={getFontSize()}
            theme={{
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            to={new Date()} // Explicitly set today as the end date
            renderLoading={() => (
              <div className="flex justify-center items-center h-24">
                <p className="text-gray-400">Loading contributions...</p>
              </div>
            )}
          />
        </div>
      </motion.div>
      
      <motion.div
        className="text-center text-gray-400 text-sm mt-4"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        View more on my <a href={`https://github.com/${username}`} className="text-blue-400 hover:underline transition-all" target="_blank" rel="noopener noreferrer">GitHub profile</a>
      </motion.div>
    </motion.div>
  );
};

export default GitHubActivity;