import { CodeXml, Cloud, BrainCircuit, TrendingUp, Smartphone, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  { icon: CodeXml, title: 'Web Development', description: 'Modern, responsive websites built for performance and user experience.' },
  { icon: Cloud, title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure for business growth.' },
  { icon: BrainCircuit, title: 'AI Integration', description: 'Smart automation and AI-driven insights for innovation.' },
  { icon: TrendingUp, title: 'SEO Optimization', description: 'Data-driven strategies to enhance your online visibility.' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'Cross-platform mobile applications for iOS and Android.' },
  { icon: GitBranch, title: 'DevOps', description: 'Streamlining development pipelines for faster and more reliable releases.' },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-headline">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          We offer a comprehensive suite of services to build, scale, and elevate your digital presence.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <service.icon className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
                <Button variant="outline" className="w-full">Learn More</Button>
            </div>
          </Card>
        ))}
      </div>

       <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Pricing</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Transparent pricing models to fit your needs.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {['Basic', 'Pro', 'Enterprise'].map(tier => (
                <Card key={tier} className="p-8">
                    <CardTitle className="font-headline text-2xl mb-4">{tier}</CardTitle>
                    <p className="text-4xl font-bold mb-4">${tier === 'Basic' ? '499' : tier === 'Pro' ? '999': 'Custom'}</p>
                    <p className="text-muted-foreground mb-6">{tier === 'Basic' ? 'For small projects' : tier === 'Pro' ? 'For growing businesses' : 'For large-scale applications'}</p>
                    <Button className="w-full">Get Started</Button>
                </Card>
            ))}
          </div>
      </div>
    </div>
  );
}
