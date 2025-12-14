import React from 'react';
import { motion } from 'framer-motion';
import SmoothTransition from '../components/SmoothTransition';
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectsProps {
    onHoverStart: () => void;
    onHoverEnd: () => void;
}

const projects: Project[] = [
  {
    id: 1,
    title: "STM32 RTOS Drone Controller",
    category: "EMBEDDED",
    description: "A custom flight controller firmware written in C++ using FreeRTOS. Features PID stabilization, sensor fusion (IMU), and custom radio protocol.",
    tech: ["C++", "STM32", "FreeRTOS", "I2C/SPI"],
    link: "https://github.com/gyanano"
  },
  {
    id: 2,
    title: "IoT Smart Greenhouse",
    category: "FULLSTACK & IOT",
    description: "Automated climate control system. ESP32 nodes send MQTT data to a Node.js backend, visualized on a React dashboard with real-time WebSocket updates.",
    tech: ["React", "Node.js", "MQTT", "ESP32", "InfluxDB"],
    link: "https://github.com/gyanano"
  },
  {
    id: 3,
    title: "Minimalist Portfolio V1",
    category: "WEB",
    description: "The previous iteration of my personal site. Focused on typography and brutalist aesthetics using pure CSS and Vanilla JS.",
    tech: ["HTML", "SCSS", "JavaScript"],
    link: "https://github.com/gyanano"
  },
];

const Projects: React.FC<ProjectsProps> = ({ onHoverStart, onHoverEnd }) => {
  return (
    <SmoothTransition>
      <div className="py-12">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 border-b border-white/20 pb-8 flex justify-between items-end"
        >
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">
                WORK
            </h1>
            <span className="font-mono text-gray-500 hidden md:inline-block text-sm">
                SELECTED PROJECTS (2021 - 2024)
            </span>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 group`}
            >
              {/* Abstract Visual Representation */}
              <div className="w-full md:w-1/2 h-[300px] md:h-[400px] bg-neutral-900 border border-neutral-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1),transparent_70%)]" />
                <div className="absolute inset-0 flex items-center justify-center font-mono text-9xl font-bold text-neutral-800 select-none">
                    0{project.id}
                </div>
                {/* Simulated Terminal/Code Overlay */}
                <div className="absolute bottom-0 left-0 p-4 font-mono text-xs text-green-500 opacity-50">
                    {`> initializing ${project.title.toLowerCase().replace(/ /g, '_')}...`} <br/>
                    {`> loading modules: [${project.tech.join(', ')}]`} <br/>
                    {`> status: ready`}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                     <span className="h-[1px] w-8 bg-white/50"></span>
                     <span className="font-mono text-xs tracking-widest text-gray-400">{project.category}</span>
                </div>
                
                <h2 
                    className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-white/80 transition-colors cursor-pointer"
                    onMouseEnter={onHoverStart}
                    onMouseLeave={onHoverEnd}
                >
                    {project.title}
                </h2>
                
                <p className="text-gray-400 leading-relaxed mb-8 font-mono text-sm">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-6">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:underline underline-offset-4 decoration-1 decoration-white/50">
                        <Github className="w-4 h-4" /> Code
                    </a>
                    {project.category !== "EMBEDDED" && (
                         <a href={project.link} target="_blank" rel="noopener noreferrer" 
                            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:underline underline-offset-4 decoration-1 decoration-white/50">
                             <ExternalLink className="w-4 h-4" /> Live Demo
                         </a>
                    )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer/Contact CTA */}
        <div className="mt-32 border-t border-white/10 pt-16 text-center">
            <h2 className="text-2xl font-mono mb-4 text-gray-400">Want to build something together?</h2>
            <a 
                href="mailto:contact@gyanano.dev" 
                onMouseEnter={onHoverStart} 
                onMouseLeave={onHoverEnd}
                className="text-4xl md:text-6xl font-bold hover:text-gray-300 transition-colors"
            >
                LET'S TALK
            </a>
        </div>
      </div>
    </SmoothTransition>
  );
};

export default Projects;