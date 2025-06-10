import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'EVO Plan | Full-Stack Developer',
      company: 'Group Project',
      period: 'March 2025 – In Progress',
      location: 'Team Project',
      type: 'Project',
      responsibilities: [
        'Contributing as a Full Stack Developer to the Supplier module of the EVO Planner platform',
        'Developing responsive frontend interfaces using Angular for smooth user experiences',
        'Building and integrating RESTful APIs with Spring Boot for business requirements',
        'Managing data storage and queries using MySQL and Hibernate',
        'Collaborating with cross-functional teams to deliver scalable, secure features',
        'Implementing JWT for secure authentication and following Git best practices'
      ],
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Hibernate', 'JWT', 'REST API', 'Git']
    },
    {
      title: 'Trainee Engineer',
      company: 'Institute of Computer Engineering Technology',
      period: 'March 2024 – Present',
      location: 'Institute',
      type: 'Training',
      responsibilities: [
        'Gained hands-on experience with Agile methodologies including sprint planning and stand-ups',
        'Developed software solutions using Visual Studio Code and IntelliJ IDEA',
        'Practiced software design and analysis using UML diagrams',
        'Applied concepts like agile engineering, fine-tuning, and continuous improvement',
        'Strengthened communication and team collaboration skills',
        'Worked in cross-functional teams on real-world projects'
      ],
      technologies: ['Agile', 'UML', 'Visual Studio Code', 'IntelliJ IDEA', 'Team Collaboration']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Experience Card */}
                <div className={`bg-white rounded-xl shadow-lg p-6 ml-12 md:ml-0 hover:shadow-xl transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold mb-2">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase size={16} className="mr-1" />
                          {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;