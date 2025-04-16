import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactForm from '@/components/sections/ContactForm';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function Home() {
  return (
    <>
      <Head>
        <title>SuperKiddos Dental & Orthodontics - Oral Facial Myotherapy</title>
        <meta name="description" content="Transform your child's oral health with our expert Oral Facial Myotherapy services. Better breathing, better sleep, better life." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <BenefitsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactForm />
        <FinalCTASection />
      </main>
    </>
  );
}