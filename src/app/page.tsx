
'use client';

import type { FC } from 'react';
import { useState, ComponentType, SVGProps } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXml, Cloud, BrainCircuit, TrendingUp, Scaling, Smartphone, Rocket, Search } from 'lucide-react';
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

type Service = {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
};

const services: Service[] = [
  { icon: CodeXml, title: 'Web Development', description: 'Modern, responsive websites built for performance and user experience' },
  { icon: Cloud, title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure for business growth' },
  { icon: BrainCircuit, title: 'AI Integration', description: 'Smart automation and AI-driven insights for innovation' },
  { icon: TrendingUp, title: 'SEO Optimization', description: 'Data-driven strategies to enhance your online visibility' },
];

const features: Service[] = [
    { icon: Scaling, title: 'Scalable Architecture', description: '' },
    { icon: Smartphone, title: 'Mobile-First Design', description: '' },
    { icon: Rocket, title: 'High Performance', description: '' },
    { icon: Search, title: 'SEO Optimized', description: '' },
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

const awardLogos = [
    { src: 'https://www.g1technologies.online/_next/static/media/award-clutch.4f0bbe8c.svg', alt: 'Clutch Award' },
    { src: 'https://www.g1technologies.online/_next/static/media/award-upwork.d4acf392.svg', alt: 'Upwork Top Rated' },
    { src: 'https://www.g1technologies.online/_next/static/media/award-softwareworld.fc2ecdd8.svg', alt: 'SoftwareWorld Award' },
    { src: 'https://www.g1technologies.online/_next/static/media/award-appdevelopment.952afba3.svg', alt: 'AppDevelopment Award' },
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
        <Section id="home" className="!pt-0">
          <div className="relative overflow-hidden rounded-b-3xl bg-primary/10">
            <div className="container mx-auto px-4 md:px-6 py-24 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl font-headline">
                GIT Technologies
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-foreground/80">
                Pioneering the future of technology with cutting-edge web solutions, cloud infrastructure, and AI integration.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" asChild>
                  <Link href="/services">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/solutions">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Section id="services" className="bg-background">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Our Core Services</h2>
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
                <CardHeader className="items-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <AIPoweredInsights selectedServices={selectedServices} />

        <Section id="why-choose-us" className="bg-primary/5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Why Choose GIT Technologies?</h2>
              <p className="mt-4 text-lg text-foreground/80">
                Proven expertise delivering exceptional results for businesses worldwide.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-8">
                {features.map((feature) => (
                    <div key={feature.title} className="flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <feature.icon className="h-6 w-6" />
                        </div>
                        <p className="font-semibold text-primary">{feature.title}</p>
                    </div>
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

        <Section id="blog" className="bg-primary/5">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Latest Insights</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              Stay updated with industry trends and expert perspectives.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.title} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
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
