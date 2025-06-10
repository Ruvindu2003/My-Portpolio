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
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            RSR
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/ruvindu2003" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/ruvindu-ranasingha" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href="ruvindu22sharadha22@gmail.com"
               className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="py-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t mt-4">
                <a href="https://github.com/ruvindu2003" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/ruvindu-ranasingha" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:ruvinduSharadha22@gmail.com"
                   className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Mail size={20} />
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