
import { Globe, Users, TrendingUp, Award, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LeadProviders = () => {
  const countries = [
    {
      name: "United States",
      flag: "🇺🇸",
      leads: "15,000+",
      regions: "All 50 States",
      specialties: ["New Parts", "Used Parts", "OEM", "Aftermarket"]
    },
    {
      name: "United Arab Emirates",
      flag: "🇦🇪",
      leads: "8,500+",
      regions: "Dubai, Abu Dhabi, Sharjah",
      specialties: ["Luxury Car Parts", "Import Parts", "Heavy Equipment"]
    },
    {
      name: "India",
      flag: "🇮🇳",
      leads: "12,000+",
      regions: "Mumbai, Delhi, Bangalore, Chennai",
      specialties: ["Commercial Vehicle Parts", "Two-Wheeler Parts", "Tractor Parts"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Globe className="w-4 h-4 mr-2" />
            Global Lead Network
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Top Auto Parts Lead Providers in
            <span className="block text-blue-600">USA, UAE and India</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access premium auto parts leads from three major markets with our extensive network 
            of verified suppliers and buyers across multiple regions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent"></div>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{country.flag}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{country.leads}</div>
                    <div className="text-sm text-gray-500">Monthly Leads</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{country.name}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                    <span className="text-sm">{country.regions}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="space-y-1">
                      {country.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">Active Buyers</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm font-semibold text-green-600">High Conversion</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">35,000+</div>
              <div className="text-gray-600">Total Monthly Leads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
              <div className="text-gray-600">Lead Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadProviders;
