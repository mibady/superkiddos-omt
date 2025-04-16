import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is Oral Facial Myotherapy (OMT)?",
    answer: "OMT is a therapeutic approach that helps retrain the muscles of the face, mouth, and throat to establish proper breathing, swallowing, and oral resting postures. It's particularly effective for children with breathing, sleeping, or speech issues."
  },
  {
    question: "At what age should my child start OMT?",
    answer: "OMT can be beneficial for children as young as 4 years old, though the ideal age varies depending on individual needs. Early intervention is often most effective, but OMT can help at any age."
  },
  {
    question: "How long does treatment typically take?",
    answer: "Treatment duration varies based on individual needs, but typically ranges from 6-12 months. Sessions are usually weekly or bi-weekly, with exercises to practice at home between visits."
  },
  {
    question: "Will my insurance cover OMT?",
    answer: "Many insurance plans cover OMT. We'll help verify your coverage and explain any out-of-pocket costs before beginning treatment. We also offer flexible payment plans."
  },
  {
    question: "What results can I expect?",
    answer: "Most parents notice improvements in their child's breathing, sleep quality, and oral habits within the first few months. Long-term benefits include better facial development, improved speech, and reduced need for orthodontic intervention."
  },
  {
    question: "Is OMT painful or uncomfortable?",
    answer: "No, OMT is gentle and non-invasive. Our therapists make the sessions fun and engaging for children, often incorporating games and rewards into the exercises."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20" id="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-2 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about Oral Facial Myotherapy and how it can help your child.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-primary-600 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="button-primary">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;