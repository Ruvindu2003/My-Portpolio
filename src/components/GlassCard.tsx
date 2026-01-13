import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = '', hover = true }: GlassCardProps) => {
  return (
    <div
      className={`
        bg-terminal-bg-panel/60 backdrop-blur-md
        border border-terminal-border/50
        rounded-terminal
        shadow-terminal-green/20
        ${hover ? 'hover:bg-terminal-bg-panel/80 hover:border-terminal-green/50 hover:shadow-terminal-green/40 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
