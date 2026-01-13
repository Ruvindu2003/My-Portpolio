import React from 'react';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: 'Full-Stack Developer',
      description: 'Experienced in both frontend and backend technologies'
    },
    {
      icon: <Users className="text-purple-600\" size={24} />,
      title: 'Team Collaborator',
      description: 'Strong communication and teamwork skills'
    },
    {
      icon: <Lightbulb className="text-teal-600" size={24} />,
      title: 'Problem Solver',
      description: 'Innovative thinking and solution-oriented approach'
    },
    {
      icon: <Target className="text-indigo-600\" size={24} />,
      title: 'Goal-Oriented',
      description: 'Focused on delivering quality software solutions'
    }
  ];

  return (
  <section id="about" className="py-20 bg-terminal-bg-main terminal-scanline terminal-matrix-bg gpu-accelerate">
  <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {/* Terminal Command */}
          <div className="mb-4 text-left max-w-2xl mx-auto">
            <p className="text-terminal-green text-sm font-mono">
              <span className="text-terminal-green">root@kali:~$</span> <span className="text-terminal-text-main">cat about.txt</span>
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text gpu-accelerate">
            About Me
          </h2>
          <div className="w-32 h-1 bg-terminal-green mx-auto mb-8 rounded-terminal terminal-glow"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-3xl font-extrabold text-terminal-green mb-6 terminal-glow terminal-pulse">Professional Summary</h3>
            <p className="text-xl text-terminal-text-main leading-relaxed mb-6 font-mono">
              I'm an aspiring Software Engineer with practical experience in both front-end and back-end development. 
              Currently pursuing a Diploma in Software Engineering at the Institute of Computer Engineering Technology, 
              I have gained hands-on experience with modern development frameworks and methodologies.
            </p>
            <p className="text-xl text-terminal-text-main leading-relaxed font-mono">
              My expertise spans across <span className="font-semibold text-terminal-blue">HTML, CSS, JavaScript</span>, 
              modern frameworks like <span className="font-semibold text-terminal-green">Angular and React</span>, 
              and backend technologies including <span className="font-semibold text-terminal-blue">Java and Spring Boot</span>. 
              I'm passionate about creating scalable, efficient solutions and working collaboratively in team environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-terminal-bg-panel p-6 rounded-terminal hover:terminal-glow hover:scale-105 transition-all duration-300 transform border-2 border-terminal-border hover:border-terminal-green gpu-accelerate"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-terminal-bg-main rounded-terminal shadow-lg mb-4 border-2 border-terminal-green">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-extrabold text-terminal-green mb-2 terminal-glow">{highlight.title}</h4>
                <p className="text-terminal-text-main text-base font-mono">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;