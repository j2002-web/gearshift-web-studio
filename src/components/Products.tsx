
import { Cog, Zap, Shield, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Products = () => {
  const products = [
    {
      title: "Complete Drivetrains",
      description: "High-performance complete drivetrain assemblies for various vehicle makes and models.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      features: ["OEM Quality", "Performance Tested", "2-Year Warranty"],
      popular: true
    },
    {
      title: "Transmissions",
      description: "Rebuilt and new transmissions with precision engineering and quality assurance.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      features: ["Remanufactured", "Quality Tested", "Nationwide Shipping"]
    },
    {
      title: "Axles & Differentials",
      description: "Premium axles and differential assemblies for optimal power distribution.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      features: ["Heavy Duty", "Precision Built", "Expert Installation"]
    },
    {
      title: "CV Joints & Shafts",
      description: "High-quality CV joints and drive shafts for smooth power transmission.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      features: ["Durable Design", "Perfect Fit", "Long Lasting"]
    }
  ];

  const stats = [
    { icon: Shield, value: "10,000+", label: "Parts Installed" },
    { icon: Star, value: "4.9/5", label: "Customer Rating" },
    { icon: Cog, value: "500+", label: "Vehicle Models" },
    { icon: Zap, value: "24hr", label: "Fast Shipping" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Cog className="w-4 h-4 mr-2" />
            Premium Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quality Drivetrain
            <span className="block text-blue-600">Parts & Components</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive range of premium drivetrain components, 
            engineered for performance and built to last.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-0">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {product.description}
                </CardDescription>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z\"/%3E%3C/g%3E%3C/svg%3E')]"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our expert team can help you find the perfect drivetrain solution for your specific vehicle and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact Our Experts
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Browse All Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
