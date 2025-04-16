import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Better Breathing',
    description: 'Develop proper nasal breathing patterns for improved oxygen flow and facial development.',
    image: '/images/better-breathing.jpg',
    delay: 0.1,
  },
  {
    title: 'Improved Sleep',
    description: 'Experience deeper, more restful sleep leading to better daytime focus and behavior.',
    image: '/images/better-sleep.jpg',
    delay: 0.2,
  },
  {
    title: 'Enhanced Speech',
    description: 'Develop clearer pronunciation and more effective communication skills.',
    image: '/images/better-speech.jpg',
    delay: 0.3,
  },
  {
    title: 'Proper Development',
    description: 'Support optimal facial and oral development, reducing the need for future interventions.',
    image: '/images/proper-development.jpg',
    delay: 0.4,
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-2 mb-6">
            Transform Your Child's Life with OMT
          </h2>
          <p className="text-xl text-gray-600">
            Our expert Oral Facial Myotherapy services provide lasting solutions 
            for better breathing, sleeping, and overall development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: benefit.delay }}
              className="relative"
            >
              <div className="group">
                <div className="relative h-64 overflow-hidden rounded-xl">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="relative -mt-24 mx-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-primary-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-3 mb-4">
                Our Comprehensive Approach
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">
                    Personalized treatment plans tailored to your child's specific needs
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">
                    Regular progress monitoring and adjustments
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">
                    Collaboration with other healthcare providers
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">
                    Parent education and home exercise support
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="text-center lg:text-left">
              <p className="text-lg text-gray-600 mb-6">
                Take the first step towards your child's better future. 
                Schedule a consultation to learn how OMT can help.
              </p>
              <button className="button-primary">
                Start Your Journey Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;