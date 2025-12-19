import React, { useState } from 'react';
import { Phone, Mail, CheckCircle, ArrowRight, Shield, Zap, Battery, Server, Wifi, Building2, PhoneCall, AlertCircle, TrendingUp, FileText, Radio, Printer, Gauge, BellRing, ShoppingCart, Monitor, Banknote, DoorOpen, Activity, Lock, Router, Signal } from 'lucide-react';
import Footer from './Footer';

function POTSReplacementPage() {
  const stats = [
    {
      value: "46.3M",
      label: "Fax Machines",
      sublabel: "Worldwide",
      description: "are still in use as of 2015, 17% of those just in the US."
    },
    {
      value: "40M",
      label: "Analog Systems",
      sublabel: "It is estimated that",
      description: "analog fire and burglar alarm systems are currently in use."
    },
    {
      value: "900K",
      label: "Elevators in Service",
      sublabel: "Across the US, there are",
      description: "requiring the ability to initiate contact with outside resources."
    }
  ];

  const features = [
    {
      title: "FAX, ALARM, VOICE & ANALOG DATA RESOLVED",
      description: "POTS IN A BOX® enables secure, reliable access for traditional applications which historically, were supported by analog POTS lines.",
      details: "POTS IN A BOX® enables real-time communication between your location and monitoring services for burglar and fire alarms. POTS IN A BOX® devices support auto-detection of proprietary alarm codes to ensure vital services perform as expected.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "STANDARD & DUAL SIM FAILOVER CAPABILITIES",
      description: "POTS IN A BOX® increases the reliability and availability of your IT services. Dual SIM card slots and WAN options support redundant 'keep alive' functions to ensure that your router and services always remain connected.",
      icon: <Radio className="w-8 h-8" />
    },
    {
      title: "BATTERY BACKUP FOR COMPLETE PROTECTION",
      description: "With up to 24 hours of battery backup, POTS IN A BOX® allows data transfers and other services to remain active. Your systems will continue communicating even in the event of a power outage.",
      icon: <Battery className="w-8 h-8" />
    },
    {
      title: "COMPLETE ENTERPRISE GRADE CLOUD PBX",
      description: "POTS IN A BOX® provides an advanced cloud-hosted PBX solution built for the enterprise.",
      icon: <Server className="w-8 h-8" />
    },
    {
      title: "HIGH SPEED INTERNET ACCESS",
      description: "The POTS IN A BOX® acts as an internet router for the business location, enabling you to access high speed internet solutions. Use with 4G LTE connection on the ATT or Verizon network, or use with a WAN connection (cable, fiber).",
      icon: <Wifi className="w-8 h-8" />
    },
    {
      title: "DIGITAL TELEPHONY 'IN A BOX'",
      description: "POTS IN A BOX® devices enable analog PBX solutions to connect to the digital network, connecting analog solutions to VoIP, truly turning what was old into something new.",
      icon: <PhoneCall className="w-8 h-8" />
    },
    {
      title: "CALL BOXES THAT 'AUTO-DIAL'",
      description: "Pick up one phone in a series, and the box will automatically call the other endpoints in the group.",
      icon: <Phone className="w-8 h-8" />
    },
    {
      title: "ELEVATOR COMMUNICATIONS SUPPORT",
      description: "POTS IN A BOX® enables direct two way communications between the elevator emergency contact system to the appropriate staff.",
      icon: <Building2 className="w-8 h-8" />
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
              <a href="/#industries" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">Industries</a>
              <a href="/#contact" className="bg-[#b0d136] text-white px-6 py-2 rounded-lg hover:bg-[#9bc42a] transition-colors">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#3d8eb3] via-[#5fa68f] to-[#b0d136] overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 border border-white/30 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#b0d136] rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-white">POTS REPLACEMENT SOLUTIONS</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-yellow-100 to-lime-200 bg-clip-text text-transparent drop-shadow-2xl">POTS IN A BOX®</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Seamless, Cost-Effective POTS Line Replacement for Modern Business Communications
            </p>
            <button className="bg-white text-[#3d8eb3] px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl">
              <span className="flex items-center justify-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#f7f7f7] to-white p-12 rounded-2xl border-2 border-[#3d8eb3]">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              As traditional copper landlines and Plain Old Telephone Service (POTS) are phased out, many businesses face compliance risks, reduced functionality, and rising costs. <span className="font-bold text-[#3d8eb3]">POTS IN A BOX®</span> provides a seamless, cost-effective replacement, acting as a carrier-grade Network Terminal Adapter and Gateway for Managed Facilities Voice Networks (MFVN).
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              It supports critical services such as voice, fax, alarms, analog data, and emergency lines, while enabling smooth migration from the Public Switched Telephone Network (PSTN) to modern IP and cellular networks. With built-in cellular routers, the solution offers simple plug-and-play installation and reliable connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Supporting All Your POTS Replacement Needs */}
      <section className="py-20 bg-gradient-to-br from-blue-50/50 via-white to-green-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-[#3d8eb3] to-[#b0d136] text-white px-4 py-1 rounded-full text-sm font-semibold">
                USE CASES
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Supporting All Your POTS Replacement Needs
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { icon: <Printer className="w-6 h-6" />, label: "FAX", color: "from-[#3d8eb3] to-[#2c7a9e]" },
              { icon: <Gauge className="w-6 h-6" />, label: "Meter Reading", color: "from-[#b0d136] to-[#8fb52a]" },
              { icon: <BellRing className="w-6 h-6" />, label: "Burglar & Fire Alarm", color: "from-[#5c5d5d] to-[#4a4b4b]" },
              { icon: <ShoppingCart className="w-6 h-6" />, label: "Point of Sale Terminals", color: "from-[#3d8eb3] to-[#5fa68f]" },
              { icon: <PhoneCall className="w-6 h-6" />, label: "Ring-Down (Audiodial)", color: "from-[#b0d136] to-[#8fb52a]" },
              { icon: <Monitor className="w-6 h-6" />, label: "Vending Machines", color: "from-[#5c5d5d] to-[#4a4b4b]" },
              { icon: <Building2 className="w-6 h-6" />, label: "Elevator, Paging, Taxi", color: "from-[#3d8eb3] to-[#2c7a9e]" },
              { icon: <Banknote className="w-6 h-6" />, label: "ATM Machines", color: "from-[#b0d136] to-[#8fb52a]" },
              { icon: <DoorOpen className="w-6 h-6" />, label: "Apartment Call Box", color: "from-[#5c5d5d] to-[#4a4b4b]" },
              { icon: <Activity className="w-6 h-6" />, label: "Telemetry", color: "from-[#3d8eb3] to-[#5fa68f]" },
              { icon: <Lock className="w-6 h-6" />, label: "Gate Access", color: "from-[#b0d136] to-[#8fb52a]" },
              { icon: <Server className="w-6 h-6" />, label: "SMB Router/Gateway", color: "from-[#3d8eb3] to-[#2c7a9e]" },
              { icon: <Router className="w-6 h-6" />, label: "Analog M2M", color: "from-[#5c5d5d] to-[#4a4b4b]" },
              { icon: <Signal className="w-6 h-6" />, label: "4G/5G Internet Access", color: "from-[#b0d136] to-[#8fb52a]" },
              { icon: <Monitor className="w-6 h-6" />, label: "Legacy Modem Support", color: "from-[#3d8eb3] to-[#5fa68f]" },
              { icon: <Wifi className="w-6 h-6" />, label: "Wireless Wi-Fi Access", color: "from-[#b0d136] to-[#8fb52a]" }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white p-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-[#3d8eb3]/30"
              >
                <div className="text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3 text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <p className="text-xs font-semibold text-gray-700 leading-tight">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-[#3d8eb3] to-[#2c6a85]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              How many analog lines do you have?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="text-gray-600 font-semibold mb-4">{stat.sublabel}</div>
                <div className="w-40 h-40 bg-[#b0d136] rounded-full flex items-center justify-center mx-auto mb-6">
                  <div>
                    <div className="text-5xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/90 mt-2">{stat.label}</div>
                  </div>
                </div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Copper Lines Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3d8eb3] mb-6">
              Copper Phone Lines Become a Thing of the Past
            </h2>
            <p className="text-xl text-gray-600 mb-4 italic">
              The PSTN (public switched telephone network) – the copper line-based communications network that has delivered phone service for generations – is being abandoned.
            </p>
            <p className="text-lg text-gray-600">
              FCC Order 19-72A1 mandates that all POTS Lines in the USA be replaced with an alternative service by August 2, 2022. The nation's copper phone lines are being replaced by a more efficient IP-based network.
            </p>
          </div>

          <div className="bg-[#b0d136] p-12 rounded-2xl">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-10 h-10 text-[#3d8eb3]" />
              </div>
              <div className="text-white">
                <p className="text-2xl font-bold mb-4">
                  Currently, there are over <span className="text-3xl">40 million</span> copper POTS phone lines in the US.
                </p>
                <p className="text-xl leading-relaxed">
                  These lines support critical business needs like fire/burglar alarm, analog modem data functions, fax and elevator – functions that don't tend to work well with VoIP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FCC Forbearance Section */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-2xl shadow-lg border-2 border-gray-200">
            <div className="flex items-start space-x-6 mb-8">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#5c5d5d] mb-4">The Rising Cost Challenge</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Per the FCC mandate, carriers no longer have to offer or support POTS services. This has resulted in extreme price increases – as high as 60-100% and notices to customers that their POTS line service will soon be unavailable. This is the carrier's way of moving customers off the outdated technology.
                </p>
                <p className="text-lg text-gray-700">
                  POTS line customers are at a crossroads – do they pay the higher fees or do they pay for a total overhaul of their communications solution?
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#3d8eb3] to-[#b0d136] p-6 rounded-xl">
              <p className="text-white text-xl font-semibold text-center">
                What are you doing to get ready for this change?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bridging the Divide Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Bridging the Digital Communications Divide
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              POTS IN A BOX® bridges the divide between traditional telephony's wired devices and today's wireless infrastructure.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#3d8eb3] to-[#2c6a85] p-12 rounded-2xl text-white mb-12">
            <p className="text-xl leading-relaxed">
              POTS IN A BOX® is an LTE/Cellular/Wi-Fi/PSTN/FirstNet-capable router that can enable many combinations of legacy analog wireline in-band Voice, M2M, Data, DTMF, Analog Data Modem Tones, Fax and Alarm System Signals. These functions - historically supported by POTS Lines - can be delivered via POTS IN A BOX® and carried over LAN or WAN internet connections such as fiber optics or cable connections.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3d8eb3] to-[#2c6a85] rounded-full flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#5c5d5d] mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                {feature.details && (
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Why Choose POTS IN A BOX®?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl border-2 border-[#b0d136]">
              <h3 className="text-2xl font-bold text-[#3d8eb3] mb-6">Key Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Seamless migration from PSTN to modern IP and cellular networks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Built-in cellular routers for reliable connectivity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Simple plug-and-play installation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Up to 24 hours of battery backup</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Dual SIM failover capabilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Enterprise-grade cloud PBX integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl border-2 border-[#3d8eb3]">
              <h3 className="text-2xl font-bold text-[#3d8eb3] mb-6">Critical Applications Supported</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Fire and burglar alarm systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Elevator emergency communications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Fax machines and analog data modems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Point-of-sale (POS) systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Building management systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Legacy analog PBX systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#3d8eb3] to-[#b0d136]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Replace Your POTS Lines?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't let the copper sunset disrupt your business. Upgrade to POTS IN A BOX® and ensure seamless connectivity for all your critical systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#3d8eb3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Request a Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#3d8eb3] transition-colors">
              Download Product Sheet
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default POTSReplacementPage;
