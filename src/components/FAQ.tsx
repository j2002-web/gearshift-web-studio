
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly will I start receiving leads?",
      answer: "You'll start receiving leads within 24 hours of setting up your account. Most clients see their first qualified leads within the first few hours."
    },
    {
      question: "What makes your leads different from others?",
      answer: "Our leads are pre-verified for contact accuracy, buying intent, and budget. We use advanced AI screening and human verification to ensure only qualified prospects reach you."
    },
    {
      question: "Do you provide leads for all types of auto parts?",
      answer: "Yes! We generate leads for new parts, used parts, OEM, aftermarket, performance parts, and specialty components across all vehicle makes and models."
    },
    {
      question: "What geographic regions do you cover?",
      answer: "We currently serve the United States, United Arab Emirates, and India with plans to expand to additional markets based on client demand."
    },
    {
      question: "Can I integrate leads with my existing CRM?",
      answer: "Absolutely! We support integration with popular CRMs like Salesforce, HubSpot, Pipedrive, and custom systems through our API."
    },
    {
      question: "What if a lead doesn't convert or is invalid?",
      answer: "We offer lead replacement for any invalid contacts within 24 hours. Additionally, our 30-day money-back guarantee covers overall satisfaction."
    },
    {
      question: "How do you ensure lead quality?",
      answer: "We use a multi-step verification process including phone verification, email validation, budget qualification, and intent scoring before delivery."
    },
    {
      question: "Can I customize the types of leads I receive?",
      answer: "Yes! You can set filters for vehicle types, part categories, budget ranges, geographic locations, and customer preferences."
    },
    {
      question: "What support do you provide?",
      answer: "We offer 24/7 customer support, dedicated account managers for Professional+ plans, and comprehensive onboarding to maximize your success."
    },
    {
      question: "Is there a long-term contract required?",
      answer: "No long-term contracts required. You can cancel anytime with 30 days notice, and we offer month-to-month billing flexibility."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our lead generation services. 
            Still have questions? Contact our support team anytime.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="mb-4 border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+15552478963" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Call us at +1 (555) 247-8963
            </a>
            <a 
              href="mailto:support@gearleads.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Email support@gearleads.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
