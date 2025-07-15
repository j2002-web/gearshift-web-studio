
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Package, Users, TrendingUp, Crown, Star } from 'lucide-react';

const BulkPackages = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Bulk Package lead form submitted');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Enterprise <span className="text-purple-400">Bulk Lead</span> Packages
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Scale your auto parts business with our premium bulk lead packages. Perfect for distributors, 
                large dealers, and businesses ready for explosive growth.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">1,000+</div>
                  <div className="text-sm text-purple-200">Leads per Month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">40%</div>
                  <div className="text-sm text-purple-200">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-purple-200">Priority Support</div>
                </div>
              </div>
            </div>
            
            {/* Lead Form */}
            <div>
              <Card className="bg-gray-800/90 backdrop-blur-sm border border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-center">Request Bulk Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <Input placeholder="Company Name" className="bg-gray-700 border-gray-600 text-white" />
                    <Input placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white" />
                    <Input type="email" placeholder="Email Address" className="bg-gray-700 border-gray-600 text-white" />
                    <Select>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Monthly Lead Volume" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500">500-1,000 leads</SelectItem>
                        <SelectItem value="1000">1,000-2,500 leads</SelectItem>
                        <SelectItem value="2500">2,500-5,000 leads</SelectItem>
                        <SelectItem value="5000">5,000+ leads</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Tell us about your business and requirements..." className="bg-gray-700 border-gray-600 text-white" />
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                      Get Custom Bulk Pricing
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Bulk Lead Package Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-6 h-6 text-blue-500 mr-2" />
                  Growth Package
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">500-1,000</div>
                <div className="text-gray-600 mb-4">Leads per month</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Mixed lead categories</li>
                  <li>• Standard verification</li>
                  <li>• 15% bulk discount</li>
                  <li>• Email support</li>
                  <li>• Basic analytics</li>
                </ul>
                <div className="text-2xl font-bold text-gray-900">Starting at $1,275/mo</div>
                <div className="text-sm text-gray-500">Was $1,500/mo</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500 shadow-2xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Crown className="w-6 h-6 text-purple-500 mr-2" />
                  Enterprise Package
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600 mb-2">1,000-2,500</div>
                <div className="text-gray-600 mb-4">Leads per month</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Premium lead mix</li>
                  <li>• Advanced verification</li>
                  <li>• 25% bulk discount</li>
                  <li>• Priority phone support</li>
                  <li>• Advanced analytics</li>
                  <li>• Dedicated account manager</li>
                </ul>
                <div className="text-2xl font-bold text-gray-900">Starting at $2,250/mo</div>
                <div className="text-sm text-gray-500">Was $3,000/mo</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 text-green-500 mr-2" />
                  Distributor Package
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">2,500+</div>
                <div className="text-gray-600 mb-4">Leads per month</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Custom lead categories</li>
                  <li>• White-glove verification</li>
                  <li>• 40% bulk discount</li>
                  <li>• 24/7 priority support</li>
                  <li>• Custom dashboard</li>
                  <li>• API access included</li>
                  <li>• Multi-location support</li>
                </ul>
                <div className="text-2xl font-bold text-gray-900">Custom Pricing</div>
                <div className="text-sm text-gray-500">Contact for quote</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Enterprise Benefits & Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Volume Discounts",
                description: "Save up to 40% compared to individual lead pricing",
                icon: TrendingUp
              },
              {
                title: "Priority Processing",
                description: "First access to new leads before they go to smaller clients",
                icon: Crown
              },
              {
                title: "Custom Filtering",
                description: "Tailor lead criteria to your specific business needs",
                icon: Package
              },
              {
                title: "Dedicated Support",
                description: "Personal account manager and 24/7 priority support",
                icon: Users
              },
              {
                title: "Advanced Analytics",
                description: "Detailed reporting and performance tracking tools",
                icon: TrendingUp
              },
              {
                title: "API Integration",
                description: "Seamless integration with your existing systems",
                icon: Package
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <benefit.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Enterprise Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "Mega Auto Distributors",
                results: "500% ROI in 6 months",
                story: "Scaled from regional to national presence using our bulk lead packages.",
                leads: "2,500 leads/month"
              },
              {
                company: "National Parts Network",
                results: "$2M additional revenue",
                story: "Expanded market reach across 15 states with consistent lead flow.",
                leads: "5,000+ leads/month"
              },
              {
                company: "AutoParts Empire",
                results: "300% team growth",
                story: "Built a sales team of 50+ with our reliable bulk lead generation.",
                leads: "3,200 leads/month"
              }
            ].map((story, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{story.company}</h3>
                  <div className="text-purple-200 font-semibold mb-2">{story.leads}</div>
                  <div className="text-yellow-300 font-bold mb-3">{story.results}</div>
                  <p className="text-purple-100">{story.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Scale with Bulk Leads?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join enterprise clients who are dominating their markets with our bulk lead packages. 
            Custom solutions available for any volume requirement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Get Custom Quote
            </Button>
            <Button className="bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-4 text-lg font-semibold">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BulkPackages;
