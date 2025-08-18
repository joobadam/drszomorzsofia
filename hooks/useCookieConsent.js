'use client';

import { useState, useEffect } from 'react';

export const useCookieConsent = () => {
  const [consent, setConsent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (storedConsent) {
      try {
        setConsent(JSON.parse(storedConsent));
      } catch (error) {
        console.error('Error parsing cookie consent:', error);
        setConsent(null);
      }
    }
    setIsLoaded(true);
  }, []);

  const updateConsent = (newConsent) => {
    setConsent(newConsent);
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
  };

  const hasConsent = (type) => {
    if (!consent) return false;
    return consent[type] === true;
  };

  const canUseAnalytics = () => hasConsent('analytics');
  const canUseMarketing = () => hasConsent('marketing');
  const canUsePreferences = () => hasConsent('preferences');
  const hasNecessaryConsent = () => consent && consent.necessary === true;

  const clearConsent = () => {
    localStorage.removeItem('cookieConsent');
    setConsent(null);
  };

  return {
    consent,
    isLoaded,
    updateConsent,
    hasConsent,
    canUseAnalytics,
    canUseMarketing,
    canUsePreferences,
    hasNecessaryConsent,
    clearConsent
  };
};
