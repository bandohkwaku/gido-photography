'use client';

import Image from 'next/image';
import Navigation from '../components/Navigation';
import ScrollAnimation from '../components/ScrollAnimation';
import FloatingElements from '../components/FloatingElements';
import Footer from '../components/Footer';

export default function ContactUs() {

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      <Navigation />
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 sm:px-8 lg:px-12 min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/contact.jpg"
            alt="Contact Us"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollAnimation animationType="zoom">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 relative inline-block">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-2xl animate-pulse"></span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animationType="fade-up" delay={200}>
            <p className="text-lg text-gray-200">
              Let&apos;s start a conversation about your photography needs
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <ScrollAnimation animationType="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 relative inline-block">
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30 animate-pulse"></span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We&apos;d love to hear from you. Reach out to us through any of the channels below.
              </p>
            </div>
          </ScrollAnimation>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Email */}
            <ScrollAnimation animationType="fade-up" delay={100}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  <a 
                    href="mailto:gidowilly1@gmail.com" 
                    className="hover:text-black dark:hover:text-white transition-colors break-all"
                  >
                    gidowilly1@gmail.com
                  </a>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Send us an email anytime
                </p>
              </div>
            </ScrollAnimation>

            {/* Phone */}
            <ScrollAnimation animationType="fade-up" delay={200}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <a 
                    href="tel:+233247938292" 
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    0247938292
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <a 
                    href="tel:+233530053337" 
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    0530053337
                  </a>
                </p>
              </div>
            </ScrollAnimation>

            {/* Location */}
            <ScrollAnimation animationType="fade-up" delay={300}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Accra - Ghana
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Serving clients worldwide
                </p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Social Media Section */}
          <ScrollAnimation animationType="fade-up" delay={400}>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">Follow Us</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Stay connected with us on social media
                </p>
              </div>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://www.instagram.com/weddings_n_vows/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-200 group"
                  aria-label="Instagram - Weddings and Vows"
                >
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/gido_photography/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-200 group"
                  aria-label="Instagram - Gido Photography"
                >
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@weddings_n_vows?_r=1&_t=ZM-928FgsWHAca" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-200 group"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <Footer />
    </div>
  );
}

