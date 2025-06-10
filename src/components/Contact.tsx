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
      url: 'mailto:ruvindu@example.com',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : '_self'}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-lg mr-4 group-hover:bg-blue-50 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                    <ExternalLink size={16} className="ml-auto text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-gray-600 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-green-800 font-medium">Available for new opportunities</span>
                </div>
                <p className="text-green-700 text-sm mt-2">
                  Looking for internships and entry-level software engineering positions
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
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
  );
};

export default Contact;