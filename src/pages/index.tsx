import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>SuperKiddos OMT - Transform Your Child's Health Through Oral Facial Myotherapy</title>
        <meta name="description" content="Expert Oral Facial Myotherapy services helping children breathe better, sleep better, and live healthier lives." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-20 py-10">
        {/* Hero Section Placeholder */}
        <section id="hero" className="min-h-[600px] flex items-center">
          <div className="container">
            <h1 className="heading-1 text-center max-w-4xl mx-auto">
              Help Your Child Breathe Better, Sleep Better, Live Better
            </h1>
          </div>
        </section>

        {/* Problem Section Placeholder */}
        <section id="problems" className="bg-gray-50 py-20">
          <div className="container">
            <h2 className="heading-2 text-center mb-10">
              Is Your Child Struggling With:
            </h2>
          </div>
        </section>

        {/* Solution Section Placeholder */}
        <section id="benefits" className="py-20">
          <div className="container">
            <h2 className="heading-2 text-center mb-10">
              Transform Your Child's Life with OMT
            </h2>
          </div>
        </section>

        {/* Testimonials Section Placeholder */}
        <section id="testimonials" className="bg-gray-50 py-20">
          <div className="container">
            <h2 className="heading-2 text-center mb-10">
              Success Stories from Happy Parents
            </h2>
          </div>
        </section>

        {/* FAQ Section Placeholder */}
        <section id="faq" className="py-20">
          <div className="container">
            <h2 className="heading-2 text-center mb-10">
              Frequently Asked Questions
            </h2>
          </div>
        </section>

        {/* CTA Section Placeholder */}
        <section id="contact" className="bg-primary-600 text-white py-20">
          <div className="container text-center">
            <h2 className="heading-2 mb-6">
              Ready to Start Your Child's Journey?
            </h2>
            <button className="button-secondary">
              Schedule Your Consultation
            </button>
          </div>
        </section>
      </div>
    </>
  );
}