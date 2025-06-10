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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Summary</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I'm an aspiring Software Engineer with practical experience in both front-end and back-end development. 
              Currently pursuing a Diploma in Software Engineering at the Institute of Computer Engineering Technology, 
              I have gained hands-on experience with modern development frameworks and methodologies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My expertise spans across <span className="font-semibold text-blue-600">HTML, CSS, JavaScript</span>, 
              modern frameworks like <span className="font-semibold text-purple-600">Angular and React</span>, 
              and backend technologies including <span className="font-semibold text-teal-600">Java and Spring Boot</span>. 
              I'm passionate about creating scalable, efficient solutions and working collaboratively in team environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-md mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;