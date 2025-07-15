
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, TrendingUp } from 'lucide-react';

const NewParts = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              New Auto Parts Leads
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with buyers actively searching for brand new auto parts. Our verified leads 
              ensure you reach customers ready to purchase quality OEM and aftermarket parts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

          <div className="text-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 text-lg">
              Get New Parts Leads Now
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewParts;
