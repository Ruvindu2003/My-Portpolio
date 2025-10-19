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
      <div className={`fixed top-8 left-1/2 z-50 transform -translate-x-1/2 px-8 py-5 rounded-2xl shadow-2xl border-2 text-lg font-extrabold flex items-center gap-3 animate-fade-in-up
        ${notification.type === 'success' ? 'bg-gradient-to-r from-green-700 via-green-900 to-black border-green-400 text-green-200' : 'bg-gradient-to-r from-pink-900 via-red-900 to-black border-pink-400 text-pink-200'}`}
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
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="container mx-auto px-2 sm:px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_0_20px_rgba(124,58,237,0.7)]">
              Let's Connect
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full shadow-lg"></div>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-mono">
              Ready to collaborate on your next project? Let's discuss how we can work together
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Information */}
              <div>
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-8 drop-shadow-[0_0_10px_rgba(124,58,237,0.7)]">Get In Touch</h3>
              
              <div className="space-y-4 sm:space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : '_self'}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center p-3 sm:p-4 bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/90 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 group border-2 border-purple-700 hover:border-pink-500 backdrop-blur-lg"
                  >
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg mr-3 sm:mr-4 group-hover:bg-pink-900 transition-colors duration-300 border-2 border-blue-700">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-pink-400 group-hover:text-blue-400 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 font-mono">{info.content}</p>
                    </div>
                    <ExternalLink size={16} className="ml-auto text-pink-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-extrabold text-pink-400 mb-3 sm:mb-4">Follow Me</h4>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-pink-400 border-2 border-blue-700 hover:bg-pink-900 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gradient-to-r from-green-700 to-green-900 border-2 border-green-400 rounded-2xl shadow-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-green-200 font-bold font-mono">Available for new opportunities</span>
                </div>
                <p className="text-green-300 text-base mt-2 font-mono">
                  Looking for internships and entry-level software engineering positions
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/90 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border-2 border-purple-700 hover:border-pink-500 backdrop-blur-lg">
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 drop-shadow-[0_0_10px_rgba(124,58,237,0.7)]">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-pink-400 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-pink-400 rounded-lg bg-black text-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 font-mono text-base sm:text-lg"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-pink-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-pink-400 rounded-lg bg-black text-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 font-mono text-base sm:text-lg"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-pink-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-pink-400 rounded-lg bg-black text-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 font-mono text-base sm:text-lg"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-pink-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-pink-400 rounded-lg bg-black text-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 resize-none font-mono text-base sm:text-lg"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    onClick={playButtonSound}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white py-3 sm:py-3 px-4 sm:px-6 rounded-lg font-extrabold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-base sm:text-lg tracking-wider border-2 border-pink-400"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
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