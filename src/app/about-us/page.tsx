
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Building, HeartHandshake, Linkedin, Lightbulb, Star, Target, Users } from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  { name: 'John Doe', role: 'CEO & Founder', image: 'https://picsum.photos/seed/1/200/200', bio: 'Visionary leader with a passion for innovation and excellence.', social: 'https://linkedin.com' },
  { name: 'Jane Smith', role: 'CTO', image: 'https://picsum.photos/seed/2/200/200', bio: 'Architect of our technology, driving scalable and robust solutions.', social: 'https://linkedin.com' },
  { name: 'Peter Jones', role: 'Lead Developer', image: 'https://picsum.photos/seed/3/200/200', bio: 'Expert in full-stack development and agile methodologies.', social: 'https://linkedin.com' },
  { name: 'Sara Williams', role: 'UX Designer', image: 'https://picsum.photos/seed/4/200/200', bio: 'Crafting intuitive and beautiful user experiences.', social: 'https://linkedin.com' },
];

const timeline = [
    { year: '2015', event: 'Company Founded', description: 'GIT Technologies was born with a vision to revolutionize the digital landscape.'},
    { year: '2018', event: 'First Enterprise Client', description: 'Partnered with a Fortune 500 company, marking our entry into the big leagues.'},
    { year: '2020', event: 'Expanded Internationally', description: 'Opened our first international office to serve a global client base.'},
    { year: '2023', event: '50+ Projects Milestone', description: 'Successfully delivered over 50 innovative projects across various industries.'},
];

const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'We constantly seek new ways to solve problems and create value.' },
    { icon: Award, title: 'Excellence', description: 'We are committed to the highest standards of quality in everything we do.' },
    { icon: Users, title: 'Collaboration', description: 'We believe the best results come from working together with our clients.' },
    { icon: HeartHandshake, title: 'Integrity', description: 'We operate with transparency, honesty, and a strong sense of ethics.' },
]

const testimonials = [
    { name: 'Alex Johnson', company: 'InnovateCorp', text: 'Working with GIT Technologies was a game-changer. Their expertise and dedication are unmatched.', rating: 5 },
    { name: 'Maria Garcia', company: 'HealthCare Plus', text: 'The team delivered a high-quality product on time and on budget. Highly recommended.', rating: 5 },
    { name: 'Chen Wei', company: 'Fintech Solutions', text: 'Their solutions drove significant growth for our business. A truly valuable partner.', rating: 5 },
];


export default function AboutUsPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 text-center bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl font-headline">
            About GIT Technologies
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-primary-foreground/80">
            We are a team of passionate developers, designers, and strategists dedicated to building the future of technology.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                  <p className="text-4xl font-bold text-accent">50+</p>
                  <p className="text-primary-foreground/80 mt-1">Projects Completed</p>
              </div>
              <div className="text-center">
                  <p className="text-4xl font-bold text-accent">99%</p>
                  <p className="text-primary-foreground/80 mt-1">Client Satisfaction</p>
              </div>
              <div className="text-center">
                  <p className="text-4xl font-bold text-accent">10+</p>
                  <p className="text-primary-foreground/80 mt-1">Years of Experience</p>
              </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Our Journey</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">From a visionary startup to a trusted technology partner.</p>
            </div>
            <div className="relative">
                 <div className="absolute left-1/2 top-0 hidden h-full w-px bg-border md:block" />
                 {timeline.map((item, index) => (
                    <div key={item.year} className="group relative mb-8 flex items-center md:mb-12">
                        <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left ml-auto'}`} />
                        <div className="hidden md:flex absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-8 ring-background" />
                        <Card className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'ml-auto' : ''}`}>
                            <CardHeader>
                                <p className="text-accent font-bold text-lg">{item.year}</p>
                                <CardTitle className="text-card-foreground">{item.event}</CardTitle>
                                <p className="text-muted-foreground">{item.description}</p>
                            </CardHeader>
                        </Card>
                    </div>
                 ))}
            </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-primary-foreground font-headline mb-4">Our Mission</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                To empower businesses with innovative and scalable technology solutions that drive growth and create lasting value. We believe in the power of collaboration and are committed to delivering excellence.
              </p>
               <h2 className="text-3xl font-bold text-primary-foreground font-headline mb-4">Our Vision</h2>
              <p className="text-primary-foreground/80 text-lg">
                To be a global leader in digital transformation, recognized for our cutting-edge solutions and unwavering commitment to client success.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
                {values.map(value => (
                    <Card key={value.title}>
                        <CardContent className="pt-6 text-center">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent"><value.icon className="h-6 w-6"/></div>
                            <h3 className="text-lg font-bold text-card-foreground">{value.title}</h3>
                            <p className="text-sm text-muted-foreground">{value.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-12 text-center">Meet Our Team</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <Card key={member.name} className="text-center overflow-hidden group hover:border-accent">
                  <div className="relative">
                    <Image src={member.image} alt={member.name} width={200} height={200} className="w-full h-56 object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-sm p-4">{member.bio}</p>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-card-foreground">{member.name}</h3>
                    <p className="text-accent">{member.role}</p>
                     <Link href={member.social} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                        <Linkedin className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors"/>
                     </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">What Our Clients Say</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                {testimonials.map(t => (
                    <Card key={t.name} className="p-6 text-center">
                        <div className="flex justify-center mb-2">
                           {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                        </div>
                        <p className="text-muted-foreground italic mb-4">"{t.text}"</p>
                        <p className="font-bold text-card-foreground">{t.name}</p>
                        <p className="text-sm text-accent">{t.company}</p>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Join Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Ready to be part of a team that's shaping the future of technology? Or do you have a project you'd like to discuss?
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" asChild>
                    <Link href="/contact">Partner With Us</Link>
                </Button>
                <Button size="lg" variant="outline">
                    View Careers
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
