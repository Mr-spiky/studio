// src/components/layout/logo.tsx
import { cn } from '@/lib/utils';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  scrolled?: boolean;
}

const Logo = ({ className, scrolled, ...props }: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 280 50"
    className={cn('h-9 w-auto', className)}
    {...props}
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--secondary))' }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))' }} />
      </linearGradient>
    </defs>
    <g className="fill-current">
      <text x="0" y="35" fontFamily="Inter, Arial, sans-serif" fontSize="28" fontWeight="bold">
        <tspan fill="url(#logo-gradient)">&lt;/&gt;</tspan>
        <tspan fill={scrolled ? 'hsl(var(--primary-foreground))' : '#FFFFFF'}>G1 Technologies</tspan>
      </text>
    </g>
  </svg>
);

export default Logo;
