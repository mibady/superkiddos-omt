import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>SuperKiddos Dental & Orthodontics - Oral Facial Myotherapy</title>
        <meta name="description" content="Transform your child's oral health with our expert Oral Facial Myotherapy services. Better breathing, better sleep, better life." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="relative w-40 h-10">
            <Image
              src="/logo.svg"
              alt="SuperKiddos Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#benefits" className="text-gray-600 hover:text-primary-600">Benefits</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary-600">Success Stories</a>
            <a href="#faq" className="text-gray-600 hover:text-primary-600">FAQ</a>
            <button className="button-primary">Schedule Consultation</button>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Benefits Section */}
        <section className="py-20 bg-white" id="benefits">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Child's Health with OMT
              </h2>
              <p className="text-xl text-gray-600">
                Our specialized Oral Facial Myotherapy helps children breathe better,
                sleep better, and live healthier lives.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: 'Certified Therapist',
                  description: 'Expert care from certified OMT specialists',
                  icon: '/icons/heart.svg'
                },
                {
                  title: 'Personalized Plans',
                  description: 'Customized treatment for your child's needs',
                  icon: '/icons/smile.svg'
                },
                {
                  title: 'Non-Invasive Care',
                  description: 'Gentle techniques for lasting results',
                  icon: '/icons/moon.svg'
                },
                {
                  title: 'Root-Cause Therapy',
                  description: 'Addressing core issues, not just symptoms',
                  icon: '/icons/chat.svg'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-primary-50 rounded-xl p-6 text-center"
                >
                  <div className="relative w-12 h-12 mx-auto mb-4">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Before/After Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="text-center">
                  <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    {/* Add before image when available */}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Before OMT</h3>
                  <p className="text-gray-600">Struggling with sleep and breathing</p>
                </div>
                <div className="text-center">
                  <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    {/* Add after image when available */}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">After OMT</h3>
                  <p className="text-gray-600">Improved sleep and breathing patterns</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Start Your Child's Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Schedule a free consultation today and discover how OMT can help your child thrive.
              </p>
              <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition duration-300">
                Schedule Free Consultation
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}