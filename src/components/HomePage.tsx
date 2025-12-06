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
      <section className="relative pt-24 pb-20 bg-gradient-to-r from-[#3d8eb3] via-[#5fa68f] to-[#b0d136] overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 border border-white/30 backdrop-blur-sm">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-white">20 Years of Excellence</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Boutique-Style</span>
                <span className="block bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">Telecommunications</span>
                <span className="block bg-gradient-to-r from-white via-lime-200 to-yellow-100 bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-xl text-white/95 mb-8 leading-relaxed">
                For 20 years, MIX Networks® has delivered customer-focused voice, connectivity,
                and unified communications solutions tailored to each business's specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group bg-white text-[#3d8eb3] px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  <span className="flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-[#3d8eb3] transition-all duration-300 backdrop-blur-sm">
                  Learn More
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-white/95">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">20+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Social Links - Hero Banner */}
              <div className="absolute top-0 right-0 z-10 flex gap-3">
                <a href="https://www.linkedin.com/company/mix-networks" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#3d8eb3] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 border border-white/30">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@mixnetworksinc.1556" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#3d8eb3] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 border border-white/30">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/MixNetworks" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#3d8eb3] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 border border-white/30">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://x.com/mixnetworks" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#3d8eb3] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 border border-white/30">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl border border-white/20">
                <div className="bg-white rounded-2xl p-6 -rotate-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 shadow-md">
                        <Network className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-[#5c5d5d] mb-1">POTS Replacement</h3>
                      <p className="text-xs text-gray-600">Legacy Line Solutions</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3 shadow-md">
                        <Server className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-[#5c5d5d] mb-1">Managed Services</h3>
                      <p className="text-xs text-gray-600">Billing & Support</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 shadow-md">
                        <Smartphone className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-[#5c5d5d] mb-1">Cellular</h3>
                      <p className="text-xs text-gray-600">4G/5G Connectivity</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3 shadow-md">
                        <HeadphonesIcon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-[#5c5d5d] mb-1">Support</h3>
                      <p className="text-xs text-gray-600">24/7 Expert Care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-[#3d8eb3] to-[#b0d136] text-white px-4 py-1 rounded-full text-sm font-semibold">
                SOLUTIONS
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Core Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade telecommunications solutions designed for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="/hosted-pbx" className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-100 hover:border-[#3d8eb3] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3d8eb3]/5 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3d8eb3] to-[#2c7a9e] group-hover:scale-110 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="inline-block mb-3">
                  <span className="text-xs font-bold text-[#3d8eb3] bg-[#3d8eb3]/10 px-3 py-1 rounded-full">MOST POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#3d8eb3] transition-colors">
                  Hosted PBX
                </h3>
                <p className="text-gray-600 mb-6">
                  Enterprise-grade cloud communications without the enterprise price tag. Scale instantly, work from anywhere, and reduce costs by up to 60%.
                </p>
                <div className="flex items-center text-[#3d8eb3] font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </a>

            <a href="/pots-replacement" className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-100 hover:border-[#b0d136] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#b0d136]/5 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#b0d136] to-[#8fb52a] group-hover:scale-110 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <div className="inline-block mb-3">
                  <span className="text-xs font-bold text-[#b0d136] bg-[#b0d136]/10 px-3 py-1 rounded-full">COST EFFECTIVE</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#b0d136] transition-colors">
                  POTS Replacement
                </h3>
                <p className="text-gray-600 mb-6">
                  Turn legacy copper lines into reliable, future-proof connectivity with our POTS IN A BOX® solution. UL 864-compliant with power outage protection.
                </p>
                <div className="flex items-center text-[#b0d136] font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </a>

            <a href="/business-continuity" className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-100 hover:border-orange-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 group-hover:scale-110 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="inline-block mb-3">
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">99.9% UPTIME</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  Business Continuity
                </h3>
                <p className="text-gray-600 mb-6">
                  Ensure your business stays connected with redundant connectivity, automatic failover, and 99.9% uptime guarantees. Never miss a critical call.
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-l from-[#b0d136]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-[#3d8eb3] to-gray-900 bg-clip-text text-transparent">
                Care For Your Communications®
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike typical telephony vendors who offer cookie-cutter solutions, we provide
              boutique-style telecommunications tailored to each business's specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group text-center p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Planning</h3>
              <p className="text-gray-600">
                Comprehensive approach with personalized planning and implementation tailored to your needs.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-500 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <HeadphonesIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Dedicated attention and trusted advisory services ensuring every client gets the support they deserve.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-500 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Reliability</h3>
              <p className="text-gray-600">
                20 years of experience delivering customer-focused voice, connectivity, and unified communications.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-yellow-500 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unique Solutions</h3>
              <p className="text-gray-600">
                Solutions designed to fit your unique business requirements across all industries and company sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 bg-gradient-to-b from-white via-purple-50/20 to-white overflow-hidden">
        <div className="absolute top-40 left-0 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-[#3d8eb3] to-[#b0d136] text-white px-4 py-1 rounded-full text-sm font-semibold">
                MANAGED SERVICES
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Comprehensive Service Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From POTS replacement to managed services, we provide the complete telecommunications
              infrastructure your business needs to thrive.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Service Navigation */}
            <div className="space-y-4">
              {services.map((service, index) => {
                const serviceColors = [
                  { active: 'from-blue-600 to-cyan-600', inactive: 'blue-600' },
                  { active: 'from-emerald-600 to-teal-600', inactive: 'emerald-600' },
                  { active: 'from-purple-600 to-pink-600', inactive: 'purple-600' },
                  { active: 'from-orange-600 to-amber-600', inactive: 'orange-600' },
                ];
                const color = serviceColors[index % serviceColors.length];

                return (
                  <div
                    key={index}
                    className={`group p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                      activeService === index
                        ? `bg-gradient-to-r ${color.active} text-white shadow-2xl scale-105 border-transparent`
                        : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-100 hover:border-gray-200 hover:shadow-lg'
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        activeService === index ? 'bg-white/20' : 'bg-gradient-to-br from-gray-50 to-gray-100'
                      }`}>
                        <div className={`transition-colors ${activeService === index ? 'text-white' : `text-${color.inactive}`}`}>
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                        <p className={`text-sm ${activeService === index ? 'text-white/90' : 'text-gray-600'}`}>
                          {service.description}
                        </p>
                      </div>
                      {activeService === index && (
                        <ArrowRight className="w-5 h-5 text-white animate-pulse" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Service Details */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl border-2 border-gray-100">
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-[#b0d136] to-[#8fb52a] rounded-2xl text-white shadow-lg">
                    {services[activeService].icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {services[activeService].title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {services[activeService].description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Features:</h4>
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-[#b0d136]/30 transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#b0d136] to-[#8fb52a] rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="group mt-8 w-full bg-gradient-to-r from-[#b0d136] to-[#8fb52a] text-white px-6 py-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 font-semibold transform hover:scale-105">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gradient-to-b from-white via-green-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                INDUSTRIES
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Industries We Serve
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized telecommunications solutions tailored for diverse industries and business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const colors = [
                { bg: 'from-rose-500 to-pink-600', border: 'rose-500', icon: 'rose-500' },
                { bg: 'from-blue-500 to-cyan-600', border: 'blue-500', icon: 'blue-500' },
                { bg: 'from-violet-500 to-purple-600', border: 'violet-500', icon: 'violet-500' },
                { bg: 'from-green-500 to-emerald-600', border: 'green-500', icon: 'green-500' },
                { bg: 'from-orange-500 to-amber-600', border: 'orange-500', icon: 'orange-500' },
                { bg: 'from-pink-500 to-rose-600', border: 'pink-500', icon: 'pink-500' },
                { bg: 'from-teal-500 to-cyan-600', border: 'teal-500', icon: 'teal-500' },
              ];
              const color = colors[index % colors.length];

              return (
                <a
                  key={index}
                  href={industry.link}
                  className={`group bg-white p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-gray-100 hover:border-${color.border}`}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${color.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110`}>
                      <div className="text-white">
                        {industry.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-indigo-50/50 via-white to-pink-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600">Trusted by businesses nationwide</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => {
              const gradients = [
                'from-blue-600 to-cyan-600',
                'from-purple-600 to-pink-600',
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent hover:-translate-y-2">
                  {/* Decorative gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-t-2xl`}></div>

                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-8 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg`}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 bg-gradient-to-br from-[#3d8eb3] via-[#2c7a9e] to-[#b0d136] overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
              GET STARTED TODAY
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your<br />
            <span className="bg-gradient-to-r from-yellow-200 to-green-200 bg-clip-text text-transparent">Communications?</span>
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join businesses across industries who trust MIX Networks for reliable,
            boutique-style telecommunications solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-[#3d8eb3] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
              <span className="flex items-center justify-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-[#3d8eb3] transition-all duration-300 backdrop-blur-sm">
              View Case Studies
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;