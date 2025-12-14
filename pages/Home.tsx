import React from 'react';
import { motion } from 'framer-motion';
import SmoothTransition from '../components/SmoothTransition';
import { ArrowRight, Cpu, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, skewY: 5 },
  visible: { 
    y: 0, 
    opacity: 1, 
    skewY: 0,
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 15 
    } 
  }
};

const Home: React.FC<HomeProps> = ({ onHoverStart, onHoverEnd }) => {
  return (
    <SmoothTransition>
      <div className="flex flex-col justify-center min-h-[80vh]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Decorative small text */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-12 bg-white/50"></span>
            <span className="font-mono text-xs md:text-sm text-gray-400 tracking-[0.2em]">
              INTP // DEVELOPER // MAKER
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="font-sans font-black text-6xl md:text-8xl lg:text-9xl leading-tight mix-blend-difference text-white">
            <motion.div variants={itemVariants} className="flex items-center">
              FULL
              <Code2 className="w-8 h-8 md:w-16 md:h-16 ml-4 text-gray-500 stroke-1" />
            </motion.div>
            <motion.div variants={itemVariants} className="ml-12 md:ml-24 text-gray-400 opacity-80">
              STACK
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="text-xl md:text-3xl font-mono font-light text-white bg-neutral-900 px-4 py-2 border border-neutral-700">
                 & 
              </span>
              EMBEDDED
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center">
              ENGINEER
              <Cpu className="w-8 h-8 md:w-16 md:h-16 ml-4 animate-pulse text-white stroke-1" />
            </motion.div>
          </div>

          {/* Subtitle / Intro */}
          <motion.p 
            variants={itemVariants} 
            className="mt-12 max-w-xl text-sm md:text-base text-gray-400 font-mono leading-relaxed"
          >
            I craft efficient digital systems, bridging the gap between hardware and software. 
            From bare-metal MCU firmware to modern React web applications.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-12">
            <Link 
              to="/work"
              onMouseEnter={onHoverStart} 
              onMouseLeave={onHoverEnd}
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-transparent border border-white/20 hover:border-white transition-colors duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
              <span className="relative font-bold tracking-widest text-white group-hover:text-black transition-colors duration-300">EXPLORE WORK</span>
              <ArrowRight className="relative w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating geometric decorative elements */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="absolute right-0 top-1/4 -z-10 opacity-20"
        >
             <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                    d="M200 0L400 200L200 400L0 200L200 0Z" 
                    stroke="white" 
                    strokeWidth="1"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle 
                    cx="200" cy="200" r="100" 
                    stroke="white" 
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
             </svg>
        </motion.div>
      </div>
    </SmoothTransition>
  );
};

export default Home;