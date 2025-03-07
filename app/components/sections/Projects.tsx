"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, featuring real-time inventory management and secure payment processing.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    image: '/projects/project1.jpg',
    demoUrl: '#',
    githubUrl: '#',
    category: 'Web Development',
  },
  {
    title: 'Network Monitoring Dashboard',
    description: 'Real-time network monitoring system for enterprise infrastructure, providing detailed analytics and alert management.',
    tech: ['React', 'Node.js', 'WebSocket', 'Docker'],
    image: '/projects/project2.jpg',
    demoUrl: '#',
    githubUrl: '#',
    category: 'ICT',
  },
  {
    title: 'Cloud-Based CRM',
    description: 'Custom CRM solution with automated workflow management and detailed reporting capabilities.',
    tech: ['Vue.js', 'Python', 'AWS', 'PostgreSQL'],
    image: '/projects/project3.jpg',
    demoUrl: '#',
    githubUrl: '#',
    category: 'Web Development',
  },
  {
    title: 'IT Asset Management System',
    description: 'Comprehensive system for tracking and managing IT assets, maintenance schedules, and compliance.',
    tech: ['React', 'Node.js', 'MySQL', 'Docker'],
    image: '/projects/project4.jpg',
    demoUrl: '#',
    githubUrl: '#',
    category: 'ICT',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            A selection of my best work showcasing my expertise in web development and IT solutions.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:opacity-75 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg">
                  Project Preview
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 text-sm text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.demoUrl}
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Code</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.48 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Here&apos;s a selection of my recent work that showcases my skills and expertise.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 
              text-white rounded-full hover:opacity-90 transition-opacity transform hover:scale-105 
              duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Let&apos;s Talk
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
