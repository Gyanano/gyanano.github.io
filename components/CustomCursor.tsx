import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MousePosition, CursorVariant } from '../types';

interface CustomCursorProps {
  variant: CursorVariant;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ variant }) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      mixBlendMode: "difference" as any,
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "rgba(255, 255, 255, 1)",
      border: "0px solid transparent",
      mixBlendMode: "difference" as any,
    },
    text: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 32,
      height: 64,
      width: 4,
      backgroundColor: "rgba(255, 255, 255, 1)",
      border: "0px solid transparent",
      mixBlendMode: "difference" as any,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
      variants={variants}
      animate={variant}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
    />
  );
};

export default CustomCursor;