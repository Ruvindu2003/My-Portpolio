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
  <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
  <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_0_20px_rgba(124,58,237,0.7)]">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full shadow-lg"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 drop-shadow-[0_0_10px_rgba(124,58,237,0.7)]">Professional Summary</h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6 font-mono">
              I'm an aspiring Software Engineer with practical experience in both front-end and back-end development. 
              Currently pursuing a Diploma in Software Engineering at the Institute of Computer Engineering Technology, 
              I have gained hands-on experience with modern development frameworks and methodologies.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed font-mono">
              My expertise spans across <span className="font-semibold text-blue-400">HTML, CSS, JavaScript</span>, 
              modern frameworks like <span className="font-semibold text-purple-400">Angular and React</span>, 
              and backend technologies including <span className="font-semibold text-teal-400">Java and Spring Boot</span>. 
              I'm passionate about creating scalable, efficient solutions and working collaboratively in team environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/90 p-6 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform border-2 border-purple-700 hover:border-pink-500 backdrop-blur-lg"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-black rounded-xl shadow-lg mb-4 border-2 border-blue-700">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2 drop-shadow-[0_0_10px_rgba(124,58,237,0.7)]">{highlight.title}</h4>
                <p className="text-gray-300 text-base font-mono">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;