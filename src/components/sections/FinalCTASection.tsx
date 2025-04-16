import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FinalCTASection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-primary-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-full min-h-[400px] lg:min-h-[600px] order-2 lg:order-1">
                <Image
                  src="/images/happy-child-cta.jpg"
                  alt="Happy child with treatment success"
                  fill
                  className="object-cover"
                />
                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                  <Image
                    src="/icons/moon.svg"
                    alt="Sleep icon"
                    width={40}
                    height={40}
                    className="absolute top-[15%] right-[20%]"
                  />
                  <Image
                    src="/icons/heart.svg"
                    alt="Heart icon"
                    width={40}
                    height={40}
                    className="absolute top-[25%] left-[15%]"
                  />
                  <Image
                    src="/icons/smile.svg"
                    alt="Smile icon"
                    width={40}
                    height={40}
                    className="absolute bottom-[20%] right-[15%]"
                  />
                  <Image
                    src="/icons/chat.svg"
                    alt="Chat icon"
                    width={40}
                    height={40}
                    className="absolute bottom-[30%] left-[20%]"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 order-1 lg:order-2">
                <h2 className="heading-2 mb-6 text-primary-900">
                  Schedule a Free Consultation
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Take the first step towards better sleep, breathing, and development for your child.
                </p>

                {/* Consultation Preview */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden">
                      <Image
                        src="/images/doctor-consultation.jpg"
                        alt="Doctor consultation"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        What to Expect:
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          30-minute comprehensive evaluation
                        </li>
                        <li className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Personalized treatment plan
                        </li>
                        <li className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Insurance & payment options discussion
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button className="w-full button-primary text-lg py-4">
                    Schedule Your Free Consultation
                  </button>
                  <p className="text-center text-gray-500 text-sm">
                    Limited spots available. No obligation to proceed.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <p className="text-gray-600">Children Helped</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">4.9★</div>
              <p className="text-gray-600">Parent Rating</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;