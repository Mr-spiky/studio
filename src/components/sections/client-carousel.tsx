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
      className="relative py-12 md:py-16 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-2xl border border-transparent bg-white/10 p-8 shadow-2xl backdrop-blur-xl [border-image:linear-gradient(45deg,theme(colors.accent.DEFAULT),#764ba2)_1]">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline animate-float">
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
                  className="flex-shrink-0 transition-all duration-300 hover:scale-110 hover:opacity-100 opacity-80"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    height={50}
                    width={150}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
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
          animation: scroll 20s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientCarousel;
