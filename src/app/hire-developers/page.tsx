import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const developers = [
  { name: 'Alex Johnson', skills: 'React, Node.js, TypeScript', image: 'https://picsum.photos/seed/dev1/200/200' },
  { name: 'Maria Garcia', skills: 'Vue, Python, Django', image: 'https://picsum.photos/seed/dev2/200/200' },
  { name: 'Chen Wei', skills: 'Angular, Java, Spring', image: 'https://picsum.photos/seed/dev3/200/200' },
];

const hiringModels = [
    { title: 'Full-Time', description: 'Dedicated developer working exclusively on your projects.' },
    { title: 'Part-Time', description: 'Flexible hiring for a set number of hours per week.' },
    { title: 'Project-Based', description: 'Hire a team or individual for a specific project with a fixed scope.' },
];

export default function HireDevelopersPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-headline">Hire Developers</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Access a pool of talented developers to augment your team and accelerate your projects.
        </p>
      </div>
      
      <section className="mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline mb-8 text-center">Our Developers</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {developers.map(dev => (
            <Card key={dev.name}>
              <CardHeader className="items-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={dev.image} alt={dev.name} />
                    <AvatarFallback>{dev.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle>{dev.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{dev.skills}</p>
                <Button className="mt-4">View Profile</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline mb-8 text-center">Hiring Models</h2>
        <div className="grid gap-8 md:grid-cols-3">
            {hiringModels.map(model => (
                <Card key={model.title}>
                    <CardHeader>
                        <CardTitle>{model.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{model.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
