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
  <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-12 border-t-2 border-purple-700">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(124,58,237,0.7)]">
              Ruvindu Sharadha Ranasingha
            </h3>
            <p className="text-pink-400 mt-2 font-mono">Software Engineer & Full-Stack Developer</p>
          </div>

          {/* Quote */}
          <div className="mb-8 max-w-2xl mx-auto">
            <p className="text-xl text-gray-300 italic font-mono">
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
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  playButtonSound();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-pink-400 hover:text-white transition-colors duration-300 font-bold"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t-2 border-purple-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center text-pink-400 mb-4 md:mb-0 font-mono">
                <span className="mr-2">Made with</span>
                <Heart size={16} className="text-red-500 mx-1" />
                <span className="mx-2">and</span>
                <Code size={16} className="text-blue-500 mx-1" />
                <span className="ml-2">by Ruvindu</span>
              </div>
              
              <div className="text-pink-400 font-mono">
                <span>&copy; {currentYear} Ruvindu Sharadha Ranasingha. All rights reserved.</span>
              </div>
            </div>
            
            <div className="mt-4 text-center text-base text-pink-400 font-mono">
              <p>Built with React, TypeScript, and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;