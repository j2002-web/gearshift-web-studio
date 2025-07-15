
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Zap, TrendingUp, Users, Target, Gauge } from 'lucide-react';

const PerformanceParts = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Performance Parts lead form submitted');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-900 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                High-Performance <span className="text-orange-400">Auto Parts</span> Leads
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                Connect with performance enthusiasts, racing teams, and tuning shops. Access high-value customers 
                who invest in premium performance upgrades.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">$1,500</div>
                  <div className="text-sm text-orange-200">Avg Order Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">88%</div>
                  <div className="text-sm text-orange-200">Conversion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">150+</div>
                  <div className="text-sm text-orange-200">Monthly Leads</div>
                </div>
              </div>
            </div>
            
            {/* Lead Form */}
            <div>
              <Card className="bg-gray-800/90 backdrop-blur-sm border border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-center">Get Performance Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <Input placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white" />
                    <Input type="email" placeholder="Email Address" className="bg-gray-700 border-gray-600 text-white" />
                    <Input type="tel" placeholder="Phone Number" className="bg-gray-700 border-gray-600 text-white" />
                    <Select>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Performance Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engine">Engine Performance</SelectItem>
                        <SelectItem value="exhaust">Exhaust Systems</SelectItem>
                        <SelectItem value="suspension">Suspension & Handling</SelectItem>
                        <SelectItem value="turbo">Turbo & Supercharging</SelectItem>
                        <SelectItem value="racing">Racing Components</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Performance brands you specialize in..." className="bg-gray-700 border-gray-600 text-white" />
                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                      Get Performance Leads Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Performance Categories We Cover
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 text-orange-500 mr-2" />
                  Engine Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  High-performance engine components for power and efficiency gains.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Cold air intakes</li>
                  <li>• Performance chips & tuners</li>
                  <li>• High-flow fuel injectors</li>
                  <li>• Performance camshafts</li>
                  <li>• Throttle body upgrades</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gauge className="w-6 h-6 text-red-500 mr-2" />
                  Forced Induction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Turbochargers, superchargers, and boost systems for maximum power.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Turbo kits & upgrades</li>
                  <li>• Supercharger systems</li>
                  <li>• Intercoolers & piping</li>
                  <li>• Boost controllers</li>
                  <li>• Wastegates & blow-off valves</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-6 h-6 text-blue-500 mr-2" />
                  Suspension & Handling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced suspension systems for superior handling and control.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Coilover systems</li>
                  <li>• Performance springs</li>
                  <li>• Anti-roll bars</li>
                  <li>• Strut tower braces</li>
                  <li>• Adjustable dampers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Your Performance Customers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Racing Teams",
                desc: "Professional and amateur racing teams seeking competitive advantage",
                icon: "🏁"
              },
              {
                title: "Tuning Shops",
                desc: "Performance shops building custom high-performance vehicles",
                icon: "⚙️"
              },
              {
                title: "Car Enthusiasts",
                desc: "Passionate owners modifying their vehicles for maximum performance",
                icon: "🏎️"
              },
              {
                title: "Track Day Drivers",
                desc: "Weekend warriors optimizing their cars for track performance",
                icon: "🏁"
              }
            ].map((customer, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{customer.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{customer.title}</h3>
                  <p className="text-gray-600 text-sm">{customer.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Benefits */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Performance Market Advantages</h2>
              <ul className="space-y-4">
                {[
                  "Highest profit margins in the auto parts industry",
                  "Customers willing to pay premium prices",
                  "Strong brand loyalty and repeat purchases",
                  "Word-of-mouth referrals from satisfied customers",
                  "Growing market with increasing enthusiast participation",
                  "Multiple upgrade paths per vehicle"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Performance Stats</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-300">$2,500</div>
                  <div className="text-orange-200 text-sm">Avg Annual Spend</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">65%</div>
                  <div className="text-orange-200 text-sm">Profit Margins</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">3.2x</div>
                  <div className="text-orange-200 text-sm">Customer LTV</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">24hrs</div>
                  <div className="text-orange-200 text-sm">Avg Decision Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partnerships */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Premium Performance Brands
          </h2>
          <div className="grid md:grid-cols-6 gap-8 items-center text-center">
            {[
              "Garrett Motion", "Borla", "K&N", "Bilstein", "Brembo", "HKS"
            ].map((brand, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-colors">
                <div className="font-bold text-gray-700">{brand}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Connect with customers seeking these premium performance brands and many more.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Accelerate Your Performance Business?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Connect with high-value performance customers who invest in premium modifications and upgrades.
          </p>
          <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Get Performance Leads Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PerformanceParts;
