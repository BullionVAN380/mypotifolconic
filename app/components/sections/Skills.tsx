"use client";

import { motion } from 'framer-motion';

const skills = {
  'Frontend Development': [
    { name: 'React/Next.js', level: 90, icon: '⚛️' },
    { name: 'TypeScript', level: 85, icon: '📘' },
    { name: 'Tailwind CSS', level: 90, icon: '🎨' },
    { name: 'HTML/CSS', level: 95, icon: '🌐' },
  ],
  'Backend Development': [
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'SQL', level: 85, icon: '📊' },
    { name: 'RESTful APIs', level: 85, icon: '🔌' },
  ],
  'ICT & Systems': [
    { name: 'Network Administration', level: 85, icon: '🌐' },
    { name: 'Hardware Troubleshooting', level: 90, icon: '🔧' },
    { name: 'System Security', level: 80, icon: '🔒' },
    { name: 'Cloud Services', level: 75, icon: '☁️' },
  ],
  'Tools & Others': [
    { name: 'Git/GitHub', level: 85, icon: '📦' },
    { name: 'Docker', level: 70, icon: '🐳' },
    { name: 'CI/CD', level: 75, icon: '🔄' },
    { name: 'Agile/Scrum', level: 80, icon: '📋' },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise in web development and ICT.
            Each skill represents years of practical experience and continuous learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {category}
              </h3>
              <div className="space-y-6">
                {skillList.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Always learning and expanding my skill set. Currently exploring new technologies in
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> AI Development</span> and
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> Cloud Architecture</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
