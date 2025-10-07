
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
        <section id="home" className="relative flex items-center justify-center min-h-screen !py-0 text-white">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
            <video
              src="https://video.wixstatic.com/video/d5c245_ea2270e596434428a1629246cab78f23/1080p/mp4/file.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            ></video>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]"></div>
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-shadow-lg">
              G1 Technologies
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-white/90 text-shadow">
              Pioneering the future of technology with cutting-edge web solutions, cloud infrastructure, and AI integration.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/services">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Link href="/solutions">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        <Section id="services" className="bg-background">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Our Core Services</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              Comprehensive digital solutions tailored to drive your business growth.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card
                key={service.title}
                onClick={() => toggleService(service.title)}
                className={cn(
                  'cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
                  selectedServices.includes(service.title) && 'ring-2 ring-accent'
                )}
              >
                <CardHeader className="items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-xl text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <AIPoweredInsights selectedServices={selectedServices} />

        <Section id="why-choose-us" className="">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Why Choose G1 Technologies?</h2>
              <p className="mt-4 text-lg text-foreground/80">
                Proven expertise delivering exceptional results for businesses worldwide.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-8">
                {features.map((feature) => (
                    <Card key={feature.title} className="bg-transparent border-0 shadow-none">
                        <CardHeader className="flex flex-row items-start p-0">
                           <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent mr-4">
                               <feature.icon className="h-6 w-6" />
                           </div>
                           <div>
                                <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
                                <CardContent className="p-0 mt-1">
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </CardContent>
                           </div>
                        </CardHeader>
                    </Card>
                ))}
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm">
                <div className="grid grid-cols-2 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-bold text-accent">{stat.value}</p>
                            <p className="mt-1 text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </Section>

        <ProcessTimeline />
        
        <ClientCarousel />

        <Section id="blog" className="">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Latest Insights</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              Stay updated with industry trends and expert perspectives.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.title} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-card-foreground">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.description}</p>
                </CardContent>
                <div className="border-t p-6">
                    <Link href={`/blogs/${post.id}`} className="font-semibold text-accent transition-colors hover:text-accent/80">
                        Read More &rarr;
                    </Link>
                </div>
              </Card>
            ))}
          </div>
        </Section>
    </>
  );
}
