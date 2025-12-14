import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const SmoothTransition: React.FC<Props> = ({ children }) => {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-white z-[60] origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-white z-[60] origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full min-h-screen pt-24 pb-12 px-6 md:px-20 max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothTransition;