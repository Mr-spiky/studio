import { FC } from 'react';
import { Search, FileText, Code, Rocket, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

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
        <div 
          className="absolute left-1/2 top-8 h-0.5 -translate-x-1/2 bg-blue-200 hidden md:block"
          style={{ width: 'calc(100% - 10rem)'}}
        />
        <div className="grid gap-16 md:grid-cols-5 md:gap-6 relative">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center group">
              <Card className="w-full border-t-4 border-accent bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5" style={{ background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)' }}>
                <CardHeader className="items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10 text-accent shadow-md transition-all duration-300 group-hover:shadow-accent/40 group-hover:bg-accent group-hover:text-white">
                        <step.icon className="h-8 w-8" />
                    </div>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
