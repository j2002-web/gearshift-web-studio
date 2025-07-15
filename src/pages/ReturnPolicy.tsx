
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Return Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Return Period</h2>
                <p className="text-gray-600 mb-4">
                  We offer a 30-day return period for most products from the date of purchase. This gives you 
                  time to inspect your purchase and ensure it meets your needs.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Important Note:</h4>
                  <p className="text-blue-800">
                    Custom orders, special order items, and installed products may have different return policies. 
                    Please check with our team before ordering.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Return Conditions</h2>
                <p className="text-gray-600 mb-4">To be eligible for a return, items must meet the following conditions:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Item must be in original, unopened packaging</li>
                  <li>All accessories, manuals, and documentation must be included</li>
                  <li>Item must be in new, unused condition</li>
                  <li>No signs of installation or mounting attempts</li>
                  <li>Original receipt or proof of purchase required</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Non-Returnable Items</h2>
                <p className="text-gray-600 mb-4">The following items cannot be returned:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Custom manufactured or special order parts</li>
                  <li>Electrical components that have been installed</li>
                  <li>Fluids, oils, and consumable products</li>
                  <li>Items damaged by misuse or improper installation</li>
                  <li>Products returned after 30 days</li>
                  <li>Items without original packaging or documentation</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Return Process</h2>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Step-by-Step Return Process:</h4>
                  <ol className="list-decimal list-inside text-gray-600 space-y-3">
                    <li>Contact our customer service team at {siteConfig.phone} or {siteConfig.email}</li>
                    <li>Provide your order number and reason for return</li>
                    <li>Receive return authorization (RMA) number and instructions</li>
                    <li>Package item securely with all original materials</li>
                    <li>Include RMA number on package and return receipt</li>
                    <li>Ship to our return address using trackable method</li>
                  </ol>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Refund Processing</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Refunds will be processed within 5-7 business days of receiving returned item</li>
                  <li>Refunds issued to original payment method</li>
                  <li>Original shipping costs are non-refundable</li>
                  <li>Customer responsible for return shipping costs unless item was defective</li>
                  <li>Restocking fee may apply (typically 15-25% for opened items)</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Defective or Damaged Items</h2>
                <p className="text-gray-600 mb-4">
                  If you receive a defective or damaged item, we will provide a full refund or replacement at no cost to you:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Report defects within 48 hours of receipt</li>
                  <li>Provide photos of damage or defect</li>
                  <li>We will arrange pickup or provide prepaid return label</li>
                  <li>Full refund or replacement provided immediately</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Exchanges</h2>
                <p className="text-gray-600 mb-4">
                  We offer exchanges for different sizes, colors, or specifications when available. 
                  Exchange requests must be made within the 30-day return period.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Warranty Returns</h2>
                <p className="text-gray-600 mb-4">
                  Items being returned under warranty coverage follow different procedures. 
                  Please refer to the specific warranty terms or contact our service department.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  For return authorization or questions about our return policy:
                </p>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Customer Service:</strong> {siteConfig.phone}</p>
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> {siteConfig.email}</p>
                  <p className="text-gray-700 mb-2"><strong>Hours:</strong> {siteConfig.business.hours}</p>
                  <p className="text-gray-700">
                    <strong>Return Address:</strong> {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
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

export default ReturnPolicy;
