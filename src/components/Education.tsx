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
  <section id="education" className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
  <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_0_20px_rgba(124,58,237,0.7)]">
            Education
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-mono">
            Academic journey building strong foundations in technology and software engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/90 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-purple-700 hover:border-pink-500 backdrop-blur-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start mb-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-6 flex-shrink-0">
                        <GraduationCap className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2 drop-shadow-[0_0_10px_rgba(124,58,237,0.7)]">{edu.degree}</h3>
                        <h4 className="text-lg font-bold text-pink-400 mb-3">{edu.institution}</h4>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
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
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                              edu.status === 'Current' 
                                ? 'bg-green-400 text-white' 
                                : 'bg-blue-400 text-white'
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6 font-mono">
                      {edu.description}
                    </p>

                    <div>
                      <h5 className="font-semibold text-pink-400 mb-3">Key Highlights:</h5>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-300 text-base font-mono">{highlight}</span>
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