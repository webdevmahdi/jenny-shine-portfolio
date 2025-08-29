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
              
              {/* Profile Image */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange/20 to-orange/40 flex items-center justify-center border-4 border-background overflow-hidden">
                <img 
                  src="/lovable-uploads/c814cfa3-f3cb-4040-afd6-5f817181bb06.png" 
                  alt="Your Name - Professional Web Developer" 
                  className="w-72 h-72 rounded-full object-cover"
                />
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
                With over 7 years of experience specializing in the MERN stack, I've honed my skills in React.js, Node.js, Express.js, Redux, MongoDB, TypeScript, C++, and more to perfection. Throughout my career, I've consistently demonstrated the ability to create dynamic and user-friendly web applications that drive business growth. What sets me apart is not just my technical proficiency but also my commitment to understanding each project's unique needs and delivering tailored solutions that make a tangible difference.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-orange">90+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-orange">15+</h3>
                <p className="text-muted-foreground">Industries Served</p>
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