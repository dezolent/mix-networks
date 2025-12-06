import React, { useState } from 'react';
import { Phone, Mail, ChevronDown, CheckCircle, ArrowRight, Shield, Server, Zap, Clock, AlertTriangle, Building, DollarSign, FileText, Heart, Scale, ShoppingCart, Network, Globe, Activity, HardDrive } from 'lucide-react';
import Footer from './Footer';

function BusinessContinuityPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const stats = [
    { value: "99.99%", label: "Network Uptime SLA", icon: <Shield className="w-8 h-8" /> },
    { value: "24/7", label: "Expert Support & Monitoring", icon: <Clock className="w-8 h-8" /> },
    { value: "<60s", label: "Automatic Failover Time", icon: <Zap className="w-8 h-8" /> }
  ];

  const features = [
    {
      title: "Geo-Redundant Network Architecture",
      description: "Your data and communications are mirrored across multiple secure colocation facilities. If one site experiences an outage, traffic automatically fails over to redundant servers—instantly and invisibly to your users.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "24/7/365 Security & Monitoring",
      description: "Our Network Operations Center never sleeps. Real-time monitoring across all equipment provides immediate alerts and proactive response to any potential issues before they impact your business.",
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Multiple Power Backup Systems",
      description: "Generator backups, redundant ISP connections, and hot-standby hardware replacements ensure zero single points of failure. Your communications infrastructure stays online even during extended power outages or equipment failures.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Remote Management & Rapid Response",
      description: "Advanced monitoring provides real-time device power statistics across all racks. In the rare event of hardware failure, pre-staged replacement equipment is deployed immediately from our secure colocation facilities.",
      icon: <HardDrive className="w-8 h-8" />
    },
    {
      title: "Cloud-Based VoIP Resilience",
      description: "Our cloud unified communications platform isn't tied to your physical location. Even if your entire office goes offline, your team can maintain full calling capabilities from anywhere with internet access.",
      icon: <Server className="w-8 h-8" />
    },
    {
      title: "Automated Failover & Recovery",
      description: "No manual intervention needed. Our intelligent network automatically detects issues and reroutes traffic to healthy infrastructure in milliseconds, ensuring continuous service availability.",
      icon: <Network className="w-8 h-8" />
    }
  ];

  const industries = [
    {
      title: "Healthcare: Patient Care Can't Wait",
      description: "When lives are on the line, communication failures aren't just inconvenient—they're dangerous. Our HIPAA-compliant business continuity solutions ensure medical facilities, clinics, and healthcare providers maintain critical voice and data connectivity for patient care coordination, emergency response, and telehealth services.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Financial Services: Trust Requires Reliability",
      description: "Banks, credit unions, and financial advisors handle sensitive transactions that demand unwavering availability. Our secure, redundant infrastructure protects customer data while ensuring continuous access to critical financial systems and client communications.",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Legal Firms: Every Call Could Be Worth Millions",
      description: "Missing a client call or losing access to case files during a critical deadline can jeopardize cases and client relationships. Our disaster recovery platform ensures attorneys and legal professionals maintain continuous access to communications and cloud-based document systems.",
      icon: <Scale className="w-6 h-6" />
    },
    {
      title: "E-Commerce & Retail: Lost Uptime = Lost Revenue",
      description: "Every minute your order hotline or customer service is down directly impacts your bottom line. Our geo-redundant VoIP solutions keep your sales channels open during peak shopping periods, severe weather, or infrastructure disruptions.",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "Multi-Location Enterprises: Unified Resilience",
      description: "Managing business continuity across multiple offices, branches, or retail locations multiplies complexity. Our centralized unified communications platform provides enterprise-wide disaster recovery with location-specific redundancy built in.",
      icon: <Building className="w-6 h-6" />
    }
  ];

  const faqs = [
    {
      question: "What exactly is business continuity, and why do I need it?",
      answer: "Business continuity ensures your critical communications and operations continue during unexpected disruptions like power outages, network failures, or natural disasters. Without it, downtime can cost you revenue, damage your reputation, and frustrate customers who can't reach you."
    },
    {
      question: "How quickly does failover happen if there's an issue?",
      answer: "Our automated failover system detects issues within seconds and reroutes traffic to backup infrastructure in less than 60 seconds—often so fast that your team and customers won't even notice the switch."
    },
    {
      question: "What happens to my data during a disaster?",
      answer: "Your data is continuously mirrored across multiple secure, geo-redundant colocation facilities. If one site goes down, your data remains accessible from redundant locations with no data loss."
    },
    {
      question: "Do I need to do anything manually during a failover event?",
      answer: "No. Our intelligent network automatically detects issues and reroutes traffic without any manual intervention required. You'll receive notifications, but your service continues uninterrupted."
    },
    {
      question: "How is this different from a regular backup system?",
      answer: "Traditional backups require manual restoration and result in downtime. Our business continuity solution provides real-time redundancy with automatic failover, meaning your communications stay online continuously—there's no 'restore' process needed."
    },
    {
      question: "Can my remote team still work during a disaster?",
      answer: "Absolutely. Our cloud-based platform means your team can maintain full communication capabilities from any location with internet access, whether working from home, mobile, or a temporary office."
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#3d8eb3] to-[#2c6a85]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Your Business Never Stops.<br />Neither Do We.
            </h1>
            <p className="text-2xl mb-8 text-white/90 max-w-4xl mx-auto">
              Enterprise-Grade Business Continuity & Disaster Recovery Solutions<br />That Keep You Connected When It Matters Most
            </p>
            <button className="bg-[#b0d136] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9bc42a] transition-all duration-300 transform hover:scale-105">
              Protect Your Business Today
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-12 rounded-2xl border-2 border-red-200">
            <div className="flex items-start space-x-6 mb-8">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#5c5d5d] mb-4">
                  What Happens When Your Communications Go Down?
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Imagine this: It's Monday morning, and your entire phone system goes dark. Customers can't reach you. Your sales team is paralyzed. Every minute costs money, and your reputation takes a hit with each missed call.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  For most businesses, this nightmare scenario is just one power outage, network failure, or natural disaster away. But for MIX Networks clients, it's a problem that simply doesn't exist.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-[#3d8eb3]">
              <h3 className="text-2xl font-bold text-[#3d8eb3] mb-4">Here's the difference:</h3>
              <p className="text-lg text-gray-700">
                While other businesses scramble to restore service, our clients stay connected. While competitors lose revenue during downtime, our geo-redundant infrastructure ensures seamless communication continuity. Your calls route automatically, your data stays secure, and your business keeps running—no matter what happens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built-In Business Continuity */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Built-In Business Continuity: The MIX Networks Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Business continuity isn't an add-on service for us—it's engineered into every layer of our unified communications platform. Our enterprise-grade disaster recovery infrastructure protects your most critical asset: the ability to communicate with customers, partners, and team members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3d8eb3] to-[#2c6a85] rounded-full flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#5c5d5d] mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              The Cost of Downtime vs. The Value of Continuity
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-[#3d8eb3] to-[#2c6a85] p-12 rounded-xl text-white text-center transform hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-6xl font-bold mb-4">{stat.value}</div>
                <div className="text-xl text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Benefits */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Why Business Continuity Matters for Your Industry
            </h2>
          </div>
          <div className="space-y-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#b0d136]">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-[#3d8eb3] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#5c5d5d] mb-3">{industry.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              How It Works: Business Continuity in Action
            </h2>
            <p className="text-xl text-gray-600">
              Scenario: A severe storm causes a power outage at your primary location.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Systems */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border-2 border-red-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-700">Traditional Phone Systems</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span className="text-gray-700">Phone lines go dead</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span className="text-gray-700">Call centers go silent</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span className="text-gray-700">Customers get busy signals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span className="text-gray-700">IT teams work frantically to restore service</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span className="text-gray-700">Revenue stops flowing</span>
                </li>
              </ul>
            </div>

            {/* MIX Networks */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-[#b0d136]">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#b0d136] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3d8eb3]">MIX Networks</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Geo-redundant infrastructure detects the outage within seconds</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Traffic automatically routes to backup colocation facilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Your team receives instant mobile notifications and continues working from remote locations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Customers experience no service interruption—calls are answered normally</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Your business operates seamlessly while competitors struggle with downtime</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-600 italic">
              This isn't just theory. This is how our infrastructure performs every single day for businesses that depend on reliable communications.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#3d8eb3] transition-colors">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-[#5c5d5d]">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#3d8eb3] transition-transform ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-600 text-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#3d8eb3] to-[#b0d136]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Don't Wait for Disaster to Strike
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Business continuity planning isn't about if something will go wrong—it's about being ready when it does. Partner with MIX Networks and transform your communications infrastructure into a competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#3d8eb3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get a Free Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#3d8eb3] transition-colors">
              Learn More About Our Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default BusinessContinuityPage;
