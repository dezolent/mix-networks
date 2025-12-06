import React from 'react';
import { Phone, Mail, Server, Shield, Zap, Globe, CheckCircle, Map } from 'lucide-react';
import Footer from './Footer';

function NetworkPage() {
  const locations = [
    {
      city: "Dallas, TX",
      features: ["SBC Stack", "HPBX Servers", "SIP Client Support"]
    },
    {
      city: "Secaucus, NJ",
      features: ["SBC Stack", "HPBX Servers", "SIP Client Support"]
    },
    {
      city: "Las Vegas, NV",
      features: ["SBC Stack", "HPBX Servers", "SIP Client Support"]
    }
  ];

  const components = [
    {
      title: "Session Border Controllers",
      description: "Secure ingress and egress points for all registered SIP devices"
    },
    {
      title: "ENUM Gateways",
      description: "Efficient routing and number translation services"
    },
    {
      title: "Ingress/Egress Proxies",
      description: "Load balancing and traffic management"
    },
    {
      title: "Hosted PBX Servers",
      description: "Enterprise-grade communication features"
    },
    {
      title: "Conferencing Servers",
      description: "Multi-party calling and collaboration tools"
    }
  ];

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Geo-Redundant Infrastructure",
      description: "Multiple server nodes across three strategic U.S. locations ensure your communications stay online even during regional outages."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Active-Active Configuration",
      description: "All servers provide identical service in real-time with seamless, transparent failover between nodes."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "24/7/365 Security",
      description: "Generator backups, on-site hardware redundancy, and round-the-clock monitoring at all colocation facilities."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Hot Stand-By Replacements",
      description: "Pre-staged equipment ready for immediate deployment in case of hardware failure, ensuring minimal disruption."
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
              <a href="/network" className="text-[#3d8eb3] font-semibold">Network</a>
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
              Network Overview
            </h1>
            <p className="text-2xl mb-8 text-white/90 max-w-4xl mx-auto">
              Enterprise-Grade Infrastructure Built for Maximum Reliability and Business Continuity
            </p>
          </div>
        </div>
      </section>

      {/* Network Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-6 text-center">The Network</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The MIX VoIP network consists of multiple, geo-redundant server nodes hosted within colocation facilities located in Secaucus, NJ, Dallas, TX, and Las Vegas, NV, which feature multiple generator backups and 24/7/365 security.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              MIX Networks' remote monitoring and management capabilities for all MIX servers and equipment within the colocation facility, provides real-time information on device power stats across racks. In the event of a hardware failure, hot stand-by replacements are available for all network components and are securely stored at each colocation facility.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              In the event of a hardware or software error, the spare server will assume the IP address of the server with a problem, and assume operation transparently. All servers are arranged in an Active-Active configuration, which provides identical service across multiple nodes in real-time. With seamless, transparent failover between nodes, service disruptions are mitigated because End User devices are automatically transferred to any available node in the event of trouble.
            </p>
          </div>

          {/* Connectivity Solutions Graphic */}
          <div className="my-16">
            <img
              src="/public/mix-networks-connectivity-solutions-graphic@3x.webp"
              alt="MIX Networks Connectivity Solutions"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Infrastructure Built for Reliability
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3d8eb3] to-[#2c6a85] rounded-full flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#5c5d5d] mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Architecture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Network Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategically distributed server nodes across three U.S. locations ensure optimal performance and redundancy
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="mb-16">
            <img
              src="/public/mix-networks-network-architecture.png"
              alt="MIX Networks Architecture"
              className="w-full max-w-5xl mx-auto rounded-xl shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Locations Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gradient-to-br from-[#3d8eb3] to-[#2c6a85] p-8 rounded-xl text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <Map className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">{location.city}</h3>
                </div>
                <ul className="space-y-3">
                  {location.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Components */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Network Components
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              All communication between Registered Devices and the MIX network is through a primary IP address in Dallas, Secaucus, or Las Vegas. These servers are the only ingress and egress points for registered SIP devices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Behind the scenes, there are many other SIP Servers at work, each playing a critical role in ensuring secure, reliable communications:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {components.map((component, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-2 border-[#3d8eb3] hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-[#3d8eb3] mb-3">{component.title}</h3>
                <p className="text-gray-600">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web UI Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#5c5d5d] mb-6">
            Web User Interface
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            The primary web User Interface is available at{' '}
            <a href="https://my.mixnetworks.com" target="_blank" rel="noopener noreferrer" className="text-[#3d8eb3] font-semibold hover:underline">
              my.mixnetworks.com
            </a>
            {' '}and allows users to manage their services, and add users, devices, or features.
          </p>
          <button className="bg-[#b0d136] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9bc42a] transition-all duration-300 transform hover:scale-105">
            Access Portal
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#3d8eb3] to-[#b0d136]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience Enterprise-Grade Reliability
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our geo-redundant network infrastructure ensures your business communications never go down.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-[#3d8eb3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Our Team
            </a>
            <a href="/#services" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#3d8eb3] transition-colors">
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default NetworkPage;
