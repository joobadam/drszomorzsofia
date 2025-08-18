'use client';

import { useEffect, useState } from 'react';
import { useLenisContext } from './LenisProvider';

export function ScrollIndicator() {
  const { lenis } = useLenisContext();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!lenis) return;

    // Listen to scroll events
    const unsubscribe = lenis.on('scroll', (e) => {
      const progress = e.progress;
      const y = e.scroll;
      
      setScrollProgress(progress);
      setScrollY(y);
    });

    return unsubscribe;
  }, [lenis]);

  return (
    <div className="fixed top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg z-50">
      <div className="text-sm font-mono space-y-2">
        <div>Progress: {(scrollProgress * 100).toFixed(1)}%</div>
        <div>Scroll Y: {Math.round(scrollY)}px</div>
        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-100"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
