import { FC } from 'react';
import { Search, FileText, Code, Rocket, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const Section: FC<{ id: string; className?: string; children: React.ReactNode }> = ({ id, className, children }) => (
  <section id={id} className={cn('py-12 md:py-20', className)}>
    <div className="container mx-auto px-4 md:px-6">{children}</div>
  </section>
);

const processSteps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We start by understanding your business goals and project requirements.',
  },
  {
    icon: FileText,
    title: 'Planning',
    description: 'Our team creates a detailed roadmap and strategy for your project.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'We build your solution using the latest technologies and best practices.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'After rigorous testing, we deploy your project to the world.',
  },
  {
    icon: Zap,
    title: 'Support',
    description: 'We provide ongoing maintenance and support to ensure optimal performance.',
  },
];

export default function ProcessTimeline() {
  return (
    <Section id="process" className="bg-primary/5">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
          Our Process
        </h2>
        <p className="mt-4 text-lg leading-8 text-foreground/80">
          A streamlined approach to delivering exceptional results, every time.
        </p>
      </div>
      <div className="relative mt-24">
        {/* Desktop Connector Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2" style={{ top: '3rem', background: 'hsl(var(--accent) / 0.2)' }} />
        
        <div className="grid gap-16 md:grid-cols-5 md:gap-6 relative">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center group">
              {/* Mobile Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="md:hidden absolute top-0 left-1/2 w-0.5 h-full -translate-x-1/2" style={{ top: '3rem', background: 'hsl(var(--accent) / 0.2)', zIndex: 0 }} />
              )}
              
              <div className="relative z-10 mb-[-2.5rem]">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-md">
                      <step.icon className="h-10 w-10 text-accent" />
                      <div 
                          className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white font-bold text-sm shadow-md"
                      >
                          {index + 1}
                      </div>
                  </div>
              </div>

              <Card className="w-full border-t-4 border-accent bg-card shadow-sm pt-12 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
