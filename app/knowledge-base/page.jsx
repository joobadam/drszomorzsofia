'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { getAllPostsWithBody, getAllCategories } from '@/lib/sanity';
import { Calendar, Clock, User, Tag, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import SimpleSanityTest from '@/components/SimpleSanityTest';
import LumaSpinLoader from '@/components/LumaSpinLoader';
import { AnimatedGroup } from "@/components/ui/animated-group";

export default function KnowledgeBasePage() {
  const { t } = useLanguage();
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsData, categoriesData] = await Promise.all([
          getAllPostsWithBody(),
          getAllCategories()
        ]);
        setPosts(postsData);
        setCategories(categoriesData);
        setFilteredPosts(postsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => 
        post.categories && post.categories.includes(selectedCategory)
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [posts, selectedCategory, searchTerm]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('hu-HU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
       
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container max-w-lg text-center mb-16">
            <AnimatedGroup preset="blur-slide" staggerDelay={0.2}>
              <div>
                <h1 className="heading-h1 mb-5 font-bold md:mb-6 text-foreground">
                  {t('knowledgeBase.title')}
                </h1>
              </div>
              <div>
                <p className="text-medium text-neutral-dark">
                  {t('knowledgeBase.subtitle')}
                </p>
              </div>
            </AnimatedGroup>
          </div>
        </section>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('knowledgeBase.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
              >
                <option value="all">{t('knowledgeBase.allCategories')}</option>
                {categories.map((category) => (
                  <option key={category._id} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Sanity Test Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
       
        </motion.div>

        {/* Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <Link
                key={post._id}
                href={`/knowledge-base/${post.slug.current}`}
                className="group"
                tabIndex={0}
                style={{ textDecoration: 'none' }}
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                  style={{ cursor: 'pointer' }}
                >
                  {post.mainImage && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.mainImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6 flex flex-col flex-1">
                    {/* Categories */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.map((category, catIndex) => (
                          <span
                            key={catIndex}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      {post.author && (
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {t('knowledgeBase.noPostsFound')}
              </h3>
              <p className="text-gray-500">
                {t('knowledgeBase.noPostsDescription')}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}



