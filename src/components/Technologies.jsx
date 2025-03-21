import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Icons
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiMongoose, SiRedux, SiCsswizardry, SiTailwindcss } from 'react-icons/si';
import { FaHtml5, FaNode, FaJsSquare, FaServer } from 'react-icons/fa';

// Technology data organized by categories with simplified metadata
const technologyCategories = {
  frontend: {
    name: "Frontend Development",
    description: "Creating responsive & interactive user interfaces",
    icon: RiReactjsLine,
    glowColor: "cyan",
    technologies: [
      { Icon: RiReactjsLine, color: "text-cyan-400", label: "React", glow: "0 0 15px rgba(34, 211, 238, 0.5)" },
      { Icon: SiRedux, color: "text-purple-600", label: "Redux", glow: "0 0 15px rgba(147, 51, 234, 0.5)" },
      { Icon: FaHtml5, color: "text-orange-500", label: "HTML5", glow: "0 0 15px rgba(249, 115, 22, 0.5)" },
      { Icon: SiCsswizardry, color: "text-blue-500", label: "CSS", glow: "0 0 15px rgba(59, 130, 246, 0.5)" },
      { Icon: SiTailwindcss, color: "text-sky-500", label: "Tailwind", glow: "0 0 15px rgba(14, 165, 233, 0.5)" }
    ]
  },
  backend: {
    name: "Backend Systems",
    description: "Building robust server-side architecture",
    icon: FaServer,
    glowColor: "emerald",
    technologies: [
      { Icon: FaNode, color: "text-emerald-300", label: "Node.js", glow: "0 0 15px rgba(110, 231, 183, 0.5)" },
      { Icon: FaServer, color: "text-gray-300", label: "Express", glow: "0 0 15px rgba(209, 213, 219, 0.5)" }
    ]
  },
  database: {
    name: "Database Solutions",
    description: "Efficient & scalable data management",
    icon: SiMongodb,
    glowColor: "green",
    technologies: [
      { Icon: SiMongodb, color: "text-emerald-400", label: "MongoDB", glow: "0 0 15px rgba(52, 211, 153, 0.5)" },
      { Icon: SiMongoose, color: "text-amber-600", label: "Mongoose", glow: "0 0 15px rgba(217, 119, 6, 0.5)" }
    ]
  },
  languages: {
    name: "Core Languages",
    description: "Fundamental programming expertise",
    icon: FaJsSquare,
    glowColor: "amber",
    technologies: [
      { Icon: FaJsSquare, color: "text-amber-200", label: "JavaScript", glow: "0 0 15px rgba(253, 230, 138, 0.5)" }
    ]
  }
};

