'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from './components/Navigation';
import ScrollAnimation from './components/ScrollAnimation';
import FloatingElements from './components/FloatingElements';
import Footer from './components/Footer';
import HeroSlider from './components/HeroSlider';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      <Navigation />
      <FloatingElements />
      
      {/* Mouse follower effect */}
      <div 
        className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl pointer-events-none z-0 transition-all duration-300 ease-out"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Branding Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white dark:bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-1 lg:gap-2">
            {/* Left Section - Wedding Logo */}
            <ScrollAnimation animationType="fade-left" delay={0}>
              <div className="flex items-center justify-center md:justify-start flex-1 min-h-[120px]">
                <Image 
                  src="/images/weddings.png" 
                  alt="Weddings n Vows" 
                  width={300}
                  height={150}
                  className="w-full max-w-xs md:max-w-full h-auto object-contain"
                  style={{ maxHeight: '150px' }}
                  priority
                />
              </div>
            </ScrollAnimation>

            {/* Left Divider */}
            <div className="hidden md:block w-px h-20 bg-gray-300 dark:bg-gray-700 flex-shrink-0"></div>

            {/* Middle Section - Text */}
            <ScrollAnimation animationType="zoom" delay={100}>
              <div className="flex flex-col items-center justify-center text-center flex-1 px-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-serif italic text-black dark:text-white mb-0.5" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}>
                  Gido Photography
                </h2>
                <p className="text-xs sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 font-sans tracking-wide uppercase">
                  Commercial Photographer & Videographer
                </p>
              </div>
            </ScrollAnimation>

            {/* Right Divider */}
            <div className="hidden md:block w-px h-20 bg-gray-300 dark:bg-gray-700 flex-shrink-0"></div>

            {/* Right Section - Gido Logo */}
            <ScrollAnimation animationType="fade-right" delay={200}>
              <div className="flex items-center justify-center md:justify-end flex-1 min-h-[120px]">
                <Image 
                  src="/images/gido.jpeg" 
                  alt="Gido Photography" 
                  width={300}
                  height={150}
                  className="w-full max-w-xs md:max-w-full h-auto object-contain"
                  style={{ maxHeight: '150px' }}
                  priority
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollAnimation animationType="zoom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 relative inline-block">
                <span className="relative z-10">Featured Work</span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30 animate-pulse"></span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A glimpse into our portfolio
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Row 1 - Product shot (square-ish) */}
              <ScrollAnimation animationType="fade-left" delay={0}>
                <div className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2">
                  <Image
                    src="/images/featured/GIDO8549-1-min.jpg"
                    alt="Featured photography"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/50 rounded-2xl transition-all duration-500 z-20"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </ScrollAnimation>
              {/* Row 2 - Product shot (horizontal) */}
              <ScrollAnimation animationType="fade-left" delay={300}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2">
                  <Image
                    src="/images/featured/IMG_1736-min.JPG"
                    alt="Featured photography"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/50 rounded-2xl transition-all duration-500 z-20"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </ScrollAnimation>
              {/* Row 3 - Product shot (vertical) */}
              <ScrollAnimation animationType="fade-left" delay={600}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2">
                  <Image
                    src="/images/featured/GIDO_7785-min.JPG"
                    alt="Featured photography"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/50 rounded-2xl transition-all duration-500 z-20"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </ScrollAnimation>
              {/* Row 4 - Close-up portrait */}
              <ScrollAnimation animationType="fade-left" delay={900}>
                <div className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2">
                  <Image
                    src="/images/featured/IMG_0089-min.JPG"
                    alt="Featured photography"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/50 rounded-2xl transition-all duration-500 z-20"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Row 1 - Full-body outdoor */}
              <ScrollAnimation animationType="zoom" delay={100}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2">
                  <Image
                    src="/images/featured/IMG_5891-min.jpg"
                    alt="Featured photography"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/50 rounded-2xl transition-all duration-500 z-20"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </ScrollAnimation>
              {/* Row 2 - Portrait */}
              <ScrollAnimation animationType="zoom" delay={400}>
                <div className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2">
                  <Image
                    src="/images/featured/IMG_3150-min.JPG"
                    alt="Featured photography"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/50 rounded-2xl transition-all duration-500 z-20"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </ScrollAnimation>
              {/* Row 3 - Portrait in motion */}
              <ScrollAnimation animationType="zoom" delay={700}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2">
                  <Image
                    src="/images/featured/IMG_4149-min.JPG"
                    alt="Featured photography"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/50 rounded-2xl transition-all duration-500 z-20"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </ScrollAnimation>
              {/* Row 4 - Full-body outdoor */}
              <ScrollAnimation animationType="zoom" delay={1000}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2">
                  <Image
                    src="/images/featured/IMG_4244-min.JPG"
                    alt="Featured photography"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/50 rounded-2xl transition-all duration-500 z-20"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Row 1 - Portrait */}
              <ScrollAnimation animationType="fade-right" delay={200}>
                <div className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2">
                  <Image
                    src="/images/featured/IMG_4306-min.JPG"
                    alt="Featured photography"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/50 rounded-2xl transition-all duration-500 z-20"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </ScrollAnimation>
              {/* Row 2 - Lifestyle shot */}
              <ScrollAnimation animationType="fade-right" delay={500}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2">
                  <Image
                    src="/images/featured/IMG_4307-min.JPG"
                    alt="Featured photography"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/50 rounded-2xl transition-all duration-500 z-20"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </ScrollAnimation>
              {/* Row 3 - Full-body outdoor */}
              <ScrollAnimation animationType="fade-right" delay={800}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2">
                  <Image
                    src="/images/featured/IMG_5336-min.JPG"
                    alt="Featured photography"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/50 rounded-2xl transition-all duration-500 z-20"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </ScrollAnimation>
              {/* Row 4 - Close-up portrait */}
              <ScrollAnimation animationType="fade-right" delay={1100}>
                <div className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2">
                  <Image
                    src="/images/featured/GIDO00281-min.JPG"
                    alt="Featured photography"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/50 rounded-2xl transition-all duration-500 z-20"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollAnimation animationType="zoom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 relative inline-block">
                <span className="relative z-10">Client Reviews</span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30 animate-pulse"></span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                What our clients say about us
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {/* Review 1 */}
            <ScrollAnimation animationType="fade-up" delay={0}>
              <div className="relative bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50 backdrop-blur-xl rounded-xl p-3 md:p-4 border border-white/20 dark:border-gray-700/50 shadow-md">
                {/* Quote Icon */}
                <div className="absolute top-3 right-3 opacity-10">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed text-xs relative z-10">
                    "Gido!! Gido!! I'm alive!!..!
