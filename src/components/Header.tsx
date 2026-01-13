// Utility to play button sound
const playButtonSound = () => {
  const audio = new Audio('/sounds/mixkit-sci-fi-click-900.wav');
  audio.currentTime = 0;
  audio.play();
};
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    // Ensure href starts with #
    const hash = href.startsWith('#') ? href : `#${href.replace('#', '')}`;
    const element = document.querySelector(hash);
    
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
      
      // Update URL hash without triggering scroll
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', hash);
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-terminal-bg-panel backdrop-blur-lg shadow-2xl border-b-2 border-terminal-border terminal-glow' : 'bg-transparent'
    }`}>
  <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={(e) => {
              e.preventDefault();
              playButtonSound();
              const element = document.querySelector('#home');
              if (element) {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }
            }}
            className="text-3xl font-extrabold text-terminal-green terminal-glow tracking-widest terminal-button-hover terminal-glitch-text"
          >
            RSR
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={(e) => { 
                  e.preventDefault();
                  e.stopPropagation();
                  playButtonSound(); 
                  scrollToSection(item.href); 
                }}
                className="text-terminal-green hover:text-terminal-blue font-bold transition-colors duration-200 tracking-wide terminal-button-hover terminal-button-press"
              >
                <span className="text-terminal-green">$</span> {item.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/ruvindu2003" target="_blank" rel="noopener noreferrer" 
               className="text-terminal-green hover:text-terminal-blue transition-colors duration-200">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/ruvindu-ranasingha" target="_blank" rel="noopener noreferrer"
               className="text-terminal-green hover:text-terminal-blue transition-colors duration-200">
              <Linkedin size={22} />
            </a>
            <a href="mailto:ruvinduSharadha22@gmail.com"
               className="text-terminal-green hover:text-terminal-blue transition-colors duration-200">
              <Mail size={22} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => { playButtonSound(); setIsMenuOpen(!isMenuOpen); }}
            className="md:hidden text-terminal-green hover:text-terminal-blue transition-colors duration-200"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-terminal-bg-panel shadow-2xl border-t-2 border-terminal-border z-50">
            <div className="py-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={(e) => { 
                    e.preventDefault();
                    e.stopPropagation();
                    playButtonSound(); 
                    scrollToSection(item.href); 
                  }}
                  className="block w-full text-left px-6 py-3 text-terminal-green hover:text-terminal-blue hover:bg-terminal-bg-main transition-colors duration-200 font-bold terminal-button-press"
                >
                  <span className="text-terminal-green">$</span> {item.label}
                </button>
              ))}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t-2 border-terminal-border mt-4">
                <a href="https://github.com/ruvindu2003" target="_blank" rel="noopener noreferrer"
                   className="text-terminal-green hover:text-terminal-blue transition-colors duration-200">
                  <Github size={22} />
                </a>
                <a href="https://linkedin.com/in/ruvindu-ranasingha" target="_blank" rel="noopener noreferrer"
                   className="text-terminal-green hover:text-terminal-blue transition-colors duration-200">
                  <Linkedin size={22} />
                </a>
                <a href="mailto:ruvinduSharadha22@gmail.com"
                   className="text-terminal-green hover:text-terminal-blue transition-colors duration-200">
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;