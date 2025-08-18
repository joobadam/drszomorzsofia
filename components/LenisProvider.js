'use client';

import { createContext, useContext } from 'react';
import { useLenis } from '@/hooks/useLenis';

const LenisContext = createContext(null);

export function LenisProvider({ children, options = {} }) {
  const lenis = useLenis(options);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenisContext() {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error('useLenisContext must be used within a LenisProvider');
  }
  return context;
}