Where do I even start? From our lateness to the pre-wedding shot, to your drip for the traditional and your steeze for the wedding!! My oh my! ! remember telling my sister and the glam team that if you do not go ahead with the shoot, I won't be surprised because we were fashionably late, but no way.
You were ever so calm, bubbly, and receptive. Right there, I was so certain I got the right man. Director 1, thank you for pulling up for us in several ways, God bless you. You and your team will go far, Kojo, and I know this because of how you value people and not just your work, which is outstanding. Cheers to more gigs and kokotii vibes.Thank you, Kwame, for blinding me all the time too.
I thought you were my favourite one on the team until I met baby police.
⁠Such a humble soul. You have an incredible team, and you all are what a couple need on their day. Let's set a fufu date asap aloo, you're not alive?
Lots of love,
"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-xs shadow-sm">
                        TE
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white text-xs">Tee & Ernest</h4>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">Wedding Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Review 2 */}
            {/* <ScrollAnimation animationType="fade-up" delay={200}>
              <div className="relative bg-gradient-to-br from-pink-50/50 via-red-50/30 to-orange-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50 backdrop-blur-xl rounded-xl p-3 md:p-4 border border-white/20 dark:border-gray-700/50 shadow-md">
            
                <div className="absolute top-3 right-3 opacity-10">
                  <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <div className="relative z-10">
        
                  <div className="flex items-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed text-xs relative z-10">
                    "The studio session was incredible! The team made us feel so comfortable and the final photos were stunning. Professional, friendly, and delivered exactly what we wanted. Thank you!"
                  </p>

       
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-red-500 flex items-center justify-center text-white font-semibold text-xs shadow-sm">
                        ES
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white text-xs">Efua & Samuel</h4>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">Studio Session</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation> */}

            {/* Review 3 */}
            {/* <ScrollAnimation animationType="fade-up" delay={400}>
              <div className="relative bg-gradient-to-br from-purple-50/50 via-indigo-50/30 to-blue-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50 backdrop-blur-xl rounded-xl p-3 md:p-4 border border-white/20 dark:border-gray-700/50 shadow-md">
   
                <div className="absolute top-3 right-3 opacity-10">
                  <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <div className="relative z-10">
              
                  <div className="flex items-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>


                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed text-xs relative z-10">
                    "Outdoor photography session was perfect! The natural lighting and beautiful locations chosen were amazing. The team was patient, creative, and the results were beyond our dreams. Highly recommend!"
                  </p>

      
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center text-white font-semibold text-xs shadow-sm">
                        MK
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white text-xs">Mary & Kofi</h4>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">Outdoor Session</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation> */}
          </div>
        </div>
      </section>

      {/* Brands We've Worked With Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationType="zoom">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-3 relative inline-block">
                <span className="relative z-10">Brands We've Worked With</span>
                <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30 animate-pulse"></span>
              </h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Trusted by leading brands and organizations
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 items-center justify-items-center">
            {/* Brand 1 */}
            <ScrollAnimation animationType="fade-up" delay={0}>
              <div className="flex items-center justify-center p-4 md:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-shake w-full max-w-[200px] h-[150px] md:h-[180px]" style={{ animationDelay: '0s' }}>
                <Image
                  src="/images/brands/b1.jpg"
                  alt="Brand 1"
                  width={200}
                  height={180}
                  className="w-full h-full object-contain"
                />
              </div>
            </ScrollAnimation>

            {/* Brand 2 */}
            <ScrollAnimation animationType="fade-up" delay={100}>
              <div className="flex items-center justify-center p-4 md:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-shake w-full max-w-[200px] h-[150px] md:h-[180px]" style={{ animationDelay: '0.5s' }}>
                <Image
                  src="/images/brands/b2.png"
                  alt="Brand 2"
                  width={200}
                  height={180}
                  className="w-full h-full object-contain"
                />
              </div>
            </ScrollAnimation>

            {/* Brand 3 */}
            <ScrollAnimation animationType="fade-up" delay={200}>
              <div className="flex items-center justify-center p-4 md:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-shake w-full max-w-[200px] h-[150px] md:h-[180px]" style={{ animationDelay: '1s' }}>
                <Image
                  src="/images/brands/b3.png"
                  alt="Brand 3"
                  width={200}
                  height={180}
                  className="w-full h-full object-contain"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Life's Beauty Philosophy Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Title - Top Left */}
          <ScrollAnimation animationType="fade-left" delay={0}>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-12 md:mb-16 text-left">
              Life's Beauty
            </h2>
          </ScrollAnimation>

          {/* Philosophy Section - Left heading, Right text */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20">
            <ScrollAnimation animationType="fade-left" delay={100}>
              <div className="flex items-center gap-3">
                <span className="text-white text-2xl">*</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white uppercase tracking-wide">
                Quote
                </h3>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animationType="fade-right" delay={200}>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/90 leading-relaxed max-w-4xl">
                Journeying Together: Where Passionate Vision Meets Exquisite Craftsmanship, Weaving Tales of Emotion, Joy, and Connection.
              </p>
            </ScrollAnimation>
          </div>

          {/* Two Images Layout - Side by side */}
          <div className="relative mt-12 md:mt-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              {/* First Image */}
              <ScrollAnimation animationType="fade-up" delay={300}>
                <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] group">
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl transition-all duration-700 group-hover:scale-105">
                    <Image 
                      src="/images/about.jpg"
                      alt="About"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </ScrollAnimation>
              
              {/* Second Image */}
              <ScrollAnimation animationType="fade-up" delay={400}>
                <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] group">
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl transition-all duration-700 group-hover:scale-105">
                    <Image 
                      src="/images/contact.jpg"
                      alt="Contact"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
