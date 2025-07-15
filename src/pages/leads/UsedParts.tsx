
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
import { Recycle, DollarSign, Users, Phone } from 'lucide-react';

const UsedParts = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Used Parts lead form submitted');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Quality <span className="text-green-400">Used Auto Parts</span> Leads
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Tap into the growing used auto parts market with qualified leads from customers 
                seeking cost-effective solutions for their vehicle repairs.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">350+</div>
                  <div className="text-sm text-green-200">Daily Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">88%</div>
                  <div className="text-sm text-green-200">Conversion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">$320</div>
                  <div className="text-sm text-green-200">Avg Order Value</div>
                </div>
              </div>
            </div>
            
            {/* Lead Form */}
            <div>
              <Card className="bg-gray-800/90 backdrop-blur-sm border border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-center">Get Used Parts Leads</CardTitle>
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
                    <Textarea placeholder="Specific used parts you deal with..." className="bg-gray-700 border-gray-600 text-white" />
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Get Used Parts Leads Now
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
            Used Auto Parts Market Segments
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Recycle className="w-6 h-6 text-green-500 mr-2" />
                  Salvage Yard Leads
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Connect with salvage yards and auto recyclers looking for specific used parts inventory.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-6 h-6 text-blue-500 mr-2" />
                  Budget-Conscious Buyers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Reach customers prioritizing cost savings while maintaining quality standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 text-purple-500 mr-2" />
                  DIY Enthusiasts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Connect with do-it-yourself mechanics and car restoration enthusiasts.
                </p>
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

export default UsedParts;
