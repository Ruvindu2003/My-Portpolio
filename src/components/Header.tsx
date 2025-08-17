import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gradient-to-r from-gray-900 via-purple-900 to-black/90 backdrop-blur-lg shadow-2xl border-b-2 border-purple-700' : 'bg-transparent'
    }`}>
  <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(124,58,237,0.7)] tracking-widest">
            RSR
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-pink-400 hover:text-white font-bold transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/ruvindu2003" target="_blank" rel="noopener noreferrer" 
               className="text-pink-400 hover:text-white transition-colors duration-200">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/ruvindu-ranasingha" target="_blank" rel="noopener noreferrer"
               className="text-pink-400 hover:text-white transition-colors duration-200">
              <Linkedin size={22} />
            </a>
            <a href="mailto:ruvinduSharadha22@gmail.com"
               className="text-pink-400 hover:text-white transition-colors duration-200">
              <Mail size={22} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-pink-400 hover:text-white transition-colors duration-200"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black shadow-2xl border-t-2 border-purple-700 z-50">
            <div className="py-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-6 py-3 text-pink-400 hover:text-white hover:bg-pink-600 transition-colors duration-200 font-bold"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t-2 border-purple-700 mt-4">
                <a href="https://github.com/ruvindu2003" target="_blank" rel="noopener noreferrer"
                   className="text-pink-400 hover:text-white transition-colors duration-200">
                  <Github size={22} />
                </a>
                <a href="https://linkedin.com/in/ruvindu-ranasingha" target="_blank" rel="noopener noreferrer"
                   className="text-pink-400 hover:text-white transition-colors duration-200">
                  <Linkedin size={22} />
                </a>
                <a href="mailto:ruvinduSharadha22@gmail.com"
                   className="text-pink-400 hover:text-white transition-colors duration-200">
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