const Technologies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewportWidth, setViewportWidth] = useState(0);
  
  // Handle responsive layouts
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get all technologies or filtered by category
  const displayedTechnologies = selectedCategory === 'all' 
    ? Object.entries(technologyCategories).flatMap(([key, category]) => 
        category.technologies.map(tech => ({
          ...tech,
          categoryKey: key,
          categoryName: category.name,
          categoryGlowColor: category.glowColor
        }))
      )
    : technologyCategories[selectedCategory]?.technologies.map(tech => ({
        ...tech,
        categoryKey: selectedCategory,
        categoryName: technologyCategories[selectedCategory].name,
        categoryGlowColor: technologyCategories[selectedCategory].glowColor
      })) || [];

  // Grid columns based on viewport size and category
  const gridCols = viewportWidth < 640 
    ? 'grid-cols-2' 
    : viewportWidth < 1024 
      ? selectedCategory === 'all' ? 'grid-cols-3' : 'grid-cols-2' 
      : selectedCategory === 'all' ? 'grid-cols-5' : 'grid-cols-3';

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        duration: 0.5
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      transition: { duration: 0.2 } 
    }
  };

  // Helper function to render the correct category icon
  const renderCategoryIcon = (category) => {
    const IconComponent = technologyCategories[category].icon;
    return <IconComponent className="text-4xl md:text-5xl" />;
  };

  return (
    <div className="relative min-h-screen py-8 px-4 md:px-6">
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
            style={{ textShadow: "0 0 20px rgba(56, 189, 248, 0.3)" }}
          >
            Technology Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Leveraging cutting-edge tools and frameworks
          </motion.p>
        </div>
        
        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button 
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === 'all' 
                ? 'bg-white/20 text-white backdrop-blur-sm shadow-lg' 
                : 'bg-white/10 text-gray-300 hover:bg-white/15'
            }`}
            style={{ 
              boxShadow: selectedCategory === 'all' 
                ? "0 0 15px rgba(255, 255, 255, 0.2), inset 0 0 5px rgba(255, 255, 255, 0.1)" 
                : "none"
            }}
          >
            All Technologies
          </button>
          
          {Object.entries(technologyCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === key 
                  ? 'bg-white/20 text-white backdrop-blur-sm shadow-lg' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/15'
              }`}
              style={{ 
                boxShadow: selectedCategory === key 
                  ? `0 0 15px rgba(255, 255, 255, 0.2), inset 0 0 5px rgba(255, 255, 255, 0.1)` 
                  : "none"
              }}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Selected Category Header */}
        {selectedCategory !== 'all' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 p-6 rounded-2xl backdrop-blur-sm border border-white/20"
            style={{ 
              boxShadow: `0 0 20px rgba(255, 255, 255, 0.05)` 
            }}
          >
            <div className="flex items-center gap-4">
              <div 
                className="p-4 rounded-xl bg-white/10 backdrop-blur"
                style={{ 
                  boxShadow: `0 0 15px rgba(255, 255, 255, 0.1)` 
                }}
              >
                {renderCategoryIcon(selectedCategory)}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {technologyCategories[selectedCategory].name}
                </h3>
                <p className="text-gray-300/70 mt-1">
                  {technologyCategories[selectedCategory].description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Technologies Grid */}
        <div className={`grid ${gridCols} gap-4 md:gap-6`}>
          <AnimatePresence mode="wait">
            {displayedTechnologies.map((tech) => (
              <motion.div
                key={`${tech.categoryKey}-${tech.label}`}
                layoutId={`${tech.categoryKey}-${tech.label}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden"
              >
                <div 
                  className="p-6 h-full rounded-2xl backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:border-white/40"
                  style={{ 
                    boxShadow: `0 0 20px rgba(255, 255, 255, 0.05)`,
                  }}
                >
                  {/* Tech content */}
                  <div className="relative flex flex-col items-center text-center h-full">
                    {/* Enlarged icon with glow */}
                    <tech.Icon 
                      className={`${tech.color} text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300`} 
                      style={{ 
                        filter: `drop-shadow(${tech.glow})`,
                        transition: "all 0.3s ease"
                      }}
                    />
                    
                    <h3 
                      className="text-lg font-bold"
                      style={{ 
                        textShadow: "0 0 10px rgba(255, 255, 255, 0.3)"
                      }}
                    >
                      {tech.label}
                    </h3>
                    {selectedCategory === 'all' && (
                      <p className="text-xs text-gray-400 mt-1">{tech.categoryName}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Simplified categories overview */}
        {selectedCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {Object.entries(technologyCategories).map(([key, category]) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={`overview-${key}`}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl backdrop-blur-sm border border-white/20"
                  style={{ 
                    boxShadow: `0 0 20px rgba(255, 255, 255, 0.05)` 
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <CategoryIcon 
                      className="text-3xl md:text-4xl" 
                      style={{ 
                        filter: `drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))`
                      }}
                    />
                    <h3 
                      className="text-xl md:text-2xl font-bold"
                      style={{ 
                        textShadow: "0 0 10px rgba(255, 255, 255, 0.2)"
                      }}
                    >
                      {category.name}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {category.technologies.map((tech) => (
                      <div
                        key={`tag-${key}-${tech.label}`}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/20"
                        style={{ 
                          boxShadow: `0 0 10px rgba(255, 255, 255, 0.05)` 
                        }}
                      >
                        <tech.Icon 
                          className={`${tech.color} text-sm`}
                          style={{ 
                            filter: `drop-shadow(${tech.glow.replace('15px', '5px')})`
                          }}
                        />
                        <span className="text-sm">{tech.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Technologies;