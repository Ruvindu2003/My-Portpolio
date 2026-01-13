// Utility to play button sound
const playButtonSound = () => {
  const audio = new Audio('/sounds/mixkit-sci-fi-click-900.wav');
  audio.currentTime = 0;
  audio.play();
};
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
  <footer className="bg-terminal-bg-panel text-terminal-text-main py-12 border-t-2 border-terminal-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-4xl font-extrabold text-terminal-green terminal-glow">
              Ruvindu Sharadha Ranasingha
            </h3>
            <p className="text-terminal-blue mt-2 font-mono">Software Engineer & Full-Stack Developer</p>
          </div>

          {/* Quote */}
          <div className="mb-8 max-w-2xl mx-auto">
            <p className="text-xl text-terminal-text-main italic font-mono">
              "Passionate about creating innovative software solutions that make a difference"
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { name: 'About', href: '#about' },
              { name: 'Experience', href: '#experience' },
              { name: 'Projects', href: '#projects' },
              { name: 'Skills', href: '#skills' },
              { name: 'Education', href: '#education' },
              { name: 'Contact', href: '#contact' }
            ].map((link) => {
              const handleScroll = (href: string) => {
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
                  
                  // Update URL hash
                  if (window.history && window.history.pushState) {
                    window.history.pushState(null, '', hash);
                  }
                }
              };
              
              return (
                <button
                  key={link.name}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    playButtonSound();
                    handleScroll(link.href);
                  }}
                  className="text-terminal-green hover:text-terminal-blue transition-colors duration-300 font-bold terminal-button-hover terminal-button-press"
                >
                  <span className="text-terminal-green">$</span> {link.name}
                </button>
              );
            })}
          </div>

          {/* Divider */}
          <div className="border-t-2 border-terminal-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center text-terminal-green mb-4 md:mb-0 font-mono">
                <span className="mr-2">Made with</span>
                <Heart size={16} className="text-terminal-red mx-1" />
                <span className="mx-2">and</span>
                <Code size={16} className="text-terminal-blue mx-1" />
                <span className="ml-2">by Ruvindu</span>
              </div>
              
              <div className="text-terminal-green font-mono">
                <span>&copy; {currentYear} Ruvindu Sharadha Ranasingha. All rights reserved.</span>
              </div>
            </div>
            
            <div className="mt-4 text-center text-base text-terminal-blue font-mono">
              <p>Built with React, TypeScript, and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;