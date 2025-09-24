import { FC } from 'react';
import { Search, FileText, Code, Rocket, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

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
      <div className="relative mt-20">
        <div className="absolute left-1/2 top-8 hidden h-0.5 w-full -translate-x-1/2 bg-gray-200 md:block" />
        <div className="grid gap-16 md:grid-cols-5 md:gap-6">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative group flex flex-col items-center">
              <Card
                className="text-center transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-2xl bg-white/60 backdrop-blur-sm border-white/30 w-full"
                style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    background: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                <div 
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
                    style={{ background: 'linear-gradient(45deg, #667eea, #764ba2)'}}
                />
                <div className="p-6 pt-10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md z-10">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mt-2" style={{color: '#2d3748'}}>{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
