import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Shield, Zap, Users, CheckCircle, ArrowRight, Star, Building, Wifi, Headphones as HeadphonesIcon, Settings, Globe, Clock } from 'lucide-react';
import Footer from './Footer';

function AssistedLivingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "POTS Line Replacement",
      description: "Turn legacy lines into recurring revenue with our POTS IN A BOX® solution.",
      icon: <Phone className="w-8 h-8" />,
      features: ["UL 864-compliant hardware", "Works during power outages", "4G/5G failover", "Nationwide deployment"]
    },
    {
      title: "Billing as a Service",
      description: "Fully managed billing, taxation, and remittance services for just 7% of monthly revenue.",
      icon: <Settings className="w-8 h-8" />,
      features: ["Co-branded invoices", "Tax compliance", "Collections management", "Automated reporting"]
    },
    {
      title: "Support as a Service",
      description: "White-label Tier 1 & Tier 2 customer support handled for you.",
      icon: <HeadphonesIcon className="w-8 h-8" />,
      features: ["US-based support", "White-labeled service", "SLA-backed response", "Issue tracking"]
    },
    {
      title: "Cellular Connectivity",
      description: "Multi-carrier cellular solutions for primary and backup connectivity.",
      icon: <Wifi className="w-8 h-8" />,
      features: ["4G LTE & 5G", "Multi-carrier SIMs", "Nationwide coverage", "IoT endpoints"]
    }
  ];

  const testimonials = [
    {
      name: "Eden Terrace Assisted Living",
      role: "IT Director",
      content: "MIX Networks helped us replace 6 POTS lines and cut our monthly telecom costs by 60% while maintaining full code compliance.",
      rating: 5
    },
    {
      name: "Regional Healthcare System",
      role: "Facilities Manager",
      content: "The POTS replacement solution kept our critical systems running during the copper sunset transition.",
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
              <a href="#services" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">Services</a>
              <a href="#solutions" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">Solutions</a>
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
              <a href="#services" className="block py-2 text-gray-700">Services</a>
              <a href="#solutions" className="block py-2 text-gray-700">Solutions</a>
              <a href="#about" className="block py-2 text-gray-700">About</a>
              <a href="#contact" className="block py-2 text-[#b0d136]">Contact Us</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-r from-[#3d8eb3] via-[#5fa68f] to-[#b0d136] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 border border-white/30 backdrop-blur-sm">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-white">ASSISTED LIVING SOLUTIONS</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-white">VoIP & POTS Replacement for</span>
                <span className="block bg-gradient-to-r from-yellow-100 via-lime-200 to-yellow-100 bg-clip-text text-transparent">Assisted Living Communities</span>
              </h1>
              <p className="text-xl text-white/95 mb-8 leading-relaxed">
                Reliable, HIPAA-compliant communications that keep residents, families,
                and staff connected with boutique-style service tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-white text-[#3d8eb3] px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                  <span>Contact Sales</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-[#3d8eb3] transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  View Use Case
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-white/95">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">UL 864 & NFPA 72</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl border border-white/20">
                <div className="bg-white rounded-2xl p-6 -rotate-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 shadow-md">
                        <Shield className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-[#5c5d5d] mb-1">Services</h3>
                      <p className="text-xs text-gray-600">POTS & VoIP Solutions</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3 shadow-md">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-[#5c5d5d] mb-1">Savings</h3>
                      <p className="text-xs text-gray-600">Reduce Telecom Costs</p>
                    </div>
                    <div className="bg-gradient-to-br from-[#5c5d5d]/10 to-[#5c5d5d]/20 p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#5c5d5d] to-[#4a4b4b] rounded-xl flex items-center justify-center mb-3 shadow-md">
                        <Users className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-[#5c5d5d] mb-1">Support</h3>
                      <p className="text-xs text-gray-600">24/7 Expert Support</p>
                    </div>
                    <div className="bg-gradient-to-br from-[#b0d136]/10 to-[#b0d136]/20 p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#b0d136] to-[#8fb52a] rounded-xl flex items-center justify-center mb-3 shadow-md">
                        <Globe className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-[#5c5d5d] mb-1">Reliable</h3>
                      <p className="text-xs text-gray-600">99.99% Uptime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-[#3d8eb3] bg-[#3d8eb3]/10 px-3 py-1 rounded-full">WHY MIX NETWORKS</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#5c5d5d] to-[#3d8eb3] bg-clip-text text-transparent">
                Modernize Senior Living Without Compromise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For 20 years, MIX Networks® has delivered customer-focused voice, connectivity,
              and unified communications solutions to businesses across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-200">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5c5d5d] mb-2">Cost Reduction</h3>
              <p className="text-gray-600">
                Save 50-60% on monthly telecom costs compared to traditional POTS lines. Replace costly copper infrastructure with modern solutions.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-200">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5c5d5d] mb-2">Reliable Compliance</h3>
              <p className="text-gray-600">
                UL864 certified hardware ensures fire safety compliance. Built-in battery backup and SIM failover for 24/7 connectivity.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#5c5d5d]/10 to-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#5c5d5d]/30">
              <div className="w-20 h-20 bg-gradient-to-br from-[#5c5d5d] to-[#4a4b4b] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5c5d5d] mb-2">Operational Efficiency</h3>
              <p className="text-gray-600">
                Remote management capabilities. No more truck rolls for basic maintenance. Proactive monitoring and support.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#b0d136]/10 to-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#b0d136]/30">
              <div className="w-20 h-20 bg-gradient-to-br from-[#b0d136] to-[#8fb52a] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5c5d5d] mb-2">Compliance Assurance</h3>
              <p className="text-gray-600">
                Meet NFPA 72, UL864, ADA, and ASME requirements. Maintain regulatory compliance with modern infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-[#b0d136] bg-[#b0d136]/10 px-3 py-1 rounded-full">COMPLETE SOLUTIONS</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#3d8eb3] to-[#b0d136] bg-clip-text text-transparent">
                Solutions That Put Care First
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive telecommunications solutions designed specifically for assisted living communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Service Navigation */}
            <div className="space-y-4">
              {services.map((service, index) => {
                const serviceColors = [
                  { active: 'from-[#3d8eb3] to-[#2c7a9e]', inactive: 'from-blue-50 to-blue-100', icon: '[#3d8eb3]', border: 'border-blue-200' },
                  { active: 'from-[#b0d136] to-[#8fb52a]', inactive: 'from-green-50 to-green-100', icon: '[#b0d136]', border: 'border-green-200' },
                  { active: 'from-[#5c5d5d] to-[#4a4b4b]', inactive: 'from-gray-50 to-gray-100', icon: '[#5c5d5d]', border: 'border-gray-200' },
                  { active: 'from-[#3d8eb3] to-[#5fa68f]', inactive: 'from-blue-50 to-green-50', icon: '[#3d8eb3]', border: 'border-blue-200' },
                ];
                const colors = serviceColors[index];

                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                      activeService === index
                        ? `bg-gradient-to-r ${colors.active} text-white shadow-xl scale-105`
                        : `bg-gradient-to-br ${colors.inactive} text-gray-700 hover:shadow-lg ${colors.border}`
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${
                        activeService === index ? 'bg-white/20' : 'bg-white shadow-md'
                      }`}>
                        <div className={activeService === index ? 'text-white' : `text-${colors.icon}`}>
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold">{service.title}</h3>
                          <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${activeService === index ? 'translate-x-1' : ''}`} />
                        </div>
                        <p className={`text-sm ${activeService === index ? 'text-white/90' : 'text-gray-600'}`}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-xl p-8 shadow-xl border-2 border-gray-100">
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#b0d136] to-[#9bc42a] rounded-xl text-white shadow-lg">
                    {services[activeService].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#5c5d5d]">
                    {services[activeService].title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {services[activeService].description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#5c5d5d] text-lg mb-4">Key Features:</h4>
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-transparent hover:from-green-100 transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full bg-gradient-to-r from-[#3d8eb3] to-[#2c7a9e] text-white px-6 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by Size */}
      <section id="solutions" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-[#b0d136] bg-[#b0d136]/10 px-3 py-1 rounded-full">SCALABLE SOLUTIONS</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#5c5d5d] to-[#3d8eb3] bg-clip-text text-transparent">
                Perfect for Assisted Living Communities of All Sizes
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#5c5d5d] mb-2">Small Business</h3>
                <div className="inline-block bg-gradient-to-r from-[#b0d136] to-[#9bc42a] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  5-50 Bed Facilities
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">VoIP and POTS Replacement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Basic Support Services</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Cost-effective Solutions</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 leading-relaxed">
                Stay compliant with emergency call requirements while reducing monthly telecom costs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#3d8eb3] to-[#b0d136] p-8 rounded-xl text-white transform scale-105 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-bl-lg backdrop-blur-sm">MOST POPULAR</span>
              </div>
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Medium Business</h3>
                <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                  50-150 Bed Facilities
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#3d8eb3]" />
                  </div>
                  <span className="font-medium">VoIP + POTS and Cellular Solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#3d8eb3]" />
                  </div>
                  <span className="font-medium">Billing and Support Services</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#3d8eb3]" />
                  </div>
                  <span className="font-medium">Installation Services</span>
                </li>
              </ul>
              <p className="text-sm text-white/95 leading-relaxed">
                Complete communications design management while maintaining regulatory compliance and reducing costs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#b0d136]/10 to-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#b0d136]/20">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#b0d136] to-[#8fb52a] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#5c5d5d] mb-2">Enterprise</h3>
                <div className="inline-block bg-gradient-to-r from-[#3d8eb3] to-[#2c7a9e] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  150+ Bed Facilities
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Full Service Portfolio</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">White-label Opportunities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Custom Solutions</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 leading-relaxed">
                Scale reliably while maintaining connectivity and compliance across multiple locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-[#3d8eb3] bg-[#3d8eb3]/10 px-3 py-1 rounded-full">CLIENT SUCCESS STORIES</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#3d8eb3] to-[#b0d136] bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => {
              const gradients = [
                { bar: 'from-[#3d8eb3] to-[#2c7a9e]', avatar: 'from-[#3d8eb3] to-[#2c7a9e]' },
                { bar: 'from-[#b0d136] to-[#8fb52a]', avatar: 'from-[#b0d136] to-[#8fb52a]' }
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className={`h-2 bg-gradient-to-r ${gradient.bar}`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center pt-4 border-t border-gray-100">
                      <div className={`w-14 h-14 bg-gradient-to-br ${gradient.avatar} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg`}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#5c5d5d] text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#3d8eb3] via-[#2c7a9e] to-[#b0d136] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-xs font-bold text-white bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">READY TO GET STARTED?</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Safeguard Your Residents' Communication?
          </h2>
          <p className="text-xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join the growing number of assisted and healthcare facilities that rely on MIX Networks for reliable, compliant,
            and budget-friendly communications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#3d8eb3] px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
              <span>Contact Us Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-[#3d8eb3] transition-all duration-300 transform hover:scale-105">
              Schedule a Demo
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Long-Term Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AssistedLivingPage;