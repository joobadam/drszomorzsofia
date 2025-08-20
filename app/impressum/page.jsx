'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function ImpressumPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen  py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {t('impressum.title')}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Szolgáltató adatai – minimum */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('impressum.providerInfo')}
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.serviceProviderName')}:</strong> Dr. Szomor Zsófia Egyéni ügyvéd
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.phone')}:</strong> +36309713467
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.email')}:</strong> drszomorzsofia@gmail.com
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('contact.address')}:</strong> 1137 Budapest, Szent István krt. 18. 2. em. 4/A. 15ös kapucsengő
                  </p>
                </div>
              </div>

              {/* Szabályozó hatóság */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('impressum.regulatoryAuthorities')}
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.barAssociation')}:</strong> Budapesti Ügyvédi Kamara
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.associationAddress')}:</strong> 1054 Budapest, Szalay u. 2-4.
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.associationPhone')}:</strong> +36 1 411 8000
                  </p>
                  <p className="text-gray-700">
                    <strong>{t('impressum.associationWebsite')}:</strong> www.buk.hu
                  </p>
                </div>
              </div>

              {/* Adatvédelem rövid hivatkozással */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('impressum.dataProtection')}
                </h2>
                <p className="text-gray-600">
                  {t('impressum.dataProtectionText')}{' '}
                  <a href="/privacy-policy" className="text-purple-800 hover:text-purple-700 underline">
                    itt
                  </a>.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <p className="text-sm text-gray-500 text-center">
                Utolsó frissítés: {new Date().toLocaleDateString('hu-HU')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}