'use client';

import { useCookieConsent } from '@/hooks/useCookieConsent';
import { useLanguage } from '@/hooks/useLanguage';

const CookieExample = () => {
  const { consent, canUseAnalytics, canUseMarketing, canUsePreferences } = useCookieConsent();
  const { t } = useLanguage();

  if (!consent) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-yellow-800">
          Cookie consent not yet given. Please accept cookies to see this content.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Cookie Consent Status
      </h3>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Necessary Cookies:</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            consent.necessary 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {consent.necessary ? 'Enabled' : 'Disabled'}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Analytics Cookies:</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            consent.analytics 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {consent.analytics ? 'Enabled' : 'Disabled'}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Marketing Cookies:</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            consent.marketing 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {consent.marketing ? 'Enabled' : 'Disabled'}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Preference Cookies:</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            consent.preferences 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {consent.preferences ? 'Enabled' : 'Disabled'}
          </span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">Example Usage:</h4>
        <div className="space-y-2 text-sm text-gray-600">
          {canUseAnalytics() && (
            <p>✅ Analytics tracking is active</p>
          )}
          {canUseMarketing() && (
            <p>✅ Marketing features are enabled</p>
          )}
          {canUsePreferences() && (
            <p>✅ User preferences are saved</p>
          )}
          {!canUseAnalytics() && (
            <p>❌ Analytics tracking is disabled</p>
          )}
          {!canUseMarketing() && (
            <p>❌ Marketing features are disabled</p>
          )}
          {!canUsePreferences() && (
            <p>❌ User preferences are not saved</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieExample;
