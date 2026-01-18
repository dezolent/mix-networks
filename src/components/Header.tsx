import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function Header() {
  const [hardwareDropdownOpen, setHardwareDropdownOpen] = useState(false);

  return (
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
                const sibling = e.currentTarget.nextElementSibling;
                if (sibling instanceof HTMLElement) {
                  sibling.style.display = 'block';
                }
              }}
            />
            <div className="hidden text-2xl font-bold">
              <span className="text-[#3d8eb3]">MIX</span>
              <span className="text-[#b0d136] ml-1">NETWORKS</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">
              Home
            </a>
            <a href="/#services" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">
              Services
            </a>
            <a href="/#industries" className="text-gray-700 hover:text-[#3d8eb3] transition-colors">
              Industries
            </a>

            <div
              className="relative"
              onMouseEnter={() => setHardwareDropdownOpen(true)}
              onMouseLeave={() => setHardwareDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#3d8eb3] transition-colors">
                Hardware
                <ChevronDown className={`w-4 h-4 transition-transform ${hardwareDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {hardwareDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  <a
                    href="/hardware"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#3d8eb3]/10 hover:text-[#3d8eb3] transition-colors"
                  >
                    All Hardware
                  </a>
                  <div className="h-px bg-gray-200 my-2"></div>
                  <a
                    href="/hardware/pots-replacement"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#3d8eb3]/10 hover:text-[#3d8eb3] transition-colors"
                  >
                    POTS Replacement
                  </a>
                  <a
                    href="/hardware/ip-phones"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#3d8eb3]/10 hover:text-[#3d8eb3] transition-colors"
                  >
                    IP Phones
                  </a>
                  <a
                    href="/hardware/routers-gateways"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#3d8eb3]/10 hover:text-[#3d8eb3] transition-colors"
                  >
                    Routers & Gateways
                  </a>
                  <a
                    href="/hardware/headsets"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#3d8eb3]/10 hover:text-[#3d8eb3] transition-colors"
                  >
                    Headsets
                  </a>
                  <a
                    href="/hardware/paging"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#3d8eb3]/10 hover:text-[#3d8eb3] transition-colors"
                  >
                    Paging Systems
                  </a>
                </div>
              )}
            </div>

            <a
              href="/#contact"
              className="bg-[#b0d136] text-white px-6 py-2 rounded-lg hover:bg-[#9bc42a] transition-colors"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
