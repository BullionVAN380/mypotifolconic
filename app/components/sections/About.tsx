"use client";

import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Client Satisfaction', value: '100%' },
    { label: 'Support', value: '24/7' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I&apos;m passionate about creating beautiful, functional, and user-friendly websites and applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="prose prose-lg dark:prose-invert">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                With over 3 years of experience in web development and IT solutions, I&apos;ve had the privilege 
                of working on diverse projects that have sharpened my skills in both front-end and back-end 
                development, as well as system administration.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I specialize in creating responsive, user-friendly web applications while maintaining robust 
                IT infrastructure. My approach combines creativity with technical expertise to deliver 
                solutions that not only look great but perform excellently.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="/resume.pdf" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 
                  text-white rounded-full hover:opacity-90 transition-opacity transform hover:scale-105 duration-300"
                download
              >
                Download Resume
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 
                  dark:text-purple-400 rounded-full hover:bg-purple-600 hover:text-white transition-colors 
                  transform hover:scale-105 duration-300"
              >
                Get in Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="aspect-square rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                {/* Replace with your image */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400">
                  Your Image Here
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                  >
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                      {stat.value}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
