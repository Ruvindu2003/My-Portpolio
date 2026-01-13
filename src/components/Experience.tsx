import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Internship Applicant | Software Engineering',
      company: 'SYIGEN Ltd.',
      period: 'August 2025 – Present',
      location: 'Remote / Sri Lanka',
      type: 'Internship (Seeking)',
      responsibilities: [
        'Currently seeking internship opportunities at SYIGEN Ltd. to contribute and grow as a software engineer.',
        'Eager to join a dynamic team and work on innovative projects in a real-world environment.',
        'Actively following SYIGEN company updates and culture on LinkedIn.'
      ],
      technologies: ['Java', 'Spring Boot', 'React', 'Teamwork', 'Learning'],
      link: 'https://www.linkedin.com/company/syigen-ltd/posts/?feedView=all'
    },
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
  <section id="experience" className="py-20 bg-terminal-bg-main terminal-scanline terminal-matrix-bg gpu-accelerate">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {/* Terminal Command */}
          <div className="mb-4 text-left max-w-2xl mx-auto">
            <p className="text-terminal-green text-sm font-mono">
              <span className="text-terminal-green">root@kali:~$</span> <span className="text-terminal-text-main">history | grep experience</span>
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text gpu-accelerate">
            Work Experience
          </h2>
          <div className="w-32 h-1 bg-terminal-green mx-auto mb-8 rounded-terminal terminal-glow"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-terminal-green"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-3 h-3 bg-terminal-green rounded-terminal border-4 border-terminal-bg-panel shadow-lg terminal-glow"></div>

                {/* Experience Card */}
                <div className={`bg-terminal-bg-panel rounded-terminal shadow-2xl p-6 ml-12 md:ml-0 hover:terminal-glow transition-all duration-300 border-2 border-terminal-border hover:border-terminal-green gpu-accelerate ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-extrabold text-terminal-green mb-1 terminal-glow flex items-center gap-2">
                        {exp.title}
                        {exp.link && (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-terminal-blue hover:text-terminal-green transition-colors duration-300 underline text-base font-bold">
                            (SYIGEN LinkedIn)
                          </a>
                        )}
                      </h3>
                      <p className="text-lg font-bold text-terminal-blue mb-2">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-terminal-text-main">
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
                    <h4 className="font-semibold text-terminal-green mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-terminal-green rounded-terminal mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-terminal-text-main font-mono">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-terminal-green mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-terminal-bg-main text-terminal-green px-3 py-1 rounded-terminal text-sm font-bold border border-terminal-green"
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