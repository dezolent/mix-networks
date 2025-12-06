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
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#f7f7f7] via-white to-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#5c5d5d] mb-6 leading-tight">
                VoIP & POTS Replacement for
                <span className="text-[#3d8eb3] block">Assisted Living Communities</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Reliable, NFPA-compliant communications that keep residents, families, 
                and staff connected with boutique-style service tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#b0d136] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9bc42a] transition-all duration-300 transform hover:scale-105">
                  Get Free Quote
                </button>
                <button className="border-2 border-[#3d8eb3] text-[#3d8eb3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#3d8eb3] hover:text-white transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#3d8eb3] to-[#b0d136] rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 -rotate-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#f7f7f7] p-4 rounded-lg">
                      <Shield className="w-8 h-8 text-[#3d8eb3] mb-2" />
                      <h3 className="font-semibold text-[#5c5d5d]">Services</h3>
                      <p className="text-sm text-gray-600">POTS & VoIP Solutions</p>
                    </div>
                    <div className="bg-[#f7f7f7] p-4 rounded-lg">
                      <Zap className="w-8 h-8 text-[#b0d136] mb-2" />
                      <h3 className="font-semibold text-[#5c5d5d]">Savings</h3>
                      <p className="text-sm text-gray-600">Reduce Telecom Costs</p>
                    </div>
                    <div className="bg-[#f7f7f7] p-4 rounded-lg">
                      <Users className="w-8 h-8 text-[#3d8eb3] mb-2" />
                      <h3 className="font-semibold text-[#5c5d5d]">Support</h3>
                      <p className="text-sm text-gray-600">24/7 Expert Support</p>
                    </div>
                    <div className="bg-[#f7f7f7] p-4 rounded-lg">
                      <Globe className="w-8 h-8 text-[#b0d136] mb-2" />
                      <h3 className="font-semibold text-[#5c5d5d]">Reliable</h3>
                      <p className="text-sm text-gray-600">99.99% Uptime</p>
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
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Modernize Senior Living Without Compromise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For 20 years, MIX Networks® has delivered customer-focused voice, connectivity, 
              and unified communications solutions to businesses across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#f7f7f7] to-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#3d8eb3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5c5d5d] mb-2">Cost Reduction</h3>
              <p className="text-gray-600">
                Save 50-60% on monthly telecom costs compared to traditional POTS lines. Replace costly copper infrastructure with modern solutions.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#f7f7f7] to-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#b0d136] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5c5d5d] mb-2">Reliable Compliance</h3>
              <p className="text-gray-600">
                UL864 certified hardware ensures fire safety compliance. Built-in battery backup and SIM failover for 24/7 connectivity.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#f7f7f7] to-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#3d8eb3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5c5d5d] mb-2">Operational Efficiency</h3>
              <p className="text-gray-600">
                Remote management capabilities. No more truck rolls for basic maintenance. Proactive monitoring and support.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#f7f7f7] to-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#b0d136] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
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
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Solutions That Put Care First
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive telecommunications solutions designed specifically for assisted living communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Service Navigation */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? 'bg-[#3d8eb3] text-white shadow-lg'
                      : 'bg-white hover:bg-gray-50 text-gray-700'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${
                      activeService === index ? 'bg-white/20' : 'bg-[#f7f7f7]'
                    }`}>
                      <div className={activeService === index ? 'text-white' : 'text-[#3d8eb3]'}>
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className={`${activeService === index ? 'text-white/90' : 'text-gray-600'}`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-[#b0d136] rounded-lg text-white">
                    {services[activeService].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#5c5d5d]">
                    {services[activeService].title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">
                  {services[activeService].description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#5c5d5d] mb-3">Key Features:</h4>
                {services[activeService].features.map((feature, index) => (
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

      {/* Solutions by Size */}
      <section id="solutions" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Perfect for Assisted Living Communities of All Sizes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#3d8eb3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#5c5d5d] mb-2">Small Business</h3>
                <p className="text-[#b0d136] font-semibold">5-50 Bed Facilities</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136]" />
                  <span className="text-gray-700">VoIP and POTS Replacement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136]" />
                  <span className="text-gray-700">Basic Support Services</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136]" />
                  <span className="text-gray-700">Cost-effective Solutions</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                Stay compliant with emergency call requirements while reducing monthly telecom costs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#3d8eb3] to-[#b0d136] p-8 rounded-xl text-white transform scale-105 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Medium Business</h3>
                <p className="text-white/90 font-semibold">50-150 Bed Facilities</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span>VoIP + POTS and Cellular Solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span>Billing and Support Services</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span>Installation Services</span>
                </li>
              </ul>
              <p className="text-sm text-white/90">
                Complete communications design management while maintaining regulatory compliance and reducing costs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#b0d136] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#5c5d5d] mb-2">Enterprise</h3>
                <p className="text-[#3d8eb3] font-semibold">150+ Bed Facilities</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136]" />
                  <span className="text-gray-700">Full Service Portfolio</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136]" />
                  <span className="text-gray-700">White-label Opportunities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136]" />
                  <span className="text-gray-700">Custom Solutions</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">
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
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
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
      <section className="py-16 bg-gradient-to-r from-[#3d8eb3] to-[#b0d136]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Safeguard Your Residents' Communication?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join the growing number of assisted and healthcare facilities that rely on MIX Networks for reliable, compliant, 
            and budget-friendly communications.
          </p>
          <button className="bg-white text-[#3d8eb3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AssistedLivingPage;