
'use client';

import type { FC } from 'react';
import { useState, ComponentType, SVGProps } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scaling, Smartphone, Rocket, Search, CodeXml, Cloud, BrainCircuit, TrendingUp } from 'lucide-react';
import AIPoweredInsights from '@/components/sections/ai-powered-insights';
import ProcessTimeline from '@/components/sections/process-timeline';
import ClientCarousel from '@/components/sections/client-carousel';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ id, className, children }) => (
  <section id={id} className={cn('py-12 md:py-20', className)}>
    <div className="container mx-auto px-4 md:px-6">{children}</div>
  </section>
);

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const services: {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}[] = [
  { icon: CodeXml, title: 'Web Development', description: 'Modern, responsive websites built for performance and user experience' },
  { icon: Cloud, title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure for business growth' },
  { icon: BrainCircuit, title: 'AI Integration', description: 'Smart automation and AI-driven insights for innovation' },
  { icon: TrendingUp, title: 'SEO Optimization', description: 'Data-driven strategies to enhance your online visibility' },
];

const features: {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}[] = [
    { icon: Scaling, title: 'Scalable Architecture', description: 'Built to grow with your business, ensuring long-term performance.' },
    { icon: Smartphone, title: 'Mobile-First Design', description: 'Flawless experiences on any device, from desktops to smartphones.' },
    { icon: Rocket, title: 'High Performance', description: 'Optimized for speed and reliability, delivering a seamless user experience.' },
    { icon: Search, title: 'SEO Optimized', description: 'Engineered to rank higher on search engines and attract more traffic.' },
];

const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Years Experience' },
    { value: '24/7', label: 'Support Available' },
];

const blogPosts = [
    { id: '1', title: 'The Future of Web Development in 2025', description: 'Exploring emerging trends and technologies shaping web development' },
    { id: '2', title: 'AI Integration Best Practices', description: 'How to successfully implement AI solutions in your business' },
    { id: '3', title: 'Cloud Security Essentials', description: 'Protecting your data in cloud environments' },
];

