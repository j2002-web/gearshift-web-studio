
import { ArrowRight, Shield, Users, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '@/config/site';

const Hero = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead form submitted');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950 pt-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&h=1080&fit=crop")'
        }}
      ></div>

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Shield className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-sm font-medium">Trusted Since {siteConfig.business.founded} • 10,000+ Leads Generated</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                BOOK YOUR LEADS TODAY
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
                  That Convert Fast
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Connect with qualified buyers actively searching for auto parts. Our lead generation system delivers 
                high-quality leads across USA, UAE, and India with guaranteed ROI.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-400">Daily Leads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">85%</div>
                <div className="text-sm text-gray-400">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-300">
                <Users className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold text-sm">Qualified Leads</h3>
                <p className="text-xs text-gray-400">Pre-verified buyers</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
                <h3 className="font-semibold text-sm">High ROI</h3>
                <p className="text-xs text-gray-400">Guaranteed returns</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-300">
                <Star className="w-8 h-8 text-yellow-400 mb-2" />
                <h3 className="font-semibold text-sm">Premium Quality</h3>
                <p className="text-xs text-gray-400">Top-tier leads only</p>
              </div>
            </div>
          </div>

          {/* Right Side - Lead Generation Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-gray-800/90 backdrop-blur-sm border border-gray-700 shadow-2xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-white">
                  BOOK YOUR LEADS TODAY
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Enter Your Name" 
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 h-12"
                      required 
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Enter Your E-mail" 
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 h-12"
                      required 
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Enter Your Phone Number" 
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 h-12"
                      required 
                    />
                  </div>
                  
                  <div>
                    <Select required>
                      <SelectTrigger className="bg-gray-700/50 border-gray-600 text-gray-400 h-12">
                        <SelectValue placeholder="Select Lead Type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="mix">Mix Parts Only</SelectItem>
                        <SelectItem value="engine">Engine Only</SelectItem>
                        <SelectItem value="transmission">Transmission Only</SelectItem>
                        <SelectItem value="brakes">Brakes Only</SelectItem>
                        <SelectItem value="electrical">Electrical Only</SelectItem>
                        <SelectItem value="suspension">Suspension Only</SelectItem>
                        <SelectItem value="exhaust">Exhaust Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Textarea 
                      placeholder="Enter Your Requirement" 
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[80px] resize-none"
                      rows={3}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-md transition-all duration-300 transform hover:scale-105 h-12"
                  >
                    SUBMIT
                  </Button>
                </form>
              </CardContent>
            </Card>
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
