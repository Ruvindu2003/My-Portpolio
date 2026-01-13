import React, { useState } from 'react';
// Utility to play button sound
const playButtonSound = () => {
  const audio = new Audio('/sounds/mixkit-sci-fi-click-900.wav');
  audio.currentTime = 0;
  audio.play();
};
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [notification, setNotification] = useState<null | { type: 'success' | 'error', message: string }>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceID = 'service_yl1kg0e';
    const templateID = 'template_mq0tgfh';
    const userID = 'sbvQmWdJlwX54lX5T';

    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'ruvindusharada22@gmail.com',
    }, userID)
      .then(() => {
        setNotification({ type: 'success', message: 'Message sent! I will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setNotification(null), 4000);
      })
      .catch((error: unknown) => {
        setNotification({ type: 'error', message: 'Sorry, there was an error sending your message. Please try again later.' });
        setTimeout(() => setNotification(null), 4000);
        console.error('EmailJS error:', error);
      });
  };
  // Notification component
  const Notification = () => (
    notification ? (
      <div className={`fixed top-8 left-1/2 z-50 transform -translate-x-1/2 px-8 py-5 rounded-terminal shadow-2xl border-2 text-lg font-extrabold flex items-center gap-3 animate-fade-in-up
        ${notification.type === 'success' ? 'bg-terminal-bg-panel border-terminal-green text-terminal-green terminal-glow' : 'bg-terminal-bg-panel border-terminal-red text-terminal-red terminal-glow-red'}`}
        style={{ minWidth: 320, maxWidth: '90vw', letterSpacing: 1.2, boxShadow: '0 0 32px 8px #a21caf55' }}
      >
        {notification.type === 'success' ? (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22d3ee" opacity="0.2"/><path d="M7 13l3 3 7-7" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        ) : (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#f43f5e" opacity="0.2"/><path d="M15 9l-6 6M9 9l6 6" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        )}
        <span className="font-mono text-xl drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">{notification.message}</span>
      </div>
    ) : null
  );
// EmailJS setup instructions:
// 1. Go to https://www.emailjs.com/ and sign up.
// 2. Create an email service and email template (with fields: from_name, from_email, subject, message, to_email).
// 3. Get your Service ID, Template ID, and Public Key from the EmailJS dashboard.
// 4. Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' above with your actual values.
// 5. (In your project root) Run: npm install emailjs-com
// That's it! Your contact form will send emails to ruvindusharada22@gmail.com.

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: 'Email',
      content: 'ruvindu@example.com',
      action: 'mailto:ruvindusharada22@gmail.com'
    },
    {
      icon: <Phone className="text-purple-600" size={24} />,
      title: 'Phone',
      content: '+94781001040',
      action: 'tel:+94781001040'
    },
    {
      icon: <MapPin className="text-teal-600" size={24} />,
      title: 'Location',
      content: 'Nuwara Eliya, Sri Lanka',
      action: 'https://maps.google.com/?q=Nuwara+Eliya+Sri+Lanka'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/ruvindu2003',
      color: 'hover:text-gray-800'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ruvindu-ranasingha',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Mail size={24} />,
      name: 'Email',
      url: 'mailto:ruvindu22@gmail.com',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <>
      <Notification />
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-terminal-bg-main terminal-scanline terminal-matrix-bg gpu-accelerate">
        <div className="container mx-auto px-2 sm:px-4 md:px-6">
          <div className="text-center mb-16">
            {/* Terminal Command */}
            <div className="mb-4 text-left max-w-2xl mx-auto">
              <p className="text-terminal-green text-sm font-mono">
                <span className="text-terminal-green">root@kali:~$</span> <span className="text-terminal-text-main">nc -lvp 4444</span>
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text gpu-accelerate">
              Let's Connect
            </h2>
            <div className="w-32 h-1 bg-terminal-green mx-auto mb-8 rounded-terminal terminal-glow"></div>
            <p className="text-2xl text-terminal-text-main max-w-3xl mx-auto font-mono">
              Ready to collaborate on your next project? Let's discuss how we can work together
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Information */}
              <div>
              <h3 className="text-3xl font-extrabold text-terminal-green mb-8 terminal-glow">Get In Touch</h3>
              
              <div className="space-y-4 sm:space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : '_self'}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center p-3 sm:p-4 bg-terminal-bg-panel rounded-terminal shadow-2xl hover:terminal-glow transition-all duration-300 transform hover:-translate-y-1 group border-2 border-terminal-border hover:border-terminal-green"
                  >
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-terminal-bg-main rounded-terminal mr-3 sm:mr-4 group-hover:bg-terminal-green transition-colors duration-300 border-2 border-terminal-green">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-terminal-green group-hover:text-terminal-blue transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-terminal-text-main font-mono">{info.content}</p>
                    </div>
                    <ExternalLink size={16} className="ml-auto text-terminal-green group-hover:text-terminal-blue transition-colors duration-300" />
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-extrabold text-terminal-green mb-3 sm:mb-4">Follow Me</h4>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-terminal-bg-main rounded-terminal shadow-lg hover:terminal-glow transition-all duration-300 transform hover:-translate-y-1 text-terminal-green border-2 border-terminal-green hover:bg-terminal-green hover:text-terminal-bg-main"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-terminal-bg-panel border-2 border-terminal-green rounded-terminal shadow-lg terminal-glow">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-terminal-green rounded-terminal mr-3 animate-pulse"></div>
                  <span className="text-terminal-green font-bold font-mono">Available for new opportunities</span>
                </div>
                <p className="text-terminal-text-main text-base mt-2 font-mono">
                  Looking for internships and entry-level software engineering positions
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-terminal-bg-panel rounded-terminal shadow-2xl p-4 sm:p-6 md:p-8 border-2 border-terminal-border hover:border-terminal-green">
                <h3 className="text-3xl font-extrabold text-terminal-green mb-6 terminal-glow">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-terminal-green mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-terminal-green rounded-terminal bg-terminal-bg-main text-terminal-text-main focus:ring-2 focus:ring-terminal-green focus:border-terminal-green transition-all duration-300 font-mono text-base sm:text-lg"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-terminal-green mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-terminal-green rounded-terminal bg-terminal-bg-main text-terminal-text-main focus:ring-2 focus:ring-terminal-green focus:border-terminal-green transition-all duration-300 font-mono text-base sm:text-lg"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-terminal-green mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-terminal-green rounded-terminal bg-terminal-bg-main text-terminal-text-main focus:ring-2 focus:ring-terminal-green focus:border-terminal-green transition-all duration-300 font-mono text-base sm:text-lg"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-terminal-green mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-terminal-green rounded-terminal bg-terminal-bg-main text-terminal-text-main focus:ring-2 focus:ring-terminal-green focus:border-terminal-green transition-all duration-300 resize-none font-mono text-base sm:text-lg"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    onClick={(e) => { 
                      playButtonSound();
                      // Form will handle submit
                    }}
                    type="submit"
                    className="w-full bg-terminal-bg-main text-terminal-green py-3 sm:py-3 px-4 sm:px-6 rounded-terminal font-extrabold hover:terminal-glow transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-base sm:text-lg tracking-wider border-2 border-terminal-green hover:border-terminal-blue terminal-button-press terminal-pulse"
                  >
                    <Send size={20} className="mr-2" />
                    <span className="text-terminal-green">$</span> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;