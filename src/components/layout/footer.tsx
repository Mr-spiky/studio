import Link from 'next/link';
import { Code } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solution', href: '/solutions' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Hire Developers', href: '/hire-developers' },
  { name: 'Blogs', href: '/blogs' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Code className="h-7 w-7 text-primary-foreground" />
              <span className="text-lg font-bold text-primary-foreground font-headline">GIT Technologies</span>
            </Link>
            <p className="text-primary-foreground/80">
              Transforming businesses through innovative technology solutions.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-primary-foreground">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
                <h3 className="font-semibold text-primary-foreground">Contact Us</h3>
                <ul className="mt-4 space-y-2 text-primary-foreground/80">
                    <li>123 Tech Street, Silicon Valley, CA</li>
                    <li>contact@git-tech.com</li>
                    <li>(123) 456-7890</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/80">
          &copy; {new Date().getFullYear()} GIT Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
