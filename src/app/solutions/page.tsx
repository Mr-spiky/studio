
import { Stethoscope, ShoppingCart, Landmark, GraduationCap, Building, Tractor, Handshake, BrainCircuit, BotMessageSquare, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import Image from 'next/image';

const industrySolutions = [
  { icon: Stethoscope, title: 'Healthcare', description: 'HIPAA-compliant solutions for patient management and telehealth.' },
  { icon: ShoppingCart, title: 'E-commerce', description: 'Scalable online stores with seamless payment gateway integrations.' },
  { icon: Landmark, title: 'Finance', description: 'Secure and reliable fintech applications for modern banking.' },
  { icon: GraduationCap, title: 'Education', description: 'Engaging e-learning platforms and student management systems.' },
  { icon: Building, title: 'Real Estate', description: 'Property management systems and virtual tour solutions.' },
  { icon: Tractor, title: 'Manufacturing', description: 'ERP systems, supply chain management, and IoT solutions.' },
];

const caseStudies = [
    {
        client: 'InnovateCorp',
        title: 'E-commerce Platform Transformation',
        description: 'We rebuilt InnovateCorp\'s online store, resulting in a 40% increase in sales and a 60% improvement in page load speed.',
        image: 'https://picsum.photos/seed/case1/600/400'
    },
    {
        client: 'HealthCare Plus',
        title: 'HIPAA-Compliant Telehealth App',
        description: 'Developed a secure mobile app for patient consultations, improving patient engagement by 50%.',
        image: 'https://picsum.photos/seed/case2/600/400'
    },
    {
        client: 'Fintech Solutions',
        title: 'AI-Powered Financial Advisory Bot',
        description: 'Created a chatbot to provide personalized financial advice, increasing user retention by 35%.',
        image: 'https://picsum.photos/seed/case4/600/400'
    }
];

const faqs = [
    {
        question: "How do you ensure data security in your solutions?",
        answer: "We adhere to industry best practices for security, including data encryption, regular security audits, and compliance with regulations like HIPAA and GDPR. Our development process integrates security at every stage."
    },
    {
        question: "What is the typical timeline for a custom software project?",
        answer: "The timeline varies based on complexity, but a typical project discovery and design phase takes 2-4 weeks, with development and deployment spanning 3-6 months. We provide a detailed project plan with clear milestones."
    },
    {
        question: "Can your solutions integrate with our existing systems?",
        answer: "Yes, a core part of our expertise is seamless integration. We develop custom APIs and utilize middleware to ensure our solutions work perfectly with your existing software ecosystem, from CRMs to ERPs."
    }
]

const processSteps = [
  { title: 'Discovery & Analysis', description: 'Understanding your unique challenges and objectives.' },
  { title: 'Solution Design', description: 'Architecting a solution that aligns with your goals.' },
  { title: 'Development & Integration', description: 'Building and integrating the solution into your workflow.' },
  { title: 'Testing & Deployment', description: 'Ensuring a flawless launch through rigorous quality assurance.' },
  { title: 'Support & Evolution', description: 'Providing ongoing support and scaling your solution as you grow.' },
];

export default function SolutionsPage() {
  return (
    <div className="bg-background">
      <section className="py-20 text-center bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl font-headline">
            Tailored Technology Solutions for Your Industry
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-foreground/80">
            End-to-end digital transformation powered by cutting-edge technologies. We deliver solutions that solve problems and drive growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
                <Link href="/contact">Get Custom Solution</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
                <Link href="#case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">Industry-Specific Solutions</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                    We have deep expertise in delivering solutions for a wide range of industries.
                </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {industrySolutions.map((solution) => (
                <Card key={solution.title} className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent">
                  <CardHeader className="items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <solution.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="font-headline text-xl text-primary-foreground">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </section>

       <section className="py-20 bg-primary">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">Our Technology Solutions</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                From custom software to digital transformation, we have you covered.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2 text-primary-foreground"><BrainCircuit size={24} className="text-accent"/>Custom Software</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Bespoke software solutions built to meet your unique business needs.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2 text-primary-foreground"><Handshake size={24} className="text-accent"/>Integration Services</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Seamlessly connect your systems and data with custom API development.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2 text-primary-foreground"><BotMessageSquare size={24} className="text-accent"/>Consulting & Strategy</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Expert guidance to create a technology roadmap for success.</p></CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2 text-primary-foreground"><ShieldCheck size={24} className="text-accent"/>Digital Transformation</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Modernize legacy systems and optimize processes for the digital age.</p></CardContent>
                </Card>
            </div>
          </div>
      </section>
      
      <section id="case-studies" className="py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">Success Stories</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                    See how we've helped businesses like yours succeed with our solutions.
                </p>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
                {caseStudies.map(study => (
                    <Card key={study.client} className="overflow-hidden flex flex-col group">
                        <Image src={study.image} alt={study.title} width={600} height={400} className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-primary-foreground mb-2">{study.title}</h3>
                            <p className="text-sm text-accent font-semibold mb-4">{study.client}</p>
                            <p className="text-muted-foreground flex-grow">{study.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">How We Deliver Solutions</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px bg-border md:block" />
            {processSteps.map((step, index) => (
              <div key={step.title} className="group relative mb-8 flex items-center md:mb-0">
                <div className="hidden md:flex w-1/2 pr-8 group-even:ml-auto group-even:pr-0 group-even:pl-8 group-even:text-right" />
                <div className="hidden md:flex absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-8 ring-background" />
                <Card className="w-full md:w-1/2 group-even:ml-auto">
                    <CardHeader>
                        <CardTitle className="text-primary-foreground">{index + 1}. {step.title}</CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                    </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map(faq => (
                    <AccordionItem key={faq.question} value={faq.question} className="bg-card border rounded-lg px-6">
                        <AccordionTrigger className="text-lg font-semibold text-primary-foreground text-left hover:no-underline">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground pt-2">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </section>
    </div>
  );
}
