import React from 'react';
import { Phone, Mail, Users, Target, Shield, Award, CheckCircle, ArrowRight } from 'lucide-react';
import Footer from './Footer';

function AboutPage() {
  const coreValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customer-Centric",
      description: "We build solutions around your needs, not cookie-cutter packages."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "Transparent pricing, honest communication, and reliable service you can trust."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Over 20 years of expertise delivering enterprise-grade communications."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "U.S.-Based Support",
      description: "Real people, real solutions. Our support team is here when you need us."
    }
  ];

  const solutions = [
    {
      title: "Hosted PBX",
      description: "Scalable, cloud-based phone systems designed for today's mobile and distributed workforce. Advanced features, intuitive management, and enterprise reliability."
    },
    {
      title: "POTS Line Replacement (POTS IN A BOX®)",
      description: "Certified digital replacement for copper phone lines. Keep critical systems like fax, fire alarms, and emergency phones running without costly rewiring or compliance risks."
    },
    {
      title: "Business Continuity",
      description: "Built-in LTE failover, battery backup, and dual-path routing ensure your voice systems stay online no matter what the disruption. Protect essential communications and maintain uptime during outages."
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
              <a href="/about" className="text-[#3d8eb3] font-semibold">About</a>
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
              About MIX Networks
            </h1>
            <p className="text-2xl mb-8 text-white/90 max-w-4xl mx-auto">
              Over 20 Years of Telecom Expertise Delivering Modern, Customizable Communications Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <p className="text-xl text-gray-700 leading-relaxed">
                With over 20 years of telecom expertise, <span className="font-bold text-[#3d8eb3]">MIX Networks®</span> delivers modern, customizable communications solutions designed to meet the unique demands of today's businesses. From Hosted PBX and POTS line replacement to voice gateways, compliance-focused deployments, and ongoing U.S.-based technical support, we provide more than just telecom—we create tailored solutions that fit the way you work.
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our boutique approach means no cookie-cutter packages. We work closely with our customers to understand their operations and build the right mix of services to improve reliability, reduce costs, and support future growth. That's why businesses nationwide trust MIX Networks® to modernize their infrastructure without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-2xl shadow-2xl border-2 border-[#3d8eb3]">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
                Our Mission
              </h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Our mission is to deliver customer-centric, full-featured, next-generation voice and unified communications services with the highest level of support, value, and integrity.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              We specialize in helping businesses modernize their communications infrastructure, including replacing outdated copper POTS lines, to ensure compliance, reliability, and long-term cost savings.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in every interaction and solution we provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl border-2 border-transparent hover:border-[#b0d136] hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3d8eb3] to-[#2c6a85] rounded-full flex items-center justify-center mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#5c5d5d] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Overview */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Enterprise-Grade Infrastructure
            </h2>
          </div>

          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              MIX Networks operates a geo-redundant VoIP infrastructure with core server nodes strategically located in <span className="font-semibold text-[#3d8eb3]">Secaucus, NJ</span>, <span className="font-semibold text-[#3d8eb3]">Dallas, TX</span>, and <span className="font-semibold text-[#3d8eb3]">Las Vegas, NV</span>. Each facility features 24/7/365 security, generator-backed power, and on-site hardware redundancy to ensure uninterrupted service.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Our Active-Active server configuration allows real-time traffic handling across multiple nodes, delivering seamless failover and automatic rerouting in the event of outages. SIP device traffic flows securely through our controlled ingress points, with advanced session border controllers, hosted PBX servers, and conferencing systems working in the background to support critical services.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              With full remote monitoring and instant failover capabilities, our network is built for maximum reliability and business continuity.
            </p>
            <div className="mt-8 text-center">
              <a href="/network" className="inline-flex items-center text-[#3d8eb3] font-semibold text-lg hover:text-[#2c6a85] transition-colors">
                Learn More About Our Network <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Our Core Solutions
            </h2>
          </div>

          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl border-2 border-[#3d8eb3] hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#3d8eb3] mb-4">{solution.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Why Businesses Choose MIX Networks
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#3d8eb3] mb-6">Experience & Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Over 20 years in telecommunications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Deep understanding of legacy and modern systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Certified compliance-focused deployments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Industry-leading technical expertise</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#3d8eb3] mb-6">Customer Focus</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">U.S.-based support team available when you need us</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Custom solutions tailored to your business</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Proactive monitoring and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#3d8eb3] to-[#b0d136]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Modernize Your Communications?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how MIX Networks can help your business stay connected, compliant, and ready for the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-[#3d8eb3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us Today
            </a>
            <a href="/#services" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#3d8eb3] transition-colors">
              Explore Our Solutions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;
