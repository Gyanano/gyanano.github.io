'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="section min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                I&apos;m a passionate full-stack developer with expertise in modern web technologies. 
                I love creating seamless user experiences and robust backend systems.
              </p>
              <p>
                With a strong foundation in React, Next.js, Node.js, and TypeScript, 
                I build scalable applications that solve real-world problems.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            {/* Skills */}
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
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <span className="text-white/90 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 relative overflow-hidden">
              {/* Placeholder for profile image */}
              <div className="aspect-square bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <motion.div 
                className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}