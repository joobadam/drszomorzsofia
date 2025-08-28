'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('hu'); // Default to Hungarian
  const [translations, setTranslations] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load translations for current language
    const loadTranslations = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/locales/${currentLanguage}/common.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to English if loading fails
        if (currentLanguage !== 'en') {
          setCurrentLanguage('en');
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [currentLanguage]);

  const changeLanguage = (lang) => {
    if (lang === currentLanguage) return; // Don't change if same language
    
    setCurrentLanguage(lang);
    // Store preference in localStorage
    localStorage.setItem('preferred-language', lang);
    
    // Update URL with language parameter without page reload
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url);
  };

  const t = (key) => {
    // If still loading, return empty string to prevent key flashing
    if (isLoading || !translations) {
      return '';
    }

    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value || key;
  };

  useEffect(() => {
    // Check if language is specified in URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    if (urlLang && (urlLang === 'en' || urlLang === 'hu')) {
      setCurrentLanguage(urlLang);
      localStorage.setItem('preferred-language', urlLang);
    } else {
      // Load preferred language from localStorage on mount
      const savedLanguage = localStorage.getItem('preferred-language');
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'hu')) {
        setCurrentLanguage(savedLanguage);
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      t,
      translations,
      isLoading
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
