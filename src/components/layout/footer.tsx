import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from './logo';

const informationLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Hire Developers', href: '/hire-developers' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Blogs', href: '/blogs' },
];

const socialMediaLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          
          {/* Company Description */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2 group" prefetch={false}>
              <Logo className="h-10" scrolled={true} />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              We are dedicated to providing the best technology solutions and digital transformation services, offering a wide range of high-quality solutions with excellent customer service.
            </p>
          </div>

          {/* Information Links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white text-lg mb-6 uppercase tracking-wider">
              Information
            </h3>
            <ul className="space-y-3">
              {informationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-accent transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white text-lg mb-6 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+1-800-123-4567" className="text-gray-400 hover:text-accent transition-colors">
                    +1-800-123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:contact@g1technologies.com" className="text-gray-400 hover:text-accent transition-colors">
                    contact@g1technologies.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>123 Tech Hub, Sector 5</p>
                  <p>Gurugram, Haryana 122001</p>
                  <p>India</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white text-lg mb-6 uppercase tracking-wider">
              Social Media
            </h3>
            <div className="space-y-4">
              {socialMediaLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors duration-200 group"
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{social.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-evenly  items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} G1 Technologies. All Rights Reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="text-gray-500 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
