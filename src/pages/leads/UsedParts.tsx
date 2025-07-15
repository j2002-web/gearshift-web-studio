
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Recycle, DollarSign, Users } from 'lucide-react';

const UsedParts = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Used Auto Parts Leads
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tap into the growing used auto parts market with qualified leads from customers 
              seeking cost-effective solutions for their vehicle repairs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
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

          <div className="text-center">
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 text-lg">
              Get Used Parts Leads Now
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UsedParts;
