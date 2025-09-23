import Link from 'next/link';
import { Code } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '#why-choose-us' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#contact' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Code className="h-7 w-7 text-primary" />
              <span className="text-lg font-bold text-primary font-headline">GIT Technologies</span>
            </Link>
            <p className="text-muted-foreground">
              Transforming businesses through innovative technology solutions.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                      {link.href.startsWith('#') ? link.name : `${link.name} ↗`}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
                <h3 className="font-semibold text-foreground">Contact Us</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li>123 Tech Street, Silicon Valley, CA</li>
                    <li>contact@git-tech.com</li>
                    <li>(123) 456-7890</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} GIT Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
