
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '@/config/site';

const GetInTouch = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted');
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      info: siteConfig.phone,
      description: "Speak with our lead generation experts",
      action: `tel:${siteConfig.phone}`
    },
    {
      icon: Mail,
      title: "Email Us",
      info: siteConfig.email,
      description: "Get detailed information about our services",
      action: `mailto:${siteConfig.email}`
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: `${siteConfig.address.city}, ${siteConfig.address.state}`,
      description: "Our headquarters in the automotive capital",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "24/7 Support",
      description: "We're always here when you need us",
      action: "#"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our lead generation experts today. Let's discuss how we can help you 
            scale your auto parts business with qualified leads.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
            
            <div className="grid gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">{method.title}</h4>
                        <p className="text-blue-200 font-medium mb-1">{method.info}</p>
                        <p className="text-blue-100 text-sm">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Why Choose GearLeads?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-yellow-400">10,000+</div>
                  <div className="text-blue-100 text-sm">Leads Generated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">85%</div>
                  <div className="text-blue-100 text-sm">Conversion Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">500+</div>
                  <div className="text-blue-100 text-sm">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-blue-100 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <MessageSquare className="w-6 h-6 mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input 
                        placeholder="Your Name" 
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                        required 
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Your Email" 
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      />
                    </div>
                    <div>
                      <Input 
                        placeholder="Company Name" 
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Textarea 
                      placeholder="Tell us about your business and lead requirements..." 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
