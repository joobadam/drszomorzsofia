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
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('impressum.providerInfo')}
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.serviceProviderName')}:</strong> Dr. Szomor Zsófia Ügyvédi Iroda
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.registeredOffice')}:</strong> [Cím megadása]
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.mailingAddress')}:</strong> [Postacím]
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.phone')}:</strong> [Telefonszám]
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.fax')}:</strong> [Fax szám]
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.email')}:</strong> [Email cím]
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.website')}:</strong> [Weboldal URL]
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('impressum.legalStatus')}
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.barAssociation')}:</strong> Budapesti Ügyvédi Kamara
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.attorneyId')}:</strong> [Azonosító szám]
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.taxNumber')}:</strong> [Adószám]
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t('impressum.companyRegistrationNumber')}:</strong> [Cégjegyzékszám]
                  </p>
                  <p className="text-gray-700">
                    <strong>{t('impressum.professionalQualifications')}:</strong> Ügyvéd, [további szakképzettségek]
                  </p>
                </div>
              </div>

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

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('impressum.services')}
                </h2>
                <p className="text-gray-600 mb-3">
                  {t('impressum.servicesDescription')}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>{t('impressum.civilLawCases')}</li>
                  <li>{t('impressum.commercialLawConsulting')}</li>
                  <li>{t('impressum.laborLawCases')}</li>
                  <li>{t('impressum.realEstateLawCases')}</li>
                  <li>{t('impressum.familyLawCases')}</li>
                  <li>{t('impressum.inheritanceCases')}</li>
                  <li>{t('impressum.taxLawConsulting')}</li>
                  <li>{t('impressum.administrativeLawCases')}</li>
                  <li>{t('impressum.criminalLawCases')}</li>
                  <li>{t('impressum.europeanUnionLawCases')}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('impressum.termsOfService')}
                </h2>
                <p className="text-gray-600 mb-3">
                  {t('impressum.termsText1')}
                </p>
                <p className="text-gray-600">
                  {t('impressum.termsText2')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('impressum.dataProtection')}
                </h2>
                <p className="text-gray-600">
                  {t('impressum.dataProtectionText')}{' '}
                  <a href="/privacy-policy" className="text-purple-600 hover:text-purple-700 underline">
                    itt
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('impressum.contact')}
                </h2>
                <p className="text-gray-600">
                  {t('impressum.contactText')}
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
