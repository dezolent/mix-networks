import React, { useState, useEffect } from 'react';
import { Network, ExternalLink } from 'lucide-react';
import { supabase, HardwareProduct } from '../lib/supabase';
import Header from './Header';
import Footer from './Footer';

function RoutersGatewaysPage() {
  const [products, setProducts] = useState<HardwareProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await supabase
        .from('hardware_products')
        .select('*')
        .eq('category', 'routers_gateways')
        .order('make', { ascending: true });

      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const ProductCard = ({ product }: { product: HardwareProduct }) => (
    <a
      href={product.datasheet_url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-gray-100 hover:border-[#b0d136]"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#b0d136]/10 to-[#3d8eb3]/10">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Network className="w-20 h-20 text-[#b0d136]/30" />
          </div>
        )}
        <div className="absolute top-3 right-3 bg-[#3d8eb3] text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          {product.make && (
            <span className="text-sm font-semibold text-[#b0d136]">{product.make}</span>
          )}
          {product.model && (
            <span className="text-sm text-gray-500">• {product.model}</span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b0d136] transition-colors">
          {product.title}
        </h3>
        <ul className="space-y-2">
          {product.description.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
              <span className="text-[#3d8eb3] mt-1 flex-shrink-0">•</span>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#b0d136] to-[#9bc42a]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 border border-white/30 backdrop-blur-sm">
              <Network className="w-4 h-4" />
              <span className="text-sm font-semibold">ROUTERS & GATEWAYS</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white drop-shadow-lg">Network Infrastructure</span>
              <span className="block bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent drop-shadow-2xl mt-2">
                & Gateway Solutions
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Enterprise-grade routers, gateways, ATAs, and switches for reliable network connectivity
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Our network infrastructure solutions provide secure, high-performance connectivity for modern communication systems. From ATA adapters to enterprise routers, we have everything you need.
            </p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-96 bg-gray-200 rounded-xl animate-pulse"></div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <Network className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-lg text-gray-500">No products available at this time.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default RoutersGatewaysPage;
