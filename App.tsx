import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import BackgroundEffect from './components/BackgroundEffect';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import { CursorVariant } from './types';

// AnimatedRoutes component to handle AnimatePresence logic
const AnimatedRoutes: React.FC<{
  onHoverStart: () => void;
  onHoverEnd: () => void;
}> = ({ onHoverStart, onHoverEnd }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
            path="/" 
            element={<Home onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} />} 
        />
        <Route 
            path="/about" 
            element={<About />} 
        />
        <Route 
            path="/work" 
            element={<Projects onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} />} 
        />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");

  const onHoverStart = () => setCursorVariant("hover");
  const onHoverEnd = () => setCursorVariant("default");

  return (
    <div className="relative min-h-screen bg-background text-primary selection:bg-white selection:text-black">
      {/* Background Effect (Canvas) */}
      <BackgroundEffect />
      
      {/* Custom Cursor */}
      <CustomCursor variant={cursorVariant} />

      <Router>
        <Navigation onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} />
        <AnimatedRoutes onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} />
      </Router>
    </div>
  );
};

export default App;