import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Linkedin, Youtube, Facebook, Twitter } from 'lucide-react';

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - will be integrated with 3rd party solution
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "863-500-5000",
      link: "tel:863-500-5000"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "sales@mixnetworks.com",
      link: "mailto:sales@mixnetworks.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Monday - Friday: 8:00 AM - 6:00 PM EST"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="flex items-center space-x-3">
              <img
                src="/public/MIXLogo_Horizontal.png"
                alt="MIX Networks"
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <div className="hidden text-2xl font-bold">
                <span className="text-[#3d8eb3]">MIX</span>
                <span className="text-[#b0d136] ml-1">NETWORKS</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">Home</a>
              <a href="/#services" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">Services</a>
              <a href="/network" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">Network</a>
              <a href="/about" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">About</a>
              <a href="/contact" className="bg-[#b0d136] text-white px-6 py-2 rounded-lg hover:bg-[#9bc42a] transition-colors">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#3d8eb3] to-[#2c6a85]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Let's discuss how MIX Networks can transform your business communications
            </p>
            {/* Social Links */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <span className="text-white/80 text-sm">Connect with us:</span>
              <a href="https://www.linkedin.com/company/mix-networks" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/10 hover:bg-white rounded-full flex items-center justify-center text-white hover:text-[#3d8eb3] transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@mixnetworksinc.1556" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/10 hover:bg-white rounded-full flex items-center justify-center text-white hover:text-[#3d8eb3] transition-all duration-300 transform hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/MixNetworks" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/10 hover:bg-white rounded-full flex items-center justify-center text-white hover:text-[#3d8eb3] transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/mixnetworks" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/10 hover:bg-white rounded-full flex items-center justify-center text-white hover:text-[#3d8eb3] transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border-2 border-transparent hover:border-[#b0d136]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3d8eb3] to-[#2c6a85] rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-[#5c5d5d] mb-3">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-lg text-[#3d8eb3] hover:text-[#2c6a85] font-semibold">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-lg text-gray-600">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          <div className="bg-white p-12 rounded-2xl shadow-2xl border-2 border-[#3d8eb3]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3d8eb3] focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3d8eb3] focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3d8eb3] focus:outline-none transition-colors"
                    placeholder="john.doe@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3d8eb3] focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3d8eb3] focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                  I'm Interested In <span className="text-red-500">*</span>
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3d8eb3] focus:outline-none transition-colors"
                >
                  <option value="">Select a solution...</option>
                  <option value="hosted-pbx">Hosted PBX</option>
                  <option value="pots-replacement">POTS Replacement</option>
                  <option value="business-continuity">Business Continuity</option>
                  <option value="cellular-connectivity">Cellular Connectivity</option>
                  <option value="white-label">White-Label Solutions</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3d8eb3] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your needs and how we can help..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#3d8eb3] to-[#b0d136] text-white px-12 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#5c5d5d] mb-6">
            Prefer to Call or Email?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is ready to help. Reach out using your preferred method of communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:863-500-5000"
              className="bg-[#3d8eb3] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2c6a85] transition-colors inline-flex items-center justify-center space-x-3"
            >
              <Phone className="w-5 h-5" />
              <span>863-500-5000</span>
            </a>
            <a
              href="mailto:sales@mixnetworks.com"
              className="bg-[#b0d136] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9bc42a] transition-colors inline-flex items-center justify-center space-x-3"
            >
              <Mail className="w-5 h-5" />
              <span>sales@mixnetworks.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#5c5d5d] mb-4">
            Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Check out our solution pages for frequently asked questions and detailed information about our services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/hosted-pbx" className="text-[#3d8eb3] font-semibold hover:underline">
              Hosted PBX FAQ
            </a>
            <span className="text-gray-400">|</span>
            <a href="/pots-replacement" className="text-[#3d8eb3] font-semibold hover:underline">
              POTS Replacement FAQ
            </a>
            <span className="text-gray-400">|</span>
            <a href="/business-continuity" className="text-[#3d8eb3] font-semibold hover:underline">
              Business Continuity FAQ
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5c5d5d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#b0d136]">SERVICES</h3>
              <ul className="space-y-2">
                <li><a href="/hosted-pbx" className="hover:text-[#b0d136] transition-colors">Hosted PBX</a></li>
                <li><a href="/pots-replacement" className="hover:text-[#b0d136] transition-colors">POTS Replacement</a></li>
                <li><a href="/business-continuity" className="hover:text-[#b0d136] transition-colors">Business Continuity</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Cellular Connectivity</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#b0d136]">INDUSTRIES</h3>
              <ul className="space-y-2">
                <li><a href="/assisted-living" className="hover:text-[#b0d136] transition-colors">Assisted Living</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Financial Services</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Education</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#b0d136]">COMPANY</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-[#b0d136] transition-colors">About Us</a></li>
                <li><a href="/network" className="hover:text-[#b0d136] transition-colors">Network</a></li>
                <li><a href="/contact" className="hover:text-[#b0d136] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#b0d136]">SOLUTIONS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Port Genie 2025</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">White-Label Solutions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="text-2xl font-bold">
                  <span className="text-[#3d8eb3]">MIX</span>
                  <span className="text-[#b0d136] ml-1">NETWORKS</span>
                </div>
                <span className="text-gray-400">Care For Your Communications®</span>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>863-500-5000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>sales@mixnetworks.com</span>
                </div>
              </div>
            </div>

            {/* Social Links - Footer */}
            <div className="flex justify-center items-center space-x-4 pt-4">
              <span className="text-gray-400 text-sm">Follow Us:</span>
              <a href="https://www.linkedin.com/company/mix-networks" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#3d8eb3] rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@mixnetworksinc.1556" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#3d8eb3] rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/MixNetworks" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#3d8eb3] rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://x.com/mixnetworks" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#3d8eb3] rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;
