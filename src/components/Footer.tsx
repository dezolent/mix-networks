import React from 'react';
import { Phone, Mail, Linkedin, Youtube, Facebook, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#5c5d5d] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#b0d136]">SOLUTIONS</h3>
            <ul className="space-y-2">
              <li><a href="/pots-replacement" className="hover:text-[#b0d136] transition-colors">POTS Replacement</a></li>
              <li><a href="/hosted-pbx" className="hover:text-[#b0d136] transition-colors">Hosted PBX</a></li>
              <li><a href="/business-continuity" className="hover:text-[#b0d136] transition-colors">Business Continuity</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#b0d136]">INDUSTRIES</h3>
            <ul className="space-y-2">
              <li><a href="/assisted-living" className="hover:text-[#b0d136] transition-colors">Assisted Living</a></li>
              <li><a href="#" className="hover:text-[#b0d136] transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-[#b0d136] transition-colors">Financial Services</a></li>
              <li><a href="/education" className="hover:text-[#b0d136] transition-colors">Education</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#b0d136]">RESOURCES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#b0d136] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#b0d136] transition-colors">Use Cases</a></li>
              <li><a href="#" className="hover:text-[#b0d136] transition-colors">Data Sheets</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#b0d136]">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-[#b0d136] transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-[#b0d136] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#b0d136] transition-colors">Partner Program</a></li>
              <li><a href="#" className="hover:text-[#b0d136] transition-colors">Resources</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="text-2xl font-bold">
                <span className="text-[#3d8eb3]">MIX</span>
                <span className="text-[#b0d136] ml-1">NETWORKS</span>
              </div>
              <span className="text-gray-400">Care For Your Communications®</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>863-500-5000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>sales@mixnetworks.com</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 pt-4">
            <span className="text-gray-400 text-sm">Follow Us:</span>
            <a href="https://www.linkedin.com/company/mix-networks" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#3d8eb3] rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/@mixnetworksinc.1556" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#3d8eb3] rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/MixNetworks" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#3d8eb3] rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://x.com/mixnetworks" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#3d8eb3] rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
