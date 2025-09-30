
'use client';

import type { FC } from 'react';
import { useState, ComponentType, SVGProps } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scaling, Smartphone, Rocket, Search } from 'lucide-react';
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

const AnimatedCodeIcon = (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <style>{`
            .tag-left { animation: slide-right 2.5s ease-in-out infinite alternate; }
            .tag-right { animation: slide-left 2.5s ease-in-out infinite alternate; }
            @keyframes slide-right { from { transform: translateX(-1px); } to { transform: translateX(1px); } }
            @keyframes slide-left { from { transform: translateX(1px); } to { transform: translateX(-1px); } }
        `}</style>
        <polyline className="tag-left" points="8 6 2 12 8 18"></polyline>
        <polyline className="tag-right" points="16 6 22 12 16 18"></polyline>
    </svg>
);

const AnimatedCloudIcon = (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <style>{`
            .cloud-main { animation: float-up 3s ease-in-out infinite alternate; }
            .cloud-shadow { animation: float-up-delay 3s ease-in-out infinite alternate; opacity: 0.5; }
            @keyframes float-up { from { transform: translateY(1.5px); } to { transform: translateY(-1.5px); } }
            @keyframes float-up-delay { from { transform: translateY(0px); } to { transform: translateY(-1px); } }
        `}</style>
        <path className="cloud-shadow" d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        <path className="cloud-main" d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 9 20h8.5"></path>
    </svg>
);

const AnimatedBrainIcon = (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <style>{`
            .spark { animation: pulse 1.5s ease-in-out infinite; transform-origin: center; }
            .spark-2 { animation-delay: 0.3s; }
            .spark-3 { animation-delay: 0.6s; }
            @keyframes pulse { 0%, 100% { transform: scale(0.8); opacity: 0.5; } 50% { transform: scale(1.1); opacity: 1; } }
        `}</style>
        <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5v.43a2.5 2.5 0 0 1-2.43 2.57 2.5 2.5 0 0 1-2.57-2.43c0-1.4.53-2.66 1.4-3.57"></path>
        <path d="M12 2a4.5 4.5 0 0 1 4.5 4.5v.43a2.5 2.5 0 0 0 2.43 2.57 2.5 2.5 0 0 0 2.57-2.43c0-1.4-.53-2.66-1.4-3.57"></path>
        <path d="M14.5 13.5a2.5 2.5 0 0 0 0-5h-5a2.5 2.5 0 0 0 0 5Z"></path>
        <path className="spark" d="M2.5 12.5a2.5 2.5 0 0 0 0 5h.43a2.5 2.5 0 0 1 2.57 2.43 2.5 2.5 0 0 1-2.43 2.57c-1.4 0-2.66-.53-3.57-1.4"></path>
        <path className="spark spark-2" d="M21.5 12.5a2.5 2.5 0 0 1 0 5h-.43a2.5 2.5 0 0 0-2.57 2.43 2.5 2.5 0 0 0 2.43 2.57c1.4 0 2.66-.53 3.57-1.4"></path>
        <path className="spark spark-3" d="M12 22a2.5 2.5 0 0 1-2.5-2.5v-.43a2.5 2.5 0 0 0-2.57-2.43 2.5 2.5 0 0 0-2.43 2.57c0 1.4.53 2.66 1.4 3.57"></path>
        <path d="M12 22a2.5 2.5 0 0 0 2.5-2.5v-.43a2.5 2.5 0 0 1 2.57-2.43 2.5 2.5 0 0 1 2.43 2.57c0 1.4-.53 2.66-1.4 3.57"></path>
    </svg>
);

const AnimatedTrendingUpIcon = (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <style>{`
            .arrow-path { stroke-dasharray: 26; stroke-dashoffset: 26; animation: draw-arrow 2s ease-out infinite alternate; }
            @keyframes draw-arrow { to { stroke-dashoffset: 0; } }
        `}</style>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline className="arrow-path" points="16 7 22 7 22 13"></polyline>
    </svg>
);

type Service = {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
};

const services: Service[] = [
  { icon: AnimatedCodeIcon, title: 'Web Development', description: 'Modern, responsive websites built for performance and user experience' },
  { icon: AnimatedCloudIcon, title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure for business growth' },
  { icon: AnimatedBrainIcon, title: 'AI Integration', description: 'Smart automation and AI-driven insights for innovation' },
  { icon: AnimatedTrendingUpIcon, title: 'SEO Optimization', description: 'Data-driven strategies to enhance your online visibility' },
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
              GIT Technologies
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-white/90 text-shadow">
              Pioneering the future of technology with cutting-edge web solutions, cloud infrastructure, and AI integration.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild className="bg-[#e0f0f5] text-primary hover:bg-[#e0f0f5]/90">
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
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
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

    