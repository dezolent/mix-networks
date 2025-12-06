import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Shield, Zap, Users, CheckCircle, ArrowRight, Star, Building, Wifi, Headphones as HeadphonesIcon, Settings, Globe, Clock, Network, Server, Smartphone, FileText, Package, Linkedin, Youtube, Facebook, Twitter } from 'lucide-react';
import Footer from './Footer';

function HomePage() {
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
      icon: <FileText className="w-8 h-8" />,
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
      icon: <Smartphone className="w-8 h-8" />,
      features: ["4G LTE & 5G", "Multi-carrier SIMs", "Nationwide coverage", "IoT endpoints"]
    }
  ];

  const industries = [
    {
      name: "Assisted Living Facilities",
      description: "NFPA-compliant communications for resident safety and family connectivity.",
      icon: <Building className="w-8 h-8" />,
      link: "/assisted-living"
    },
    {
      name: "Financial Services",
      description: "Secure, reliable communications for banking and financial institutions.",
      icon: <Shield className="w-8 h-8" />,
      link: "#"
    },
    {
      name: "Education",
      description: "Scalable telecommunications solutions for schools and universities.",
      icon: <Users className="w-8 h-8" />,
      link: "#"
    },
    {
      name: "Healthcare Facilities",
      description: "Critical communications infrastructure for hospitals and clinics.",
      icon: <CheckCircle className="w-8 h-8" />,
      link: "#"
    },
    {
      name: "Manufacturing",
      description: "Industrial-grade connectivity for production and logistics operations.",
      icon: <Settings className="w-8 h-8" />,
      link: "#"
    },
    {
      name: "Retail",
      description: "Point-of-sale and customer communications for retail environments.",
      icon: <Star className="w-8 h-8" />,
      link: "#"
    },
    {
      name: "Hospitality",
      description: "Guest services and operational communications for hotels and resorts.",
      icon: <Globe className="w-8 h-8" />,
      link: "#"
    }
  ];

  const testimonials = [
    {
      name: "Regional Healthcare System",
      role: "IT Director",
      content: "MIX Networks helped us modernize our telecommunications infrastructure while maintaining compliance and reducing costs by 40%.",
      rating: 5
    },
    {
      name: "Multi-Location Retailer",
      role: "Operations Manager",
      content: "The POTS replacement solution kept our POS systems running during the copper sunset transition. Excellent support throughout.",
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
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">Services</a>
              <a href="#industries" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">Industries</a>
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
              <a href="#services" className="block py-2 text-gray-700">Services</a>
              <a href="#industries" className="block py-2 text-gray-700">Industries</a>
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
                Boutique-Style
                <span className="text-[#3d8eb3] block">Telecommunications</span>
                <span className="text-[#b0d136] block">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                For 20 years, MIX Networks® has delivered customer-focused voice, connectivity, 
                and unified communications solutions tailored to each business's specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#b0d136] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9bc42a] transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border-2 border-[#3d8eb3] text-[#3d8eb3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#3d8eb3] hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              {/* Social Links - Hero Banner */}
              <div className="absolute top-0 right-0 z-10 flex gap-3">
                <a href="https://www.linkedin.com/company/mix-networks" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#3d8eb3] hover:bg-[#3d8eb3] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@mixnetworksinc.1556" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#3d8eb3] hover:bg-[#3d8eb3] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/MixNetworks" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#3d8eb3] hover:bg-[#3d8eb3] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://x.com/mixnetworks" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#3d8eb3] hover:bg-[#3d8eb3] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>

              <div className="bg-gradient-to-br from-[#3d8eb3] to-[#b0d136] rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 -rotate-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#f7f7f7] p-4 rounded-lg">
                      <Network className="w-8 h-8 text-[#3d8eb3] mb-2" />
                      <h3 className="font-semibold text-[#5c5d5d]">POTS Replacement</h3>
                      <p className="text-sm text-gray-600">Legacy Line Solutions</p>
                    </div>
                    <div className="bg-[#f7f7f7] p-4 rounded-lg">
                      <Server className="w-8 h-8 text-[#b0d136] mb-2" />
                      <h3 className="font-semibold text-[#5c5d5d]">Managed Services</h3>
                      <p className="text-sm text-gray-600">Billing & Support</p>
                    </div>
                    <div className="bg-[#f7f7f7] p-4 rounded-lg">
                      <Smartphone className="w-8 h-8 text-[#3d8eb3] mb-2" />
                      <h3 className="font-semibold text-[#5c5d5d]">Cellular</h3>
                      <p className="text-sm text-gray-600">4G/5G Connectivity</p>
                    </div>
                    <div className="bg-[#f7f7f7] p-4 rounded-lg">
                      <HeadphonesIcon className="w-8 h-8 text-[#b0d136] mb-2" />
                      <h3 className="font-semibold text-[#5c5d5d]">Support</h3>
                      <p className="text-sm text-gray-600">24/7 Expert Care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Core Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade telecommunications solutions designed for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="/hosted-pbx" className="group bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#3d8eb3]">
              <div className="w-16 h-16 bg-[#3d8eb3] group-hover:bg-[#b0d136] rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#5c5d5d] mb-4 group-hover:text-[#3d8eb3] transition-colors">
                Hosted PBX
              </h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade cloud communications without the enterprise price tag. Scale instantly, work from anywhere, and reduce costs by up to 60%.
              </p>
              <div className="flex items-center text-[#3d8eb3] font-semibold group-hover:translate-x-2 transition-transform">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </a>

            <a href="/pots-replacement" className="group bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#3d8eb3]">
              <div className="w-16 h-16 bg-[#3d8eb3] group-hover:bg-[#b0d136] rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#5c5d5d] mb-4 group-hover:text-[#3d8eb3] transition-colors">
                POTS Replacement
              </h3>
              <p className="text-gray-600 mb-4">
                Turn legacy copper lines into reliable, future-proof connectivity with our POTS IN A BOX® solution. UL 864-compliant with power outage protection.
              </p>
              <div className="flex items-center text-[#3d8eb3] font-semibold group-hover:translate-x-2 transition-transform">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </a>

            <a href="/business-continuity" className="group bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#3d8eb3]">
              <div className="w-16 h-16 bg-[#3d8eb3] group-hover:bg-[#b0d136] rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#5c5d5d] mb-4 group-hover:text-[#3d8eb3] transition-colors">
                Business Continuity
              </h3>
              <p className="text-gray-600 mb-4">
                Ensure your business stays connected with redundant connectivity, automatic failover, and 99.9% uptime guarantees. Never miss a critical call.
              </p>
              <div className="flex items-center text-[#3d8eb3] font-semibold group-hover:translate-x-2 transition-transform">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Care For Your Communications®
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike typical telephony vendors who offer cookie-cutter solutions, we provide
              boutique-style telecommunications tailored to each business's specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#f7f7f7] to-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#3d8eb3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5c5d5d] mb-2">Personalized Planning</h3>
              <p className="text-gray-600">
                Comprehensive approach with personalized planning and implementation tailored to your needs.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#f7f7f7] to-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#b0d136] rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5c5d5d] mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                Dedicated attention and trusted advisory services ensuring every client gets the support they deserve.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#f7f7f7] to-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#3d8eb3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5c5d5d] mb-2">Proven Reliability</h3>
              <p className="text-gray-600">
                20 years of experience delivering customer-focused voice, connectivity, and unified communications.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#f7f7f7] to-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#b0d136] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5c5d5d] mb-2">Unique Solutions</h3>
              <p className="text-gray-600">
                Solutions designed to fit your unique business requirements across all industries and company sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From POTS replacement to managed services, we provide the complete telecommunications 
              infrastructure your business needs to thrive.
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

      {/* Industries Section */}
      <section id="industries" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized telecommunications solutions tailored for diverse industries and business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <a
                key={index}
                href={industry.link}
                className="group bg-gradient-to-br from-[#f7f7f7] to-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-transparent hover:border-[#b0d136]/20"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#3d8eb3] group-hover:bg-[#b0d136] rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                    <div className="text-white">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#5c5d5d] mb-2 group-hover:text-[#3d8eb3] transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {industry.description}
                  </p>
                </div>
              </a>
            ))}
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
      <section id="contact" className="py-16 bg-gradient-to-r from-[#3d8eb3] to-[#b0d136]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Communications?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join businesses across industries who trust MIX Networks for reliable, 
            boutique-style telecommunications solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#3d8eb3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#3d8eb3] transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;