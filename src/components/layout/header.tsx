'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Logo from './logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solution', href: '/solutions' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Hire Developers', href: '/hire-developers' },
  { name: 'Blogs', href: '/blogs' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-gray-100/80 text-primary shadow-md backdrop-blur-lg'
          : 'bg-transparent text-white'
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          prefetch={false}
        >
          <Logo className={cn("h-8", isScrolled ? "text-primary" : "text-white")} />
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                 isScrolled ? 'text-foreground/80 hover:text-foreground' : 'text-white/80 hover:text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant={isScrolled ? 'default' : 'outline'} className={cn(!isScrolled && 'border-white text-white hover:bg-white hover:text-primary')}>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isScrolled ? 'hover:bg-primary/10' : 'hover:bg-white/10')}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-primary-foreground border-l-primary-foreground/20">
              <SheetHeader className="border-b border-primary-foreground/20 pb-4 text-left">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                 <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                    <Logo className="h-8 text-white" />
                  </Link>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="mt-6 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                    <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
