'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function LegalNoticePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen  py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {t('legalNotice.title')}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('legalNotice.providerInfo')}
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>{t('legalNotice.name')}:</strong> Dr. Szomor Zsófia Ügyvédi Iroda
                  </p>
               
                  <p className="text-gray-700 mb-2">
                    <strong>{t('legalNotice.phone')}:</strong> +36309713467
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('legalNotice.email')}:</strong> drszomorzsofia@gmail.com
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('legalNotice.barAssociation')}:</strong> Budapesti Ügyvédi Kamara
                  </p>
                  
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('legalNotice.services')}
                </h2>
                <p className="text-gray-600 mb-3">
                  {t('legalNotice.servicesDescription')}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>{t('legalNotice.commercialLaw')}</li>
                  <li>{t('legalNotice.civilLaw')}</li>
                  <li>{t('legalNotice.laborLaw')}</li>
                  <li>{t('legalNotice.realEstateLaw')}</li>
                  <li>{t('legalNotice.familyLaw')}</li>
                  <li>{t('legalNotice.inheritanceLaw')}</li>
                  <li>{t('legalNotice.taxLaw')}</li>
                  <li>{t('legalNotice.administrativeLaw')}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('legalNotice.disclaimer')}
                </h2>
                <p className="text-gray-600 mb-3">
                  {t('legalNotice.disclaimerText1')}
                </p>
                <p className="text-gray-600">
                  {t('legalNotice.disclaimerText2')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('legalNotice.intellectualProperty')}
                </h2>
                <p className="text-gray-600">
                  {t('legalNotice.intellectualPropertyText')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('legalNotice.contact')}
                </h2>
                <p className="text-gray-600">
                  {t('legalNotice.contactText')}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <p className="text-sm text-gray-500 text-center">
                Utolsó frissítés: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
