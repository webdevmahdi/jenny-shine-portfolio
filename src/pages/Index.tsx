import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WorkExperience from '@/components/WorkExperience';
import WhyHireMe from '@/components/WhyHireMe';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
     {/* Your Content/Components */}
        <HeroSection />
        <ServicesSection />
        <WorkExperience />
        <WhyHireMe />
        <PortfolioSection />
        <TestimonialsSection />
        <BlogSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
