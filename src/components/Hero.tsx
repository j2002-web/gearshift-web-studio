
import { ArrowRight, Shield, Wrench, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Shield className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">ISO 9001 Certified • Trusted Since {siteConfig.business.founded}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Premium Automotive
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Drivetrain Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience unmatched performance with our premium drivetrain parts, professional installation, 
            and expert service. Quality you can trust, performance you can feel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Shop Parts Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              Schedule Service
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <Wrench className="w-10 h-10 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Expert Installation</h3>
              <p className="text-gray-300 text-sm">Professional installation by certified technicians</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <Shield className="w-10 h-10 text-green-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-300 text-sm">Premium parts with comprehensive warranty coverage</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <Truck className="w-10 h-10 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-300 text-sm">Quick shipping and same-day installation available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
