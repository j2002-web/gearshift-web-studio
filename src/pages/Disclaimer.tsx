
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

const Disclaimer = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Disclaimer</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">General Information</h2>
                <p className="text-gray-600 mb-4">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
                  {siteConfig.name} excludes all representations, warranties, obligations, and liabilities arising out of or 
                  in connection with this website and its contents.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Advice</h2>
                <p className="text-gray-600 mb-4">
                  The content on this website is for informational purposes only and should not be considered as professional 
                  mechanical advice. Always consult with qualified automotive professionals before making decisions about 
                  drivetrain components and installations.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Compatibility</h2>
                <p className="text-gray-600 mb-4">
                  While we strive to provide accurate compatibility information, vehicle specifications can vary. 
                  It is the customer's responsibility to verify part compatibility before purchase. We recommend 
                  consulting with our technical team for complex applications.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Performance Claims</h2>
                <p className="text-gray-600 mb-4">
                  Performance improvements, fuel economy gains, and other benefits mentioned are based on manufacturer 
                  specifications and testing under controlled conditions. Actual results may vary depending on vehicle 
                  condition, driving habits, and environmental factors.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation Services</h2>
                <p className="text-gray-600 mb-4">
                  Professional installation is recommended for all drivetrain components. Improper installation may void 
                  warranties and could result in vehicle damage or safety hazards. Always follow manufacturer installation 
                  procedures and safety guidelines.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Third Party Content</h2>
                <p className="text-gray-600 mb-4">
                  This website may contain links to third-party websites or references to third-party products. 
                  {siteConfig.name} is not responsible for the content, accuracy, or practices of these third parties.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety Considerations</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Always use proper safety equipment when working on vehicles</li>
                  <li>Ensure vehicle is properly supported before beginning work</li>
                  <li>Follow all manufacturer torque specifications</li>
                  <li>Test drive vehicle carefully after any drivetrain work</li>
                  <li>Stop immediately if unusual noises or vibrations occur</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  In no event shall {siteConfig.name}, its employees, or affiliates be liable for any damages 
                  whatsoever arising out of the use of this website or the products and services described herein.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Disclaimer</h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify this disclaimer at any time. Changes will be posted on this page 
                  and will be effective immediately upon posting.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about this disclaimer, please contact us:
                </p>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> {siteConfig.email}</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> {siteConfig.phone}</p>
                  <p className="text-gray-700">
                    <strong>Address:</strong> {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;
