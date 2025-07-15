
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Zap, DollarSign, Users, TrendingUp, Settings } from 'lucide-react';

const AftermarketParts = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Aftermarket Parts lead form submitted');
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
                High-Volume <span className="text-green-400">Aftermarket Parts</span> Leads
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Tap into the largest segment of the auto parts market. Connect with performance enthusiasts, 
                budget-conscious consumers, and modification specialists.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">300+</div>
                  <div className="text-sm text-green-200">Daily Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">$420</div>
                  <div className="text-sm text-green-200">Avg Order Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">78%</div>
                  <div className="text-sm text-green-200">Conversion Rate</div>
                </div>
              </div>
            </div>
            
            {/* Lead Form */}
            <div>
              <Card className="bg-gray-800/90 backdrop-blur-sm border border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-center">Get Aftermarket Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <Input placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white" />
                    <Input type="email" placeholder="Email Address" className="bg-gray-700 border-gray-600 text-white" />
                    <Input type="tel" placeholder="Phone Number" className="bg-gray-700 border-gray-600 text-white" />
                    <Select>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Specialization" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="performance">Performance Parts</SelectItem>
                        <SelectItem value="replacement">Replacement Parts</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                        <SelectItem value="tuning">Tuning Components</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Vehicle types and brands you focus on..." className="bg-gray-700 border-gray-600 text-white" />
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Get Aftermarket Leads Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Aftermarket Segments We Cover
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 text-orange-500 mr-2" />
                  Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  High-performance upgrades, turbo kits, exhaust systems, and racing components.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Cold air intakes</li>
                  <li>• Performance chips</li>
                  <li>• Suspension upgrades</li>
                  <li>• Brake systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-6 h-6 text-blue-500 mr-2" />
                  Replacement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Quality replacement parts at competitive prices for everyday repairs.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Engine components</li>
                  <li>• Electrical parts</li>
                  <li>• Filters & fluids</li>
                  <li>• Belts & hoses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 text-purple-500 mr-2" />
                  Customization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Custom parts for vehicle personalization and aesthetic modifications.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Body kits</li>
                  <li>• Custom wheels</li>
                  <li>• Interior accessories</li>
                  <li>• Lighting upgrades</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-6 h-6 text-green-500 mr-2" />
                  Budget-Friendly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Affordable alternatives for cost-conscious customers without compromising quality.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Economy parts</li>
                  <li>• Refurbished items</li>
                  <li>• Universal components</li>
                  <li>• Value packages</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Aftermarket Leads Drive Volume
              </h2>
              <ul className="space-y-4">
                {[
                  "Largest market segment with highest demand",
                  "Faster sales cycles and quicker decisions",
                  "Multiple purchase opportunities per customer",
                  "Strong repeat business potential",
                  "Higher inventory turnover rates",
                  "Diverse customer base across all demographics"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Market Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">$65B</div>
                  <div className="text-green-100 text-sm">Global Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">75%</div>
                  <div className="text-green-100 text-sm">Market Share</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">4.2%</div>
                  <div className="text-green-100 text-sm">Annual Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">89M</div>
                  <div className="text-green-100 text-sm">Vehicles Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Customer Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Speed Shop Pro",
                growth: "250% Sales Increase",
                story: "Expanded from local to regional market using our performance parts leads."
              },
              {
                name: "Budget Auto Parts",
                growth: "500+ New Customers",
                story: "Built a loyal customer base with our replacement parts lead generation."
              },
              {
                name: "Custom Garage",
                growth: "$100K Monthly Revenue",
                story: "Scaled their customization business with targeted modification leads."
              }
            ].map((story, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                  <div className="text-green-600 font-semibold mb-3">{story.growth}</div>
                  <p className="text-gray-600">{story.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Scale Your Aftermarket Business?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of aftermarket dealers who are growing their business with our high-volume lead generation.
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Start Getting Aftermarket Leads
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AftermarketParts;
