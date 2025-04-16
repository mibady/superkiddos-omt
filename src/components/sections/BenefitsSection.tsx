import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Certified Therapist',
    description: 'Expert care from licensed OMT specialists with extensive pediatric experience.',
    icon: '/icons/therapist.svg',
    color: 'bg-blue-500',
  },
  {
    title: 'Personalized Plans',
    description: 'Customized treatment plans tailored to your child's specific needs and goals.',
    icon: '/icons/clipboard.svg',
    color: 'bg-orange-500',
  },
  {
    title: 'Non-Invasive Care',
    description: 'Gentle, comfortable techniques that children respond well to.',
    icon: '/icons/hand.svg',
    color: 'bg-blue-500',
  },
  {
    title: 'Root-Cause Therapy',
    description: 'Address underlying issues, not just symptoms, for lasting results.',
    icon: '/icons/network.svg',
    color: 'bg-orange-500',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20" id="benefits">
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
            See the difference proper oral development can make in your child's daily life.
          </p>
        </motion.div>

        {/* Before/After Transformation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <div className="relative">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/before-sleep.jpg"
                alt="Child with sleep breathing issues"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-gray-900 font-semibold">Before OMT</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/after-sleep.jpg"
                alt="Child sleeping peacefully after OMT"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-gray-900 font-semibold">After OMT</span>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className={`${feature.color} rounded-full p-3 flex-shrink-0`}>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-3 mb-4">
                Join Our Success Stories
              </h3>
              <p className="text-gray-600 mb-6">
                Experience the same transformation that hundreds of families 
                have already achieved with our proven OMT approach.
              </p>
              <button className="button-primary">
                Start Your Journey Today
              </button>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/images/success-story.jpg"
                alt="Happy families at SuperKiddos"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;