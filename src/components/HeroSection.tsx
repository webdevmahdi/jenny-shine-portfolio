import React from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
const HeroSection = () => {
  return <section id="home" className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground italic text-lg">
                "Creating digital experiences that inspire and engage"
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                I'm <span className="text-foreground">Mahdi</span>,{' '}
                <span className="text-foreground">Product Designer</span>
              </h1>
            </div>

            {/* Achievement Stats */}
            <div className="flex gap-8">
              <div className="bg-card rounded-xl p-6 shadow-sm border">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-orange text-orange" />)}
                </div>
                <p className="text-sm text-muted-foreground">6 Years Experts</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm border">
                <h3 className="text-2xl font-bold text-orange mb-2">80+</h3>
                <p className="text-sm text-muted-foreground">Client Served</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <Button className="bg-orange hover:bg-orange/90 text-orange-foreground px-8 py-6 text-lg font-semibold rounded-xl">
                Portfolio
              </Button>
              <Button variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-lg font-semibold rounded-xl">
                Hire Me
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-orange rounded-full w-80 h-80 -z-10 transform translate-x-4 translate-y-4"></div>
              
              {/* Profile Image Placeholder */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange/20 to-orange/40 flex items-center justify-center border-4 border-background">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                  <span className="text-6xl font-bold text-muted-foreground">JR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;