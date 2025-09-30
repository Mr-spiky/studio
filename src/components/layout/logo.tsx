// src/components/layout/logo.tsx
import { cn } from '@/lib/utils';

const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 280 50"
    className={cn('h-9 w-auto', className)}
    {...props}
  >
    <g className="fill-current">
      <text x="0" y="35" fontFamily="Inter, Arial, sans-serif" fontSize="28" fontWeight="bold">
        <tspan fill="#888">&lt;/&gt;</tspan><tspan>G1technology</tspan>
      </text>
    </g>
  </svg>
);

export default Logo;
