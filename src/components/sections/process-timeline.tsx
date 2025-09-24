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
        {/* Desktop connector */}
        <div
          className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent md:block"
        />
        {/* Mobile connector */}
        <div
          className="absolute bottom-0 left-8 top-0 w-0.5 bg-gradient-to-b from-transparent via-accent to-transparent md:hidden"
        />
        <div className="grid gap-16 md:grid-cols-5 md:gap-6">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative group flex items-start md:flex-col md:items-center">
               <div className="relative flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md z-10 relative">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white font-bold text-sm shadow-md z-20">
                    {index + 1}
                  </div>
                </div>
              <Card
                className="text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl bg-white/60 backdrop-blur-sm border-white/30 md:mt-8 ml-8 md:ml-0"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-sky-500 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary">{step.title}</h3>
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
