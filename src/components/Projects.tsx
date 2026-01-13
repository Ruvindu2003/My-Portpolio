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
  <section id="projects" className="py-20 bg-terminal-bg-main terminal-scanline terminal-matrix-bg gpu-accelerate">
  <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {/* Terminal Command */}
          <div className="mb-4 text-left max-w-2xl mx-auto">
            <p className="text-terminal-green text-sm font-mono">
              <span className="text-terminal-green">root@kali:~$</span> <span className="text-terminal-text-main">ls -la projects/</span>
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text gpu-accelerate">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-terminal-green mx-auto mb-8 rounded-terminal terminal-glow"></div>
          <p className="text-2xl text-terminal-text-main max-w-3xl mx-auto font-mono">
            Explore my portfolio of full-stack applications, desktop software, and web solutions
          </p>
        </div>

  <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-terminal-bg-panel rounded-terminal shadow-2xl overflow-hidden border-2 border-terminal-border hover:border-terminal-green transition-all duration-300 hover:scale-[1.025] hover:terminal-glow gpu-accelerate"
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
                    <span className="px-3 py-1 rounded-terminal text-xs font-bold shadow bg-terminal-bg-panel text-terminal-green border border-terminal-green mb-1 animate-pulse terminal-glow">
                      Student Internship Project
                    </span>
                  )}
                  <span className={`px-3 py-1 rounded-terminal text-sm font-semibold shadow-md ${
                    project.status === 'In Progress'
                      ? 'bg-terminal-yellow text-terminal-bg-main'
                      : 'bg-terminal-green text-terminal-bg-main'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-terminal-bg-main/50 group-hover:bg-terminal-bg-main/30 transition-all duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-8 pb-7 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-extrabold text-terminal-green group-hover:text-terminal-blue transition-colors duration-300 terminal-glow">{project.title}</h3>
                  <div className="flex items-center text-sm text-terminal-blue">
                    <Layers size={20} className="mr-1" />
                    {project.type}
                  </div>
                </div>

                <p className="text-lg text-terminal-text-main mb-4 leading-relaxed font-mono group-hover:text-terminal-green transition-colors duration-300">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-terminal-green mb-2 group-hover:text-terminal-blue transition-colors duration-300">Key Features:</h4>
                  <ul className="text-base text-terminal-text-main space-y-1">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-terminal-green rounded-terminal mt-2 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {project.features.length > 4 && (
                    <div className="text-xs text-terminal-blue mt-1">...and more</div>
                  )}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-terminal-bg-main text-terminal-green px-3 py-1 rounded-terminal text-sm font-semibold border border-terminal-green shadow-sm group-hover:bg-terminal-green group-hover:text-terminal-bg-main transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <button className="flex items-center px-5 py-2 bg-terminal-bg-main text-terminal-green rounded-terminal hover:terminal-glow transition-all duration-300 flex-1 justify-center font-semibold border-2 border-terminal-green hover:border-terminal-blue terminal-button-press" onClick={(e) => { e.preventDefault(); playButtonSound(); }}>
                    <ExternalLink size={18} className="mr-2" />
                    <span className="text-terminal-green">$</span> View Project
                  </button>
                  <button className="flex items-center px-5 py-2 border-2 border-terminal-blue text-terminal-blue rounded-terminal hover:bg-terminal-blue hover:text-terminal-bg-main transition-all duration-300 terminal-button-press" onClick={(e) => { e.preventDefault(); playButtonSound(); }}>
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