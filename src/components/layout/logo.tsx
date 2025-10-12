// src/components/layout/logo.tsx
import { cn } from '@/lib/utils';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  scrolled?: boolean;
}

const Logo = ({ className, scrolled, ...props }: LogoProps) => (
  <div className="flex items-center gap-2 group">
    <div className="relative">
      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-accent via-secondary to-accent shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
        <span className="text-white font-bold text-sm tracking-tight">&lt;/&gt;</span>
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80"></div>
    </div>
    <div>
      <h1 className="text-primary font-bold text-xl leading-none tracking-tight">
        <span style={{ WebkitTextStroke: '1px white' } as React.CSSProperties}>G1</span> <span className="text-secondary font-semibold">Technologies</span>
      </h1>
      <p className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
        Digital Innovation
      </p>
    </div>
  </div>
);

export default Logo;
