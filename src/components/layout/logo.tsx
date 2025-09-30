// src/components/layout/logo.tsx
import { cn } from '@/lib/utils';

const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 50"
    className={cn('h-10 w-auto', className)}
    {...props}
  >
    <text x="10" y="35" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill="white">
      GIT Technologies
    </text>
  </svg>
);

export default Logo;
