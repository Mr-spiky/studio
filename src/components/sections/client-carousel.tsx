// src/components/sections/client-carousel.tsx

'use client';

import { FC } from 'react';
import { cn } from '@/lib/utils';

const clientLogos = [
  'TechCorp',
  'Innovate Inc.',
  'Quantum Solutions',
  'Nexus Enterprises',
  'Apex Industries',
  'DigitalFlow',
  'FutureTech',
  'CloudSphere',
];

const ClientCarousel: FC = () => {
  const extendedLogos = [...clientLogos, ...clientLogos];

  return (
    <section
      id="clients"
      className="relative py-16 md:py-24 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-2xl border border-transparent bg-white/10 p-8 shadow-2xl backdrop-blur-xl [border-image:linear-gradient(45deg,theme(colors.accent.DEFAULT),#764ba2)_1]">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline animate-float">
              Trusted by innovative companies worldwide
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
            <div className="animate-scroll flex w-max gap-x-16">
              {extendedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-2xl font-semibold text-foreground/70 transition-all duration-300 hover:text-foreground hover:scale-110 hover:drop-shadow-[0_0_10px_hsl(var(--accent)/0.5)]"
                >
                  {logo}
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
