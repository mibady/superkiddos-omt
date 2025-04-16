import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  parentName: string;
  childName: string;
  childAge: string;
  email: string;
  phone: string;
  concerns: string[];
  message: string;
}

const concerns = [
  'Mouth Breathing',
  'Sleep Issues',
  'Speech Difficulties',
  'Dental Problems',
  'Poor Concentration',
  'Other',
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    concerns: [],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      // Reset form after success
      setFormData({
        parentName: '',
        childName: '',
        childAge: '',
        email: '',
        phone: '',
        concerns: [],
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConcernToggle = (concern: string) => {
    setFormData(prev => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter(c => c !== concern)
        : [...prev.concerns, concern],
    }));
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-12">
              <h2 className="heading-2 text-center mb-8">
                Schedule a Free Consultation
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">
                      Parent's Name *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      required
                      value={formData.parentName}
                      onChange={e => setFormData(prev => ({ ...prev, parentName: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">
                      Child's Name *
                    </label>
                    <input
                      type="text"
                      id="childName"
                      required
                      value={formData.childName}
                      onChange={e => setFormData(prev => ({ ...prev, childName: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">
                      Child's Age *
                    </label>
                    <input
                      type="text"
                      id="childAge"
                      required
                      value={formData.childAge}
                      onChange={e => setFormData(prev => ({ ...prev, childAge: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Areas of Concern (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {concerns.map(concern => (
                      <label
                        key={concern}
                        className={`flex items-center p-3 rounded-md cursor-pointer transition-colors ${
                          formData.concerns.includes(concern)
                            ? 'bg-primary-50 border-primary-500'
                            : 'bg-gray-50 border-gray-300'
                        } border`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.concerns.includes(concern)}
                          onChange={() => handleConcernToggle(concern)}
                          className="sr-only"
                        />
                        <span className="text-sm">{concern}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Please share any additional concerns or questions..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`button-primary w-full sm:w-auto ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
                  </button>
                </div>
              </form>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 p-4 bg-green-50 text-green-700 rounded-md text-center"
                >
                  Thank you! We'll contact you soon to schedule your consultation.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 p-4 bg-red-50 text-red-700 rounded-md text-center"
                >
                  Something went wrong. Please try again or contact us directly.
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;