import React, { useState, useEffect } from 'react';
import { Smartphone, Phone, Network, Headphones, Volume2, ExternalLink, Package, ArrowRight, Unplug } from 'lucide-react';
import { supabase, HardwareProduct } from '../lib/supabase';
import Header from './Header';
import Footer from './Footer';

function HardwarePage() {
  const [potsProducts, setPotsProducts] = useState<HardwareProduct[]>([]);
  const [ipPhones, setIpPhones] = useState<HardwareProduct[]>([]);
  const [atas, setAtas] = useState<HardwareProduct[]>([]);
  const [routers, setRouters] = useState<HardwareProduct[]>([]);
  const [headsets, setHeadsets] = useState<HardwareProduct[]>([]);
  const [paging, setPaging] = useState<HardwareProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data: potsData } = await supabase
        .from('hardware_products')
        .select('*')
        .eq('category', 'pots_replacement')
        .order('created_at', { ascending: false });

      const { data: ipPhonesData } = await supabase
        .from('hardware_products')
        .select('*')
        .eq('category', 'ip_phones')
        .order('created_at', { ascending: false });

      const { data: atasData } = await supabase
        .from('hardware_products')
        .select('*')
        .eq('category', 'ata')
        .order('created_at', { ascending: false });

      const { data: routersData } = await supabase
        .from('hardware_products')
        .select('*')
        .eq('category', 'routers_gateways')
        .order('created_at', { ascending: false });

      const { data: headsetsData } = await supabase
        .from('hardware_products')
        .select('*')
        .eq('category', 'headsets')
        .order('created_at', { ascending: false });

      const { data: pagingData } = await supabase
        .from('hardware_products')
        .select('*')
        .eq('category', 'paging')
        .order('created_at', { ascending: false });

      setPotsProducts(potsData || []);
      setIpPhones(ipPhonesData || []);
      setAtas(atasData || []);
      setRouters(routersData || []);
      setHeadsets(headsetsData || []);
      setPaging(pagingData || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const ProductCard = ({ product }: { product: HardwareProduct }) => (
    <a
      href={product.datasheet_url}
      className="flex-shrink-0 w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-gray-100 hover:border-[#3d8eb3] cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package className="w-16 h-16 text-gray-400" />
          </div>
        )}
        <div className="absolute top-4 right-4 bg-[#b0d136] text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
          <ExternalLink className="w-5 h-5" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#3d8eb3] transition-colors">
          {product.title}
        </h3>
        <ul className="space-y-2">
          {product.description.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
              <span className="text-[#b0d136] mt-1 flex-shrink-0">•</span>
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </a>
  );

  const CategorySection = ({
    title,
    icon,
    products,
    bgColor,
    link
  }: {
    title: string;
    icon: React.ReactNode;
    products: HardwareProduct[];
    bgColor: string;
    link: string;
  }) => (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center shadow-lg`}>
              {icon}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
              <p className="text-gray-600 mt-1">{products.length} products available</p>
            </div>
          </div>
          <a
            href={link}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3d8eb3] to-[#5fa68f] text-white rounded-lg hover:shadow-lg transition-all duration-300 group"
          >
            <span className="font-semibold">View All</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {loading ? (
          <div className="flex gap-6 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-shrink-0 w-80 h-[500px] bg-gray-200 rounded-xl animate-pulse"></div>
            ))}
          </div>
        ) : products.length > 0 ? (
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#3d8eb3] scrollbar-track-gray-100">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl">
            <p className="text-lg">No products available in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#3d8eb3] via-[#5fa68f] to-[#b0d136]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 border border-white/30 backdrop-blur-sm">
              <Package className="w-4 h-4" />
              <span className="text-sm font-semibold">HARDWARE CATALOG</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white drop-shadow-lg">Enterprise-Grade</span>
              <span className="block bg-gradient-to-r from-white via-yellow-100 to-lime-200 bg-clip-text text-transparent drop-shadow-2xl mt-2">
                Communication Hardware
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Discover our complete range of professional communication equipment designed for reliability and performance
            </p>
          </div>
        </div>
      </section>

      <CategorySection
        title="POTS Replacement"
        icon={<Phone className="w-7 h-7 text-white" />}
        products={potsProducts}
        bgColor="bg-gradient-to-br from-[#3d8eb3] to-[#2c7a9e]"
        link="/hardware/pots-replacement"
      />

      <div className="bg-gradient-to-r from-gray-50 to-white py-1"></div>

      <CategorySection
        title="IP Phones"
        icon={<Smartphone className="w-7 h-7 text-white" />}
        products={ipPhones}
        bgColor="bg-gradient-to-br from-[#5fa68f] to-[#4a8e7a]"
        link="/hardware/ip-phones"
      />

      <div className="bg-gradient-to-r from-gray-50 to-white py-1"></div>

      <CategorySection
        title="ATAs"
        icon={<Unplug className="w-7 h-7 text-white" />}
        products={atas}
        bgColor="bg-gradient-to-br from-[#3d8eb3] to-[#5fa68f]"
        link="/hardware/ata"
      />

      <div className="bg-gradient-to-r from-gray-50 to-white py-1"></div>

      <CategorySection
        title="Routers & Gateways"
        icon={<Network className="w-7 h-7 text-white" />}
        products={routers}
        bgColor="bg-gradient-to-br from-[#b0d136] to-[#9bc42a]"
        link="/hardware/routers-gateways"
      />

      <div className="bg-gradient-to-r from-gray-50 to-white py-1"></div>

      <CategorySection
        title="Headsets"
        icon={<Headphones className="w-7 h-7 text-white" />}
        products={headsets}
        bgColor="bg-gradient-to-br from-[#3d8eb3] to-[#5fa68f]"
        link="/hardware/headsets"
      />

      <div className="bg-gradient-to-r from-gray-50 to-white py-1"></div>

      <CategorySection
        title="Paging Systems"
        icon={<Volume2 className="w-7 h-7 text-white" />}
        products={paging}
        bgColor="bg-gradient-to-br from-[#5fa68f] to-[#b0d136]"
        link="/hardware/paging"
      />

      <Footer />
    </div>
  );
}

export default HardwarePage;
