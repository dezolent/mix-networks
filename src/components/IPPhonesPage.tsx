import React, { useState, useEffect } from 'react';
import { Smartphone, ExternalLink, Filter } from 'lucide-react';
import { supabase, HardwareProduct } from '../lib/supabase';
import Header from './Header';
import Footer from './Footer';

function IPPhonesPage() {
  const [products, setProducts] = useState<HardwareProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<HardwareProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [classFilter, setClassFilter] = useState<string>('all');
  const [makeFilter, setMakeFilter] = useState<string>('all');
  const [availableClasses, setAvailableClasses] = useState<string[]>([]);
  const [availableMakes, setAvailableMakes] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [products, classFilter, makeFilter]);

  const fetchProducts = async () => {
    try {
      const { data } = await supabase
        .from('hardware_products')
        .select('*')
        .eq('category', 'ip_phones')
        .order('make', { ascending: true });

      if (data) {
        setProducts(data);

        const classes = [...new Set(data.map(p => p.device_class).filter(Boolean))] as string[];
        const makes = [...new Set(data.map(p => p.make).filter(Boolean))] as string[];

        setAvailableClasses(classes);
        setAvailableMakes(makes.sort());
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...products];

    if (classFilter !== 'all') {
      filtered = filtered.filter(p => p.device_class === classFilter);
    }

    if (makeFilter !== 'all') {
      filtered = filtered.filter(p => p.make === makeFilter);
    }

    setFilteredProducts(filtered);
  };

  const ProductCard = ({ product }: { product: HardwareProduct }) => (
    <a
      href={product.datasheet_url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-gray-100 hover:border-[#3d8eb3]"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#3d8eb3]/10 to-[#b0d136]/10">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Smartphone className="w-20 h-20 text-[#3d8eb3]/30" />
          </div>
        )}
        <div className="absolute top-3 right-3 bg-[#b0d136] text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
          <ExternalLink className="w-4 h-4" />
        </div>
        {product.device_class && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#3d8eb3]">
            {product.device_class}
          </div>
        )}
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
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#3d8eb3] transition-colors">
          {product.title}
        </h3>
        <ul className="space-y-2">
          {product.description.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
              <span className="text-[#b0d136] mt-1 flex-shrink-0">•</span>
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

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#3d8eb3] via-[#5fa68f] to-[#b0d136]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 border border-white/30 backdrop-blur-sm">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-semibold">IP PHONES</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white drop-shadow-lg">Professional</span>
              <span className="block bg-gradient-to-r from-white via-yellow-100 to-lime-200 bg-clip-text text-transparent drop-shadow-2xl mt-2">
                IP Phone Solutions
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Discover our complete range of wired and wireless IP phones from leading manufacturers
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-2 border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-5 h-5 text-[#3d8eb3]" />
              <h2 className="text-lg font-bold text-gray-900">Filter Products</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Class
                </label>
                <select
                  value={classFilter}
                  onChange={(e) => setClassFilter(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#3d8eb3] focus:outline-none transition-colors"
                >
                  <option value="all">All Classes</option>
                  {availableClasses.map(cls => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Make (Company)
                </label>
                <select
                  value={makeFilter}
                  onChange={(e) => setMakeFilter(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#3d8eb3] focus:outline-none transition-colors"
                >
                  <option value="all">All Manufacturers</option>
                  {availableMakes.map(make => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing <span className="font-bold text-[#3d8eb3]">{filteredProducts.length}</span> of {products.length} products
              </p>
              {(classFilter !== 'all' || makeFilter !== 'all') && (
                <button
                  onClick={() => {
                    setClassFilter('all');
                    setMakeFilter('all');
                  }}
                  className="text-sm text-[#b0d136] hover:text-[#9bc42a] font-semibold transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-96 bg-gray-200 rounded-xl animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <Smartphone className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-lg text-gray-500">No products match your filters.</p>
              <button
                onClick={() => {
                  setClassFilter('all');
                  setMakeFilter('all');
                }}
                className="mt-4 px-6 py-2 bg-[#b0d136] text-white rounded-lg hover:bg-[#9bc42a] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default IPPhonesPage;
