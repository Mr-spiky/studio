// src/components/sections/client-carousel.tsx
'use client';

import { FC } from 'react';
import Image from 'next/image';

const awardLogos = [
    { src: 'https://www.g1technologies.online/_next/static/media/award-clutch.4f0bbe8c.svg', alt: 'Clutch Award' },
    { src: 'https://www.g1technologies.online/_next/static/media/award-upwork.d4acf392.svg', alt: 'Upwork Top Rated' },
    { src: 'https://www.g1technologies.online/_next/static/media/award-softwareworld.fc2ecdd8.svg', alt: 'SoftwareWorld Award' },
    { src: 'https://www.g1technologies.online/_next/static/media/award-appdevelopment.952afba3.svg', alt: 'AppDevelopment Award' },
    // Repeat for a seamless loop
    { src: 'https://www.g1technologies.online/_next/static/media/award-clutch.4f0bbe8c.svg', alt: 'Clutch Award' },
    { src: 'https://www.g1technologies.online/_next/static/media/award-upwork.d4acf392.svg', alt: 'Upwork Top Rated' },
    { src: 'https://www.g1technologies.online/_next/static/media/award-softwareworld.fc2ecdd8.svg', alt: 'SoftwareWorld Award' },
    { src: 'https://www.g1technologies.online/_next/static/media/award-appdevelopment.952afba3.svg', alt: 'AppDevelopment Award' },
];


const ClientCarousel: FC = () => {
  return (
    <section
      id="clients"
      className="relative py-16 md:py-20 overflow-hidden bg-primary/5"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline animate-subtle-float">
              Awards & Recognition
            </h2>
          </div>
        <div
            className="group relative w-full overflow-hidden"
            style={
              {
                maskImage:
                  'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 200px), transparent 100%)',
              } as React.CSSProperties
            }
          >
            <div className="animate-scroll flex w-max gap-x-24">
              {awardLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    height={40}
                    width={150}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
      </div>
      <style jsx>{`
        @keyframes subtle-float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-subtle-float {
          animation: subtle-float 5s ease-in-out infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientCarousel;
