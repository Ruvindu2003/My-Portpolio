import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'eGreen',
      period: 'December 2025 – Present',
      location: 'Sri Lanka',
      type: 'Full-Time',
      responsibilities: [
        'Designing and developing scalable software solutions aligned with the company\'s mission to drive sustainable and green technology initiatives',
        'Building and maintaining robust full-stack applications using modern frameworks and best practices for production-grade deployment',
        'Collaborating with cross-functional engineering teams to architect, review, and ship new product features across frontend and backend layers',
        'Contributing to technical decision-making, code quality improvements, and internal tooling to accelerate development velocity',
        'Participating actively in agile ceremonies including sprint planning, retrospectives, and daily stand-ups to ensure on-time delivery'
      ],
      technologies: ['React', 'Angular', 'Spring Boot', 'PostgreSQL', 'Agile', 'Git']
    },
    {
      title: 'Software Engineering Intern',
      company: 'Syigen (Pvt) Ltd',
      period: 'June 2025 – December 2025',
      location: 'Sri Lanka',
      type: 'Internship',
      responsibilities: [
        'Contributed to enterprise-level software development projects within a fast-paced technology company environment',
        'Collaborated with senior developers and cross-functional teams to design and deliver scalable software solutions',
        'Implemented modern development practices including code reviews, automated testing, and continuous integration workflows',
        'Gained in-depth exposure to production-grade applications and industry-standard development pipelines',
        'Participated in agile ceremonies and actively contributed to sprint planning, task estimation, and retrospectives'
      ],
      technologies: ['React', 'Angular', 'Spring Boot', 'MySQL', 'REST API', 'Git', 'Agile'],
      link: 'https://www.linkedin.com/company/syigen-ltd/posts/?feedView=all'
    },
    {
      title: 'Trainee Software Engineer',
      company: 'Institute of Computer Engineering Technology',
      period: 'March 2024 – Present',
      location: 'Sri Lanka',
      type: 'Training',
      responsibilities: [
        'Mastered Agile methodologies through hands-on sprint planning, stand-up participation, and iterative development cycles',
        'Developed comprehensive software solutions using industry-standard tools including VS Code and IntelliJ IDEA',
        'Applied advanced software design principles including UML diagrams, design patterns, and architectural best practices',
        'Enhanced technical communication and team collaboration skills through real-world cross-functional project work'
      ],
      technologies: ['Agile', 'UML', 'VS Code', 'IntelliJ IDEA', 'Design Patterns', 'MVC']
    },
    {
      title: 'Full-Stack Developer (Team Project)',
      company: 'EVO Plan Platform',
      period: 'March 2025 – December 2025',
      location: 'Team Project',
      type: 'Project',
      responsibilities: [
        'Architecting and developing the Supplier Management module for a comprehensive enterprise business planning platform',
        'Building responsive, mobile-optimised frontend interfaces using Angular with modern UI/UX principles',
        'Engineering robust RESTful APIs with Spring Boot, implementing secure authentication and core business logic',
        'Designing and optimising MySQL database schema with Hibernate for efficient data management and complex queries',
        'Implementing JWT-based authentication and following industry-standard Git workflows for collaborative development'
      ],
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Hibernate', 'JWT', 'REST API', 'Git']
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