
import { Recycle, DollarSign, Users, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const UsedPartsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost-Effective Solutions",
      description: "Help customers save 40-70% compared to new parts while maintaining quality."
    },
    {
      icon: Recycle,
      title: "Eco-Friendly Business",
      description: "Promote sustainability by giving auto parts a second life and reducing waste."
    },
    {
      icon: Users,
      title: "Large Market Demand",
      description: "Tap into the growing used parts market worth $18+ billion globally."
    }
  ];

  const features = [
    "Pre-qualified buyers ready to purchase",
    "Higher profit margins on used parts",
    "Inventory turnover optimization",
    "Access to salvage yard networks",
    "Real-time lead notifications",
    "CRM integration included"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lead Generation For <span className="text-green-600">Used Auto Parts</span> Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock the potential of the used auto parts market with our specialized lead generation services. 
            Connect with buyers looking for quality pre-owned components.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left side - Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop" 
              alt="Used Auto Parts Warehouse"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">70%</div>
              <div className="text-sm">Cost Savings</div>
            </div>
          </div>

          {/* Right side - Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
            Start Getting Used Parts Leads
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UsedPartsSection;
