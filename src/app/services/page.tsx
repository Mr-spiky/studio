
import { CodeXml, Cloud, BrainCircuit, TrendingUp, Smartphone, GitBranch, ShieldCheck, Zap, DollarSign, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { 
    icon: CodeXml, 
    title: 'Web Development', 
    description: 'Modern, responsive websites built for performance and user experience.',
    details: {
        features: ['Custom Themes & Plugins', 'E-commerce Solutions', 'CMS Development'],
        tech: ['React', 'Next.js', 'Node.js'],
    }
  },
  { 
    icon: Cloud, 
    title: 'Cloud Solutions', 
    description: 'Scalable and secure cloud infrastructure for business growth.',
    details: {
        features: ['Cloud Migration', 'Serverless Architecture', 'DevOps & CI/CD'],
        tech: ['AWS', 'Google Cloud', 'Docker'],
    }
  },
  { 
    icon: BrainCircuit, 
    title: 'AI Integration', 
    description: 'Smart automation and AI-driven insights for innovation.',
    details: {
        features: ['LLM Integration', 'Predictive Analytics', 'Chatbot Development'],
        tech: ['Genkit', 'TensorFlow', 'Python'],
    }
  },
  { 
    icon: TrendingUp, 
    title: 'SEO Optimization', 
    description: 'Data-driven strategies to enhance your online visibility.',
    details: {
        features: ['Keyword Research', 'On-Page & Off-Page SEO', 'Technical SEO Audits'],
        tech: ['Semrush', 'Ahrefs', 'Google Analytics'],
    }
  },
  { 
    icon: Smartphone, 
    title: 'Mobile App Development', 
    description: 'Cross-platform mobile applications for iOS and Android.',
    details: {
        features: ['Native & Hybrid Apps', 'UI/UX Design', 'App Store Deployment'],
        tech: ['React Native', 'Flutter', 'Swift'],
    }
  },
  { 
    icon: GitBranch, 
    title: 'DevOps', 
    description: 'Streamlining development pipelines for faster and more reliable releases.',
    details: {
        features: ['Continuous Integration', 'Continuous Deployment', 'Infrastructure as Code'],
        tech: ['Jenkins', 'GitLab CI', 'Terraform'],
    }
  },
];

const pricingTiers = [
    { 
        name: 'Basic', 
        price: '$499', 
        description: 'For small projects or startups', 
        features: ['1-3 Pages Website', 'Basic SEO', '1 Month Support'],
        cta: 'Get Started'
    },
    { 
        name: 'Pro', 
        price: '$999', 
        description: 'For growing businesses', 
        features: ['5-10 Pages Website', 'Advanced SEO', 'E-commerce', '3 Months Support'],
        cta: 'Choose Pro',
        popular: true
    },
    { 
        name: 'Enterprise', 
        price: 'Custom', 
        description: 'For large-scale applications', 
        features: ['Unlimited Pages', 'Full-Scale SEO & AI', 'Dedicated Team', '24/7 Support'],
        cta: 'Contact Sales'
    },
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
    }
];

const faqs = [
    {
        question: "How long does a typical web development project take?",
        answer: "A standard website project typically takes between 4 to 8 weeks, depending on the complexity and number of features required. We provide a detailed timeline after the initial discovery phase."
    },
    {
        question: "Do you offer ongoing maintenance and support?",
        answer: "Yes, we offer various support packages to ensure your website or application remains secure, updated, and optimized for performance."
    },
    {
        question: "Can you integrate AI into my existing systems?",
        answer: "Absolutely. Our team specializes in integrating AI solutions, like large language models and predictive analytics, into existing business processes and software to enhance functionality and efficiency."
    }
]


export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="py-20 text-center bg-primary/5">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl font-headline bg-gradient-to-r from-accent to-primary/80 text-transparent bg-clip-text">
            Our Digital Solutions
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-foreground/80">
            We offer a comprehensive suite of services to build, scale, and elevate your digital presence from concept to launch.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
                <Link href="/contact">Get a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
                <Link href="/solutions">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">What We Offer</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                    Our expertise spans across a wide range of digital services.
                </p>
            </div>
            <Accordion type="single" collapsible className="w-full grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <Card key={service.title} className="flex flex-col text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader className="items-center">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                                <service.icon className="h-8 w-8" />
                            </div>
                            <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                            <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow w-full">
                            <AccordionItem value={service.title} className="border-b-0">
                                <AccordionTrigger className="w-full justify-center text-accent font-semibold hover:no-underline [&[data-state=open]>svg]:hidden [&[data-state=closed]>svg]:hidden">
                                    <span className="group-hover:text-accent/80">Learn More <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span></span>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 text-left">
                                    <h4 className="font-semibold mb-2 text-primary">Key Features:</h4>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                                        {service.details.features.map(f => <li key={f}>{f}</li>)}
                                    </ul>
                                    <h4 className="font-semibold mb-2 text-primary">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.details.tech.map(t => <div key={t} className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">{t}</div>)}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </CardContent>
                    </Card>
                ))}
            </Accordion>
        </div>
      </section>
      
      <section className="py-20 bg-primary/5">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Transparent Pricing</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Choose a plan that fits your business needs and budget.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3 items-stretch">
                {pricingTiers.map(tier => (
                    <Card key={tier.name} className={`flex flex-col p-8 ${tier.popular ? 'border-2 border-accent shadow-accent/20 shadow-lg' : ''}`}>
                         {tier.popular && <div className="text-center"><div className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-4 py-1 rounded-full mb-4">Most Popular</div></div>}
                        <CardTitle className="font-headline text-2xl mb-4 text-center">{tier.name}</CardTitle>
                        <p className="text-4xl font-bold mb-4 text-center">{tier.price}<span className="text-lg font-normal text-muted-foreground">{tier.name !== 'Enterprise' && '/mo'}</span></p>
                        <p className="text-muted-foreground mb-6 text-center">{tier.description}</p>
                        <ul className="space-y-3 mb-8 flex-grow">
                            {tier.features.map(feature => (
                                <li key={feature} className="flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5 text-green-500" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Button className="w-full" variant={tier.popular ? 'default' : 'outline'}>{tier.cta}</Button>
                    </Card>
                ))}
            </div>
          </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Success Stories</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                    See how we've helped businesses like yours succeed.
                </p>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
                {caseStudies.map(study => (
                    <Card key={study.client} className="overflow-hidden">
                        <Image src={study.image} alt={study.title} width={600} height={400} className="w-full h-60 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-2">{study.title}</h3>
                            <p className="text-sm text-accent font-semibold mb-4">{study.client}</p>
                            <p className="text-muted-foreground">{study.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map(faq => (
                    <AccordionItem key={faq.question} value={faq.question} className="bg-card border rounded-lg px-6">
                        <AccordionTrigger className="text-lg font-semibold text-primary text-left hover:no-underline">{faq.question}</AccordionTrigger>
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

