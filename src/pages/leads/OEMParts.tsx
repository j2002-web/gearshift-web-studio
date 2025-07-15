
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Star, Award, Shield, Users, TrendingUp } from 'lucide-react';

const OEMParts = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('OEM Parts lead form submitted');
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
                Premium <span className="text-yellow-400">OEM Parts</span> Leads
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Connect with customers seeking authentic Original Equipment Manufacturer parts. 
                Target high-value buyers who prioritize quality and authenticity.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">95%</div>
                  <div className="text-sm text-blue-200">Quality Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">$850</div>
                  <div className="text-sm text-blue-200">Avg Order Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">200+</div>
                  <div className="text-sm text-blue-200">Monthly Leads</div>
                </div>
              </div>
            </div>
            
            {/* Lead Form */}
            <div>
              <Card className="bg-gray-800/90 backdrop-blur-sm border border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-center">Get OEM Parts Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <Input placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white" />
                    <Input type="email" placeholder="Email Address" className="bg-gray-700 border-gray-600 text-white" />
                    <Input type="tel" placeholder="Phone Number" className="bg-gray-700 border-gray-600 text-white" />
                    <Select>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Business Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dealer">Authorized Dealer</SelectItem>
                        <SelectItem value="distributor">Parts Distributor</SelectItem>
                        <SelectItem value="repair">Repair Shop</SelectItem>
                        <SelectItem value="reseller">Parts Reseller</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Specific OEM brands you specialize in..." className="bg-gray-700 border-gray-600 text-white" />
                    <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700">
                      Get OEM Leads Now
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
            Why OEM Parts Leads Are Premium
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-6 h-6 text-yellow-500 mr-2" />
                  Authentic Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  OEM parts buyers are quality-focused customers willing to pay premium prices for authentic, manufacturer-approved components.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-6 h-6 text-green-500 mr-2" />
                  Higher Profit Margins
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  OEM parts command higher prices and better margins compared to aftermarket alternatives, boosting your revenue per sale.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-500 mr-2" />
                  Warranty Assurance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Customers choose OEM for warranty compliance and peace of mind, leading to higher conversion rates and customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Your OEM Parts Customers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Luxury Car Owners", desc: "Premium vehicle owners who demand authentic parts" },
              { title: "Fleet Managers", desc: "Commercial fleets requiring warranty compliance" },
              { title: "Insurance Companies", desc: "Insurers specifying OEM parts for claims" },
              { title: "Authorized Dealers", desc: "Dealerships needing genuine manufacturer parts" }
            ].map((customer, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{customer.title}</h3>
                  <p className="text-gray-600 text-sm">{customer.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">OEM Parts Lead Benefits</h2>
              <ul className="space-y-4">
                {[
                  "Average order values 60% higher than aftermarket",
                  "Customers with higher lifetime value",
                  "Better conversion rates due to specific needs",
                  "Premium pricing acceptance",
                  "Warranty and compliance requirements drive urgency",
                  "Repeat business from fleet and commercial customers"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">$1,200</div>
                  <div className="text-blue-200">Average Deal Size</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">92%</div>
                  <div className="text-blue-200">Lead Quality Score</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">45%</div>
                  <div className="text-blue-200">Higher Margins</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">24hrs</div>
                  <div className="text-blue-200">Avg Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Access Premium OEM Buyers?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Join successful OEM parts dealers who are closing higher-value deals with our qualified leads.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg">
            Start Getting OEM Leads Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OEMParts;
