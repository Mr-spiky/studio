
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const blogPosts = [
  { id: '1', title: 'The Future of Web Development in 2025', description: 'Exploring emerging trends...', image: 'https://picsum.photos/seed/blog1/600/400', category: 'Technology' },
  { id: '2', title: 'AI Integration Best Practices', description: 'How to successfully implement AI...', image: 'https://picsum.photos/seed/blog2/600/400', category: 'Business' },
  { id: '3', title: 'Cloud Security Essentials', description: 'Protecting your data in the cloud...', image: 'https://picsum.photos/seed/blog3/600/400', category: 'Tutorials' },
];

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-headline">Our Blog</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Insights, tutorials, and updates from the GIT Technologies team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3">
          <div className="grid gap-8 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.description}</p>
                </CardContent>
                <div className="border-t p-6">
                    <Link href={`/blogs/${post.id}`} className="font-semibold text-accent transition-colors hover:text-accent/80">
                        Read More &rarr;
                    </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <aside className="md:col-span-1">
          <div className="sticky top-24">
            <h3 className="text-xl font-bold text-primary mb-4">Search</h3>
            <Input placeholder="Search posts..." className="mb-8" />
            
            <h3 className="text-xl font-bold text-primary mb-4">Categories</h3>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start">Technology</Button>
              <Button variant="ghost" className="justify-start">Business</Button>
              <Button variant="ghost" className="justify-start">Tutorials</Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
