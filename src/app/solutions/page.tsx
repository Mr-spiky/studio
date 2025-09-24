import { Stethoscope, ShoppingCart, Landmark, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const industrySolutions = [
  { icon: Stethoscope, title: 'Healthcare', description: 'HIPAA-compliant solutions for patient management and telehealth.' },
  { icon: ShoppingCart, title: 'E-commerce', description: 'Scalable online stores with seamless payment gateway integrations.' },
  { icon: Landmark, title: 'Finance', description: 'Secure and reliable fintech applications for modern banking.' },
  { icon: GraduationCap, title: 'Education', description: 'Engaging e-learning platforms and student management systems.' },
];

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-headline">Our Solutions</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Tailored solutions to solve industry-specific challenges and drive growth.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline mb-8 text-center">Industry-Specific Solutions</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {industrySolutions.map((solution) => (
            <Card key={solution.title} className="text-center">
              <CardHeader className="items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <solution.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
       <div className="mt-20">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline mb-8 text-center">Technology Solutions</h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            <Card>
                <CardHeader><CardTitle>Custom CRM</CardTitle></CardHeader>
                <CardContent><p>A CRM tailored to your sales process to improve customer relationships.</p></CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle>ERP Systems</CardTitle></CardHeader>
                <CardContent><p>Integrate all your business processes into a single, cohesive system.</p></CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle>Custom Software</CardTitle></CardHeader>
                <CardContent><p>Bespoke software solutions built to meet your unique business needs.</p></CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
