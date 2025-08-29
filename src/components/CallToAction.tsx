import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section id='contact' className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
          Have an Awesome Project Idea? <br />
          <span className="text-orange">Let's Discuss</span>
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to bring your vision to life? I'm here to help you create exceptional 
          digital experiences that engage users and drive results.
        </p>
        
        <div className="pt-4">
          <Button className="bg-orange hover:bg-orange/90 text-orange-foreground px-12 py-6 text-xl font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Hire Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;