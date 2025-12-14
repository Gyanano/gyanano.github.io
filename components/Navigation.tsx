import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavItem, CursorVariant } from '../types';

interface NavigationProps {
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const navItems: NavItem[] = [
  { id: 'home', label: '01 // HOME', path: '/' },
  { id: 'about', label: '02 // PROFILE', path: '/about' },
  { id: 'work', label: '03 // WORK', path: '/work' },
];

const Navigation: React.FC<NavigationProps> = ({ onHoverStart, onHoverEnd }) => {
  return (
    <nav className="fixed top-0 w-full z-40 px-6 py-8 flex justify-between items-center mix-blend-difference">
      <NavLink to="/" className="text-white font-bold tracking-tighter text-2xl group">
        <span className="inline-block group-hover:-rotate-12 transition-transform duration-300">G</span>
        <span className="inline-block group-hover:rotate-12 transition-transform duration-300">Y</span>
        <span className="hidden sm:inline">ANANO</span>
      </NavLink>

      <div className="flex space-x-8">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className={({ isActive }) =>
              `relative text-sm font-mono tracking-widest transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-gray-500 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 w-full h-[1px] bg-white"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;