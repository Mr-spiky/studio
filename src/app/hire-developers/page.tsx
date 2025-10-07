
'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Check, Clock, Code, DollarSign, Filter, Rocket, Search, Shield, Star, UserCheck, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

const developers = [
  { name: 'Alex Johnson', role: 'Frontend Developer', experience: '5+ years', skills: ['React', 'TypeScript', 'Next.js'], image: 'https://picsum.photos/seed/dev1/200/200', rate: 55, availability: 'Immediate' },
  { name: 'Maria Garcia', role: 'Backend Developer', experience: '4 years', skills: ['Node.js', 'Python', 'AWS'], image: 'https://picsum.photos/seed/dev2/200/200', rate: 50, availability: '2 Weeks' },
  { name: 'Chen Wei', role: 'Full-Stack Developer', experience: '7+ years', skills: ['Angular', 'Java', 'Docker'], image: 'https://picsum.photos/seed/dev3/200/200', rate: 65, availability: 'Immediate' },
  { name: 'Emily Carter', role: 'AI/ML Engineer', experience: '6 years', skills: ['Python', 'TensorFlow', 'PyTorch'], image: 'https://picsum.photos/seed/dev4/200/200', rate: 70, availability: '1 Month' },
  { name: 'David Lee', role: 'DevOps Engineer', experience: '8 years', skills: ['Kubernetes', 'Terraform', 'GCP'], image: 'https://picsum.photos/seed/dev5/200/200', rate: 75, availability: 'Immediate' },
  { name: 'Sarah Miller', role: 'Mobile Developer', experience: '3 years', skills: ['React Native', 'Swift', 'Kotlin'], image: 'https://picsum.photos/seed/dev6/200/200', rate: 45, availability: '2 Weeks' },
];

const hiringProcess = [
    { step: 1, title: 'Requirement Analysis', duration: '24 hrs', description: 'We analyze your needs to find the perfect match.' },
    { step: 2, title: 'Developer Matching', duration: '24 hrs', description: 'You receive a shortlist of pre-vetted candidates.' },
    { step: 3, title: 'Interview & Selection', duration: '48 hrs', description: 'You interview the candidates and choose your developer.' },
    { step: 4, title: 'Onboarding & Kickoff', duration: '24 hrs', description: 'We handle contracts and onboarding for a smooth start.' },
];

const hiringModels = [
    { title: 'Dedicated Team', description: 'Full-time developers integrated into your team, billed monthly.', icon: Users },
    { title: 'Project-Based', description: 'Fixed-scope projects with defined timelines and milestone-based payments.', icon: Rocket },
    { title: 'Hourly Hiring', description: 'Flexible hiring for ongoing work, paying only for the hours you need.', icon: Clock },
];

const whyHireUs = [
    { title: 'Vetted Talent', description: 'Rigorous 5-stage screening ensures you get top-tier developers.', icon: UserCheck },
    { title: 'Risk-Free Trial', description: 'A 2-week trial period to guarantee the perfect fit for your team.', icon: Shield },
    { title: 'Timezone Alignment', description: 'Our developers work in your timezone for seamless collaboration.', icon: Clock },
];

const faqs = [
    { question: 'What is your developer screening process?', answer: 'Our 5-stage process includes a technical exam, coding challenges, and multiple interviews to ensure only the top 1% of talent makes it through.' },
    { question: 'How does the 2-week risk-free trial work?', answer: 'You can work with a developer for two weeks. If you\'re not completely satisfied, we won\'t charge you and can help you find a replacement.' },
    { question: 'Can I hire developers for a short-term project?', answer: 'Yes, our Project-Based and Hourly Hiring models are perfect for short-term needs and projects with a defined scope.' },
];

export default function HireDevelopersPage() {
    const [filteredDevs, setFilteredDevs] = useState(developers);

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 text-center bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl font-headline">
            Hire the Top 1% of Developers
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-primary-foreground/80">
            Access pre-vetted tech talent ready to join your team. We make hiring skilled developers fast and simple.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Button size="lg" asChild><Link href="#developers">Browse Developers</Link></Button>
            <Button size="lg" variant="outline" asChild><Link href="/contact">Schedule Consultation</Link></Button>
          </div>
        </div>
      </section>

      <section id="developers" className="py-20">
        <div className="container mx-auto px-4">
            <div className="mb-12">
                 <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-4 text-center">Our Developer Showcase</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-lg text-center text-foreground/80">
                    Find the perfect developer for your project using our advanced filters.
                 </p>
                 <Card className="p-4 mt-8 bg-card">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
                         <div className="relative lg:col-span-2">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input placeholder="Search by name or skill..." className="pl-10" />
                         </div>
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Filter by Role" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="frontend">Frontend</SelectItem>
                                <SelectItem value="backend">Backend</SelectItem>
                                <SelectItem value="fullstack">Full-Stack</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Filter by Experience" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="junior">Junior (1-3y)</SelectItem>
                                <SelectItem value="mid">Mid (3-5y)</SelectItem>
                                <SelectItem value="senior">Senior (5+y)</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="w-full"><Filter className="mr-2 h-4 w-4"/> Apply Filters</Button>
                     </div>
                 </Card>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDevs.map((dev) => (
                <Card key={dev.name} className="flex flex-col text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent">
                  <CardHeader className="items-center">
                    <Avatar className="w-24 h-24 mb-4">
                        <AvatarImage src={dev.image} alt={dev.name} />
                        <AvatarFallback>{dev.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="font-headline text-xl text-card-foreground">{dev.name}</CardTitle>
                    <CardDescription className="text-accent">{dev.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {dev.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                    </div>
                    <p className="text-muted-foreground mb-4">{dev.experience} experience</p>
                    <div className="text-2xl font-bold text-card-foreground mb-4">${dev.rate}/hr</div>
                  </CardContent>
                  <div className="p-6 border-t">
                    <Button className="w-full">View Profile</Button>
                  </div>
                </Card>
              ))}
            </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">Flexible Hiring Models</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                    Choose the engagement model that perfectly fits your project needs and budget.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                {hiringModels.map(model => (
                    <Card key={model.title} className="text-center p-6">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent mx-auto">
                            <model.icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-card-foreground mb-2">{model.title}</h3>
                        <p className="text-muted-foreground">{model.description}</p>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Our Simple 4-Step Hiring Process</h2>
            </div>
            <div className="relative">
                 <div className="absolute left-1/2 top-4 hidden h-[calc(100%-2rem)] w-px bg-border md:block" />
                 {hiringProcess.map((item, index) => (
                    <div key={item.step} className="group relative mb-8 flex items-start md:mb-12">
                        <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left ml-auto'}`} />
                        <div className="hidden md:flex absolute top-4 left-1/2 h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold ring-8 ring-background">{item.step}</div>
                        <Card className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'ml-auto' : ''}`}>
                            <CardHeader>
                                <CardTitle className="text-card-foreground">{item.title}</CardTitle>
                                <p className="text-sm font-semibold text-accent">{item.duration}</p>
                                <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                 ))}
            </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">Why Hire Developers from Us?</h2>
            </div>
             <div className="grid gap-8 md:grid-cols-3">
                {whyHireUs.map(reason => (
                    <Card key={reason.title} className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                                <reason.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-card-foreground">{reason.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{reason.description}</p>
                    </Card>
                ))}
            </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map(faq => (
                    <AccordionItem key={faq.question} value={faq.question} className="bg-card border rounded-lg px-6">
                        <AccordionTrigger className="text-lg font-semibold text-card-foreground text-left hover:no-underline">{faq.question}</AccordionTrigger>
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
