
import { Shield, RefreshCw, Clock, CheckCircle, Star, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RiskFreeSection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "30-Day Money Back",
      description: "Not satisfied? Get 100% refund within 30 days, no questions asked."
    },
    {
      icon: RefreshCw,
      title: "Lead Replacement",
      description: "Invalid leads? We replace them free of charge within 24 hours."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success with our leads."
    }
  ];

  const testimonials = [
    {
      name: "Mike Johnson",
      company: "Detroit Auto Parts",
      rating: 5,
      text: "GearLeads transformed our business. 300% increase in sales within 2 months!"
    },
    {
      name: "Sarah Ahmed",
      company: "UAE Parts Hub",
      rating: 5,
      text: "Quality leads, excellent support. Best investment we've made for our business."
    },
    {
      name: "Raj Patel",
      company: "Mumbai Motors",
      rating: 5,
      text: "Consistent high-quality leads. Our revenue doubled in the first quarter."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 to-purple-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Risk-Free <span className="text-yellow-400">Lead Generation</span> Services
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're so confident in our service quality that we offer multiple guarantees. 
            Your success is our priority, and we stand behind every lead we deliver.
          </p>
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{guarantee.title}</h3>
                <p className="text-blue-100">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">How Our Risk-Free Process Works</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="font-bold mb-2">Sign Up</h4>
              <p className="text-blue-100 text-sm">Choose your package and get started instantly</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="font-bold mb-2">Receive Leads</h4>
              <p className="text-blue-100 text-sm">Get verified leads delivered to your dashboard</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="font-bold mb-2">Convert Sales</h4>
              <p className="text-blue-100 text-sm">Contact leads and close deals faster</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                ✓
              </div>
              <h4 className="font-bold mb-2">Grow Business</h4>
              <p className="text-blue-100 text-sm">Scale your operations with consistent leads</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-blue-100 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-blue-300 text-sm">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold px-8 py-4 text-lg">
            Start Risk-Free Today
          </Button>
          <p className="text-blue-200 mt-4">30-day money-back guarantee • No setup fees • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default RiskFreeSection;
