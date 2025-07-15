
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Shipping Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Shipping Options</h2>
                <p className="text-gray-600 mb-4">
                  We offer multiple shipping options to meet your timeline and budget needs:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-3">Standard Shipping</h4>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• 3-7 business days</li>
                      <li>• Free on orders over $150</li>
                      <li>• Ground transportation</li>
                      <li>• Tracking included</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="font-semibold text-green-900 mb-3">Expedited Shipping</h4>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li>• 2-3 business days</li>
                      <li>• Additional $25-50 fee</li>
                      <li>• Priority handling</li>
                      <li>• Signature required</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h4 className="font-semibold text-orange-900 mb-3">Next Day Shipping</h4>
                    <ul className="text-orange-800 text-sm space-y-1">
                      <li>• 1 business day</li>
                      <li>• Premium rate applies</li>
                      <li>• Orders by 2 PM EST</li>
                      <li>• Major cities only</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h4 className="font-semibold text-purple-900 mb-3">Local Delivery</h4>
                    <ul className="text-purple-800 text-sm space-y-1">
                      <li>• Same day available</li>
                      <li>• 50 mile radius</li>
                      <li>• Installation scheduling</li>
                      <li>• Call for availability</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Processing Time</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>In-stock items: 1-2 business days processing</li>
                  <li>Special order items: 5-10 business days</li>
                  <li>Custom manufactured parts: 2-4 weeks</li>
                  <li>Orders placed after 2 PM EST ship next business day</li>
                  <li>Weekend orders processed on Monday</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Shipping Costs</h2>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Standard Rates:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Small Parts (under 25 lbs):</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Orders under $75: $12.95</li>
                        <li>• Orders $75-$150: $8.95</li>
                        <li>• Orders over $150: FREE</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Large Parts (over 25 lbs):</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Calculated by weight/size</li>
                        <li>• Freight shipping may apply</li>
                        <li>• Quote provided before shipping</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Geographic Coverage</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">Continental US</h4>
                    <p className="text-gray-600 text-sm">All 48 states covered with standard shipping options</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">Alaska & Hawaii</h4>
                    <p className="text-gray-600 text-sm">Available with additional shipping costs and extended delivery time</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">International</h4>
                    <p className="text-gray-600 text-sm">Contact us for quotes on international shipments</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Handling</h2>
                <p className="text-gray-600 mb-4">Certain items require special handling procedures:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li><strong>Hazardous Materials:</strong> Fluids and chemicals ship via ground only</li>
                  <li><strong>Oversized Items:</strong> Transmissions and large assemblies via freight</li>
                  <li><strong>Fragile Components:</strong> Extra packaging and handling care</li>
                  <li><strong>High-Value Items:</strong> Signature required and insurance included</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Tracking & Delivery</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Tracking information sent via email upon shipment</li>
                  <li>Real-time tracking available through carrier websites</li>
                  <li>Delivery confirmation required for orders over $500</li>
                  <li>Driver will call for large freight deliveries</li>
                  <li>Inspect packages immediately upon delivery</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Damaged or Lost Shipments</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-red-900 mb-3">Important:</h4>
                  <p className="text-red-800 text-sm mb-4">
                    Inspect all packages immediately upon delivery. Note any damage on delivery receipt before signing.
                  </p>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Report damage within 24 hours</li>
                    <li>• Take photos of damage and packaging</li>
                    <li>• Contact us immediately for assistance</li>
                    <li>• Keep all packaging materials</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation Scheduling</h2>
                <p className="text-gray-600 mb-4">
                  For customers choosing professional installation, we coordinate delivery timing with service appointments 
                  to ensure parts arrive when needed.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  For shipping questions or to track your order:
                </p>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Customer Service:</strong> {siteConfig.phone}</p>
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> {siteConfig.email}</p>
                  <p className="text-gray-700 mb-2"><strong>Hours:</strong> {siteConfig.business.hours}</p>
                  <p className="text-gray-700">
                    <strong>Shipping Address:</strong> {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
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

export default ShippingPolicy;
