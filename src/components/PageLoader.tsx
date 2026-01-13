import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface PageLoaderProps {
  message?: string;
}

const PageLoader = ({ message = 'Loading page...' }: PageLoaderProps) => {
  const [dots, setDots] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);

  const loadingLines = [
    '[OK] Initializing route...',
    '[OK] Loading components...',
    '[OK] Rendering page...',
    '[OK] Page ready.',
  ];

  useEffect(() => {
    // Animate dots
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 300);

    // Animate loading lines
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < loadingLines.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 200);

    // Animate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 16);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(lineInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[99998] bg-terminal-bg-main/95 backdrop-blur-sm flex items-center justify-center terminal-scanline loading-overlay-enter">
      <div className="w-full max-w-md mx-4">
        {/* Terminal Header */}
        <div className="bg-terminal-bg-panel border-2 border-terminal-green px-4 py-3 flex items-center justify-between terminal-glow rounded-t-terminal shadow-terminal-green">
          <div className="flex items-center gap-3">
            <Terminal className="text-terminal-green animate-pulse" size={20} />
            <span className="text-terminal-green font-mono font-bold text-sm">
              root@kali:~$ {message}
            </span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-terminal-red rounded-terminal"></div>
            <div className="w-3 h-3 bg-terminal-yellow rounded-terminal"></div>
            <div className="w-3 h-3 bg-terminal-green rounded-terminal"></div>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="bg-terminal-bg-panel border-2 border-terminal-green border-t-0 rounded-b-terminal terminal-glow p-6 font-mono shadow-terminal-green">
          {/* Loading Lines */}
          <div className="space-y-2 text-terminal-text-main text-sm mb-6">
            {loadingLines.slice(0, currentLine + 1).map((line, index) => (
              <div 
                key={index} 
                className="flex items-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-terminal-green mr-2">✓</span>
                <span className="text-terminal-green">{line}</span>
              </div>
            ))}
            {currentLine < loadingLines.length - 1 && (
              <div className="flex items-center">
                <span className="text-terminal-green mr-2">•</span>
                <span className="text-terminal-text-main">
                  Loading{dots}
                  <span className="text-terminal-green animate-pulse ml-1">█</span>
                </span>
              </div>
            )}
          </div>

          {/* Loading Animation */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex gap-2">
              <div 
                className="w-3 h-3 bg-terminal-green rounded-full animate-bounce" 
                style={{ animationDelay: '0s', animationDuration: '0.6s' }}
              ></div>
              <div 
                className="w-3 h-3 bg-terminal-green rounded-full animate-bounce" 
                style={{ animationDelay: '0.2s', animationDuration: '0.6s' }}
              ></div>
              <div 
                className="w-3 h-3 bg-terminal-green rounded-full animate-bounce" 
                style={{ animationDelay: '0.4s', animationDuration: '0.6s' }}
              ></div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-terminal-bg-main border border-terminal-border p-1 rounded-terminal overflow-hidden">
            <div
              className="bg-terminal-green h-3 rounded-terminal terminal-glow transition-all duration-300 relative overflow-hidden"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="text-center mt-2 text-terminal-green text-xs font-mono">
            {Math.min(progress, 100)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
