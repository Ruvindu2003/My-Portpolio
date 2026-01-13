import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Diploma in Software Engineering',
      institution: 'Institute of Computer Engineering Technology',
      period: '2024 - 2025 (Ongoing)',
      location: 'Sri Lanka',
      status: 'Current',
      description: 'Comprehensive program covering modern software development practices, including full-stack development, agile methodologies, and industry-standard tools.',
      highlights: [
        'Full-Stack Development with modern frameworks',
        'Agile Development Methodologies',
        'Database Design and Management',
        'Software Engineering Principles',
        'Team Collaboration and Project Management'
      ]
    },
    {
      degree: 'G.C.E. Advanced Level (A/L)',
      institution: 'Mo/Madagama National School, Bibile',
      period: '2022',
      location: 'Bibile, Sri Lanka',
      status: 'Completed',
      description: 'Successfully completed the General Certificate of Education Advanced Level examination following the national curriculum.',
      highlights: [
        'Strong foundational knowledge',
        'Technology-focused subjects',
        'Teamwork and collaboration skills',
        'Analytical thinking development'
      ]
    },
    {
      degree: 'G.C.E. Ordinary Level (O/L)',
      institution: "Our Lady's Upper School, Nuwara Eliya",
      period: '2019',
      location: 'Nuwara Eliya, Sri Lanka',
      status: 'Completed',
      description: 'Completed secondary education with strong academic foundation preparing for advanced studies.',
      highlights: [
        'Comprehensive secondary education',
        'Strong academic foundation',
        'Leadership and communication skills',
        'Preparation for advanced studies'
      ]
    }
  ];

  return (
  <section id="education" className="py-20 bg-terminal-bg-main terminal-scanline terminal-matrix-bg gpu-accelerate">
  <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {/* Terminal Command */}
          <div className="mb-4 text-left max-w-2xl mx-auto">
            <p className="text-terminal-green text-sm font-mono">
              <span className="text-terminal-green">root@kali:~$</span> <span className="text-terminal-text-main">cat education.log</span>
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text gpu-accelerate">
            Education
          </h2>
          <div className="w-32 h-1 bg-terminal-green mx-auto mb-8 rounded-terminal terminal-glow"></div>
          <p className="text-2xl text-terminal-text-main max-w-3xl mx-auto font-mono">
            Academic journey building strong foundations in technology and software engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="bg-terminal-bg-panel rounded-terminal p-8 shadow-2xl hover:terminal-glow transition-all duration-300 border-2 border-terminal-border hover:border-terminal-green gpu-accelerate"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start mb-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-terminal-bg-main border-2 border-terminal-green rounded-terminal mr-6 flex-shrink-0">
                        <GraduationCap className="text-terminal-green" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-extrabold text-terminal-green mb-2 terminal-glow">{edu.degree}</h3>
                        <h4 className="text-lg font-bold text-terminal-blue mb-3">{edu.institution}</h4>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-terminal-text-main mb-4">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2" />
                            {edu.location}
                          </div>
                          <div className="flex items-center">
                            <Award size={16} className="mr-2" />
                            <span className={`px-2 py-1 rounded-terminal text-xs font-bold ${
                              edu.status === 'Current' 
                                ? 'bg-terminal-green text-terminal-bg-main' 
                                : 'bg-terminal-blue text-terminal-bg-main'
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-terminal-text-main leading-relaxed mb-6 font-mono">
                      {edu.description}
                    </p>

                    <div>
                      <h5 className="font-semibold text-terminal-green mb-3">Key Highlights:</h5>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-terminal-green rounded-terminal mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-terminal-text-main text-base font-mono">{highlight}</span>
                          </div>
                        ))}
                      </div>
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

export default Education;