'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom' | 'rotate' | 'slide-up';
  delay?: number;
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  animationType = 'fade-up',
  delay = 0 
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const animationClasses = {
    'fade-up': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    'fade-left': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
    'fade-right': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10',
    'zoom': isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90',
    'rotate': isVisible ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-12',
    'slide-up': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animationType]} ${className}`}
    >
      {children}
    </div>
  );
}

