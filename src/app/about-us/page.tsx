
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Award,
  Building,
  HeartHandshake,
  Linkedin,
  Lightbulb,
  Star,
  Target,
  Users,
  CheckCircle,
  Globe,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Code,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO & Founder',
    image: 'https://placehold.co/400x400/1a365d/ffffff?text=RK',
    bio: 'Visionary leader with 15+ years in technology innovation and business strategy.',
    social: 'https://linkedin.com',
    expertise: ['Strategy', 'Leadership', 'Innovation']
  },
  {
    name: 'Priya Sharma',
    role: 'CTO & Co-Founder',
    image: 'https://placehold.co/400x400/0d9488/ffffff?text=PS',
    bio: 'Technology architect driving scalable solutions and digital transformation.',
    social: 'https://linkedin.com',
    expertise: ['Cloud Architecture', 'AI/ML', 'DevOps']
  },
  {
    name: 'Arjun Patel',
    role: 'Lead Developer',
    image: 'https://placehold.co/400x400/1a365d/ffffff?text=AP',
    bio: 'Full-stack expert specializing in modern web technologies and scalable systems.',
    social: 'https://linkedin.com',
    expertise: ['React', 'Node.js', 'MongoDB']
  },
  {
    name: 'Sneha Gupta',
    role: 'UX/UI Designer',
    image: 'https://placehold.co/400x400/0d9488/ffffff?text=SG',
    bio: 'Creative designer crafting intuitive and beautiful user experiences.',
    social: 'https://linkedin.com',
    expertise: ['UI/UX Design', 'User Research', 'Prototyping']
  },
];

const timeline = [
  {
    year: '2019',
    event: 'Company Founded',
    description: 'G1 Technologies was born with a vision to revolutionize the digital landscape through innovative solutions.',
    image: 'https://placehold.co/400x300/1a365d/ffffff?text=Founded+2019',
    achievement: 'Vision to Reality'
  },
  {
    year: '2021',
    event: 'First Enterprise Success',
    description: 'Partnered with major enterprises, delivering cutting-edge solutions that drove significant business growth.',
    image: 'https://placehold.co/400x300/0d9488/ffffff?text=Enterprise+Success',
    achievement: '10+ Enterprise Clients'
  },
  {
    year: '2023',
    event: 'Global Expansion',
    description: 'Expanded our reach to serve international markets with a dedicated global team and partnerships.',
    image: 'https://placehold.co/400x300/1a365d/ffffff?text=Global+Expansion',
    achievement: 'International Presence'
  },
  {
    year: '2024',
    event: 'Innovation Leadership',
    description: 'Achieved recognition as a leading technology innovator with 100+ successful projects delivered.',
    image: 'https://placehold.co/400x300/0d9488/ffffff?text=Innovation+Leader',
    achievement: '100+ Projects Completed'
  },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push boundaries to create groundbreaking solutions that drive real business value.',
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards of quality and precision in every project we undertake.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe the best results come from close partnership and transparent communication with our clients.',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: HeartHandshake,
    title: 'Integrity',
    description: 'We operate with complete transparency, honesty, and strong ethical principles in all our dealings.',
    color: 'bg-purple-50 text-purple-600'
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: 'Rapid Development',
    description: 'Fast-track your project with our agile development methodology and experienced team.',
    stats: '50% faster delivery'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols and compliance standards to protect your valuable data.',
    stats: '99.9% security rating'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Future-proof applications designed to grow with your business needs and user base.',
    stats: '10x scalability proven'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance to ensure uninterrupted operations.',
    stats: '24/7 availability'
  }
];

const testimonials = [
  {
    name: 'Vikram Mehta',
    company: 'TechCorp India',
    text: 'G1 Technologies transformed our digital infrastructure completely. Their expertise in AI and cloud solutions is exceptional.',
    rating: 5,
    image: 'https://placehold.co/100x100/1a365d/ffffff?text=VM',
    position: 'CTO'
  },
  {
    name: 'Anita Reddy',
    company: 'FinanceFlow Solutions',
    text: 'Working with G1 was a game-changer. They delivered our fintech platform ahead of schedule with outstanding quality.',
    rating: 5,
    image: 'https://placehold.co/100x100/0d9488/ffffff?text=AR',
    position: 'CEO'
  },
  {
    name: 'Rohit Singh',
    company: 'EcommPlus',
    text: 'Their e-commerce solution drove 300% growth in our online sales. Highly recommended for any digital transformation project.',
    rating: 5,
    image: 'https://placehold.co/100x100/1a365d/ffffff?text=RS',
    position: 'Founder'
  },
];

