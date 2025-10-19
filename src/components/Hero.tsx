// Utility to play button sound
const playButtonSound = () => {
  const audio = new Audio('/sounds/mixkit-sci-fi-click-900.wav');
  audio.currentTime = 0;
  audio.play();
};
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      {/* Neon/Glassmorphism Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-700 via-purple-700 to-pink-600 rounded-full blur-3xl opacity-60 animate-pulse shadow-2xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-700 via-blue-700 to-pink-600 rounded-full blur-3xl opacity-60 animate-pulse delay-1000 shadow-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-950/80 to-black/90"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image with Neon Border */}
          <div className="mb-8 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-700 via-purple-700 to-pink-600 p-2 shadow-[0_0_60px_15px_rgba(124,58,237,0.7)] animate-pulse">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-inner shadow-blue-900/40">
                <img
                  src="/images/WhatsApp Image 2025-08-17 at 14.53.54_aa94ea14.jpg"
                  alt="Ruvindu Sharadha Ranasingha"
                  className="w-full h-full rounded-full object-cover border-4 border-purple-700 shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_0_20px_rgba(124,58,237,0.7)]">
            Ruvindu Sharadha
            <br />
            <span className="text-gray-200 bg-none">Ranasingha</span>
          </h1>

          <div className="flex items-center justify-center mb-6">
            <MapPin className="text-pink-400 mr-2 animate-pulse" size={22} />
            <p className="text-xl text-gray-300 font-mono">Nuwara Eliya, Sri Lanka</p>
          </div>

          <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-mono">
            Aspiring Software Engineer specializing in{' '}
            <span className="text-blue-400 font-bold">Full-Stack Development</span> with expertise in{' '}
            <span className="text-purple-400 font-bold">Spring Boot</span>,{' '}
            <span className="text-pink-400 font-bold">Angular</span>, and{' '}
            <span className="text-indigo-400 font-bold">React</span>
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => { playButtonSound(); scrollToAbout(); }}
              className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white px-10 py-4 rounded-full font-extrabold shadow-lg hover:shadow-pink-500/40 hover:scale-105 transform transition-all duration-300 border-2 border-purple-700 hover:border-pink-400 text-lg tracking-wider"
            >
              Explore My Work
            </button>
            <button
              onClick={async () => {
                try {
                  playButtonSound();
                  const base = import.meta.env.BASE_URL || '/';
                  const url = `${base.replace(/\/$/, '')}/cv/Ruvindu_vv.pdf`;
                  const res = await fetch(url, { cache: 'no-cache' });
                  if (!res.ok) throw new Error(`HTTP ${res.status}`);
                  const ct = res.headers.get('content-type') || '';
                  if (!ct.includes('pdf')) {
                    throw new Error('File not found or wrong content-type');
                  }
                  const blob = await res.blob();
                  const blobUrl = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = blobUrl;
                  a.download = 'Ruvindu_Sharadha_Ranasingha_CV.pdf';
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                  URL.revokeObjectURL(blobUrl);
                } catch (err) {
                  alert('CV file could not be downloaded. Please try again later.');
                  console.error('CV download failed:', err);
                }
              }}
              className="border-2 border-pink-400 text-pink-400 px-10 py-4 rounded-full font-extrabold hover:bg-pink-600 hover:text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center text-lg tracking-wider"
            >
              <Download className="mr-2" size={22} />
              Download CV
            </button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => { playButtonSound(); scrollToAbout(); }}
            className="animate-bounce text-purple-400 hover:text-pink-400 transition-colors duration-300"
          >
            <ArrowDown size={36} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;