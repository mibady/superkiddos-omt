import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote: "The transformation in my daughter's sleep and breathing has been remarkable. She's more energetic and focused at school now.",
    author: "Sarah M.",
    role: "Parent of 8-year-old",
    rating: 5,
    image: "/images/parent-testimonial-1.jpg"
  },
  {
    quote: "We noticed improvements in our son's speech clarity within weeks. The therapists are amazing with children!",
    author: "Michael R.",
    role: "Parent of 6-year-old",
    rating: 5,
    image: "/images/parent-testimonial-2.jpg"
  },
  {
    quote: "The team's expertise and caring approach made all the difference. Our child actually looks forward to the sessions.",
    author: "Jennifer K.",
    role: "Parent of 7-year-old",
    rating: 5,
    image: "/images/parent-testimonial-3.jpg"
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20" id="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-2 mb-6">
            Success Stories from Happy Parents
          </h2>
          <p className="text-xl text-gray-600">
            See how OMT has transformed the lives of children and their families.
          </p>
        </motion.div>

        {/* Featured Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16"
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="relative h-80 md:h-full min-h-[400px]">
              <Image
                src="/images/success-families.jpg"
                alt="Happy families at SuperKiddos"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Image
                  src="/logo.svg"
                  alt="SuperKiddos Logo"
                  width={150}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <blockquote className="text-xl text-gray-600 mb-6">
                "SuperKiddos has been a game-changer for our family. The improvement in our daughter's sleep and overall well-being has been incredible."
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <cite className="not-italic font-semibold text-gray-900">
                    The Anderson Family
                  </cite>
                  <p className="text-sm text-gray-500">
                    6 months of OMT treatment
                  </p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Individual Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-primary-600 rounded-full p-2 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-600 mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="mt-auto">
                <cite className="not-italic font-semibold text-gray-900">
                  {testimonial.author}
                </cite>
                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join the many families who have discovered the life-changing benefits of OMT.
            </p>
            <button className="button-primary">
              Schedule Your Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;