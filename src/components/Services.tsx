
import { Wrench, Settings, Truck, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Expert installation of drivetrains, transmissions, and related components by certified technicians.",
      features: ["Certified Technicians", "Quality Tools", "Warranty Included", "Same-Day Service"],
      color: "blue"
    },
    {
      icon: Settings,
      title: "Repair & Maintenance",
      description: "Comprehensive repair services to keep your drivetrain components running smoothly.",
      features: ["Diagnostic Services", "Component Repair", "Preventive Maintenance", "Performance Tuning"],
      color: "green"
    },
    {
      icon: Truck,
      title: "Fleet Services",
      description: "Specialized services for commercial fleets with bulk pricing and priority scheduling.",
      features: ["Bulk Discounts", "Priority Service", "Fleet Management", "Custom Solutions"],
      color: "purple"
    },
    {
      icon: Phone,
      title: "Technical Support",
      description: "Expert consultation and technical support for all your drivetrain needs.",
      features: ["Expert Consultation", "Part Compatibility", "Installation Guidance", "Troubleshooting"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; icon: string; button: string }> = {
      blue: { bg: "bg-gradient-to-br from-blue-50 to-blue-100", icon: "text-blue-600", button: "bg-blue-600 hover:bg-blue-700" },
      green: { bg: "bg-gradient-to-br from-green-50 to-green-100", icon: "text-green-600", button: "bg-green-600 hover:bg-green-700" },
      purple: { bg: "bg-gradient-to-br from-purple-50 to-purple-100", icon: "text-purple-600", button: "bg-purple-600 hover:bg-purple-700" },
      orange: { bg: "bg-gradient-to-br from-orange-50 to-orange-100", icon: "text-orange-600", button: "bg-orange-600 hover:bg-orange-700" }
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Settings className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Drivetrain
            <span className="block text-blue-600">Solutions & Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From professional installation to ongoing maintenance, we provide comprehensive 
            services to keep your vehicle performing at its best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
              >
                <CardHeader className={`${colors.bg} pb-8`}>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-center text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6">
                  <CardDescription className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </CardDescription>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className={`w-2 h-2 rounded-full ${colors.icon.replace('text-', 'bg-')} mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full ${colors.button} text-white rounded-lg`}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our expert team today for a free consultation and quote on your drivetrain needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
