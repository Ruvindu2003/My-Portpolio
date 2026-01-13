import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface BootScreenProps {
  onComplete: () => void;
}

const BootScreen = ({ onComplete }: BootScreenProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const bootLines = [
    '[OK] Initializing system...',
    '[OK] Loading kernel modules...',
    '[OK] Starting network services...',
    '[OK] Mounting filesystems...',
    '[OK] Starting terminal emulator...',
    '[OK] Loading user profile...',
    '[OK] System ready.',
    '',
    'Kali Linux Terminal v2.0',
    'Copyright (c) 2025 Ruvindu Sharadha Ranasingha',
    '',
    'Type "help" for available commands.',
    '',
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < bootLines.length - 1) {
          return prev + 1;
        } else {
          clearInterval(lineInterval);
          clearInterval(cursorInterval);
          // Wait a bit then move to next screen
          setTimeout(() => {
            onComplete();
          }, 1000);
          return prev;
        }
      });
    }, 200);

    return () => {
      clearInterval(lineInterval);
      clearInterval(cursorInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[99999] bg-terminal-bg-main flex items-center justify-center terminal-scanline">
      <div className="w-full max-w-3xl mx-4 relative">
        {/* Skip Button */}
        <button
          onClick={onComplete}
          className="absolute top-4 right-4 text-terminal-text-main hover:text-terminal-green text-xs font-mono border border-terminal-border px-3 py-1 rounded-terminal hover:terminal-glow transition-all"
        >
          Skip →
        </button>
        {/* Boot Screen Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Terminal className="text-terminal-green terminal-glow animate-pulse" size={48} />
            <h1 className="text-4xl md:text-5xl font-extrabold text-terminal-green terminal-glitch-text">
              KALI LINUX
            </h1>
          </div>
          <p className="text-terminal-blue text-lg font-mono">System Booting...</p>
        </div>

        {/* Boot Messages */}
        <div className="bg-terminal-bg-panel border-2 border-terminal-green p-6 rounded-terminal terminal-glow font-mono">
          <div className="space-y-1 text-terminal-text-main text-sm md:text-base">
            {bootLines.slice(0, currentLine + 1).map((line, index) => (
              <div key={index} className="flex items-center">
                <span className="text-terminal-green mr-2">
                  {line.startsWith('[OK]') ? '✓' : line.startsWith('[') ? '•' : ''}
                </span>
                <span
                  className={
                    line.startsWith('[OK]')
                      ? 'text-terminal-green'
                      : line.startsWith('Kali') || line.startsWith('Copyright')
                      ? 'text-terminal-blue'
                      : 'text-terminal-text-main'
                  }
                >
                  {line}
                </span>
              </div>
            ))}
            {currentLine < bootLines.length - 1 && (
              <div className="flex items-center">
                <span className="text-terminal-green mr-2">•</span>
                <span className="text-terminal-text-main">
                  {showCursor ? '█' : ' '}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Loading Bar */}
        <div className="mt-6 bg-terminal-bg-panel border-2 border-terminal-border p-2 rounded-terminal">
          <div
            className="bg-terminal-green h-2 rounded-terminal terminal-glow transition-all duration-300"
            style={{ width: `${((currentLine + 1) / bootLines.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;

