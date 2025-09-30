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
      <path
        d="M21.8,11.3c-2.3,2.3-5.5,3.7-8.9,3.7c-3.4,0-6.6-1.4-8.9-3.7L0.2,15c2.6,2.6,6.2,4.2,10,4.2c0,0,0,0,0,0c3.8,0,7.3-1.6,10-4.2L21.8,11.3z"
        transform="translate(15, 10)"
      />
      <path
        d="M10.2,27.1c-3.8,0-7.3-1.6-10-4.2L3.9,19.2C6.2,21.5,9.4,22.9,12.8,22.9c3.4,0,6.6-1.4,8.9-3.7l3.8,3.7C22.8,25.5,19.2,27.1,15.4,27.1C13.7,27.1,11.9,26.7,10.2,26.1z"
        transform="translate(15, 10)"
        opacity="0.7"
      />
      <text x="50" y="35" fontFamily="Inter, Arial, sans-serif" fontSize="28" fontWeight="bold">
        GIT Technologies
      </text>
    </g>
  </svg>
);

export default Logo;
