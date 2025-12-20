import React from 'react';
import { TrendingDown, DollarSign, CheckCircle, Calculator, Building2, ArrowRight, Phone, Zap, Clock, Users, LineChart, Shield } from 'lucide-react';
import Footer from './Footer';

function POTSROIPage() {
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
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 border border-white/30 backdrop-blur-sm">
              <DollarSign className="w-4 h-4 text-[#b0d136]" />
              <span className="text-sm font-semibold text-white">ROI CALCULATOR</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-yellow-100 to-lime-200 bg-clip-text text-transparent drop-shadow-2xl">
                The ROI for POTS Replacement
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Discover the immediate financial impact and long-term savings with POTS IN A BOX® and VoIP solutions
            </p>
          </div>
        </div>
      </section>

      {/* Financial Impact Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-6">The Immediate Financial Impact</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              As traditional Plain Old Telephone Service (POTS) infrastructure continues to sunset, businesses across all industries are discovering the substantial financial benefits of migrating to modern alternatives. The cost savings aren't just theoretical—they're immediate, measurable, and often exceed expectations by significant margins.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Cost Comparison */}
      <section className="py-16 bg-gradient-to-br from-blue-50/50 to-green-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">Monthly Service Cost Comparison</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Traditional POTS */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-amber-200">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 text-white">
                <Phone className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Traditional POTS</h3>
                <p className="text-amber-100">Legacy Infrastructure</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span className="text-gray-700"><span className="font-semibold">Base line charges:</span> $80-200 per line monthly</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span className="text-gray-700"><span className="font-semibold">Feature additions:</span> $5-15 per feature monthly</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span className="text-gray-700"><span className="font-semibold">Long-distance:</span> $0.05-0.25 per minute</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span className="text-gray-700"><span className="font-semibold">Installation fees:</span> $100-300 per line</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span className="text-gray-700"><span className="font-semibold">Maintenance visits:</span> $150-250 per incident</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* VoIP Alternative */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#3d8eb3]">
              <div className="bg-gradient-to-br from-[#3d8eb3] to-[#2c6a85] p-6 text-white">
                <Zap className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">VoIP Alternative</h3>
                <p className="text-blue-100">Modern Voice Solution</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#3d8eb3] mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-semibold">Hosted VoIP:</span> $20-35 per user monthly</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#3d8eb3] mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-semibold">SIP trunk lines:</span> $15-25 per concurrent call</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#3d8eb3] mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-semibold">Equipment:</span> $100-300 per phone (one-time)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#3d8eb3] mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-semibold">Setup:</span> $50-100 per user</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* POTS IN A BOX */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#b0d136]">
              <div className="bg-gradient-to-br from-[#b0d136] to-[#8fb52a] p-6 text-white">
                <Shield className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">POTS IN A BOX®</h3>
                <p className="text-green-100">Perfect Middle Ground</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-semibold">Device cost:</span> $200-500 per unit (one-time)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-semibold">Monthly service:</span> $30-50 per line</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-semibold">Installation:</span> $300-500 per unit</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-semibold">Cellular data:</span> $20-30 monthly per device</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Savings Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">Real-World Savings Examples</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-2xl border-2 border-[#3d8eb3] hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#3d8eb3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3d8eb3] mb-2">Small Business</h3>
                <p className="text-gray-600">5 POTS lines</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Current POTS cost:</span>
                  <span className="font-bold text-amber-600">$6,000/yr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">VoIP alternative:</span>
                  <span className="font-bold text-[#3d8eb3]">$1,800/yr</span>
                </div>
                <div className="border-t-2 border-[#b0d136] pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-900 font-semibold">Annual savings:</span>
                    <span className="font-bold text-[#b0d136] text-xl">$4,200</span>
                  </div>
                  <div className="bg-[#b0d136] text-white text-center py-2 rounded-lg font-semibold">
                    70% reduction
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">Payback period: 3 months</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-2xl border-2 border-[#3d8eb3] hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#3d8eb3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3d8eb3] mb-2">Medium Business</h3>
                <p className="text-gray-600">25 POTS lines</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Current POTS cost:</span>
                  <span className="font-bold text-amber-600">$24,000/yr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Hybrid solution:</span>
                  <span className="font-bold text-[#3d8eb3]">$9,000/yr</span>
                </div>
                <div className="border-t-2 border-[#b0d136] pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-900 font-semibold">Annual savings:</span>
                    <span className="font-bold text-[#b0d136] text-xl">$15,000</span>
                  </div>
                  <div className="bg-[#b0d136] text-white text-center py-2 rounded-lg font-semibold">
                    63% reduction
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">Payback period: 4-5 months</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-2xl border-2 border-[#3d8eb3] hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#3d8eb3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <LineChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3d8eb3] mb-2">Enterprise</h3>
                <p className="text-gray-600">100+ POTS lines</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Current POTS cost:</span>
                  <span className="font-bold text-amber-600">$96,000/yr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Complete VoIP:</span>
                  <span className="font-bold text-[#3d8eb3]">$30,000/yr</span>
                </div>
                <div className="border-t-2 border-[#b0d136] pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-900 font-semibold">Annual savings:</span>
                    <span className="font-bold text-[#b0d136] text-xl">$66,000</span>
                  </div>
                  <div className="bg-[#b0d136] text-white text-center py-2 rounded-lg font-semibold">
                    69% reduction
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">Payback period: 6 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gradient-to-br from-[#3d8eb3] to-[#2c6a85]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Case Study: National Fitness Chain</h2>
            <p className="text-xl text-white/90">Million-Dollar Savings</p>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A compelling real-world example comes from a national fitness chain that recently completed a comprehensive POTS replacement project. This organization had already migrated their voice calls to VoIP but maintained traditional POTS lines for critical infrastructure including:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Elevator emergency phones</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Fire alarm systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Burglar alarm connections</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Point-of-sale systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Building controls (HVAC and lighting)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#b0d136] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Emergency pool phones</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-amber-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingDown className="w-8 h-8" />
                Original POTS Infrastructure
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Cost per POTS line:</span>
                  <span className="font-bold">$120/month</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Lines per location:</span>
                  <span className="font-bold">7</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Number of locations:</span>
                  <span className="font-bold">450</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Cost per facility:</span>
                  <span className="font-bold">$840/month</span>
                </div>
                <div className="flex justify-between items-center pt-4 text-xl">
                  <span className="font-bold">Total Monthly:</span>
                  <span className="font-bold">$378,000</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#b0d136] to-[#8fb52a] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="w-8 h-8" />
                POTS IN A BOX® Solution
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Cost per line:</span>
                  <span className="font-bold">$30/month</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Data plan & maintenance:</span>
                  <span className="font-bold">$24/device</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Total cost per line:</span>
                  <span className="font-bold">$54/month</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Cost per facility:</span>
                  <span className="font-bold">$300/month</span>
                </div>
                <div className="flex justify-between items-center pt-4 text-xl">
                  <span className="font-bold">Total Monthly:</span>
                  <span className="font-bold">$135,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#5c5d5d] mb-6 text-center">The Results</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Monthly savings per facility:</span>
                  <span className="font-bold text-[#b0d136] text-xl">$540</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total monthly savings:</span>
                  <span className="font-bold text-[#b0d136] text-2xl">$243,000</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Three-year savings:</span>
                  <span className="font-bold text-[#b0d136] text-xl">$8.7M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Five-year savings:</span>
                  <span className="font-bold text-[#b0d136] text-2xl">$14.5M</span>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-[#3d8eb3] to-[#b0d136] text-white p-6 rounded-xl text-center">
              <p className="text-2xl font-bold">64% Reduction in Telecommunications Costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Cost Savings */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">Hidden Cost Savings</h2>
            <p className="text-xl text-gray-600">Beyond the obvious monthly service savings</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl border-2 border-[#3d8eb3]">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#3d8eb3] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3d8eb3] mb-2">Reduced Truck Rolls</h3>
                  <p className="text-gray-700">VoIP and POTS IN A BOX® eliminate most service calls, saving $150-250 per avoided visit. For large organizations, this can translate to tens of thousands in annual savings.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl border-2 border-[#b0d136]">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#b0d136] rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#b0d136] mb-2">Faster Problem Resolution</h3>
                  <p className="text-gray-700">Remote diagnostics and configuration changes resolve issues in minutes rather than days, reducing operational disruption and associated costs.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl border-2 border-[#3d8eb3]">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#3d8eb3] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3d8eb3] mb-2">Eliminated Wiring Costs</h3>
                  <p className="text-gray-700">No copper wire maintenance, replacement, or expansion costs eliminates a significant ongoing expense category.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f7f7f7] to-white p-8 rounded-xl border-2 border-[#b0d136]">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#b0d136] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#b0d136] mb-2">Reduced Administrative Overhead</h3>
                  <p className="text-gray-700">Centralized management reduces time spent coordinating with multiple telecom providers, freeing up IT resources for strategic initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax and Regulatory Savings */}
      <section className="py-16 bg-gradient-to-br from-blue-50/50 to-green-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-4">Tax and Regulatory Savings</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <DollarSign className="w-10 h-10 text-[#b0d136] mb-4" />
              <h3 className="text-lg font-bold text-[#5c5d5d] mb-3">Reduced Telecom Taxes</h3>
              <p className="text-gray-700">VoIP services often have lower regulatory fees and taxes compared to traditional telephone services, providing additional monthly savings.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Shield className="w-10 h-10 text-[#3d8eb3] mb-4" />
              <h3 className="text-lg font-bold text-[#5c5d5d] mb-3">E911 Compliance</h3>
              <p className="text-gray-700">Modern solutions provide enhanced 911 services with location accuracy that exceeds POTS capabilities, often at lower cost.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Calculator className="w-10 h-10 text-[#b0d136] mb-4" />
              <h3 className="text-lg font-bold text-[#5c5d5d] mb-3">Simplified Billing</h3>
              <p className="text-gray-700">Single-vendor billing eliminates the complexity of managing multiple telecom relationships, reducing administrative costs and billing errors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Urgency Factor */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-2xl border-2 border-orange-300 shadow-2xl">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#5c5d5d] mb-4">The Urgency Factor</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Beyond the immediate cost savings, businesses face an unavoidable reality: the traditional copper infrastructure supporting POTS is being systematically decommissioned. This creates a business continuity risk that grows more severe with each passing month.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Organizations that proactively migrate to modern alternatives not only capture immediate savings but also avoid the potential service disruptions and emergency migration costs that come with waiting too long.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scaling the Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5c5d5d] mb-6">Scaling the Benefits</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              The savings potential scales dramatically with organization size. Even smaller operations with 10 locations and 6 POTS lines each can realize over $250,000 in five-year savings. For enterprise-level organizations, the numbers become truly transformational, often exceeding millions in annual savings.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#3d8eb3] to-[#b0d136]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Calculate Your ROI?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            The financial case for POTS replacement is compelling across organizations of all sizes. The combination of immediate cost savings, enhanced reliability, and future-proofing against infrastructure sunset creates a perfect storm of business value.
          </p>
          <p className="text-lg text-white/90 mb-8">
            Want to see a detailed ROI calculation for your specific situation? Watch our comprehensive video breakdown featuring Carter Dewey from MIX Networks, where he walks through real-world scenarios and demonstrates the ROI calculator that helped the national fitness chain realize their $14 million savings opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#3d8eb3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Calculate Your ROI
              <Calculator className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#3d8eb3] transition-colors flex items-center justify-center gap-2">
              Watch the Video
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default POTSROIPage;
