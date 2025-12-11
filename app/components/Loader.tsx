'use client';

import { useState, useEffect } from 'react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 3 second loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Add delay before hiding to allow fade-out animation
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black dark:bg-white flex items-center justify-center transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 dark:bg-black/10 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/10 dark:bg-black/10 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-white/10 dark:bg-black/10 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Camera icon animation */}
        <div className="relative mb-8 w-24 h-24 flex items-center justify-center">
          {/* Camera body */}
          <div className="w-20 h-20 border-4 border-white dark:border-black rounded-lg relative animate-pulse">
            <div className="absolute inset-2 border-2 border-white dark:border-black rounded"></div>
            {/* Camera lens */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-white dark:border-black rounded-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-black rounded-full"></div>
            </div>
            {/* Flash */}
            <div className="absolute top-2 right-2 w-3 h-3 bg-white dark:bg-black rounded"></div>
          </div>
          
          {/* Rotating shutter animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-24 h-24 border-t-4 border-white/80 dark:border-black/80 rounded-full animate-shutter"></div>
          </div>
        </div>

        {/* Brand name */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white dark:text-black mb-4 animate-fade-in-up">
          Gido Photography
        </h1>

        {/* Loading dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-white dark:bg-black rounded-full animate-bounce animation-delay-100"></div>
          <div className="w-2 h-2 bg-white dark:bg-black rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-2 h-2 bg-white dark:bg-black rounded-full animate-bounce animation-delay-300"></div>
        </div>

        {/* Loading text */}
        <p className="mt-6 text-white/70 dark:text-black/70 text-sm animate-fade-in-up animation-delay-200">
          Capturing Moments...
        </p>
      </div>
    </div>
  );
}

