// Utility to play button sound
const playButtonSound = () => {
  const audio = new Audio('/sounds/mixkit-sci-fi-click-900.wav');
  audio.currentTime = 0;
  audio.play();
};
import { ArrowDown, Download, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
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
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-terminal-bg-main terminal-scanline terminal-matrix-bg gpu-accelerate pt-20 lg:pt-0">
      {/* Terminal Background Glow - Adjusted for split layout */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terminal-green/10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-terminal-blue/10 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 gpu-accelerate">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Column: Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Terminal Command Prompt Style */}
            <div className="mb-6 inline-block">
              <p className="text-terminal-green text-sm font-mono mb-2 bg-terminal-bg-panel/50 px-4 py-2 rounded-terminal border border-terminal-green/30 backdrop-blur-sm">
                <span className="text-terminal-green">root@kali:~$</span> <span className="text-terminal-text-main">./init_profile.sh</span>
              </p>
            </div>

            {/* Name and Title */}
            <h1 className="text-5xl lg:text-8xl font-extrabold mb-6 tracking-tight gradient-text gpu-accelerate terminal-glitch-text leading-tight">
              Ruvindu
              <br />
              <span className="text-terminal-green terminal-cursor terminal-pulse">Sharadha</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start mb-8 gap-3">
              <MapPin className="text-terminal-green animate-bounce" size={24} />
              <p className="text-xl lg:text-2xl text-terminal-text-main font-mono">
                <span className="text-terminal-green">[</span>
                <span className="text-terminal-blue">Nuwara Eliya, Sri Lanka</span>
                <span className="text-terminal-green">]</span>
              </p>
            </div>

            <div className="mb-10 max-w-2xl">
              <p className="text-2xl lg:text-3xl text-terminal-text-main mb-6 leading-relaxed font-mono">
                <span className="text-terminal-green">$</span> Full-Stack Developer specializing in{' '}
                <span className="text-terminal-blue font-bold">Spring Boot</span>,{' '}
                <span className="text-terminal-green font-bold">Angular</span> &{' '}
                <span className="text-terminal-blue font-bold">React</span>
              </p>

              <div className="bg-terminal-bg-panel/30 border-l-4 border-terminal-green p-4 backdrop-blur-sm text-left">
                <p className="text-terminal-text-main font-mono text-lg">
                  <span className="text-terminal-green mr-2">&gt;&gt;</span>
                  Building robust supplier management systems at <span className="text-terminal-blue font-bold">EVO Plan</span>.
                </p>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start gpu-accelerate">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  playButtonSound();
                  scrollToAbout();
                }}
                className="group relative bg-terminal-green/10 text-terminal-green px-8 py-4 rounded-terminal font-bold border border-terminal-green hover:bg-terminal-green hover:text-terminal-bg-main transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-terminal-green/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></div>
                <span className="relative flex items-center gap-2">
                  <span>Explore Work</span>
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={async (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  playButtonSound();
                  try {
                    const response = await fetch('/RuvinduSharadha-resume-2026.pdf');
                    if (!response.ok) throw new Error('File not found');
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'Ruvindu_Sharadha_Ranasingha_Resume_2026.pdf';
                    document.body.appendChild(link);
                    link.click();
                    setTimeout(() => {
                      document.body.removeChild(link);
                      window.URL.revokeObjectURL(url);
                    }, 100);
                  } catch (error) {
                    const link = document.createElement('a');
                    link.href = '/RuvinduSharadha-resume-2026.pdf';
                    link.download = 'Ruvindu_Sharadha_Ranasingha_Resume_2026.pdf';
                    link.target = '_blank';
                    document.body.appendChild(link);
                    link.click();
                    setTimeout(() => document.body.removeChild(link), 100);
                  }
                }}
                className="group relative border border-terminal-blue text-terminal-blue px-8 py-4 rounded-terminal font-bold hover:terminal-glow-blue transition-all duration-300"
              >
                <span className="relative flex items-center gap-2">
                  <Download size={18} />
                  <span>Download CV</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="flex-1 relative order-1 lg:order-2 w-full max-w-md lg:max-w-xl flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[4/5] max-h-[70vh]">
              {/* Tech Stack Orbiting Elements (Subtle Background) */}
              <div className="absolute top-10 -right-10 w-20 h-20 bg-terminal-blue/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-10 -left-10 w-32 h-32 bg-terminal-green/20 rounded-full blur-xl animate-pulse delay-700"></div>

              {/* Main Image Container */}
              <div className="relative h-full w-full group">
                {/* Frame/Border Effect */}
                <div className="absolute inset-0 border-2 border-terminal-green/30 rounded-2xl transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="absolute inset-0 border-2 border-terminal-blue/30 rounded-2xl transform -translate-x-4 -translate-y-4 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>

                {/* The Image Itself */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden border border-terminal-green/50 shadow-2xl terminal-glow bg-terminal-bg-panel/50 backdrop-blur-sm grayscale hover:grayscale-0 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg-main via-transparent to-transparent opacity-60 z-10"></div>
                  <img
                    src="/images/WhatsApp Image 2025-08-17 at 14.53.54_aa94ea14.jpg"
                    alt="Ruvindu Sharadha"
                    className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex gap-2 justify-center">
                      <span className="bg-terminal-bg-main/90 text-terminal-green text-xs font-mono px-3 py-1 rounded border border-terminal-green/30">React</span>
                      <span className="bg-terminal-bg-main/90 text-terminal-blue text-xs font-mono px-3 py-1 rounded border border-terminal-blue/30">Spring Boot</span>
                      <span className="bg-terminal-bg-main/90 text-terminal-green text-xs font-mono px-3 py-1 rounded border border-terminal-green/30">Angular</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator - Absolute Bottom */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
          <ArrowDown className="text-terminal-green/50" size={30} />
        </div>
      </div>
    </section>
  );
};

export default Hero;