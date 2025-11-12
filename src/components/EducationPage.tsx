import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Shield, Zap, Users, CheckCircle, ArrowRight, Star, Building, Wifi, Headphones as HeadphonesIcon, Settings, Globe, Clock, GraduationCap, AlertTriangle, BookOpen, School, Monitor, Smartphone } from 'lucide-react';

function EducationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const useCases = [
    {
      title: "Enhanced E911 and Location Services",
      description: "Student and staff safety depends on precise emergency response capabilities with room-level location accuracy.",
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ["Dispatchable location information", "Room-specific emergency response", "Emergency call monitoring", "Post-incident analysis support"]
    },
    {
      title: "District-Wide Paging and Bell Systems",
      description: "Seamless integration with existing overhead paging systems, speakers, and IP intercoms across campus.",
      icon: <Wifi className="w-8 h-8" />,
      features: ["Lockdown drill support", "Emergency announcements", "Class change notifications", "Multi-campus communication"]
    },
    {
      title: "Helpdesk and Parent Communication",
      description: "Sophisticated communication management for high volumes of inquiries from parents, students, and community.",
      icon: <HeadphonesIcon className="w-8 h-8" />,
      features: ["Auto-attendant systems", "Multi-language IVR", "Intelligent call queues", "SMS notification systems"]
    },
    {
      title: "Hybrid Instruction Support",
      description: "Flexible communication tools supporting both traditional and remote learning environments.",
      icon: <Monitor className="w-8 h-8" />,
      features: ["Softphone deployment", "Mobile device support", "Voicemail transcription", "Consistent communication access"]
    },
    {
      title: "Analog Device Support",
      description: "Maintain specialized analog devices during telecommunications modernization with certified gateways.",
      icon: <Phone className="w-8 h-8" />,
      features: ["Door phone integration", "Gate access control", "Fax capabilities", "Legacy system bridging"]
    }
  ];

  const solutions = [
    {
      title: "Hosted PBX Platform",
      description: "Complete cloud-based communication system with E911 compliance and role-based administrative controls.",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Centralized multi-campus management", "Enhanced emergency response", "Operational efficiency", "Cost management"]
    },
    {
      title: "POTS Replacement",
      description: "Modern cellular and IP-based solutions replacing aging copper infrastructure while maintaining compliance.",
      icon: <Smartphone className="w-8 h-8" />,
      benefits: ["40% cost reduction", "Weather-resistant connectivity", "UL 864 compliance", "Remote management"]
    }
  ];

  const testimonials = [
    {
      name: "Mid-Sized College Campus",
      role: "IT Director",
      content: "MIX Networks helped us replace 80+ analog lines across 50 buildings, achieving 40% cost reduction while maintaining full life-safety compliance.",
      rating: 5
    },
    {
      name: "Regional School District",
      role: "Technology Coordinator",
      content: "The hosted PBX solution streamlined our multi-campus communications and improved our emergency response capabilities significantly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
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
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">Home</a>
              <a href="#solutions" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">Solutions</a>
              <a href="#use-cases" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">Use Cases</a>
              <a href="#about" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">About</a>
              <a href="#contact" className="bg-[#b0d136] text-white px-6 py-2 rounded-lg hover:bg-[#9bc42a] transition-colors">
                Contact Us
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="/" className="block py-2 text-gray-700">Home</a>
              <a href="#solutions" className="block py-2 text-gray-700">Solutions</a>
              <a href="#use-cases" className="block py-2 text-gray-700">Use Cases</a>
              <a href="#about" className="block py-2 text-gray-700">About</a>
              <a href="#contact" className="block py-2 text-[#b0d136]">Contact Us</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#f7f7f7] via-white to-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#5c5d5d] mb-6 leading-tight">
                Modern Communications for
                <span className="text-[#3d8eb3] block">Educational Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive telecommunications solutions designed for K-12 districts and higher education campuses. 
                Enhance campus safety, streamline operations, and support hybrid learning with reliable, scalable communications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#b0d136] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9bc42a] transition-all duration-300 transform hover:scale-105">
                  Get Free Assessment
                </button>
                <button className="border-2 border-[#3d8eb3] text-[#3d8eb3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#3d8eb3] hover:text-white transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#3d8eb3] to-[#b0d136] rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 -rotate-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#f7f7f7] p-4 rounded-lg">
                      <GraduationCap className="w-8 h-8 text-[#3d8eb3] mb-2" />
                      <h3 className="font-semibold text-[#5c5d5d]">Campus Safety</h3>
                      <p className="text-sm text-gray-600">E911 & Emergency Response</p>
                    </div>
                    <div className="bg-[#f7f7f7] p-4 rounded-lg">
                      <School className="w-8 h-8 text-[#b0d136] mb-2" />
                      <h3 className="font-semibold text-[#5c5d5d]">Multi-Campus</h3>
                      <p className="text-sm text-gray-600">Centralized Management</p>
                    </div>
                    <div className="bg-[#f7f7f7] p-4 rounded-lg">
                      <BookOpen className="w-8 h-8 text-[#3d8eb3] mb-2" />
                      <h3 className="font-semibold text-[#5c5d5d]">Hybrid Learning</h3>
                      <p className="text-sm text-gray-600">Remote & On-Site Support</p>
                    </div>
                    <div className="bg-[#f7f7f7] p-4 rounded-lg">
                      <Zap className="w-8 h-8 text-[#b0d136] mb-2" />
                      <h3 className="font-semibold text-[#5c5d5d]">Cost Savings</h3>
                      <p className="text-sm text-gray-600">40% Reduction Typical</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Context Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Modernizing Educational Communications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Educational institutions face mounting pressure to modernize telecommunications infrastructure 
              while addressing critical safety requirements and supporting evolving learning models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#f7f7f7] to-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#3d8eb3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5c5d5d] mb-2">Enhanced Safety</h3>
              <p className="text-gray-600">
                Advanced E911 services with room-level location accuracy enable faster emergency response and improved campus security.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#f7f7f7] to-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#b0d136] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5c5d5d] mb-2">Operational Efficiency</h3>
              <p className="text-gray-600">
                Centralized management across multiple campuses eliminates complexity while reducing operational costs and administrative burden.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#f7f7f7] to-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#3d8eb3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5c5d5d] mb-2">Hybrid Learning Support</h3>
              <p className="text-gray-600">
                Flexible communication tools support both traditional and remote learning environments with consistent connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Comprehensive Education Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built telecommunications solutions addressing the unique challenges of educational institutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-[#b0d136] rounded-lg text-white">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#5c5d5d]">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg mb-6">
                  {solution.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#5c5d5d] mb-3">Key Benefits:</h4>
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#b0d136]" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Priority Use Cases for Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Addressing the most critical communication needs across K-12 districts and higher education campuses.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Use Case Navigation */}
            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeUseCase === index
                      ? 'bg-[#3d8eb3] text-white shadow-lg'
                      : 'bg-white hover:bg-gray-50 text-gray-700 shadow-md'
                  }`}
                  onClick={() => setActiveUseCase(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${
                      activeUseCase === index ? 'bg-white/20' : 'bg-[#f7f7f7]'
                    }`}>
                      <div className={activeUseCase === index ? 'text-white' : 'text-[#3d8eb3]'}>
                        {useCase.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                      <p className={`${activeUseCase === index ? 'text-white/90' : 'text-gray-600'}`}>
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Use Case Details */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-[#b0d136] rounded-lg text-white">
                    {useCases[activeUseCase].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#5c5d5d]">
                    {useCases[activeUseCase].title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">
                  {useCases[activeUseCase].description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#5c5d5d] mb-3">Key Capabilities:</h4>
                {useCases[activeUseCase].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#b0d136]" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-6 bg-[#b0d136] text-white px-6 py-3 rounded-lg hover:bg-[#9bc42a] transition-colors flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600">Real outcomes from educational institutions across the country</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#3d8eb3] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#5c5d5d]">College Campus Modernization</h4>
                  <p className="text-gray-600">50+ Buildings, 10,000+ Students</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#f7f7f7] rounded-lg">
                  <div className="text-2xl font-bold text-[#3d8eb3]">40%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center p-4 bg-[#f7f7f7] rounded-lg">
                  <div className="text-2xl font-bold text-[#b0d136]">80+</div>
                  <div className="text-sm text-gray-600">Lines Replaced</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#b0d136] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  <School className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#5c5d5d]">K-12 District Implementation</h4>
                  <p className="text-gray-600">Multi-Campus Deployment</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#f7f7f7] rounded-lg">
                  <div className="text-2xl font-bold text-[#3d8eb3]">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime Achieved</div>
                </div>
                <div className="text-center p-4 bg-[#f7f7f7] rounded-lg">
                  <div className="text-2xl font-bold text-[#b0d136]">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">What Educational Leaders Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#b0d136] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#3d8eb3] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#5c5d5d]">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-[#3d8eb3] to-[#b0d136]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Campus Communications?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join educational institutions nationwide who trust MIX Networks for reliable, 
            safe, and cost-effective telecommunications solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#3d8eb3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#3d8eb3] transition-colors">
              Download Case Study
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5c5d5d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#b0d136]">EDUCATION SOLUTIONS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Hosted PBX</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">POTS Replacement</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Emergency Communications</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Campus Paging</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#b0d136]">INDUSTRIES</h3>
              <ul className="space-y-2">
                <li><a href="/assisted-living" className="hover:text-[#b0d136] transition-colors">Assisted Living</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Financial Services</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Manufacturing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#b0d136]">USE CASES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">K-12 Districts</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Higher Education</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Multi-Campus Management</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Hybrid Learning Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#b0d136]">COMPANY</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-[#b0d136] transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-[#b0d136] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
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
        </div>
      </footer>
    </div>
  );
}

export default EducationPage;