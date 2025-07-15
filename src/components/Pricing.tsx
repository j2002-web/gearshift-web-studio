
import { Check, Star, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small auto parts businesses",
      features: [
        "50 verified leads per month",
        "Basic CRM integration",
        "Email support",
        "Lead quality guarantee",
        "30-day money back"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "150 verified leads per month",
        "Advanced CRM integration",
        "Priority phone support",
        "Lead replacement guarantee",
        "Custom lead filters",
        "Analytics dashboard",
        "Dedicated account manager"
      ],
      popular: true,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For established auto parts dealers",
      features: [
        "300+ verified leads per month",
        "Full API access",
        "24/7 priority support",
        "Custom lead scoring",
        "White-label solutions",
        "Advanced analytics",
        "Multiple user accounts",
        "Custom integrations"
      ],
      popular: false,
      color: "from-green-500 to-green-600"
    }
  ];

  const addOns = [
    {
      name: "Lead Boost",
      price: "$99/month",
      description: "50% more leads in your package"
    },
    {
      name: "Premium Support",
      price: "$149/month", 
      description: "Dedicated account manager & strategy calls"
    },
    {
      name: "Custom Integration",
      price: "$299/month",
      description: "Connect to any CRM or custom system"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent <span className="text-blue-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our lead quality guarantee 
            and 30-day money-back promise.
          </p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold py-3`}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-gray-100 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Add-Ons & Extras</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-yellow-500 mr-2" />
                  <h4 className="text-lg font-bold text-gray-900">{addon.name}</h4>
                </div>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-blue-600">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">What's included in lead verification?</h4>
              <p className="text-gray-600">Every lead is verified for contact accuracy, buying intent, and budget qualification before delivery.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Can I upgrade or downgrade anytime?</h4>
              <p className="text-gray-600">Yes, you can change your plan at any time. Changes take effect at your next billing cycle.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">What if I'm not satisfied?</h4>
              <p className="text-gray-600">We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">How quickly do I receive leads?</h4>
              <p className="text-gray-600">Leads are delivered in real-time to your dashboard and can be integrated with your existing CRM.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
