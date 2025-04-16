import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">SuperKiddos</h3>
            <p className="text-gray-600 text-sm">
              Transforming children's lives through expert Oral Facial Myotherapy services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#benefits" className="text-gray-600 hover:text-primary-600 text-sm">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-600 hover:text-primary-600 text-sm">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-600 hover:text-primary-600 text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>123 Main Street</li>
              <li>Suite 100</li>
              <li>City, State 12345</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hours</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: 9am - 2pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} SuperKiddos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;