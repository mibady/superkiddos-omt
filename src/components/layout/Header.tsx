import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">SuperKiddos</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#benefits" className="text-gray-600 hover:text-primary-600 transition-colors">
              Benefits
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-primary-600 transition-colors">
              Success Stories
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-primary-600 transition-colors">
              FAQ
            </Link>
            <Link href="#contact" 
              className="button-primary"
            >
              Schedule Consultation
            </Link>
          </div>

          <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100">
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;