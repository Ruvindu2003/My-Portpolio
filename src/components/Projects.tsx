import React from 'react';
import { ExternalLink, Github, Calendar, Layers } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'EVO Plan - Supplier Management',
      description: 'A scalable solution designed to solve real-world supplier management challenges. Contributing as a Full Stack Developer to build responsive interfaces and integrate RESTful APIs.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Hibernate', 'JWT', 'REST API'],
      type: 'Full-Stack Application',
      status: 'In Progress',
      features: [
        'Responsive frontend with Angular',
        'RESTful API integration',
        'MySQL database with Hibernate',
        'JWT authentication',
        'Scalable architecture'
      ]
    },
    {
      title: 'Car Rental System',
      description: 'A full-featured Car Rental System with modern tech stack allowing users to browse cars, make bookings, manage schedules, and view rental history with a clean, responsive interface.',
      image: 'https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'Tailwind CSS', 'MySQL'],
      type: 'Full-Stack Web Application',
      status: 'Completed',
      features: [
        'Car browsing and booking system',
        'User authentication and profiles',
        'Rental schedule management',
        'Payment integration',
        'Responsive design with Tailwind CSS'
      ]
    },
    {
      title: 'Student Management System',
      description: 'A modern and responsive system for managing student records, including personal details, academic performance, and enrollment status with a smooth React interface.',
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Spring Boot', 'MySQL', 'REST API'],
      type: 'Web Application',
      status: 'Completed',
      features: [
        'Student record management',
        'Academic performance tracking',
        'Enrollment status monitoring',
        'Dynamic React interface',
        'Secure data management'
      ]
    },
    {
      title: 'Library Management System',
      description: 'A user-friendly Library Management System with JavaFX featuring book registration, member profiles, issue/return tracking, and smart search functionality.',
      image: 'https://images.pexels.com/photos/481516/pexels-photo-481516.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaFX', 'MySQL', 'Scene Builder', 'Java'],
      type: 'Desktop Application',
      status: 'Completed',
      features: [
        'Book registration and management',
        'Member profile system',
        'Issue and return tracking',
        'Smart search functionality',
        'Modern UI with Scene Builder'
      ]
    },
    {
      title: 'Fitness Tracker',
      description: 'A clean and responsive web app for tracking workouts, calories, and progress over time with real-time validation, interactive elements, and dynamic chart displays.',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
      type: 'Web Application',
      status: 'Completed',
      features: [
        'Workout logging system',
        'Calorie tracking',
        'Progress monitoring',
        'Interactive charts',
        'Responsive design'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of full-stack applications, desktop software, and web solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'In Progress' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Layers size={16} className="mr-1" />
                    {project.type}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex-1 justify-center">
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </button>
                  <button className="flex items-center px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;