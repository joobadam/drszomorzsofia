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

  // Delay showing the consent by 3 seconds
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
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
    setShowConsent(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences));
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
                  <div className="flex items-center gap-4 mt-3">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      {t('cookieConsent.customize')}
                    </button>
                    <a
                      href="/privacy-policy"
                      className="text-gray-500 hover:text-gray-700 text-sm"
                    >
                      {t('cookieConsent.privacyPolicy')}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                >
                  {t('cookieConsent.rejectAll')}
                </button>
                <button
                  onClick={handleAcceptSelected}
                  className="px-6 py-2.5 text-white bg-purple-800 hover:bg-purple-700 rounded-lg font-medium transition-colors"
                >
                  {t('cookieConsent.acceptSelected')}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2.5 text-white bg-primary hover:bg-green-800 rounded-lg font-medium transition-colors"
                >
                  {t('cookieConsent.acceptAll')}
                </button>
              </div>
            </div>
          ) : (
            // Settings view
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-purple-800" />
                  {t('cookieConsent.settings')}
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                {/* Necessary cookies */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {t('cookieConsent.necessary.title')}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {t('cookieConsent.necessary.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.necessary}
                      disabled
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                    />
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {t('cookieConsent.analytics.title')}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {t('cookieConsent.analytics.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.analytics}
                      onChange={() => togglePreference('analytics')}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Marketing cookies */}
                <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {t('cookieConsent.marketing.title')}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {t('cookieConsent.marketing.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.marketing}
                      onChange={() => togglePreference('marketing')}
                      className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Preferences cookies */}
                <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-purple-800 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {t('cookieConsent.preferences.title')}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {t('cookieConsent.preferences.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.preferences}
                      onChange={() => togglePreference('preferences')}
                      className="w-4 h-4 text-purple-800 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-6 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                >
                  {t('cookieConsent.back')}
                </button>
                <button
                  onClick={handleAcceptSelected}
                  className="px-6 py-2.5 text-white bg-purple-800 hover:bg-purple-700 rounded-lg font-medium transition-colors"
                >
                  {t('cookieConsent.savePreferences')}
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
