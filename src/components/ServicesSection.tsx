import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, Code, Laptop, Database } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Full Stack Development',
      icon: <Code className="w-8 h-8" />,
      description: 'End-to-end development of web applications using the MERN stack',
      highlighted: false,
    },
    {
      title: 'Frontend Development',
      icon: <Laptop className="w-8 h-8" />,
      description: 'Creating beautiful and responsive user interfaces with React.js',
      highlighted: true,
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-8 h-8" />,
      description: 'Building robust and scalable server-side applications with Node.js and Express.js',
      highlighted: false,
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-light-grey/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-orange">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                service.highlighted 
                  ? 'bg-orange text-orange-foreground border-orange' 
                  : 'bg-card hover:bg-card/80'
              }`}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Service Image/Icon Placeholder */}
                  <div className={`w-full h-48 rounded-lg flex items-center justify-center relative overflow-hidden ${
                    service.highlighted 
                      ? 'bg-white/10' 
                      : 'bg-gradient-to-br from-orange/10 to-orange/20'
                  }`}>
                    <div className={`${service.highlighted ? 'text-white' : 'text-orange'}`}>
                      {service.icon}
                    </div>
                    
                    {/* Arrow Button Overlay */}
                    <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      service.highlighted 
                        ? 'bg-white/20 text-white' 
                        : 'bg-orange/20 text-orange'
                    }`}>
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className={`text-xl font-semibold ${
                      service.highlighted ? 'text-white' : 'text-foreground'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm ${
                      service.highlighted ? 'text-white/80' : 'text-muted-foreground'
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;