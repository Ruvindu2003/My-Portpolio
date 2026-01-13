import { useState, useEffect, useRef } from 'react';
import { Terminal, ArrowRight } from 'lucide-react';

interface InteractiveTerminalProps {
  onComplete: () => void;
}

const InteractiveTerminal = ({ onComplete }: InteractiveTerminalProps) => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [outputs, setOutputs] = useState<(string | string[])[][]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputEndRef = useRef<HTMLDivElement>(null);

  const commands: { [key: string]: string | string[] } = {
    help: `Available commands:
  help          - Show this help message
  whoami        - Display user information
  skills        - Show technical skills
  projects      - List projects
  experience    - Show work experience
  about         - About me
  clear         - Clear terminal
  start         - Launch portfolio dashboard`,
    whoami: `Ruvindu Sharadha Ranasingha
Software Engineer & Full-Stack Developer
Location: Nuwara Eliya, Sri Lanka
Status: Seeking Internship Opportunities`,
    skills: `Frontend: React, Angular, TypeScript, JavaScript, HTML/CSS, Tailwind CSS
Backend: Java, Spring Boot, Node.js, REST APIs, JWT
Database: MySQL, MongoDB, Hibernate
Tools: Git/GitHub, Agile Methodologies`,
    projects: `1. EVO Plan - Supplier Management (Full-Stack Developer)
2. Car Rental System (Full-Stack)
3. Student Management System (React + Spring Boot)
4. Library Management System (JavaFX)
5. Fitness Tracker (Web App)`,
    experience: `EVO Plan | Full-Stack Developer (March 2025 - Present)
Trainee Engineer | ICET (March 2024 - Present)
Seeking: Software Engineering Internship at SYIGEN Ltd.`,
    about: `I'm an aspiring Software Engineer with practical experience in 
both front-end and back-end development. Currently pursuing a Diploma 
in Software Engineering, I'm passionate about creating scalable, 
efficient solutions and working collaboratively in team environments.`,
    clear: 'clear',
    start: 'start',
  };

  useEffect(() => {
    // Auto-focus input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom
    if (outputEndRef.current) {
      outputEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [outputs, commandHistory]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === '') return;

    // Add command to history
    setCommandHistory((prev) => [...prev, cmd]);
    setCurrentCommand('');

    if (trimmedCmd === 'clear') {
      setOutputs([]);
      setCommandHistory([]);
      return;
    }

    if (trimmedCmd === 'start') {
      setIsTyping(true);
      setTimeout(() => {
        setOutputs((prev) => [
          ...prev,
          [
            'Launching portfolio dashboard...',
            'Initializing components...',
            'Loading assets...',
            '[OK] Dashboard ready!',
          ],
        ]);
        setTimeout(() => {
          onComplete();
        }, 1500);
      }, 500);
      return;
    }

    // Get command output
    const commandOutput = commands[trimmedCmd];
    if (commandOutput) {
      if (Array.isArray(commandOutput)) {
        setOutputs((prev) => [...prev, commandOutput]);
      } else {
        setOutputs((prev) => [...prev, [commandOutput]]);
      }
    } else {
      setOutputs((prev) => [
        ...prev,
        [`Command not found: ${cmd}`, 'Type "help" for available commands.'],
      ]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(currentCommand);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentCommand(suggestion);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const suggestions = ['help', 'whoami', 'skills', 'projects', 'experience', 'about', 'start'];

  return (
    <div className="fixed inset-0 z-[99999] bg-terminal-bg-main flex items-center justify-center terminal-scanline">
      <div className="w-full max-w-4xl mx-4 h-[80vh] flex flex-col">
        {/* Terminal Header */}
        <div className="bg-terminal-bg-panel border-2 border-terminal-green px-4 py-3 flex items-center justify-between terminal-glow rounded-t-terminal">
          <div className="flex items-center gap-3">
            <Terminal className="text-terminal-green" size={20} />
            <span className="text-terminal-green font-mono font-bold text-sm">
              root@kali:~$ Interactive Terminal
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onComplete}
              className="text-terminal-text-main hover:text-terminal-green text-xs font-mono transition-colors"
              title="Skip to Dashboard"
            >
              Skip →
            </button>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-terminal-red rounded-terminal"></div>
              <div className="w-3 h-3 bg-terminal-yellow rounded-terminal"></div>
              <div className="w-3 h-3 bg-terminal-green rounded-terminal"></div>
            </div>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 bg-terminal-bg-panel border-2 border-terminal-green border-t-0 rounded-b-terminal terminal-glow overflow-hidden flex flex-col">
          {/* Terminal Content */}
          <div className="flex-1 p-4 overflow-y-auto font-mono text-sm md:text-base terminal-scrollbar">
            <div className="space-y-2 text-terminal-text-main">
              {/* Welcome Message */}
              {commandHistory.length === 0 && (
                <div className="mb-4">
                  <p className="text-terminal-green mb-2">
                    Welcome to Interactive Terminal!
                  </p>
                  <p className="text-terminal-text-main mb-4">
                    Type <span className="text-terminal-blue font-bold">help</span> to see available commands, or{' '}
                    <span className="text-terminal-green font-bold">start</span> to launch the portfolio dashboard.
                  </p>
                  <div className="bg-terminal-bg-main border border-terminal-border p-3 rounded-terminal mb-4">
                    <p className="text-terminal-green text-xs mb-2">Quick Commands:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestions.map((cmd) => (
                        <button
                          key={cmd}
                          onClick={() => handleSuggestionClick(cmd)}
                          className="text-terminal-blue hover:text-terminal-green hover:terminal-glow px-2 py-1 border border-terminal-border rounded-terminal text-xs transition-colors"
                        >
                          {cmd}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Command History */}
              {commandHistory.map((cmd, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center">
                    <span className="text-terminal-green mr-2">root@kali:~$</span>
                    <span className="text-terminal-text-main">{cmd}</span>
                  </div>
                  {outputs[index] !== undefined && (
                    <div className="ml-4 text-terminal-text-main whitespace-pre-line">
                      {outputs[index].map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Current Command Input */}
              {!isTyping && (
                <div className="flex items-center mt-4">
                  <span className="text-terminal-green mr-2">root@kali:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentCommand}
                    onChange={(e) => setCurrentCommand(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 bg-transparent text-terminal-text-main outline-none font-mono"
                    autoFocus
                    placeholder="Type a command..."
                  />
                  <span className="text-terminal-green animate-pulse">█</span>
                </div>
              )}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center mt-4">
                  <span className="text-terminal-green mr-2">root@kali:~$</span>
                  <span className="text-terminal-text-main">start</span>
                  <span className="text-terminal-green animate-pulse ml-2">█</span>
                </div>
              )}

              <div ref={outputEndRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;

