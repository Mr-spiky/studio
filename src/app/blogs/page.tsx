
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  blogPosts, 
  getFeaturedPosts, 
  getRecentPosts, 
  blogCategories,
  getTotalPages,
  getPaginatedPosts 
} from '@/data/blog';

export default function BlogsPage() {
  const [email, setEmail] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Get dynamic data from blog.ts
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(2);
  const currentPosts = getPaginatedPosts(currentPage, 6);
  const totalPages = getTotalPages(6);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section with Gradient */}
      <section className="relative py-24 bg-gradient-to-r from-primary via-secondary to-primary/80 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Inside Design: Stories and interviews
            </h1>
            <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto">
              Subscribe to learn about new product features, the latest in technology, and updates.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70 focus:bg-white/20"
                required
              />
              <Button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white px-8">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Recent Blog Posts Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8">Recent blog posts</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Featured Post */}
            {featuredPosts.length > 0 && (
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image 
                    src={featuredPosts[0].image} 
                    alt={featuredPosts[0].title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPosts[0].author.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {formatDate(featuredPosts[0].publishedDate)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPosts[0].readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    <Link href={`/blogs/${featuredPosts[0].slug || featuredPosts[0].id}`}>
                      {featuredPosts[0].title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {featuredPosts[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featuredPosts[0].tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Recent Posts Sidebar */}
            <div className="space-y-6">
              {recentPosts.map((post, index) => (
                <Card key={post.id} className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          width={120}
                          height={80}
                          className="w-20 h-16 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                          <span>{post.author.name}</span>
                          <span>•</span>
                          <span>{formatDate(post.publishedDate)}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h4 className="font-semibold text-primary group-hover:text-accent transition-colors line-clamp-2 mb-2">
                          <Link href={`/blogs/${post.slug || post.id}`}>
                            {post.title}
                          </Link>
                        </h4>
                        <div className="flex gap-2">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* All Blog Posts Section */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-8">All blog posts</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentPosts.map((post, index) => (
              <Card key={post.id} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {formatDate(post.publishedDate)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    <Link href={`/blogs/${post.slug || post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dynamic Pagination */}
          <div className="flex items-center justify-center gap-2 mb-16">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <Button 
                    key={pageNum}
                    variant={pageNum === currentPage ? "default" : "ghost"} 
                    size="sm"
                    className={`w-10 h-10 ${pageNum === currentPage ? 'bg-primary text-primary-foreground' : ''}`}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </Button>
                );
              })}
              {totalPages > 5 && (
                <>
                  <span className="px-2">...</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-10 h-10"
                    onClick={() => setCurrentPage(totalPages)}
                  >
                    {totalPages}
                  </Button>
                </>
              )}
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="relative py-16 bg-gradient-to-r from-secondary via-primary to-secondary">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Sign up to our newsletter</h2>
            <p className="text-white/90 mb-8">
              Stay up to date with the latest news, announcements, and articles.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70 focus:bg-white/20"
                required
              />
              <Button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white px-8">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
