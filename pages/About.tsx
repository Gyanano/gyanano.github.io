import React from 'react';
import { motion } from 'framer-motion';
import SmoothTransition from '../components/SmoothTransition';
import { Terminal, Database, Cpu, Layers } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind", "Framer Motion", "Next.js"], icon: <Layers /> },
    { category: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL", "Docker"], icon: <Database /> },
    { category: "Embedded", items: ["C/C++", "RTOS", "STM32", "ESP32", "PCB Design"], icon: <Cpu /> },
    { category: "Tools", items: ["Git", "Linux", "VS Code", "PlatformIO", "Oscilloscopes"], icon: <Terminal /> },
  ];

  return (
    <SmoothTransition>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-12">
        {/* Left Col: Bio */}
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-none"
          >
            WHO <br/> <span className="text-gray-500">AM I?</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 text-gray-300 font-mono text-sm leading-relaxed text-justify"
          >
            <p>
              <span className="text-white font-bold bg-neutral-800 px-1">INTP-A.</span> 
              The Logician. I don't just write code; I construct logic architectures. 
              My passion lies in the deep dive—understanding how the electron moving through a transistor results in pixels on a screen.
            </p>
            <p>
              I currently work in the <span className="text-white border-b border-white">MCU Embedded</span> sector, bringing hardware to life. 
              However, my curiosity doesn't stop at the register level. I actively build full-stack web applications 
              because I believe the best systems are seamless from silicon to browser.
            </p>
            <p>
              My design philosophy is minimalist and functional, much like the code I strive to write. 
              I value clean abstractions, type safety, and efficient memory management.
            </p>
          </motion.div>

          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-[1px] bg-white/20 w-full my-12"
          />

          <div className="flex gap-8">
            <div className="text-center">
              <span className="block text-3xl font-bold text-white">04+</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Years Exp</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-white">20+</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Projects</span>
            </div>
          </div>
        </div>

        {/* Right Col: Skills */}
        <div className="flex flex-col justify-center">
           <div className="grid grid-cols-1 gap-6">
             {skills.map((skill, index) => (
               <motion.div
                 key={skill.category}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 + (index * 0.1) }}
                 className="group border border-white/10 p-6 hover:bg-white/5 transition-colors duration-300 relative overflow-hidden"
               >
                 <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-50 transition-opacity">
                    {skill.icon}
                 </div>
                 <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                   <span className="text-xs font-mono text-gray-500">0{index + 1}</span>
                   {skill.category}
                 </h3>
                 <div className="flex flex-wrap gap-2">
                   {skill.items.map(item => (
                     <span key={item} className="text-xs font-mono border border-gray-700 px-2 py-1 text-gray-400 group-hover:text-white group-hover:border-white/40 transition-colors">
                       {item}
                     </span>
                   ))}
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </SmoothTransition>
  );
};

export default About;