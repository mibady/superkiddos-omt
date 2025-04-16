import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image
              src="/logo.svg"
              alt="SuperKiddos"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="button-primary">
              Schedule Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute w-6 h-0.5 transform transition-all duration-300 ${
                  isOpen
                    ? 'bg-gray-900 rotate-45 top-2'
                    : 'bg-gray-900 rotate-0 top-0'
                }`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-gray-900 top-2 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute w-6 h-0.5 transform transition-all duration-300 ${
                  isOpen
                    ? 'bg-gray-900 -rotate-45 top-2'
                    : 'bg-gray-900 rotate-0 top-4'
                }`}
              />
            </div>
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
                  onClick={closeMenu}
                />
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl md:hidden"
                >
                  <div className="flex flex-col h-full">
                    <div className="overflow-y-auto flex-1 pt-16 pb-6 px-6">
                      <nav className="space-y-6">
                        {navItems.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={closeMenu}
                            className="block text-lg font-medium text-gray-900 hover:text-primary-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </nav>
                    </div>
                    <div className="p-6 border-t border-gray-200">
                      <button
                        onClick={closeMenu}
                        className="w-full button-primary"
                      >
                        Schedule Consultation
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Header;