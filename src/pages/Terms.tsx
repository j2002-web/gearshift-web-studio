
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using {siteConfig.name} services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Products and Services</h2>
                <p className="text-gray-600 mb-4">
                  {siteConfig.name} provides premium automotive drivetrain parts and related services including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Sale of drivetrain components and automotive parts</li>
                  <li>Professional installation services</li>
                  <li>Repair and maintenance services</li>
                  <li>Technical consultation and support</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  All products are subject to availability and we reserve the right to modify or discontinue 
                  any product without notice.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing and Payment</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>All prices are subject to change without notice</li>
                  <li>Payment is due at time of service or upon receipt of invoice</li>
                  <li>We accept major credit cards, checks, and electronic payments</li>
                  <li>Additional fees may apply for expedited services</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Warranties</h2>
                <p className="text-gray-600 mb-4">
                  We provide warranties on our products and services as follows:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Parts: Manufacturer warranty or minimum 12 months</li>
                  <li>Installation: 90 days from date of service</li>
                  <li>Remanufactured parts: 24 months or 24,000 miles</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  Warranty coverage excludes damage due to misuse, abuse, or normal wear and tear.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  {siteConfig.name} shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from your use of our products or services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
                <p className="text-gray-600 mb-4">Users agree to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Provide accurate information for orders and services</li>
                  <li>Follow proper maintenance procedures for installed parts</li>
                  <li>Report any issues or defects promptly</li>
                  <li>Use products only for their intended purpose</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
                <p className="text-gray-600 mb-4">
                  All content on this website, including text, graphics, logos, and images, is the property of 
                  {siteConfig.name} and is protected by copyright and trademark laws.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
                <p className="text-gray-600 mb-4">
                  These terms shall be governed by and construed in accordance with the laws of {siteConfig.address.state}, 
                  without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  For questions about these Terms & Conditions, contact us:
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

export default Terms;
