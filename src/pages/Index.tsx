
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LeadProviders from '@/components/LeadProviders';
import WhatWeOffer from '@/components/WhatWeOffer';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LeadProviders />
      <WhatWeOffer />
      <Footer />
    </div>
  );
};

export default Index;
