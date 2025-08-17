import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600\" size={24} />,
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
      icon: <MapPin className="text-teal-600\" size={24} />,
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
  <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
  <div className="container mx-auto px-6">
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
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-8 drop-shadow-[0_0_10px_rgba(124,58,237,0.7)]">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : '_self'}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center p-4 bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/90 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 group border-2 border-purple-700 hover:border-pink-500 backdrop-blur-lg"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-black rounded-lg mr-4 group-hover:bg-pink-900 transition-colors duration-300 border-2 border-blue-700">
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
                <h4 className="text-lg font-extrabold text-pink-400 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-black rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-pink-400 border-2 border-blue-700 hover:bg-pink-900 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-4 bg-gradient-to-r from-green-700 to-green-900 border-2 border-green-400 rounded-2xl shadow-lg">
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
              <div className="bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/90 rounded-2xl shadow-2xl p-8 border-2 border-purple-700 hover:border-pink-500 backdrop-blur-lg">
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 drop-shadow-[0_0_10px_rgba(124,58,237,0.7)]">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 border border-pink-400 rounded-lg bg-black text-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 font-mono"
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
                        className="w-full px-4 py-3 border border-pink-400 rounded-lg bg-black text-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 font-mono"
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
                      className="w-full px-4 py-3 border border-pink-400 rounded-lg bg-black text-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 font-mono"
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
                      className="w-full px-4 py-3 border border-pink-400 rounded-lg bg-black text-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 resize-none font-mono"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white py-3 px-6 rounded-lg font-extrabold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-lg tracking-wider border-2 border-pink-400"
                  >
                    <Send size={22} className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;