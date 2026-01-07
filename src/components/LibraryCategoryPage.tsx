import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, Briefcase, ArrowRight, ChevronLeft } from 'lucide-react';
import { supabase, LibraryResource } from '../lib/supabase';
import Footer from './Footer';

interface LibraryCategoryPageProps {
  category: 'blog' | 'data_sheet' | 'use_case';
}

function LibraryCategoryPage({ category }: LibraryCategoryPageProps) {
  const [resources, setResources] = useState<LibraryResource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResources();
  }, [category]);

  const fetchResources = async () => {
    setLoading(true);
    try {
      const { data } = await supabase
        .from('library_resources')
        .select('*')
        .eq('category', category)
        .order('published_date', { ascending: false });

      setResources(data || []);
    } catch (error) {
      console.error('Error fetching resources:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryConfig = () => {
    switch (category) {
      case 'blog':
        return {
          title: 'Blogs',
          icon: <BookOpen className="w-8 h-8 text-white" />,
          description: 'Expert insights, industry trends, and practical guides for modern business communications'
        };
      case 'data_sheet':
        return {
          title: 'Data Sheets',
          icon: <FileText className="w-8 h-8 text-white" />,
          description: 'Comprehensive technical specifications and feature overviews for our solutions'
        };
      case 'use_case':
        return {
          title: 'Use Cases',
          icon: <Briefcase className="w-8 h-8 text-white" />,
          description: 'Real-world success stories and implementation examples from our clients'
        };
    }
  };

  const config = getCategoryConfig();

  const ResourceCard = ({ resource }: { resource: LibraryResource }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-gray-100 hover:border-[#3d8eb3]">
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {resource.image_url ? (
          <img
            src={resource.image_url}
            alt={resource.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FileText className="w-16 h-16 text-gray-400" />
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#3d8eb3]">
          {formatDate(resource.published_date)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#3d8eb3] transition-colors">
          {resource.title}
        </h3>
        <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
          {resource.description}
        </p>
        <button className="text-[#3d8eb3] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
          Read More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
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

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#3d8eb3] via-[#5fa68f] to-[#b0d136]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <a
            href="/library"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Library</span>
          </a>

          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30">
                {config.icon}
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white drop-shadow-lg">{config.title}</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {config.description}
            </p>

            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm">
              <span className="text-sm font-semibold">{resources.length} Resources Available</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-96 bg-gray-200 rounded-xl animate-pulse"></div>
              ))}
            </div>
          ) : resources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                {config.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No Resources Yet</h3>
              <p className="text-lg text-gray-600 mb-8">
                We're working on adding more {config.title.toLowerCase()} to our library. Check back soon!
              </p>
              <a
                href="/library"
                className="inline-flex items-center gap-2 bg-[#3d8eb3] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2c7a9e] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Back to Library
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LibraryCategoryPage;
