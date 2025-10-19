// Utility to play button sound
const playButtonSound = () => {
  const audio = new Audio('/sounds/mixkit-sci-fi-click-900.wav');
  audio.currentTime = 0;
  audio.play();
};
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Internship Project (Web)',
      description: 'A full-stack web application completed as my student internship project. The system features 3 user roles: Admin, Student, and Company, each with unique access and functionality. It uses secure JWT authentication and offers a modern Angular frontend with a robust Spring Boot backend. Note: Project photo has been updated.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'JWT', 'MySQL', 'Tailwind CSS'],
      type: 'Full-Stack Web Application',
      status: 'In Progress',
      features: [
        'Role-based access: Admin, Student, Company',
        'JWT authentication and secure endpoints',
        'Internship management and application workflows',
        'Modern Angular UI with Tailwind CSS',
        'Project photo updated'
      ]
    },
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
  description: 'A user-friendly Library Management System (Desktop) built with JavaFX, featuring book registration, member profiles, issue/return tracking, and smart search functionality. Note: The photo upload feature is currently not working.',
  image: '/images/pexels-pixabay-159711.jpg',
    technologies: ['JavaFX', 'MySQL', 'Scene Builder', 'Java'],
    type: 'Desktop Application',
    status: 'Completed',
    features: [
      'Book registration and management',
      'Member profile system',
      'Issue and return tracking',
      'Smart search functionality',
      'Modern UI with Scene Builder',

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
  <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
  <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_0_20px_rgba(124,58,237,0.7)]">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-mono">
            Explore my portfolio of full-stack applications, desktop software, and web solutions
          </p>
        </div>

  <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/90 rounded-3xl shadow-2xl overflow-hidden border-2 border-purple-700 hover:border-pink-500 transition-all duration-300 hover:scale-[1.025] hover:shadow-3xl backdrop-blur-lg"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-[2px] opacity-80"
                />
                <div className="absolute top-4 right-4 flex flex-col items-end gap-2 z-10">
                  {project.title.includes('Internship Project (Web)') && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold shadow bg-blue-700 text-white border border-blue-400 mb-1 animate-pulse">
                      Student Internship Project
                    </span>
                  )}
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold shadow-md ${
                    project.status === 'In Progress'
                      ? 'bg-yellow-400 text-yellow-900'
                      : 'bg-green-400 text-green-900'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-transparent group-hover:from-pink-900/80 transition-all duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-8 pb-7 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_0_10px_rgba(124,58,237,0.7)] group-hover:text-pink-400 transition-colors duration-300">{project.title}</h3>
                  <div className="flex items-center text-sm text-pink-400">
                    <Layers size={20} className="mr-1" />
                    {project.type}
                  </div>
                </div>

                <p className="text-lg text-gray-200 mb-4 leading-relaxed font-mono group-hover:text-pink-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-pink-400 mb-2 group-hover:text-blue-400 transition-colors duration-300">Key Features:</h4>
                  <ul className="text-base text-gray-300 space-y-1">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {project.features.length > 4 && (
                    <div className="text-xs text-pink-400 mt-1">...and more</div>
                  )}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-blue-700 to-pink-700 text-white px-3 py-1 rounded-full text-sm font-semibold border border-pink-400 shadow-sm group-hover:bg-pink-600 group-hover:text-pink-100 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <button className="flex items-center px-5 py-2 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 flex-1 justify-center font-semibold group-hover:from-pink-700 group-hover:to-blue-700 border-2 border-purple-700 hover:border-pink-400" onClick={playButtonSound}>
                    <ExternalLink size={18} className="mr-2" />
                    View Project
                  </button>
                  <button className="flex items-center px-5 py-2 border-2 border-pink-400 text-pink-400 rounded-xl hover:bg-pink-600 hover:text-white transition-all duration-300" onClick={playButtonSound}>
                    <Github size={18} />
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