'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { getPostBySlug, urlFor } from '@/lib/sanity';
import { Calendar, User, Tag, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PortableText } from '@portabletext/react';


export default function BlogPostPage() {
  const { t } = useLanguage();
  const params = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const postData = await getPostBySlug(params.slug);
        if (postData) {
          setPost(postData);
        } else {
          setError('Post not found');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Failed to load post');
      } finally {
        setIsLoading(false);
      }
    };

    if (params.slug) {
      fetchPost();
    }
  }, [params.slug]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('hu-HU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
       
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t('knowledgeBase.postNotFound')}
          </h1>
          <Link 
            href="/knowledge-base"
            className="text-primary hover:text-primary-dark underline "
          >
            {t('knowledgeBase.backToKnowledgeBase')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="m-8"
        >
          <Link 
            href="/knowledge-base"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('knowledgeBase.backToKnowledgeBase')}
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Featured Image */}
          {post.mainImage && (
            <div className="aspect-video overflow-hidden">
              <img
                src={post.mainImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
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

              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{t('knowledgeBase.readingTime')}</span>
              </div>

              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200"
              >
                <Share2 className="w-4 h-4" />
                {t('knowledgeBase.share')}
              </button>
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <div className="mb-8">
                <p className="text-xl text-gray-600 leading-relaxed italic">
                  {post.excerpt}
                </p>
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.body ? (
                <PortableText 
                  value={post.body}
                  components={{
                    // Custom components for different block types
                    block: {
                      h1: ({children}) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
                      h2: ({children}) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
                      h3: ({children}) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
                      h4: ({children}) => <h4 className="text-lg font-bold mb-2">{children}</h4>,
                      normal: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
                      blockquote: ({children}) => <blockquote className="border-l-4 border-primary pl-4 italic my-4">{children}</blockquote>,
                    },
                    list: {
                      bullet: ({children}) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
                      number: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
                    },
                    listItem: ({children}) => <li className="ml-4">{children}</li>,
                  }}
                />
              ) : (
                <p className="text-gray-500">
                  {t('knowledgeBase.contentComingSoon')}
                </p>
              )}
            </div>
          </div>
        </motion.article>

        {/* Related Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="bg-gray-50 rounded-xl p-8 text-center">
          
            <Link 
              href="/knowledge-base"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
            >
              {t('knowledgeBase.browseAllPosts')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
