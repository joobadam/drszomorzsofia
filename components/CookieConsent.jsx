'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield, Settings } from 'lucide-react';

const CookieConsent = () => {
  const { t } = useLanguage();
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  // Helper: update Google Consent Mode
  const updateConsentMode = (prefs) => {
    if (typeof window === 'undefined') return;
    const gtag = window.gtag || function(){ (window.dataLayer = window.dataLayer || []).push(arguments); };
    gtag('consent', 'update', {
      'ad_storage': prefs.marketing ? 'granted' : 'denied',
      'ad_user_data': prefs.marketing ? 'granted' : 'denied',
      'ad_personalization': prefs.marketing ? 'granted' : 'denied',
      'analytics_storage': prefs.analytics ? 'granted' : 'denied'
    });
  };

  // Delay showing the consent by 3 seconds
  useEffect(() => {
    const stored = localStorage.getItem('cookieConsent');
    if (stored) {
      const parsed = JSON.parse(stored);
      setCookiePreferences(parsed);
      // Apply stored consent immediately
      updateConsentMode(parsed);
      return;
    }
    const timer = setTimeout(() => setShowConsent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    updateConsentMode(allAccepted);
    setShowConsent(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences));
    updateConsentMode(cookiePreferences);
    setShowConsent(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    setCookiePreferences(onlyNecessary);
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    updateConsentMode(onlyNecessary);
    setShowConsent(false);
  };

  const togglePreference = (type) => {
    if (type === 'necessary') return; // Necessary cookies cannot be disabled
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showConsent) return null;

  return (
    <AnimatePresence>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-black pointer-events-auto"
        style={{}}
      />
      {/* Cookie Consent Panel */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          {!showSettings ? (
            // Main consent view
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-purple-800" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('cookieConsent.title')}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t('cookieConsent.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 text-sm font-medium rounded-medium bg-gray-100 hover:bg-gray-200 text-gray-800"
                >
                  {t('cookieConsent.customize')}
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium rounded-medium bg-gray-100 hover:bg-gray-200 text-gray-800"
                >
                  {t('cookieConsent.rejectAll')}
                </button>
                <button
                  onClick={handleAcceptSelected}
                  className="px-4 py-2 text-sm font-medium rounded-medium bg-primary/90 hover:bg-primary text-white"
                >
                  {t('cookieConsent.acceptSelected')}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-sm font-medium rounded-medium bg-primary hover:bg-primary-dark text-white"
                >
                  {t('cookieConsent.acceptAll')}
                </button>
              </div>
            </div>
          ) : (
            // Settings view
            <div className="grid grid-cols-1 gap-6">
              <button
                onClick={() => setShowSettings(false)}
                className="text-sm text-gray-600 hover:text-gray-800 w-fit"
              >
                ← {t('cookieConsent.back')}
              </button>

              {/* Toggles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Necessary (locked) */}
                <div className="border rounded-medium p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-gray-700" />
                    <span className="font-semibold">{t('cookieConsent.necessary.title')}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{t('cookieConsent.necessary.description')}</p>
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input type="checkbox" checked disabled />
                    <span>Required</span>
                  </label>
                </div>

                {/* Analytics */}
                <div className="border rounded-medium p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="w-4 h-4 text-gray-700" />
                    <span className="font-semibold">{t('cookieConsent.analytics.title')}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{t('cookieConsent.analytics.description')}</p>
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.analytics}
                      onChange={() => togglePreference('analytics')}
                    />
                    <span>{t('cookieConsent.acceptSelected')}</span>
                  </label>
                </div>

                {/* Marketing */}
                <div className="border rounded-medium p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="w-4 h-4 text-gray-700" />
                    <span className="font-semibold">{t('cookieConsent.marketing.title')}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{t('cookieConsent.marketing.description')}</p>
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.marketing}
                      onChange={() => togglePreference('marketing')}
                    />
                    <span>{t('cookieConsent.acceptSelected')}</span>
                  </label>
                </div>

                {/* Preferences */}
                <div className="border rounded-medium p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="w-4 h-4 text-gray-700" />
                    <span className="font-semibold">{t('cookieConsent.preferences.title')}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{t('cookieConsent.preferences.description')}</p>
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.preferences}
                      onChange={() => togglePreference('preferences')}
                    />
                    <span>{t('cookieConsent.acceptSelected')}</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium rounded-medium bg-gray-100 hover:bg-gray-200 text-gray-800"
                >
                  {t('cookieConsent.rejectAll')}
                </button>
                <button
                  onClick={handleAcceptSelected}
                  className="px-4 py-2 text-sm font-medium rounded-medium bg-primary/90 hover:bg-primary text-white"
                >
                  {t('cookieConsent.savePreferences')}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-sm font-medium rounded-medium bg-primary hover:bg-primary-dark text-white"
                >
                  {t('cookieConsent.acceptAll')}
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
