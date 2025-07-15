
import { Target, Database, BarChart3, Shield, Clock, Headphones } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WhatWeOffer = () => {
  const services = [
    {
      icon: Target,
      title: "Targeted Lead Generation",
      description: "Get leads specifically tailored to your auto parts business niche and target market.",
      color: "text-blue-500"
    },
    {
      icon: Database,
      title: "Real-time Lead Database",
      description: "Access fresh, updated leads from our comprehensive database updated every hour.",
      color: "text-green-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Track your lead performance with detailed analytics and conversion reports.",
      color: "text-purple-500"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Every lead is verified and comes with our quality guarantee and replacement policy.",
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: "24/7 Lead Delivery",
      description: "Receive leads round-the-clock through our automated delivery system.",
      color: "text-orange-500"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Get personalized support from our lead generation experts whenever you need it.",
      color: "text-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            WHAT WE OFFER
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive lead generation solutions designed specifically for auto parts businesses 
            to maximize your sales potential and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${service.color} bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of auto parts businesses already benefiting from our lead generation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
