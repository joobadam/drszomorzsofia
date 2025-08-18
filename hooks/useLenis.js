'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useLenis(options = {}) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis with default options
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      ...options,
    });

    // Store reference
    lenisRef.current = lenis;

    // RAF loop for smooth scrolling
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, [options]);

  // Return Lenis instance and useful methods
  return {
    lenis: lenisRef.current,
    scrollTo: (target, options) => lenisRef.current?.scrollTo(target, options),
    scrollToTop: () => lenisRef.current?.scrollTo(0),
    scrollToBottom: () => lenisRef.current?.scrollTo('100%'),
    stop: () => lenisRef.current?.stop(),
    start: () => lenisRef.current?.start(),
    destroy: () => lenisRef.current?.destroy(),
  };
}
