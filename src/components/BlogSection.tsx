import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'The Future of UI/UX Design: Trends to Watch in 2024',
      category: 'Design Trends',
      author: 'Jenny Shine',
      date: 'March 15, 2024',
      excerpt: 'Exploring the latest trends shaping the future of user interface and experience design.',
      readTime: '5 min read',
    },
    {
      title: 'Creating Accessible Designs: A Complete Guide',
      category: 'Accessibility',
      author: 'Jenny Shine',
      date: 'March 10, 2024',
      excerpt: 'Learn how to make your designs inclusive and accessible to all users.',
      readTime: '7 min read',
    },
    {
      title: 'From Wireframe to Prototype: My Design Process',
      category: 'Process',
      author: 'Jenny Shine',
      date: 'March 5, 2024',
      excerpt: 'A deep dive into my design workflow and the tools I use to bring ideas to life.',
      readTime: '6 min read',
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-light-grey/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            From my <span className="text-orange">blog post</span>
          </h2>
          <Button className="bg-orange hover:bg-orange/90 text-orange-foreground font-semibold">
            View All
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-0">
                {/* Blog Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-orange/10 to-orange/30 rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-orange font-semibold">Blog Image</span>
                  </div>
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-orange text-orange-foreground">
                    {post.category}
                  </Badge>
                </div>

                <div className="p-6 space-y-4">
                  {/* Post Title */}
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-orange transition-colors leading-tight">
                    {post.title}
                  </h3>

                  {/* Post Excerpt */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span className="text-xs text-orange font-medium">{post.readTime}</span>
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

export default BlogSection;