// src/components/layout/logo.tsx
import { cn } from '@/lib/utils';

const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 50"
    className={cn('h-10 w-auto', className)}
    {...props}
  >
    <style>
      {`
        .logo-text {
          font-family: 'Inter', sans-serif;
          font-size: 38px;
          font-weight: 700;
          fill: url(#logo-gradient);
          transition: all 0.3s ease-in-out;
        }
        .logo-path {
          stroke: url(#logo-gradient);
          stroke-width: 2;
          fill: none;
        }
        .logo-glow {
          filter: drop-shadow(0 0 5px rgba(132, 142, 255, 0));
          transition: filter 0.3s ease-in-out;
        }
        .logo-container:hover .logo-glow {
          filter: drop-shadow(0 0 10px rgba(132, 142, 255, 0.8));
        }
        .logo-container:hover .logo-text {
           fill: url(#logo-gradient-hover);
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(5px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(5px) rotate(-360deg); }
        }
        .orbit-dot {
          animation: orbit 8s linear infinite;
          transform-origin: 50% 50%;
        }
      `}
    </style>
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--primary-foreground))" />
        <stop offset="100%" stopColor="hsl(var(--primary-foreground))" />
      </linearGradient>
       <linearGradient id="logo-gradient-hover" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8492ff" />
        <stop offset="100%" stopColor="#b47dff" />
      </linearGradient>
    </defs>
    <g className="logo-container">
      <g className="logo-glow">
        <text x="0" y="35" className="logo-text">
          GIT
        </text>
        <g transform="translate(65, 0)">
          <path d="M5,15 Q20,5 35,15" className="logo-path" />
          <path d="M5,25 Q20,35 35,25" className="logo-path" />
          <circle cx="20" cy="20" r="3" fill="url(#logo-gradient)" className="orbit-dot" />
        </g>
        <text x="110" y="35" className="logo-text">
          Tech
        </text>
      </g>
    </g>
  </svg>
);

export default Logo;
