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
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic journey building strong foundations in technology and software engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start mb-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-6 flex-shrink-0">
                        <GraduationCap className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                        <h4 className="text-lg font-semibold text-blue-600 mb-3">{edu.institution}</h4>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
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
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              edu.status === 'Current' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {edu.description}
                    </p>

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">Key Highlights:</h5>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{highlight}</span>
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