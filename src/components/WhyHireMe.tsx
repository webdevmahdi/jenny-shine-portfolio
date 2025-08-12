import React from 'react';
import { Button } from '@/components/ui/button';

const WhyHireMe = () => {
  return (
    <section className="py-20 px-4 bg-light-grey/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-orange rounded-full w-80 h-80 -z-10 transform -translate-x-4 translate-y-4"></div>
              
              {/* Profile Image Placeholder */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange/20 to-orange/40 flex items-center justify-center border-4 border-background">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                  <span className="text-6xl font-bold text-muted-foreground">JR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Why You <span className="text-orange">Hire Me</span> for Your Next Projects?
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 10 years of experience in product design, I bring a unique blend of 
                creativity and technical expertise to every project. I'm passionate about creating 
                user-centered designs that not only look great but also drive business results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-orange">600+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-orange">50+</h3>
                <p className="text-muted-foreground">Industry Covered</p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button className="bg-orange hover:bg-orange/90 text-orange-foreground px-8 py-6 text-lg font-semibold rounded-xl">
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;