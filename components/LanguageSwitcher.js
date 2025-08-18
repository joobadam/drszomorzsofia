'use client';

import { useLanguage } from '@/hooks/useLanguage';

export function LanguageSwitcher() {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
        <div className="flex space-x-2">
          <button
            onClick={() => changeLanguage('hu')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentLanguage === 'hu'
                ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            🇭🇺 HU
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentLanguage === 'en'
                ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            🇬🇧 EN
          </button>
        </div>
      </div>
    </div>
  );
}
