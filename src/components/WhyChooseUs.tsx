
import { Shield, Award, Clock, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/config/site';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Verified Leads",
      description: "Every lead is pre-verified and qualified before delivery to ensure maximum conversion potential."
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Over 13+ years of experience in auto parts industry with deep market knowledge."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you maximize your lead conversion rates."
    },
    {
      icon: Users,
      title: "Global Reach",
      description: "Access to buyers from USA, UAE, India and other major automotive markets worldwide."
    },
    {
      icon: TrendingUp,
      title: "Guaranteed ROI",
      description: "We guarantee positive return on investment or your money back within 30 days."
    },
    {
      icon: CheckCircle,
      title: "Real-Time Delivery",
      description: "Leads delivered instantly to your dashboard and CRM systems in real-time."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">{siteConfig.name}</span> for Auto Parts Leads?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful auto parts businesses who trust us for their lead generation needs. 
            Experience the difference quality makes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Leads Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Conversion Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
