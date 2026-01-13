import React from 'react';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Globe className="text-blue-600" size={32} />,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Bootstrap', level: 80 }
      ]
    },
    {
      icon: <Code className="text-purple-600\" size={32} />,
      title: 'Backend Development',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Node.js', level: 75 },
        { name: 'REST API', level: 90 },
        { name: 'GraphQL', level: 70 },
        { name: 'Swagger', level: 75 }
      ]
    },
    {
      icon: <Database className="text-teal-600" size={32} />,
      title: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL Server', level: 75 },
        { name: 'Hibernate', level: 80 },
        { name: 'Git/GitHub', level: 90 }
      ]
    },
    {
      icon: <Wrench className="text-indigo-600\" size={32} />,
      title: 'Other Technologies',
      skills: [
        { name: 'JavaFX', level: 80 },
        { name: 'OpenAI Integration', level: 70 },
        { name: 'Agile Methodologies', level: 85 },
        { name: 'UML Design', level: 75 },
        { name: 'Problem Solving', level: 95 }
      ]
    }
  ];

  return (
  <section id="skills" className="py-20 bg-terminal-bg-main terminal-scanline terminal-matrix-bg gpu-accelerate">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {/* Terminal Command */}
          <div className="mb-4 text-left max-w-2xl mx-auto">
            <p className="text-terminal-green text-sm font-mono">
              <span className="text-terminal-green">root@kali:~$</span> <span className="text-terminal-text-main">skill --list</span>
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text gpu-accelerate">
            Technical Skills
          </h2>
          <div className="w-32 h-1 bg-terminal-green mx-auto mb-8 rounded-terminal terminal-glow"></div>
          <p className="text-2xl text-terminal-text-main max-w-3xl mx-auto font-mono">
            Comprehensive expertise across modern web technologies and development frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-terminal-bg-panel rounded-terminal shadow-2xl p-8 hover:terminal-glow transition-all duration-300 border-2 border-terminal-border hover:border-terminal-green gpu-accelerate"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-terminal-bg-main rounded-terminal mr-4 border-2 border-terminal-green">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-terminal-green terminal-glow">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-terminal-text-main font-bold font-mono">{skill.name}</span>
                      <span className="text-sm text-terminal-green group-hover:text-terminal-blue transition-colors duration-200 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-terminal-bg-main rounded-terminal h-2 overflow-hidden border border-terminal-border">
                      <div 
                        className="h-full bg-terminal-green rounded-terminal transition-all duration-1000 ease-out group-hover:terminal-glow"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-extrabold text-terminal-green mb-8 terminal-glow">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Agile Development', 'Team Leadership', 'Problem Solving', 'Communication',
              'Project Management', 'Code Review', 'Testing', 'Documentation',
              'Continuous Learning', 'Adaptability'
            ].map((skill, index) => (
              <span 
                key={index}
                className="bg-terminal-bg-panel text-terminal-green px-4 py-2 rounded-terminal font-bold border border-terminal-green hover:terminal-glow transition-all duration-300 transform hover:-translate-y-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;