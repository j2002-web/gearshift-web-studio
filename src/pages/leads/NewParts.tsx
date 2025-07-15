
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhyChooseUs from '@/components/WhyChooseUs';
import RiskFreeSection from '@/components/RiskFreeSection';
import ReadyToTransform from '@/components/ReadyToTransform';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Star, TrendingUp, Phone, Users, Shield } from 'lucide-react';

const NewParts = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New Parts lead form submitted');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Premium <span className="text-blue-400">New Auto Parts</span> Leads
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Connect with buyers actively searching for brand new auto parts. Our verified leads 
                ensure you reach customers ready to purchase quality OEM and aftermarket parts.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">200+</div>
                  <div className="text-sm text-blue-200">Daily Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">92%</div>
                  <div className="text-sm text-blue-200">Conversion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">$750</div>
                  <div className="text-sm text-blue-200">Avg Order Value</div>
                </div>
              </div>
            </div>
            
            {/* Lead Form */}
            <div>
              <Card className="bg-gray-800/90 backdrop-blur-sm border border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-center">Get New Parts Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <Input placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white" />
                    <Input type="email" placeholder="Email Address" className="bg-gray-700 border-gray-600 text-white" />
                    <Input type="tel" placeholder="Phone Number" className="bg-gray-700 border-gray-600 text-white" />
                    <Select>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select Lead Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mix">Mix Parts Only</SelectItem>
                        <SelectItem value="engine">Engine Only</SelectItem>
                        <SelectItem value="transmission">Transmission Only</SelectItem>
                        <SelectItem value="brakes">Brakes Only</SelectItem>
                        <SelectItem value="electrical">Electrical Only</SelectItem>
                        <SelectItem value="suspension">Suspension Only</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Specific parts you specialize in..." className="bg-gray-700 border-gray-600 text-white" />
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Get New Parts Leads Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            New Auto Parts Lead Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  OEM Parts Leads
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  High-quality leads for original equipment manufacturer parts with premium pricing.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Verified dealership contacts</li>
                  <li>• High-value transactions</li>
                  <li>• Quick conversion rates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  Aftermarket Parts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Connect with customers looking for quality aftermarket alternatives.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Performance enthusiasts</li>
                  <li>• Cost-conscious buyers</li>
                  <li>• Volume purchasers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-6 h-6 text-blue-500 mr-2" />
                  Premium Leads
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Exclusive leads for luxury and high-end vehicle parts with maximum ROI.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Luxury car owners</li>
                  <li>• High-value purchases</li>
                  <li>• Repeat customers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Import reusable sections */}
      <WhyChooseUs />
      <RiskFreeSection />
      <ReadyToTransform />
      
      <Footer />
    </div>
  );
};

export default NewParts;
