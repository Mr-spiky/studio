
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const blogPosts = [
  { id: '1', title: 'The Future of Web Development in 2025', description: 'Exploring emerging trends and technologies shaping the future of the web.', image: 'https://picsum.photos/seed/blog1/600/400', category: 'Technology' },
  { id: '2', title: 'AI Integration Best Practices', description: 'Learn how to successfully implement cutting-edge AI solutions into your business operations.', image: 'https://picsum.photos/seed/blog2/600/400', category: 'Business' },
  { id: '3', title: 'Cloud Security Essentials', description: 'A comprehensive guide to protecting your valuable data and infrastructure in the cloud.', image: 'https://picsum.photos/seed/blog3/600/400', category: 'Tutorials' },
];

export default function BlogsPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 text-center bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl font-headline">
            Insights & Innovation
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-primary-foreground/80">
            Expert perspectives on technology trends, best practices, and industry insights from the GIT Technologies team.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10 h-12" />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <main className="md:col-span-3">
            <div className="grid gap-12 lg:grid-cols-2">
              {blogPosts.map((post) => (
                <Card key={post.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group hover:border-accent">
                  <div className="overflow-hidden">
                    <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <CardHeader>
                    <p className="text-sm font-semibold text-accent">{post.category}</p>
                    <CardTitle className="font-headline text-2xl leading-snug text-card-foreground">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{post.description}</p>
                  </CardContent>
                  <div className="border-t p-6">
                      <Link href={`/blogs/${post.id}`} className="font-semibold text-foreground transition-colors hover:text-accent group-hover:text-accent">
                          Read More <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
                      </Link>
                  </div>
                </Card>
              ))}
            </div>
            {/* Pagination Placeholder */}
            <div className="mt-16 flex justify-center">
                <Button variant="outline" className="mr-2">Previous</Button>
                <Button>Next</Button>
            </div>
          </main>
          
          <aside className="md:col-span-1">
            <div className="sticky top-24 space-y-10">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 border-b pb-2">Categories</h3>
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" className="justify-start text-base">Technology</Button>
                  <Button variant="ghost" className="justify-start text-base">Business</Button>
                  <Button variant="ghost" className="justify-start text-base">Tutorials</Button>
                  <Button variant="ghost" className="justify-start text-base">Case Studies</Button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 border-b pb-2">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 2).map(post => (
                    <Link key={post.id} href={`/blogs/${post.id}`} className="flex items-start gap-4 group">
                      <Image src={post.image} alt={post.title} width={80} height={80} className="rounded-lg object-cover w-20 h-20"/>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">{post.title}</p>
                        <p className="text-sm text-muted-foreground">1 day ago</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
