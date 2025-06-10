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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across modern web technologies and development frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-xl mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-200">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
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
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Agile Development', 'Team Leadership', 'Problem Solving', 'Communication',
              'Project Management', 'Code Review', 'Testing', 'Documentation',
              'Continuous Learning', 'Adaptability'
            ].map((skill, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full font-medium hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
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