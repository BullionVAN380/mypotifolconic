"use client";

import { motion } from 'framer-motion';

const experiences = [
  {
    period: '2024 - Present',
    title: 'Full Stack Developer',
    company: 'Kinango Technical & Vocational College.',
    description: 'Leading development of enterprise web applications using Next.js and TypeScript. Implementing modern CI/CD practices and mentoring junior developers.',
  },
  {
    period: '2021 - 2024',
    title: 'Full Stack Developer',
    company: 'THE P.O COMPUTERS AND ICT EXPERTS.',
    description: 'Developed and maintained multiple client projects. Specialized in React, Node.js, and cloud infrastructure using AWS.',
  },
  {
    period: '2019 - 2021',
    title: 'Web Developer',
    company: 'Creative Agency',
    description: 'Created responsive websites and e-commerce solutions. Worked directly with clients to gather requirements and implement solutions.',
  },
];

const education = [
  {
    period: '2015 - 2019',
    degree: 'Diploma In ICT',
    institution: 'Kinango Technical & Vocational College',
    description: 'Focus on web technologies. Graduated with honors.',
  },
];

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2023',
  },
  {
    name: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    year: '2022',
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            A summary of my professional journey and achievements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`md:col-span-1 ${
                index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-3'
              }`}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{exp.title}</h3>
                  <span className="text-sm text-purple-600 dark:text-purple-400">{exp.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{edu.degree}</h4>
                    <span className="text-sm text-purple-600 dark:text-purple-400">{edu.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            <div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">Professional Certifications</h4>
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-4 last:mb-0"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-100">{cert.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                      </div>
                      <span className="text-sm text-purple-600 dark:text-purple-400">{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="/resu.pdf"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 
              text-white rounded-full hover:opacity-90 transition-opacity transform hover:scale-105 
              duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Download Full Resume
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
