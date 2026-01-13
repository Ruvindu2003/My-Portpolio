// Utility to play button sound
const playButtonSound = () => {
  const audio = new Audio('/sounds/mixkit-sci-fi-click-900.wav');
  audio.currentTime = 0;
  audio.play();
};
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleNavClick = () => {
    playButtonSound();
    setIsMenuOpen(false);
    // Smooth scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-terminal-bg-panel backdrop-blur-lg shadow-2xl border-b-2 border-terminal-border terminal-glow' : 'bg-transparent'
    }`}>
  <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={() => {
              playButtonSound();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-3xl font-extrabold text-terminal-green terminal-glow tracking-widest terminal-button-hover terminal-glitch-text"
          >
            RSR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`font-bold transition-colors duration-200 tracking-wide terminal-button-hover terminal-button-press ${
                  location.pathname === item.path
                    ? 'text-terminal-blue terminal-glow'
                    : 'text-terminal-green hover:text-terminal-blue'
                }`}
              >
                <span className="text-terminal-green">$</span> {item.label}
              </Link>
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
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block w-full text-left px-6 py-3 hover:bg-terminal-bg-main transition-colors duration-200 font-bold terminal-button-press ${
                    location.pathname === item.path
                      ? 'text-terminal-blue terminal-glow'
                      : 'text-terminal-green hover:text-terminal-blue'
                  }`}
                >
                  <span className="text-terminal-green">$</span> {item.label}
                </Link>
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