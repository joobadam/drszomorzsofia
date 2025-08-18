import { Metadata } from 'next';

export const metadata = {
  title: 'Privacy Policy - Cookie Information',
  description: 'Learn about how we use cookies and protect your privacy on our website.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Privacy Policy & Cookie Information
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Cookie Policy
              </h2>
              <p className="text-gray-600 mb-4">
                This website uses cookies to enhance your browsing experience and provide personalized content. 
                Below you'll find detailed information about the types of cookies we use and how you can manage them.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                What are Cookies?
              </h3>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are stored on your device when you visit a website. 
                They help websites remember information about your visit, such as your preferred language 
                and other settings, which can make your next visit easier and the site more useful to you.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Types of Cookies We Use
              </h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Necessary Cookies</h4>
                  <p className="text-gray-600 text-sm">
                    These cookies are essential for the website to function properly. They cannot be disabled 
                    and are necessary for basic website functionality, security, and accessibility.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Analytics Cookies</h4>
                  <p className="text-gray-600 text-sm">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously. This helps us improve our website and services.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Marketing Cookies</h4>
                  <p className="text-gray-600 text-sm">
                    These cookies are used to track visitors across websites to display relevant and 
                    engaging advertisements. They help us provide you with content that may be of interest to you.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Preference Cookies</h4>
                  <p className="text-gray-600 text-sm">
                    These cookies allow the website to remember choices you make and provide enhanced, 
                    more personal features. They may be set by us or by third-party providers.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Managing Your Cookie Preferences
              </h3>
              <p className="text-gray-600 mb-4">
                You can manage your cookie preferences at any time by clicking the "Customize" button 
                in our cookie consent banner. You can also change your browser settings to refuse cookies, 
                though this may affect the functionality of our website.
              </p>
              <p className="text-gray-600 mb-4">
                To change your cookie preferences, you can:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Use our cookie consent manager</li>
                <li>Clear your browser cookies</li>
                <li>Adjust your browser settings</li>
                <li>Contact us for assistance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Third-Party Cookies
              </h3>
              <p className="text-gray-600 mb-4">
                Some cookies on our website are set by third-party services that we use to enhance 
                your experience. These services may include analytics providers, social media platforms, 
                and advertising networks.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Data Protection
              </h3>
              <p className="text-gray-600 mb-4">
                We are committed to protecting your privacy and ensuring the security of your personal data. 
                Any information collected through cookies is used in accordance with our privacy policy 
                and applicable data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Updates to This Policy
              </h3>
              <p className="text-gray-600 mb-4">
                We may update this cookie policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We encourage you to review this 
                policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Contact Us
              </h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies or this privacy policy, 
                please contact us through our contact page or email us directly.
              </p>
            </section>

            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <p className="text-sm text-gray-500 text-center">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
