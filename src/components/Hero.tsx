import React from 'react';
import { ArrowDown, Download, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <img 
                  src="https://avatars.githubusercontent.com/u/183710499?s=400&u=37def603212e355adba088d54e1524ade57ad8e5&v=4" 
                  alt="Ruvindu Sharadha Ranasingha"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Ruvindu Sharadha
            </span>
            <br />
            <span className="text-gray-800">Ranasingha</span>
          </h1>

          <div className="flex items-center justify-center mb-6">
            <MapPin className="text-gray-600 mr-2" size={20} />
            <p className="text-xl text-gray-600">Nuwara Eliya, Sri Lanka</p>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Aspiring Software Engineer specializing in{' '}
            <span className="text-blue-600 font-semibold">Full-Stack Development</span> with expertise in{' '}
            <span className="text-purple-600 font-semibold">Spring Boot</span>,{' '}
            <span className="text-teal-600 font-semibold">Angular</span>, and{' '}
            <span className="text-indigo-600 font-semibold">React</span>
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore My Work
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
              <Download className="mr-2" size={20} />
              Download CV
            </button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;