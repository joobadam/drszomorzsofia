'use client';

import { useLanguage } from '@/hooks/useLanguage';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-9xl font-bold text-gray-200 select-none">
              404
            </h1>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('notFound.title')}
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('notFound.description')}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              <Home className="w-5 h-5 mr-2" />
              {t('notFound.backToHome')}
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t('notFound.goBack')}
            </button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {t('notFound.helpfulLinks')}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/services"
                className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Search className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">{t('notFound.services')}</div>
                  <div className="text-sm text-gray-500">{t('notFound.servicesDescription')}</div>
                </div>
              </Link>
              
              <Link
                href="/contact"
                className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200"
              >
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <Search className="w-4 h-4 text-green-600" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">{t('notFound.contact')}</div>
                  <div className="text-sm text-gray-500">{t('notFound.contactDescription')}</div>
                </div>
              </Link>
              
              <Link
                href="/about"
                className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200"
              >
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <Search className="w-4 h-4 text-orange-600" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">{t('notFound.about')}</div>
                  <div className="text-sm text-gray-500">{t('notFound.aboutDescription')}</div>
                </div>
              </Link>
              
              <Link
                href="/legal-notice"
                className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200"
              >
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Search className="w-4 h-4 text-purple-600" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">{t('notFound.legal')}</div>
                  <div className="text-sm text-gray-500">{t('notFound.legalDescription')}</div>
                </div>
              </Link>
            </div>
          </motion.div>
         
        </div>
      </div>
    </div>
  );
}
