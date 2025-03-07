"use client";

import Header from './components/layout/Header';
import Services from './components/sections/Services';
import Pricing from './components/sections/Pricing';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Hello, I&apos;m Josphat Baraka
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12">
              I excel at crafting elegant digital solutions that solve problems and make life easier.
              I am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full 
                  hover:opacity-90 transition-opacity shadow-lg hover:shadow-purple-500/25"
              >
                Hire Me
              </motion.a>
              <motion.a
                href="#resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full 
                  hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
              >
                View Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20"
          >
            {[
              { value: '20+', label: 'Projects Completed' },
              { value: '3+', label: 'Years of Experience' },
              { value: '10+', label: 'Technologies Mastered' },
              { value: '700+', label: 'Code Commits' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
      </section>

      <Services />
      <Pricing />
      <Resume />
      <Contact />
    </main>
  );
}