export default function AboutUsPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary/80"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-headline">
              Welcome to G1 Technologies
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Your trusted technology partner, dedicated to transforming businesses through innovative digital solutions and cutting-edge technology.
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
              <div className="text-center">
                <p className="text-4xl font-bold text-white">100+</p>
                <p className="text-white/80 mt-1">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white">99%</p>
                <p className="text-white/80 mt-1">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white">5+</p>
                <p className="text-white/80 mt-1">Years Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-accent">About Us</Badge>
                <h2 className="text-4xl font-bold text-foreground font-headline">
                  Driving Excellence and Innovation in Technology Services
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At G1 Technologies, we focus on innovation and commitment to delivering exceptional technology solutions. We offer a wide range of high-quality services with excellent customer support, ensuring successful digital transformation for our clients.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Expert Team</h4>
                    <p className="text-muted-foreground">Highly skilled professionals with deep industry expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Proven Track Record</h4>
                    <p className="text-muted-foreground">100+ successful projects across various industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">24/7 Support</h4>
                    <p className="text-muted-foreground">Round-the-clock support ensuring your success</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="mt-8">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image 
                  src="https://placehold.co/300x400/1a365d/ffffff?text=Team+Collaboration" 
                  alt="Team collaboration"
                  width={300}
                  height={400}
                  className="rounded-lg object-cover h-48 w-full"
                />
                <Image 
                  src="https://placehold.co/300x300/0d9488/ffffff?text=Technology+Innovation" 
                  alt="Technology innovation"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover h-32 w-full"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image 
                  src="https://placehold.co/300x300/1a365d/ffffff?text=Digital+Solutions" 
                  alt="Digital solutions"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover h-32 w-full"
                />
                <Image 
                  src="https://placehold.co/300x400/0d9488/ffffff?text=Professional+Workspace" 
                  alt="Professional workspace"
                  width={300}
                  height={400}
                  className="rounded-lg object-cover h-48 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-accent mb-4">Our Journey</Badge>
          <h2 className="text-4xl font-bold text-foreground font-headline mb-4">
            From Vision to Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our journey is marked by continuous innovation, client success, and technological excellence.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 bg-accent/30 md:block transform -translate-x-0.5" />

          {timeline.map((item, index) => (
            <div key={item.year} className="relative mb-16 last:mb-0">
              <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* Content Side */}
                <div className="flex-1 w-full">
                  <Card className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-l-accent">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Badge variant="default" className="bg-accent text-white px-4 py-1 text-lg font-bold">
                          {item.year}
                        </Badge>
                        <Badge variant="outline" className="text-accent border-accent">
                          {item.achievement}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {item.event}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-accent border-4 border-white shadow-lg"></div>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <Image
                      src={item.image}
                      alt={item.event}
                      width={400}
                      height={300}
                      className="relative rounded-lg object-cover w-full h-64 shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-accent mb-4">Our Values</Badge>
          <h2 className="text-4xl font-bold text-foreground font-headline mb-4">
            What We Stand For
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our core values guide everything we do and define how we serve our clients and build our solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={value.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-accent mb-4">Why Choose Us</Badge>
          <h2 className="text-4xl font-bold text-foreground font-headline mb-4">
            Experience the G1 Advantage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver exceptional value through our proven expertise, innovative solutions, and unwavering commitment to client success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {whyChooseUs.map((item, index) => (
            <Card key={item.title} className="group hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-l-accent">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <item.icon className="w-6 h-6 text-accent group-hover:text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <Badge variant="outline" className="text-accent border-accent">
                      {item.stats}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-accent mb-4">Our Team</Badge>
          <h2 className="text-4xl font-bold text-foreground font-headline mb-4">
            Our Dedicated Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud of our team of passionate experts, dedicated professionals, and innovative thinkers working together to drive your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-4">{member.role}</p>

                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.expertise.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Link
                  href={member.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 hover:bg-accent hover:text-white transition-all duration-300 group/social"
                >
                  <Linkedin className="h-5 w-5 text-accent group-hover/social:text-white transition-colors" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-accent mb-4">Testimonials</Badge>
          <h2 className="text-4xl font-bold text-foreground font-headline mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with G1 Technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic text-center mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-accent">{testimonial.position}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how G1 Technologies can help accelerate your digital transformation journey and drive exceptional business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 bg-transparent hover:border-white transition-all duration-300"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <Code className="w-8 h-8 mx-auto mb-2 text-white" />
                <p className="text-white/80 text-sm">Custom Development</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 mx-auto mb-2 text-white" />
                <p className="text-white/80 text-sm">Global Reach</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-white" />
                <p className="text-white/80 text-sm">Secure Solutions</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-white" />
                <p className="text-white/80 text-sm">Growth Focused</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
