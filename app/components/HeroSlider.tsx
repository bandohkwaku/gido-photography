'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/hero/GIDO00934-min.JPG',
    title: "Capturing Life's",
    subtitle: 'Beautiful Moments',
    description: 'Professional photography that tells your story with elegance and artistry',
  },
  {
    id: 2,
    image: '/images/hero/GIDO0575-min.JPG',
    title: 'Wedding Photography',
    subtitle: 'Unforgettable Memories',
    description: 'Capture your special day with timeless elegance and beautiful storytelling',
  },
  {
    id: 3,
    image: '/images/hero/GIDO0920 2-min.jpg',
    title: 'Portrait Sessions',
    subtitle: 'Express Your Story',
    description: 'Professional portraits that reveal your unique personality and style',
  },
  {
    id: 4,
    image: '/images/hero/GIDO93960-min.jpg',
    title: 'Event Photography',
    subtitle: 'Capture Every Moment',
    description: 'Document your events with professional photography that tells the complete story',
  },
  {
    id: 5,
    image: '/images/hero/GIDO9956-1-min.JPG',
    title: 'Studio Photography',
    subtitle: 'Professional Excellence',
    description: 'Create stunning images in our professional studio with perfect lighting and composition',
  },
  {
    id: 6,
    image: '/images/hero/IMG_0932-min.JPG',
    title: 'Brand Photography',
    subtitle: 'Elevate Your Brand',
    description: 'Professional brand photography that showcases your products and services beautifully',
  },
  {
    id: 7,
    image: '/images/hero/IMG_6842-min.JPG',
    title: 'Commercial Photography',
    subtitle: 'Business Excellence',
    description: 'High-quality commercial photography for your business and marketing needs',
  },
  {
    id: 8,
    image: '/images/hero/IMG_7344-min.JPG',
    title: 'Lifestyle Photography',
    subtitle: 'Authentic Stories',
    description: 'Capture authentic moments and lifestyle photography that reflects your true self',
  },
  {
    id: 9,
    image: '/images/hero/IMG_7345-min.JPG',
    title: 'Creative Photography',
    subtitle: 'Artistic Vision',
    description: 'Creative and artistic photography that brings your vision to life',
  },
  {
    id: 10,
    image: '/images/hero/_IDO0985-min.jpg',
    title: 'Professional Services',
    subtitle: 'Excellence Delivered',
    description: 'Comprehensive photography services tailored to your unique needs and vision',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10 absolute inset-0 pointer-events-none'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {slide.title}
              {slide.subtitle && (
                <>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {slide.subtitle}
                  </span>
                </>
              )}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              {slide.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pointer-events-auto">
              <Link
                href="/ratecard"
                className="px-5 py-2.5 text-sm bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10">View Rates</span>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              <Link
                href="/contact-us"
                className="px-5 py-2.5 text-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-105 hover:-translate-y-1 active:scale-95 hover:shadow-xl group relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full hover:scale-125 ${
              index === currentSlide
                ? 'w-12 h-2 bg-white shadow-lg'
                : 'w-2 h-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20 md:left-auto md:right-8 md:transform-none">
        <svg
          className="w-6 h-6 text-white hover:scale-125 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

