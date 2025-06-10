import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ruvindu Sharadha Ranasingha
            </h3>
            <p className="text-gray-400 mt-2">Software Engineer & Full-Stack Developer</p>
          </div>

          {/* Quote */}
          <div className="mb-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 italic">
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
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center text-gray-400 mb-4 md:mb-0">
                <span className="mr-2">Made with</span>
                <Heart size={16} className="text-red-500 mx-1" />
                <span className="mx-2">and</span>
                <Code size={16} className="text-blue-500 mx-1" />
                <span className="ml-2">by Ruvindu</span>
              </div>
              
              <div className="text-gray-400">
                <span>&copy; {currentYear} Ruvindu Sharadha Ranasingha. All rights reserved.</span>
              </div>
            </div>
            
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Built with React, TypeScript, and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;