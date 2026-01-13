import { useState, useEffect } from 'react';
import { X, Terminal, Code, Database, Globe, Zap } from 'lucide-react';

// Utility to play button sound
const playButtonSound = () => {
  const audio = new Audio('/sounds/mixkit-sci-fi-click-900.wav');
  audio.currentTime = 0;
  audio.play();
};

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Force show for testing - remove this in production or add a way to reset localStorage
  // To test: localStorage.removeItem('hasSeenWelcomePopup') in browser console

  const handleClose = () => {
    playButtonSound();
    setShowContent(false);
    setTimeout(() => {
      setIsVisible(false);
      // Save to localStorage so it doesn't show again
      localStorage.setItem('hasSeenWelcomePopup', 'true');
    }, 200);
  };

  useEffect(() => {
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      // Check if user has seen the popup before
      // To reset and see popup again: localStorage.removeItem('hasSeenWelcomePopup') in browser console
      const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup');
      
      // For testing: Set to true to always show popup (ignore localStorage)
      // Or run: localStorage.removeItem('hasSeenWelcomePopup') in browser console
      const FORCE_SHOW = false; // Change to true to always show
      
      if (!hasSeenPopup || FORCE_SHOW) {
        setIsVisible(true);
        // Animate content appearance
        setTimeout(() => setShowContent(true), 300);
      } else {
        // Debug: Uncomment to see why popup didn't show
        // console.log('Popup not shown - hasSeenPopup:', hasSeenPopup);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle ESC key to close
    if (!isVisible) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-terminal-bg-main/95 backdrop-blur-sm terminal-scanline" 
      style={{ zIndex: 99999 }}
      onClick={(e) => {
        // Close when clicking outside the popup
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div 
        className="relative w-full max-w-4xl mx-4 bg-terminal-bg-panel border-4 border-terminal-green terminal-glow terminal-window popup-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Window Header */}
        <div className="bg-terminal-bg-main border-b-2 border-terminal-green px-4 py-3 flex items-center justify-between terminal-pulse">
          <div className="flex items-center gap-3">
            <Terminal className="text-terminal-green animate-pulse" size={20} />
            <span className="text-terminal-green font-mono font-bold text-sm terminal-glitch-text">
              root@kali:~$ welcome.sh
            </span>
          </div>
          <button
            onClick={handleClose}
            className="text-terminal-red hover:text-terminal-green transition-colors duration-200 terminal-button-press terminal-pulse"
            title="Close (ESC)"
          >
            <X size={24} />
          </button>
        </div>

        {/* Terminal Content */}
        <div className="p-6 md:p-8 font-mono text-terminal-text-main">
          {showContent && (
            <div className="space-y-4 animate-fade-in">
              {/* Welcome Header */}
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-terminal-green mb-4 terminal-glow terminal-glitch-text">
                  <span className="text-terminal-green">$</span> Welcome to My Terminal
                </h2>
                <div className="h-1 bg-terminal-green terminal-glow mb-4"></div>
              </div>

              {/* Main Description */}
              <div className="space-y-4 text-base md:text-lg leading-relaxed">
                <p className="text-terminal-text-main">
                  <span className="text-terminal-green">root@kali:~$</span>{' '}
                  <span className="text-terminal-blue">cat</span>{' '}
                  <span className="text-terminal-text-main">about.txt</span>
                </p>
                
                <div className="pl-4 border-l-2 border-terminal-green space-y-3">
                  <p className="text-terminal-text-main">
                    Greetings! I'm <span className="text-terminal-green font-bold">Ruvindu Sharadha Ranasingha</span>, 
                    an aspiring <span className="text-terminal-blue font-bold">Software Engineer</span> and passionate 
                    <span className="text-terminal-green font-bold"> Full-Stack Developer</span> from the beautiful 
                    highlands of <span className="text-terminal-blue">Nuwara Eliya, Sri Lanka</span>.
                  </p>

                  <p className="text-terminal-text-main">
                    Currently pursuing my <span className="text-terminal-green">Diploma in Software Engineering</span> at the 
                    Institute of Computer Engineering Technology, I've immersed myself in the world of modern web development, 
                    crafting solutions that bridge the gap between elegant user interfaces and robust backend systems.
                  </p>

                  <p className="text-terminal-text-main">
                    My expertise spans across the entire development stack:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 my-4">
                    <div className="bg-terminal-bg-main border border-terminal-border p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="text-terminal-green" size={20} />
                        <span className="text-terminal-green font-bold">Frontend Mastery</span>
                      </div>
                      <p className="text-sm text-terminal-text-main">
                        React, Angular, TypeScript, JavaScript, HTML/CSS, Tailwind CSS
                      </p>
                    </div>

                    <div className="bg-terminal-bg-main border border-terminal-border p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="text-terminal-blue" size={20} />
                        <span className="text-terminal-blue font-bold">Backend Excellence</span>
                      </div>
                      <p className="text-sm text-terminal-text-main">
                        Java, Spring Boot, REST APIs, Node.js, JWT Authentication
                      </p>
                    </div>

                    <div className="bg-terminal-bg-main border border-terminal-border p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="text-terminal-green" size={20} />
                        <span className="text-terminal-green font-bold">Database & Tools</span>
                      </div>
                      <p className="text-sm text-terminal-text-main">
                        MySQL, MongoDB, Hibernate, Git/GitHub, Agile Methodologies
                      </p>
                    </div>

                    <div className="bg-terminal-bg-main border border-terminal-border p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="text-terminal-blue" size={20} />
                        <span className="text-terminal-blue font-bold">Specializations</span>
                      </div>
                      <p className="text-sm text-terminal-text-main">
                        Full-Stack Development, Problem Solving, Team Collaboration
                      </p>
                    </div>
                  </div>

                  <p className="text-terminal-text-main">
                    I'm actively contributing to <span className="text-terminal-green font-bold">EVO Plan</span> as a Full-Stack Developer, 
                    building scalable supplier management solutions. My passion lies in creating efficient, secure, and user-friendly 
                    applications that solve real-world problems.
                  </p>

                  <p className="text-terminal-text-main">
                    Currently seeking <span className="text-terminal-yellow font-bold">internship opportunities</span> to further 
                    enhance my skills and contribute to innovative projects. I'm eager to collaborate with dynamic teams and 
                    transform ideas into impactful software solutions.
                  </p>
                </div>

                <p className="text-terminal-green mt-4">
                  <span className="text-terminal-green">root@kali:~$</span>{' '}
                  <span className="text-terminal-text-main">echo "Ready to explore? Scroll down or click the buttons below!"</span>
                </p>
                <p className="text-terminal-green terminal-success">
                  Ready to explore? Scroll down or click the buttons below!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t-2 border-terminal-border">
                <button
                  onClick={handleClose}
                  className="flex-1 bg-terminal-bg-main text-terminal-green px-6 py-3 rounded-terminal font-bold border-2 border-terminal-green hover:terminal-glow hover:bg-terminal-green hover:text-terminal-bg-main transition-all duration-300 terminal-button-press"
                >
                  <span className="text-terminal-green">$</span> Enter Terminal
                </button>
                <button
                  onClick={() => {
                    handleClose();
                    setTimeout(() => {
                      const element = document.querySelector('#about');
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({
                          top: Math.max(0, offsetPosition),
                          behavior: 'smooth'
                        });
                      }
                    }, 300);
                  }}
                  className="flex-1 border-2 border-terminal-blue text-terminal-blue px-6 py-3 rounded-terminal font-bold hover:bg-terminal-blue hover:text-terminal-bg-main hover:terminal-glow transition-all duration-300 terminal-button-press"
                >
                  <span className="text-terminal-blue">$</span> View Portfolio
                </button>
              </div>

              {/* Footer Note */}
              <div className="text-xs text-terminal-text-main text-center mt-4 opacity-70 space-y-1">
                <p>
                  <span className="text-terminal-green">Tip:</span> This popup won't appear again automatically.
                </p>
                <p>
                  Press <span className="text-terminal-blue font-bold">ESC</span> to close or check the{' '}
                  <span className="text-terminal-green">About</span> section for more details.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;

