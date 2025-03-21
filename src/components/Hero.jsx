import React from 'react'
import ProfilePic from '../assets/SrinandanProfilePicture.jpg'
import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 10,
      duration: 0.8 
    }
  }
}

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 80, 
      delay: 0.2,
      duration: 1.2 
    }
  }
}

export const Hero = () => {
  // Google Drive link for viewing
  const viewUrl = "https://drive.google.com/file/d/1ZVXmH6L_hvv_bhmX5iPPi6_5uJZj2DJc/view?usp=sharing";
  
  // Local resume path in public folder for downloading
  const localResumePath = '/resume.pdf';
  
  // Function to handle both viewing (Google Drive) and download (local file)
  const handleResumeClick = (e) => {
    // Prevent the default anchor behavior
    e.preventDefault();
    
    // 1. Open Drive link in new tab for viewing
    window.open(viewUrl, '_blank');
    
    // 2. Use local file for download
    setTimeout(() => {
      // Create a link element for download
      const link = document.createElement('a');
      link.href = localResumePath;
      link.setAttribute('download', 'Srinandan_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 300); // Small delay to ensure view opens first
  };

  return (
    <div className='min-h-screen flex items-center py-16 lg:py-24'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap lg:flex-row-reverse items-center'>
          {/* Image Section */}
          <div className='w-full lg:w-1/2 mb-12 lg:mb-0'>
            <div className='flex justify-center lg:justify-end relative'>
              {/* Background decoration elements - made more transparent */}
              <motion.div 
                className='absolute w-64 h-64 rounded-full bg-gradient-to-r from-gray-200/10 to-white/10 opacity-10 blur-xl'
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: [0.8, 1.2, 0.8], 
                  opacity: [0.1, 0.2, 0.1],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{ top: '-20%', right: '15%' }}
              />
              
              <motion.div 
                className='absolute w-48 h-48 rounded-full bg-gradient-to-r from-white/10 to-gray-400/10 opacity-5 blur-xl'
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: [1, 0.7, 1], 
                  opacity: [0.1, 0.15, 0.1],
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{ bottom: '0%', left: '10%' }}
              />
              
              {/* Profile image with frame */}
              <motion.div
                className='relative z-10'
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              >
                <div className='relative'>
                  {/* Animated border */}
                  <motion.div 
                    className='absolute inset-0 rounded-3xl border-2 border-gray-400/30'
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0 rgba(156, 163, 175, 0.2)',
                        '0 0 0 8px rgba(156, 163, 175, 0)',
                        '0 0 0 0 rgba(156, 163, 175, 0.2)'
                      ] 
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                  
                  <img 
                    src={ProfilePic} 
                    alt="Srinandan Profile" 
                    width={400}
                    height={400}
                    className='rounded-3xl object-cover shadow-2xl shadow-gray-900/10 border-2 border-gray-500/20'
                  />
                  
                  {/* Subtle overlay gradient - made more transparent */}
                  <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-700/5 to-transparent pointer-events-none' />
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className='w-full lg:w-1/2'>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className='flex flex-col items-center lg:items-start space-y-6'
            >
              <div className='space-y-3'>
                <motion.h2 
                  variants={childVariants} 
                  className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter bg-gradient-to-r from-white via-gray-500 to-white bg-clip-text text-transparent'
                >
                  Srinandan
                </motion.h2>
                
                <motion.div variants={childVariants}>
                  <span className='relative inline-block'>
                    <span className='bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight'>
                      Full Stack Developer
                    </span>
                    <motion.span 
                      className='absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-white via-gray-500 to-white'
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </span>
                </motion.div>
              </div>
              
              <motion.p 
                variants={childVariants} 
                className='my-2 max-w-lg py-4 text-lg md:text-xl leading-relaxed tracking-tight text-gray-300'
              >
                {HERO_CONTENT}
              </motion.p>
              
              {/* Resume button with hover effect */}
              <motion.div variants={childVariants}>
                <motion.a 
                  href={viewUrl}
                  onClick={handleResumeClick}
                  className='relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full group bg-gradient-to-r from-gray-500/80 to-gray-700/80 text-white shadow-lg backdrop-blur-sm'
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 } 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className='relative flex items-center gap-2 text-sm md:text-base font-medium'>
                    <svg 
                      className='w-5 h-5' 
                      fill='none' 
                      stroke='currentColor' 
                      viewBox='0 0 24 24' 
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path 
                        strokeLinecap='round' 
                        strokeLinejoin='round' 
                        strokeWidth={2} 
                        d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                      />
                    </svg>
                    Download Resume
                    <motion.span 
                      className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-gray-400/80 to-gray-600/80 -z-10'
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;