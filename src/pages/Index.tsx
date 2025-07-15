
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LeadProviders from '@/components/LeadProviders';
import WhatWeOffer from '@/components/WhatWeOffer';
import WhyChooseUs from '@/components/WhyChooseUs';
import UsedPartsSection from '@/components/UsedPartsSection';
import RiskFreeSection from '@/components/RiskFreeSection';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import ReadyToTransform from '@/components/ReadyToTransform';
import GetInTouch from '@/components/GetInTouch';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LeadProviders />
      <WhatWeOffer />
      <WhyChooseUs />
      <UsedPartsSection />
      <RiskFreeSection />
      <Pricing />
      <FAQ />
      <ReadyToTransform />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Index;
