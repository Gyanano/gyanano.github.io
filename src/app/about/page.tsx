'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Simplified background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-teal-900/10"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      {/* Content */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
              About Me
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Passionate about creating beautiful, functional web experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  I&apos;m a passionate full-stack developer with expertise in modern web technologies. 
                  I love creating seamless user experiences and robust backend systems.
                </p>
                <p>
                  With a strong foundation in React, Next.js, Node.js, and TypeScript, I build 
                  scalable applications that solve real-world problems.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing 
                  to open source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
                    'MongoDB', 'AWS', 'Docker', 'Git', 'Figma', 'Tailwind CSS'
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg p-3 text-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    >
                      <span className="text-white/90 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 relative overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}