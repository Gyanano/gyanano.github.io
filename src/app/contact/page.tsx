'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
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
              Get In Touch
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-white/80 mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Project inquiry"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email</p>
                      <p className="text-white">hello@gyanano.dev</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">🐙</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">GitHub</p>
                      <a href="https://github.com/gyanano" className="text-white hover:text-blue-200 transition-colors">
                        @gyanano
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">💼</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">LinkedIn</p>
                      <a href="https://linkedin.com/in/gyanano" className="text-white hover:text-blue-200 transition-colors">
                        @gyanano
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">🐦</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Twitter</p>
                      <a href="https://twitter.com/gyanano" className="text-white hover:text-blue-200 transition-colors">
                        @gyanano
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8">
                <h4 className="text-lg font-semibold text-white mb-4">Quick Response</h4>
                <p className="text-white/70 leading-relaxed mb-4">
                  I typically respond to emails within 24 hours. For urgent inquiries, feel free to reach out on LinkedIn or Twitter.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Email Response</span>
                    <span className="text-white text-sm">&lt; 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Social Media</span>
                    <span className="text-white text-sm">&lt; 6 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Project Consultation</span>
                    <span className="text-white text-sm">Within 48 hours</span>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8">
                <h4 className="text-lg font-semibold text-white mb-4">Availability</h4>
                <p className="text-white/70 leading-relaxed mb-4">
                  Currently accepting new projects and collaborations.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">Available for new projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}