export default function Home() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceTitle: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceTitle)
        ? prev.filter(s => s !== serviceTitle)
        : [...prev, serviceTitle]
    );
  };

  return (
    <>
        <section id="home" className="relative flex items-center justify-center min-h-screen !py-0 text-white overflow-hidden">
          {/* Enhanced Background with Gradient Overlay */}
          <div className="absolute inset-0 z-[-2]">
            <video
              src="https://video.wixstatic.com/video/d5c245_ea2270e596434428a1629246cab78f23/1080p/mp4/file.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            ></video>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-primary/20 z-[-1]"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-[-1]">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            {/* Enhanced Title with Animation */}
            <div className="animate-fade-in-up">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-headline mb-6">
                <span className="block text-white">G1</span>
                <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Technologies
                </span>
              </h1>
              
              {/* Enhanced Subtitle */}
              <p className="mt-6 max-w-3xl mx-auto text-xl leading-relaxed text-white/90 font-medium">
                Pioneering the future of technology with 
                <span className="text-accent font-semibold"> cutting-edge web solutions</span>, 
                <span className="text-secondary font-semibold"> cloud infrastructure</span>, and 
                <span className="text-accent font-semibold"> AI integration</span>.
              </p>
            </div>

            {/* Stats Section */}
            <div className="mt-12 mb-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-white/70">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">99%</div>
                <div className="text-sm text-white/70">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-white/70">Support</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg" 
                asChild 
                className="bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <Link href="/services" className="flex items-center gap-2">
                  Get Started
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/solutions" className="flex items-center gap-2">
                  View Portfolio
                  <span className="ml-2">🚀</span>
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 text-center">
              <p className="text-white/60 text-sm mb-4">Trusted by industry leaders</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="text-white/70 font-semibold">Enterprise</div>
                <div className="text-white/70 font-semibold">Startups</div>
                <div className="text-white/70 font-semibold">SMBs</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        <Section id="services" className="bg-gradient-to-br from-background via-primary/5 to-secondary/5">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-headline mb-4">Our Core Services</h2>
            <p className="mt-4 text-xl leading-8 text-foreground/70 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to drive your business growth and digital transformation.
            </p>
          </div>
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card
                key={service.title}
                onClick={() => toggleService(service.title)}
                className={cn(
                  'group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden',
                  'border-2 hover:border-accent/50 bg-card/80 backdrop-blur-sm',
                  selectedServices.includes(service.title) && 'ring-2 ring-accent shadow-lg shadow-accent/25 border-accent',
                  'animate-fade-in-up'
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="items-center text-center pb-4">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 text-accent transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="font-headline text-xl text-card-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  
                  {/* Selection Indicator */}
                  {selectedServices.includes(service.title) && (
                    <div className="mt-4 flex items-center justify-center">
                      <div className="flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium animate-scale-in">
                        ✓ Selected
                      </div>
                    </div>
                  )}
                </CardContent>
                
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Card>
            ))}
          </div>
          
          {/* Services CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              {selectedServices.length > 0 
                ? `You've selected ${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''}. Get personalized recommendations below!`
                : 'Select services you\'re interested in to get AI-powered recommendations.'
              }
            </p>
            <Button variant="outline" size="lg" asChild className="hover:bg-accent hover:text-white transition-colors">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </Section>

        <AIPoweredInsights selectedServices={selectedServices} />

        <Section id="why-choose-us" className="bg-gradient-to-br from-secondary/5 via-background to-accent/5">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-headline mb-6">
                Why Choose G1 Technologies?
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed mb-12">
                Proven expertise delivering exceptional results for businesses worldwide through innovation and dedication.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                    <Card key={feature.title} className="group bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardHeader className="flex flex-row items-center p-6">
                           <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 text-accent mr-4 transition-transform group-hover:scale-110 group-hover:rotate-3">
                               <feature.icon className="h-7 w-7" />
                           </div>
                           <div>
                                <CardTitle className="text-lg text-primary font-semibold group-hover:text-accent transition-colors">{feature.title}</CardTitle>
                                <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                           </div>
                        </CardHeader>
                    </Card>
                ))}
              </div>
            </div>
            <div className="relative animate-slide-in-right">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-card/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-border/50">
                    <h3 className="text-2xl font-bold text-center text-primary mb-8 font-headline">Our Impact</h3>
                    <div className="grid grid-cols-2 gap-8">
                        {stats.map((stat, index) => (
                            <div key={stat.label} className="text-center group">
                                <div className="relative">
                                    <p className="text-4xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">{stat.value}</p>
                                    <div className="h-1 w-12 bg-gradient-to-r from-accent to-secondary rounded-full mx-auto mb-2 group-hover:w-16 transition-all"></div>
                                </div>
                                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-border/50 text-center">
                        <p className="text-sm text-muted-foreground">Trusted by companies worldwide</p>
                    </div>
                </div>
            </div>
          </div>
        </Section>

        <ProcessTimeline />
        
        <ClientCarousel />

        <Section id="blog" className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-headline mb-4">Latest Insights</h2>
            <p className="text-xl leading-8 text-foreground/70 max-w-3xl mx-auto">
              Stay updated with industry trends and expert perspectives from our team.
            </p>
          </div>
          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={post.title} className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card/80 backdrop-blur-sm border border-border/50 hover:border-accent/50 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <CardHeader className="relative">
                  <CardTitle className="font-headline text-xl text-card-foreground group-hover:text-accent transition-colors leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed">{post.description}</p>
                </CardContent>
                <div className="border-t border-border/50 p-6">
                    <Link href={`/blogs/${post.id}`} className="inline-flex items-center gap-2 font-semibold text-accent transition-all duration-300 hover:text-accent/80 group-hover:translate-x-1">
                        Read More 
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Blog CTA */}
          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" asChild className="hover:bg-accent hover:text-white transition-colors">
              <Link href="/blogs">View All Articles</Link>
            </Button>
          </div>
        </Section>
    </>
  );
}
