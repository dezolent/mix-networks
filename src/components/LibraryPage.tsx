import React, { useState, useEffect } from 'react';
import { ChevronRight, FileText, BookOpen, Briefcase, ArrowRight } from 'lucide-react';
import { supabase, LibraryResource } from '../lib/supabase';
import Footer from './Footer';

function LibraryPage() {
  const [blogs, setBlogs] = useState<LibraryResource[]>([]);
  const [dataSheets, setDataSheets] = useState<LibraryResource[]>([]);
  const [useCases, setUseCases] = useState<LibraryResource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const { data: blogsData } = await supabase
        .from('library_resources')
        .select('*')
        .eq('category', 'blog')
        .order('published_date', { ascending: false })
        .limit(4);

      const { data: dataSheetsData } = await supabase
        .from('library_resources')
        .select('*')
        .eq('category', 'data_sheet')
        .order('published_date', { ascending: false })
        .limit(4);

      const { data: useCasesData } = await supabase
        .from('library_resources')
        .select('*')
        .eq('category', 'use_case')
        .order('published_date', { ascending: false })
        .limit(4);

      setBlogs(blogsData || []);
      setDataSheets(dataSheetsData || []);
      setUseCases(useCasesData || []);
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

  const ResourceCard = ({ resource }: { resource: LibraryResource }) => (
    <div className="flex-shrink-0 w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-gray-100 hover:border-[#3d8eb3]">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
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

  const CategorySection = ({
    title,
    icon,
    resources,
    categoryPath
  }: {
    title: string;
    icon: React.ReactNode;
    resources: LibraryResource[];
    categoryPath: string;
  }) => (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#3d8eb3] to-[#5fa68f] rounded-xl flex items-center justify-center">
              {icon}
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          <a
            href={categoryPath}
            className="flex items-center gap-2 bg-[#b0d136] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9bc42a] transition-colors shadow-md hover:shadow-lg"
          >
            View All
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {loading ? (
          <div className="flex gap-6 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-shrink-0 w-80 h-96 bg-gray-200 rounded-xl animate-pulse"></div>
            ))}
          </div>
        ) : resources.length > 0 ? (
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#3d8eb3] scrollbar-track-gray-100">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">No resources available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
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
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 border border-white/30 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#b0d136] rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">RESOURCE LIBRARY</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white drop-shadow-lg">Insights, Solutions &</span>
              <span className="block bg-gradient-to-r from-white via-yellow-100 to-lime-200 bg-clip-text text-transparent drop-shadow-2xl mt-2">
                Success Stories
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Explore our collection of blogs, technical resources, and real-world success stories
            </p>
          </div>
        </div>
      </section>

      <CategorySection
        title="Latest Blogs"
        icon={<BookOpen className="w-6 h-6 text-white" />}
        resources={blogs}
        categoryPath="/library/blogs"
      />

      <div className="bg-gradient-to-r from-gray-50 to-white py-1"></div>

      <CategorySection
        title="Data Sheets"
        icon={<FileText className="w-6 h-6 text-white" />}
        resources={dataSheets}
        categoryPath="/library/data-sheets"
      />

      <div className="bg-gradient-to-r from-gray-50 to-white py-1"></div>

      <CategorySection
        title="Use Cases"
        icon={<Briefcase className="w-6 h-6 text-white" />}
        resources={useCases}
        categoryPath="/library/use-cases"
      />

      <Footer />
    </div>
  );
}

export default LibraryPage;
