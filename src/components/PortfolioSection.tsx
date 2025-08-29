import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: 'E-Commerce Platform - Full Stack Solution',
      description: 'A complete e-commerce platform with user authentication, payment integration, and admin dashboard built with MERN stack.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Redux'],
      featured: true,
    },
    {
      title: 'Social Media Dashboard',
      description: 'Real-time social media analytics dashboard with data visualization and user engagement tracking.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Chart.js'],
      featured: false,
    },
    {
      title: 'Task Management Application',
      description: 'Collaborative task management tool with real-time updates, team collaboration features, and progress tracking.',
      tags: ['React.js', 'Express.js', 'TypeScript', 'Socket.io'],
      featured: false,
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's Have a Look at my <span className="text-orange">Portfolio</span>
          </h2>
        </div>

        {/* Portfolio Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Portfolio Cards */}
          <div className="overflow-hidden">
            <div className="flex gap-6 transition-transform duration-300">
              {portfolioItems.map((item, index) => (
                <Card 
                  key={index}
                  className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    item.featured ? 'ring-2 ring-orange ring-offset-2' : ''
                  }`}
                >
                  <CardContent className="p-0">
                    {/* Project Image Placeholder */}
                    <div className="w-full h-64 bg-gradient-to-br from-orange/10 to-orange/30 rounded-t-lg relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-orange font-semibold text-lg">Project Preview</span>
                      </div>
                      
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button className="bg-orange hover:bg-orange/90 text-orange-foreground">
                          View Project
                        </Button>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="secondary"
                            className="text-xs bg-orange/10 text-orange hover:bg-orange/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Project Info */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-orange transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;