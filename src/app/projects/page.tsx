'use client';

import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      icon: '🛒',
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      icon: '📋',
      github: '#',
      demo: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth animations, dark mode support, and optimized performance. Built with modern web technologies.',
      technologies: ['Next.js', 'GSAP', 'Framer Motion', 'Tailwind CSS'],
      icon: '🎨',
      github: '#',
      demo: '#'
    },
    {
      title: 'Real-time Chat Application',
      description: 'A real-time messaging platform with file sharing, emoji support, and group chat functionality.',
      technologies: ['React', 'Node.js', 'Socket.io', 'Redis', 'MongoDB'],
      icon: '💬',
      github: '#',
      demo: '#'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for data visualization with charts, graphs, and real-time updates.',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      icon: '📊',
      github: '#',
      demo: '#'
    },
    {
      title: 'Weather App',
      description: 'A beautiful weather application with location-based forecasts and interactive maps.',
      technologies: ['React Native', 'TypeScript', 'Weather API', 'Maps API'],
      icon: '🌤️',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Simplified background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-teal-900/10"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      {/* Content */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
              My Projects
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-6xl">{project.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex-1 py-2 px-4 border border-white/30 rounded-lg text-center text-white/90 hover:bg-white/10 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-center text-white font-medium hover:shadow-lg transition-all"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="https://github.com/gyanano"
              className="inline-flex items-center px-8 py-4 border border-white/30 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View All on GitHub →
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}