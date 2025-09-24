import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  { name: 'John Doe', role: 'CEO & Founder', image: 'https://picsum.photos/seed/1/200/200' },
  { name: 'Jane Smith', role: 'CTO', image: 'https://picsum.photos/seed/2/200/200' },
  { name: 'Peter Jones', role: 'Lead Developer', image: 'https://picsum.photos/seed/3/200/200' },
  { name: 'Sara Williams', role: 'UX Designer', image: 'https://picsum.photos/seed/4/200/200' },
];

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-headline">About GIT Technologies</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          We are a team of passionate developers, designers, and strategists dedicated to building the future of technology.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-primary font-headline mb-4">Our Mission</h2>
          <p className="text-foreground/80 text-lg">
            Our mission is to empower businesses with innovative and scalable technology solutions that drive growth and create lasting value. We believe in the power of collaboration and are committed to delivering excellence in everything we do.
          </p>
        </div>
        <div>
          <Image src="https://picsum.photos/seed/mission/600/400" alt="Our Mission" width={600} height={400} className="rounded-lg shadow-md" />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline mb-12 text-center">Meet Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center">
              <CardContent className="pt-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                <p className="text-accent">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
