import React, { useState } from 'react';
import { Phone, Mail, ChevronDown, CheckCircle, ArrowRight, Star, Users, DollarSign, Clock, Globe, Smartphone, Monitor, Shield, Zap, TrendingUp, Building } from 'lucide-react';
import Footer from './Footer';

function HostedPBXPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const stats = [
    { value: "60%", label: "Average savings on phone costs", icon: <DollarSign className="w-8 h-8" /> },
    { value: "99.9%", label: "Uptime reliability guarantee", icon: <Shield className="w-8 h-8" /> },
    { value: "24/7", label: "Expert support when you need it", icon: <Clock className="w-8 h-8" /> },
    { value: "0", label: "Hardware maintenance headaches", icon: <CheckCircle className="w-8 h-8" /> }
  ];

  const faqs = [
    {
      question: "How long does it take to set up Hosted PBX?",
      answer: "Most businesses are up and running within hours, not weeks. Our simple web-based configuration and seamless number porting process means minimal downtime during the transition."
    },
    {
      question: "Can I keep my existing phone numbers?",
      answer: "Yes! We handle the entire number porting process seamlessly, ensuring your business maintains its established phone presence without interruption."
    },
    {
      question: "What happens if my internet goes down?",
      answer: "Our system includes automatic failover and redundancy features. Calls can be routed to mobile devices, backup locations, or alternative numbers to ensure you never miss important communications."
    },
    {
      question: "Do I need to purchase expensive equipment?",
      answer: "No expensive on-site hardware required. Our cloud-based system works with your existing devices, and our mobile and desktop apps mean your team can communicate from anywhere."
    },
    {
      question: "How does pricing work?",
      answer: "We offer predictable, transparent pricing based on your needs. Pay only for what you use with no surprise bills or expensive maintenance contracts. Contact us for a customized quote."
    }
  ];

  const businessTypes = [
    {
      title: "Growing Startups",
      description: "Start professional from day one without the enterprise budget. Scale instantly as you add team members, and never worry about outgrowing your phone system.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Remote-First Companies",
      description: "Give your distributed team a unified communications experience. Whether they're working from home, a coffee shop, or halfway around the world, they'll sound professional and stay connected.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Established Businesses",
      description: "Ready to escape the chains of your legacy phone system? Migrate seamlessly to the cloud, keep your existing numbers, and watch your monthly costs drop while your capabilities soar.",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Multi-Location Operations",
      description: "Manage all your locations from a single dashboard. Transfer calls between offices effortlessly, maintain consistent branding, and centralize your communications strategy.",
      icon: <Users className="w-6 h-6" />
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
              <span className="text-white">Your Business Deserves a </span>
              <span className="bg-gradient-to-r from-yellow-100 via-lime-200 to-yellow-100 bg-clip-text text-transparent">Phone System</span><br />
              <span className="bg-gradient-to-r from-lime-200 via-yellow-100 to-white bg-clip-text text-transparent">That Works as Hard as You Do</span>
            </h1>
            <p className="text-2xl mb-8 text-white/90">
              MIX Networks® Hosted PBX: Enterprise-grade cloud communications<br />without the enterprise price tag or complexity.
            </p>
            <button className="bg-[#b0d136] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9bc42a] transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Admin Portal Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Everything You Need to Communicate Brilliantly
            </h2>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Monitor className="w-24 h-24 text-[#3d8eb3] mx-auto mb-4" />
              <p className="text-xl text-gray-600">Admin Portal Interface Preview</p>
              <p className="text-gray-500">Intuitive dashboard for complete control</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Scales With Your Ambitions */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#3d8eb3] rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#5c5d5d] mb-4">Scales With Your Ambitions</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Growing from 5 to 500 employees? No problem. Our cloud-based VoIP system adapts instantly to your needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Add or remove users in minutes, not weeks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Handle peak demand without breaking a sweat</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Pay only for what you actually use</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">No hardware upgrades required—ever</span>
                </li>
              </ul>
            </div>

            {/* Professional Features */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#b0d136] rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#5c5d5d] mb-4">Professional Features Out of the Box</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Impress customers from day one with enterprise-grade capabilities that make you sound bigger than you are.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Auto attendant with custom greetings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Mobile app integration for iOS and Android</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Remote employee extensions anywhere</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Local presence with area code selection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Advanced call routing and forwarding</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Professional call center capabilities</span>
                </li>
              </ul>
            </div>

            {/* Lower Costs */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#3d8eb3] rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#5c5d5d] mb-4">Dramatically Lower Costs</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Say goodbye to surprise bills and expensive maintenance contracts. Predictable pricing that makes your CFO smile.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">No expensive on-site hardware to purchase</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Automatic updates and new features—free</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Eliminate costly maintenance contracts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reduce phone bills by up to 60%</span>
                </li>
              </ul>
            </div>

            {/* Always-On Reliability */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#b0d136] rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#5c5d5d] mb-4">Always-On Reliability</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Your customers don't care about your technical difficulties. Our 24/7/365 support ensures they never have to.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">99.9% uptime guarantee</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">24/7/365 expert customer support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Automatic failover and redundancy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Real-time monitoring and alerts</span>
                </li>
              </ul>
            </div>

            {/* Work From Anywhere */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#3d8eb3] rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#5c5d5d] mb-4">Work From Anywhere</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Your team isn't always at a desk anymore. Your phone system shouldn't require them to be either.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Seamless mobile and desktop apps</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Remote workers sound like they're in the office</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">International calling made simple</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Unified communications across all devices</span>
                </li>
              </ul>
            </div>

            {/* Set Up Quick */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#b0d136] rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#5c5d5d] mb-4">Set Up in Hours, Not Weeks</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Traditional phone systems take weeks to install. We'll have you up and running before lunch.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Simple web-based configuration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Port existing numbers seamlessly</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Intuitive admin dashboard</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Minimal technical expertise required</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">The Numbers Tell the Story</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-[#3d8eb3] to-[#2c6a85] p-8 rounded-xl text-white text-center transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-2xl shadow-xl">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#b0d136] fill-current" />
              ))}
            </div>
            <p className="text-2xl text-gray-700 text-center mb-8 italic">
              "Switching to MIX Networks Hosted PBX was one of the best decisions we made for our business. The setup was incredibly smooth, and we've seen a 50% reduction in our monthly phone costs while gaining features we never had before. The mobile app means our team can work from anywhere without missing a beat."
            </p>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#3d8eb3] rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4">
                JD
              </div>
              <h4 className="text-xl font-semibold text-[#5c5d5d]">John Doe</h4>
              <p className="text-gray-600">Operations Director, TechCorp Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">Perfect for Modern Businesses</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {businessTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl border-2 border-transparent hover:border-[#b0d136] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#3d8eb3] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#5c5d5d] mb-3">{type.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Microsoft Teams Integration */}
      <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-2xl shadow-xl border-2 border-[#3d8eb3]">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-[#3d8eb3] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
                Seamless Microsoft Teams Integration
              </h2>
            </div>
            <p className="text-xl text-gray-700 text-center leading-relaxed">
              Bridge the gap between Microsoft 365 and enterprise telephony. MIX Networks integrates with Microsoft Teams to support advanced features like complex hunt groups, fax, and contact center tools—all operating on Microsoft's SATIN codec.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">
              Frequently Asked Questions About Hosted PBX
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
            Ready to Transform Your Business Communications?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of companies who've already made the switch to smarter, more affordable cloud communications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#3d8eb3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#3d8eb3] transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HostedPBXPage;
