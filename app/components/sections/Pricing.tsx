"use client";

import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Basic',
    price: '15,000',
    description: 'Perfect for small business websites and simple applications',
    features: [
      'Custom Website Design',
      'Mobile Responsive',
      'Basic SEO Setup',
      '3 Pages',
      'Contact Form',
      '2 Rounds of Revisions',
      '1 Month Support',
    ],
    recommended: false,
  },
  {
    name: 'Professional',
    price: '60,000',
    description: 'Ideal for growing businesses needing advanced features',
    features: [
      'Everything in Basic',
      'Up to 8 Pages',
      'Advanced SEO Optimization',
      'E-commerce Integration',
      'Custom Animations',
      '4 Rounds of Revisions',
      '3 Months Support',
      'Performance Optimization',
    ],
    recommended: true,
  },
  {
    name: 'Dynamic Website',
    price: '100,000',
    description: 'For large-scale applications with specific requirements',
    features: [
      'CMS Integration',
      'Database Management',
      'Free Domain',
      'Content Updates',
      'User Management',
      'Advanced Search',
      'Custom Design',
      'Fast Performance',
      'Auto Backups',
      '24/7 Support',
    ],
    recommended: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
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
              Pricing Plans
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Let&apos;s find the perfect plan for your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.recommended
                  ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white shadow-xl transform hover:-translate-y-1'
                  : 'bg-white dark:bg-gray-800 hover:shadow-xl transform hover:-translate-y-1'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-xl font-semibold mb-2 ${!plan.recommended && 'text-gray-800 dark:text-gray-100'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-sm">KSH</span>
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <p className={`text-sm ${!plan.recommended && 'text-gray-600 dark:text-gray-300'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className={`w-5 h-5 mr-3 ${
                        plan.recommended ? 'text-white' : 'text-purple-600 dark:text-purple-400'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={`text-sm ${
                      !plan.recommended && 'text-gray-600 dark:text-gray-300'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-block px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-white text-purple-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90'
                  }`}
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need a custom solution? Let&apos;s discuss your specific requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
          >
            Contact for Custom Quote
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
