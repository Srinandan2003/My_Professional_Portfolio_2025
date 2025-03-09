import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiMongoose, SiRedux, SiCsswizardry } from 'react-icons/si';
import { FaHtml5, FaNode, FaJsSquare } from 'react-icons/fa';

// Technology data array with enhanced animation properties and glow colors
const technologies = [
  { Icon: RiReactjsLine, color: 'text-cyan-400', duration: 3, label: 'React', delay: 0, glowFrom: 'from-cyan-400', glowTo: 'to-blue-500' },
  { Icon: SiMongodb, color: 'text-emerald-400', duration: 3.5, label: 'MongoDB', delay: 0.2, glowFrom: 'from-emerald-400', glowTo: 'to-green-500' },
  { Icon: SiMongoose, color: 'text-amber-600', duration: 4, label: 'Mongoose', delay: 0.4, glowFrom: 'from-amber-600', glowTo: 'to-yellow-500' },
  { Icon: FaNode, color: 'text-emerald-300', duration: 3.5, label: 'Node.js', delay: 0.6, glowFrom: 'from-emerald-300', glowTo: 'to-teal-500' },
  { Icon: FaJsSquare, color: 'text-amber-200', duration: 4.5, label: 'JavaScript', delay: 0.8, glowFrom: 'from-amber-200', glowTo: 'to-yellow-400' },
  { Icon: SiRedux, color: 'text-orange-600', duration: 5, label: 'Redux', delay: 1, glowFrom: 'from-orange-600', glowTo: 'to-purple-500' },
  { Icon: FaHtml5, color: 'text-orange-500', duration: 3.5, label: 'HTML5', delay: 1.2, glowFrom: 'from-orange-500', glowTo: 'to-red-500' },
  { Icon: SiCsswizardry, color: 'text-blue-500', duration: 4, label: 'CSS', delay: 1.4, glowFrom: 'from-blue-500', glowTo: 'to-indigo-500' }
];

const Technologies = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Enhanced floating animation
  const floatingAnimation = (duration) => ({
    y: [0, -15, 0],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
    }
  });

  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Item variants for entry animation
  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="py-16 md:py-24 lg:py-32 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="mb-16 text-center text-4xl md:text-5xl lg:text-6xl font-bold"
      >
        Technologies
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-16 px-4"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.label}
            variants={itemVariants}
            animate={hoveredIndex === index ? 
              { 
                scale: 1.2,
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              } : 
              floatingAnimation(tech.duration)
            }
            className="flex flex-col items-center gap-3"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            role="button"
            tabIndex={0}
          >
            <motion.div
              className={`relative p-4 md:p-6 rounded-full bg-gray-800 bg-opacity-40 backdrop-blur-sm overflow-hidden`}
              whileHover={{ 
                rotate: [0, -10, 10, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
            >
              {/* Constant gradient glow effect */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-r ${tech.glowFrom} ${tech.glowTo} opacity-40 rounded-full`}
                animate={{ 
                  opacity: [0.2, 0.4, 0.2], 
                  scale: [0.85, 1, 0.85],
                  rotate: [0, 180, 360],
                }}
                transition={{ 
                  duration: 8, 
                  ease: "linear", 
                  repeat: Infinity,
                  delay: index * 0.5, // Stagger the animations
                }}
              />
              
              {/* Constant pulsing ring */}
              <motion.div 
                className={`absolute inset-0 rounded-full`}
                animate={{ 
                  boxShadow: [
                    `0 0 0 2px rgba(var(--${tech.color.replace('text-', '')}), 0.1)`,
                    `0 0 0 4px rgba(var(--${tech.color.replace('text-', '')}), 0.2)`,
                    `0 0 0 2px rgba(var(--${tech.color.replace('text-', '')}), 0.1)`
                  ],
                }}
                transition={{ 
                  duration: 3, 
                  ease: "easeInOut", 
                  repeat: Infinity,
                  delay: index * 0.3, // Stagger the animations
                }}
              />
              
              <tech.Icon 
                className={`relative z-10 text-6xl md:text-8xl lg:text-9xl ${tech.color} transition-all duration-300`} 
              />
            </motion.div>
            <motion.span 
              className="text-base md:text-lg font-medium opacity-80"
              animate={hoveredIndex === index ? 
                { opacity: 1 } : 
                { opacity: 0.8 }
              }
            >
              {tech.label}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;