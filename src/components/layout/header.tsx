'use client';

import { useState } from 'react';
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

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Hire Developers', href: '/hire-developers' },
  { name: 'Blogs', href: '/blogs' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={'sticky top-0 z-50 w-full bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm'}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 group transition-transform hover:scale-105"
          prefetch={false}
        >
          <Logo scrolled={true} />
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={'relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground group'}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <div className="hidden md:block ">
          <Button
            asChild
            className="bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={'text-foreground hover:bg-accent/10'}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                 <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                    <Logo scrolled={true} />
                 </Link>
                 <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="mt-6 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                    <Button className="w-full" asChild>
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
