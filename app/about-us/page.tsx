'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import ScrollAnimation from '../components/ScrollAnimation';
import FloatingElements from '../components/FloatingElements';
import Footer from '../components/Footer';

export default function AboutUs() {
  const [activeFilter, setActiveFilter] = useState('Wedding');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Image arrays for each filter
  const imageArrays = {
    'Brands': [
      '/images/Brand images/brand-1.jpg',
      '/images/Brand images/brand-3.jpg',
      '/images/Brand images/brand-4.jpg',
      '/images/Brand images/brand-5.jpg',
      '/images/Brand images/brand-7.jpg',
      '/images/Brand images/brand-8.jpg',
      '/images/Brand images/brand-9.jpg',
      '/images/Brand images/brand-11.jpg',
      '/images/Brand images/brand-13.jpg',
      '/images/Brand images/brand-14.jpg',
      '/images/Brand images/brand-16.jpg',
      '/images/Brand images/brand-18.jpg',
      '/images/Brand images/brand-19.jpg',
      '/images/Brand images/brand-20.jpg',
      '/images/Brand images/brand-21.jpg',
      '/images/Brand images/brand-23.jpg',
      '/images/Brand images/brand-24.jpg',
      '/images/Brand images/brand-25.jpg',
      '/images/Brand images/brand-26.jpg',
      '/images/Brand images/brand-27.jpg',
      '/images/Brand images/brand-28.jpg',
      '/images/Brand images/brand-29.jpg',
      '/images/Brand images/brand-30.jpg',
      '/images/Brand images/brand-31.jpg',
      '/images/Brand images/brand-32.jpg',
      '/images/Brand images/brand-35.jpg',
      '/images/Brand images/brand-36.jpg',
      '/images/Brand images/brand-37.jpg',
      '/images/Brand images/brand-39.jpg',
      '/images/Brand images/brand-40.jpg',
      '/images/Brand images/brand-41.jpg',
      '/images/Brand images/brand-42.jpg',
      '/images/Brand images/brand-43.jpg',
      '/images/Brand images/brand-45.jpg',
      '/images/Brand images/brand-46.jpg',
      '/images/Brand images/brand-47.jpg',
      '/images/Brand images/brand-49.jpg',
      '/images/Brand images/brand-50.jpg',
      '/images/Brand images/brand-51.jpg',
      '/images/Brand images/brand-52.jpg',
      '/images/Brand images/brand-55.jpg',
      '/images/Brand images/brand-56.jpg',
      '/images/Brand images/brand-57.jpg',
      '/images/Brand images/brand-58.jpg',
      '/images/Brand images/brand-60.jpg',
      '/images/Brand images/brand-61.jpg',
      '/images/Brand images/brand-62.jpg',
      '/images/Brand images/IMG_7398.JPG',
    ],
    'Wedding': [
      '/images/weddings/GIDO0006.JPG',
      '/images/weddings/GIDO03517.JPG',
      '/images/weddings/GIDO4129.JPG',
      '/images/weddings/GIDO5414.JPG',
      '/images/weddings/GIDO7130.JPG',
      '/images/weddings/GIDO7139.JPG',
      '/images/weddings/GIDO9849.JPG',
      '/images/weddings/IMG_3181.JPG',
      '/images/weddings/IMG_3567.JPG',
      '/images/weddings/IMG_4302.JPG',
      '/images/weddings/IMG_4308.JPG',
      '/images/weddings/IMG_5883.JPG',
      '/images/weddings/IMG_5885.JPG',
      '/images/weddings/_IDO4648.jpg',
      '/images/weddings/_IDO4686.jpg',
      '/images/weddings/_IDO9008.jpg',
      '/images/weddings/_IDO9110.jpg',
      '/images/weddings/_IDO9150.jpg',
      '/images/weddings/_IDO9184.jpg',
      '/images/weddings/_IDO9288.jpg',
    ],
    'Birthdays': [
      '/images/Birthdays/GIDO0288-min.jpg',
      '/images/Birthdays/GIDO0930-min.JPG',
      '/images/Birthdays/GIDO25108-min.JPG',
      '/images/Birthdays/GIDO3271-min.JPG',
      '/images/Birthdays/GIDO8656-min.jpg',
      '/images/Birthdays/IMG_0445-min.JPG',
      '/images/Birthdays/IMG_1087-min.JPG',
      '/images/Birthdays/IMG_1088-min.JPG',
      '/images/Birthdays/IMG_1255-min.JPG',
      '/images/Birthdays/IMG_4645-min.JPG',
      '/images/Birthdays/IMG_4646-min.JPG',
    ],
    'Portraits': [
      '/images/potraits/GIDO00651-min.JPG',
      '/images/potraits/IMG_4154-min.JPG',
      '/images/potraits/GIDO0089-min.JPG',
      '/images/potraits/GIDO0121-min.JPG',
      '/images/potraits/GIDO9179-min.JPG',
      '/images/potraits/GIDO9212-min.JPG',
      '/images/potraits/GIDO_7619-min.JPG',
      '/images/potraits/IMG_2453-min.JPG',
      '/images/potraits/IMG_4667-min.JPG',
      '/images/potraits/GIDO0049-min.JPG',
      '/images/potraits/IMG_7351-min.JPG',
    ],
    'Studio': [
      '/images/studio/GIDO0040-1-min.JPG',
      '/images/studio/GIDO0495-min.JPG',
      '/images/studio/GIDO0828-min.JPG',
      '/images/studio/GIDO11021-min.JPG',
      '/images/studio/GIDO98297-min.JPG',
      '/images/studio/GIDO9838-min.JPG',
      '/images/studio/GIDO9893-1-min.JPG',
      '/images/studio/GIDO9970-min.JPG',
      '/images/studio/GIDO9976-min.JPG',
      '/images/studio/IMG_0873-min.JPG',
      '/images/studio/IMG_2332-min.JPG',
      '/images/studio/IMG_2364-min.JPG',
      '/images/studio/IMG_3074-min.JPG',
      '/images/studio/IMG_3075-min.JPG',
      '/images/studio/IMG_4642-min.JPG',
      '/images/studio/IMG_4899-min.JPG',
      '/images/studio/IMG_5261-min.JPG',
      '/images/studio/IMG_5566-min.JPG',
      '/images/studio/IMG_6600-min.JPG',
      '/images/studio/IMG_6840-min.JPG',
      '/images/studio/_IDO0705-min.JPG',
    ],
  };

  const currentImages = imageArrays[activeFilter as keyof typeof imageArrays] || [];

  // Navigation functions
  const goToPrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null && currentImages.length > 0) {
      const newIndex = selectedImageIndex === 0 ? currentImages.length - 1 : selectedImageIndex - 1;
      setSelectedImageIndex(newIndex);
      setSelectedImage(currentImages[newIndex]);
    }
  };

  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null && currentImages.length > 0) {
      const newIndex = selectedImageIndex === currentImages.length - 1 ? 0 : selectedImageIndex + 1;
      setSelectedImageIndex(newIndex);
      setSelectedImage(currentImages[newIndex]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'ArrowLeft') {
          goToPrevious();
        } else if (e.key === 'ArrowRight') {
          goToNext();
        } else if (e.key === 'Escape') {
          setSelectedImage(null);
          setSelectedImageIndex(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, selectedImageIndex, currentImages]);

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      <Navigation />
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 sm:px-8 lg:px-12 min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/GIDO9183.JPG"
            alt="About Us"
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
              <span className="relative z-10">About Us</span>
              <span className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-2xl animate-pulse"></span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animationType="fade-up" delay={200}>
            <p className="text-lg text-gray-200">
              Get to know the story behind Gido Photography
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <ScrollAnimation animationType="fade-left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6 relative inline-block">
                  <span className="relative z-10">Our Story</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-50"></span>
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed transform hover:translate-x-2 transition-transform duration-300">
                  With over a decade of experience in professional photography, Gido Photography 
                  specializes in capturing authentic moments that tell your unique story. Our 
                  approach combines technical excellence with artistic vision to create timeless images.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed transform hover:translate-x-2 transition-transform duration-300">
                  Founded with a passion for preserving life&apos;s most precious moments, we believe 
                  that every photograph should tell a story. Whether it&apos;s a wedding, portrait 
                  session, or special event, we bring dedication and attention to detail to every shoot.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transform hover:translate-x-2 transition-transform duration-300">
                  Our mission is to create beautiful, meaningful photographs that you&apos;ll treasure 
                  for a lifetime. We work closely with each client to understand their vision and bring 
                  it to life through our lens.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationType="fade-right">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group transform hover:scale-105 transition-all duration-500">
                <Image 
                  src="/images/team.JPG" 
                  alt="Team Photo" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/30 rounded-2xl transition-all duration-500"></div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Image Gallery Grid */}
          <div className="mb-24">
            <ScrollAnimation animationType="fade-up">
              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {['Wedding', 'Studio', 'Portraits', 'Birthdays', 'Brands'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`text-base md:text-lg font-medium transition-colors duration-300 pb-2 relative ${
                      activeFilter === filter
                        ? 'text-black dark:text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {filter}
                    {activeFilter === filter && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"></span>
                    )}
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {currentImages.map((imageSrc, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden group cursor-pointer"
                    onClick={() => {
                      setSelectedImage(imageSrc);
                      setSelectedImageIndex(index);
                    }}
                  >
                    <Image
                      src={imageSrc}
                      alt={`${activeFilter} image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          {/* Stats Section */}
          <div className="mb-24">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 rounded-3xl -z-10"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-6 md:p-8">
                {[
                  { value: '10+', label: 'Years Experience' },
                  { value: '500+', label: 'Happy Clients' },
                  { value: '2k+', label: 'Photos Captured' },
                  { value: '50+', label: 'Events Covered' },
                ].map((stat, index) => (
                  <ScrollAnimation 
                    key={index}
                    animationType="zoom"
                    delay={index * 150}
                  >
                    <div className="text-center group cursor-default">
                      <div className="relative inline-block mb-3">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                        <div className="relative bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white px-4 py-3 rounded-xl shadow-xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 ring-1 ring-amber-700/50 group-hover:ring-amber-600/70">
                          <div className="text-2xl md:text-3xl font-bold drop-shadow-md">{stat.value}</div>
                        </div>
                      </div>
                      
                      <div className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                        {stat.label}
                      </div>
                      
                      <div className="mt-2 mx-auto w-10 h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent group-hover:via-purple-500 transition-colors duration-300"></div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-24 relative w-full">
            <ScrollAnimation animationType="zoom">
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video 
                  className="w-full h-[500px]"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/video/about_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => {
            setSelectedImage(null);
            setSelectedImageIndex(null);
          }}
        >
          <div className="relative max-w-5xl max-h-full w-full flex items-center justify-center">
            {/* Previous button */}
            {currentImages.length > 1 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 md:left-8 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-3 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            <div className="relative max-w-full max-h-[90vh] flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Full view"
                width={1200}
                height={1200}
                sizes="90vw"
                className="object-contain max-h-[90vh] w-auto"
                priority
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Next button */}
            {currentImages.length > 1 && (
              <button
                onClick={goToNext}
                className="absolute right-4 md:right-8 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-3 backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
                setSelectedImageIndex(null);
              }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-3 backdrop-blur-sm z-10"
              aria-label="Close"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image counter */}
            {currentImages.length > 1 && selectedImageIndex !== null && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm text-sm md:text-base">
                {selectedImageIndex + 1} / {currentImages.length}
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}