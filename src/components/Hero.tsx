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
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-terminal-bg-main terminal-scanline terminal-matrix-bg gpu-accelerate">
      {/* Terminal Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-terminal-green opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-terminal-blue opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-terminal-bg-main"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 gpu-accelerate">
        <div className="text-center">
          {/* Terminal Command Prompt Style */}
          <div className="mb-4 text-left max-w-2xl mx-auto">
            <p className="text-terminal-green text-sm font-mono mb-2">
              <span className="text-terminal-green">root@kali:~$</span> <span className="text-terminal-text-main">whoami</span>
            </p>
            <p className="text-terminal-green text-sm font-mono mb-6 terminal-loading"></p>
          </div>

          {/* Clean Professional Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {/* Colored Background Circle */}
              <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 -z-10 transform translate-x-8 translate-y-4 opacity-90"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-terminal-bg-main shadow-2xl">
                  {/* Profile Image */}
                  <img
                    src="/images/WhatsApp Image 2025-08-17 at 14.53.54_aa94ea14.jpg"
                    alt="Ruvindu Sharadha Ranasingha - Software Engineer"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                
                {/* Status Indicator */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-terminal-bg-panel border-2 border-terminal-green px-4 py-1.5 rounded-full shadow-lg">
                  <div className="w-2.5 h-2.5 bg-terminal-green rounded-full animate-pulse"></div>
                  <span className="text-terminal-green font-mono text-xs font-bold">ONLINE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight gradient-text gpu-accelerate terminal-glitch-text">
            Ruvindu Sharadha
            <br />
            <span className="text-terminal-green terminal-cursor terminal-pulse">Ranasingha</span>
          </h1>

          <div className="flex items-center justify-center mb-6">
            <MapPin className="text-terminal-green mr-2 animate-pulse" size={22} />
            <p className="text-xl text-terminal-text-main font-mono">
              <span className="text-terminal-green">[</span>
              <span className="text-terminal-blue">Nuwara Eliya, Sri Lanka</span>
              <span className="text-terminal-green">]</span>
            </p>
          </div>

          <p className="text-2xl md:text-3xl text-terminal-text-main mb-4 max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-terminal-green">$</span> Aspiring Software Engineer specializing in{' '}
            <span className="text-terminal-blue font-bold">Full-Stack Development</span> with expertise in{' '}
            <span className="text-terminal-green font-bold">Spring Boot</span>,{' '}
            <span className="text-terminal-blue font-bold">Angular</span>, and{' '}
            <span className="text-terminal-green font-bold">React</span>
          </p>
          
          {/* Enhanced Description */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-terminal-bg-panel border-2 border-terminal-border p-6 rounded-terminal terminal-glow">
              <p className="text-lg md:text-xl text-terminal-text-main leading-relaxed font-mono mb-4">
                <span className="text-terminal-green">[INFO]</span> Passionate developer crafting scalable solutions with modern technologies. 
                Currently contributing to <span className="text-terminal-blue font-bold">EVO Plan</span> as a Full-Stack Developer, 
                building robust supplier management systems with <span className="text-terminal-green font-bold">Angular</span> and{' '}
                <span className="text-terminal-blue font-bold">Spring Boot</span>.
              </p>
              <p className="text-base md:text-lg text-terminal-text-main leading-relaxed font-mono">
                <span className="text-terminal-green">[STATUS]</span> Seeking internship opportunities |{' '}
                <span className="text-terminal-blue">Available for collaboration</span> |{' '}
                <span className="text-terminal-green">Open to new challenges</span>
              </p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 gpu-accelerate">
            <button 
              onClick={(e) => { 
                e.preventDefault();
                e.stopPropagation();
                playButtonSound(); 
                scrollToAbout(); 
              }}
              className="bg-terminal-bg-panel text-terminal-green px-10 py-4 rounded-terminal font-extrabold terminal-glow hover:terminal-glow-blue hover:scale-105 transform transition-all duration-300 border-2 border-terminal-green hover:border-terminal-blue text-lg tracking-wider gpu-accelerate terminal-button-press terminal-pulse"
            >
              <span className="text-terminal-green">$</span> Explore My Work
            </button>
            <button
              onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                playButtonSound();
                
                try {
                  // Try to fetch and download the file
                  const response = await fetch('/RuvinduSharadha-resume-2026.pdf');
                  if (!response.ok) {
                    throw new Error('File not found');
                  }
                  
                  const blob = await response.blob();
                  const url = window.URL.createObjectURL(blob);
                  
                  // Create download link
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = 'Ruvindu_Sharadha_Ranasingha_Resume_2026.pdf';
                  
                  // Append to body, click, and remove
                  document.body.appendChild(link);
                  link.click();
                  
                  // Clean up
                  setTimeout(() => {
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                  }, 100);
                } catch (error) {
                  console.error('Download error:', error);
                  // Fallback: try direct link
                  const link = document.createElement('a');
                  link.href = '/RuvinduSharadha-resume-2026.pdf';
                  link.download = 'Ruvindu_Sharadha_Ranasingha_Resume_2026.pdf';
                  link.target = '_blank';
                  document.body.appendChild(link);
                  link.click();
                  setTimeout(() => {
                    document.body.removeChild(link);
                  }, 100);
                }
              }}
              className="border-2 border-terminal-blue text-terminal-blue px-10 py-4 rounded-terminal font-extrabold hover:bg-terminal-green hover:text-terminal-bg-main hover:terminal-glow transition-all duration-300 flex items-center justify-center text-lg tracking-wider gpu-accelerate terminal-button-press"
            >
              <Download className="mr-2" size={22} />
              <span className="text-terminal-green">$</span> Download CV
            </button>
          </div>

          {/* Terminal Command Prompt */}
          <div className="mb-4 text-center">
            <p className="text-terminal-green text-sm font-mono">
              <span className="text-terminal-green">root@kali:~$</span> <span className="text-terminal-text-main">scroll_down</span>
            </p>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={(e) => { 
              e.preventDefault();
              e.stopPropagation();
              playButtonSound(); 
              scrollToAbout(); 
            }}
            className="animate-bounce text-terminal-green hover:text-terminal-blue transition-colors duration-300 gpu-accelerate terminal-button-press terminal-pulse"
          >
            <ArrowDown size={36} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;