
import { Users, Award, Clock, Target, Shield, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

const About = () => {
  const stats = [
    { icon: Clock, value: `${new Date().getFullYear() - parseInt(siteConfig.business.founded)}+`, label: "Years Experience" },
    { icon: Users, value: siteConfig.business.employees, label: "Expert Team Members" },
    { icon: Award, value: "10,000+", label: "Parts Installed" },
    { icon: Star, value: "4.9/5", label: "Customer Rating" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "We never compromise on quality. Every part meets or exceeds OEM standards."
    },
    {
      icon: Users,
      title: "Expert Service",
      description: "Our certified technicians bring decades of experience to every installation."
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We're here to exceed your expectations."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-blue-400">{siteConfig.name}</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Since {siteConfig.business.founded}, we've been the trusted choice for premium drivetrain 
              solutions, combining expert craftsmanship with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in {siteConfig.business.founded} with a simple mission: to provide the highest quality 
                  drivetrain components and expert installation services to automotive enthusiasts and 
                  professionals alike.
                </p>
                <p>
                  What started as a small operation has grown into a trusted industry leader, serving 
                  thousands of satisfied customers across the nation. Our commitment to excellence 
                  has earned us certifications including {siteConfig.business.certifications.join(', ')}.
                </p>
                <p>
                  Today, we continue to push the boundaries of quality and service, investing in the 
                  latest technology and training to ensure every customer receives the best possible 
                  experience.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" 
                alt="Our Workshop"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">{new Date().getFullYear() - parseInt(siteConfig.business.founded)}+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and ensure we deliver 
              exceptional value to every customer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
