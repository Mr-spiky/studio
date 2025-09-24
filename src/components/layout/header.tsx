'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Code, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-foreground/20 bg-primary text-primary-foreground backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Code className="h-7 w-7 text-primary-foreground" />
          <span className="text-lg font-bold text-primary-foreground font-headline">GIT Technologies</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button variant="outline" className="text-foreground border-border hover:bg-background/80 hover:text-foreground bg-background" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-primary-foreground">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-4">
                   <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                      <Code className="h-6 w-6 text-primary-foreground" />
                      <span className="font-bold text-primary-foreground">GIT Technologies</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-primary-foreground/10">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </div>
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
                    <Button className="w-full bg-background text-foreground hover:bg-background/80" variant="outline" asChild>
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
