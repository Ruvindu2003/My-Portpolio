// Utility to play button sound
const playButtonSound = () => {
  const audio = new Audio('/sounds/mixkit-sci-fi-click-900.wav');
  audio.currentTime = 0;
  audio.play();
};
import { ExternalLink, Github, Layers } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import GlassCard from './GlassCard';

const Projects = () => {
  const projects = [
    {
      title: 'Student Internship Management System',
      description: 'A comprehensive full-stack enterprise platform developed to streamline internship applications and workflows. Features role-based access control (Company Admin, Student, System Administrator) with secure JWT authentication and token-based communication.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'JWT', 'Spring Security', 'Bootstrap'],
      type: 'Full-Stack Enterprise Platform',
      status: 'Completed',
      features: [
        'Role-based access: Admin, Student, Company',
        'Internship application and matching workflows',
        'Real-time notifications and system alerts',
        'Document handling and upload features',
        'Performance tracking and analytics'
      ]
    },
    {
      title: 'Car Rental Management Platform',
      description: 'A production-ready full-stack enterprise solution with a microservices architecture and modern design patterns. Features a dynamic pricing engine, real-time availability calendar, and comprehensive reporting.',
      image: 'https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular 16+', 'Spring Boot', 'MySQL', 'Tailwind CSS', 'JWT', 'Hibernate', 'Postman'],
      type: 'Full-Stack Enterprise Solution',
      status: 'Completed',
      features: [
        'Real-time vehicle availability management',
        'Dynamic pricing engine based on schedules',
        'Automated email/booking confirmations',
        'Analytics dashboard for rental statistics',
        'Secure JWT authentication and authorization'
      ]
    },
    {
      title: 'Student Information Management System',
      description: 'A modern and scalable web application built with clean architecture and contemporary web development practices. Implemented a robust backend with exception handling, validation, and fully documented APIs.',
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React 18', 'Redux Toolkit', 'Spring Boot', 'MySQL', 'Material-UI', 'Swagger', 'JUnit'],
      type: 'Modern Web Application',
      status: 'Completed',
      features: [
        'Bulk data operations (Excel import/export)',
        'Real-time notifications and detailed reporting',
        'Comprehensive exception handling and validation',
        'Interactive dashboard with Redux Toolkit state',
        'API documentation with Swagger UI'
      ]
    },
    {
      title: 'EVO Plan - Supplier Management',
      description: 'Architected and developed the Supplier Management module for a comprehensive enterprise business planning platform. Contributing as a Full Stack Developer to build responsive, mobile-optimised interfaces.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Hibernate', 'JWT', 'REST API', 'Git'],
      type: 'Full-Stack Application',
      status: 'Completed',
      features: [
        'Supplier module dashboard and reports',
        'Responsive mobile-optimized Angular interface',
        'Secure Spring Boot REST APIs with JWT',
        'MySQL database optimization with Hibernate',
        'Collaborative Git workflow development'
      ]
    },
    {
      title: 'Mos Burger Shop',
      description: 'A comprehensive modern restaurant management platform designed to optimize order management, inventory tracking, and customer relations with modern web technologies.',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Spring Boot', 'MySQL', 'JWT'],
      type: 'Modern Restaurant Management System',
      status: 'In Progress',
      features: [
        'Online ordering system with live status',
        'Real-time inventory and stock tracking',
        'Order placement and queue tracking',
        'Customer profiles and purchase analytics',
        'Secure backend integration with REST APIs'
      ]
    },
    {
      title: 'Library Management System',
      description: 'An enterprise desktop application utilizing JavaFX with professional-grade GUI design. Integrates an optimized MySQL database via JDBC, applying enterprise design patterns (MVC, DAO).',
      image: '/images/pexels-pixabay-159711.jpg',
      technologies: ['JavaFX', 'Scene Builder', 'MySQL', 'JDBC', 'Java 11+', 'Maven'],
      type: 'Enterprise Desktop Application',
      status: 'Completed',
      features: [
        'Book registration and smart search',
        'Member profiles and card management',
        'Issue and return tracking system',
        'Optimized JDBC database connections',
        'Enterprise MVC & DAO architecture'
      ]
    },
    {
      title: 'Fitness Tracker',
      description: 'A feature-rich Progressive Web Application (PWA) for fitness tracking and goal management with offline capabilities, push notifications, and interactive charts.',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'CSS3', 'JavaScript (ES2022)', 'Chart.js', 'Service Workers', 'PWA APIs'],
      type: 'Progressive Web Application',
      status: 'Completed',
      features: [
        'Workout logging and progress tracking',
        'Interactive dashboards using Chart.js',
        'Service Workers for offline capabilities',
        'Push notifications and PWA install support',
        'Calorie tracking and goal settings'
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
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div
                className="relative group glass-effect rounded-terminal shadow-2xl overflow-hidden border-2 border-terminal-border hover:border-terminal-green transition-all duration-300 hover:scale-[1.025] hover:terminal-glow hover-lift gpu-accelerate"
              >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-[2px] opacity-80"
                />
                <div className="absolute top-4 right-4 flex flex-col items-end gap-2 z-10">
                  {project.title.includes('Student Internship Management') && (
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;