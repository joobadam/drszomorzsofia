"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Scale } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Navbar = () => {
  const { t, currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const handleLanguageChange = (newLocale) => {
    changeLanguage(newLocale);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Animation variants
  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1]
      }
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.4, 0.25, 1]
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  // Use real routes
  const navigationLinks = [
    { href: "/", label: t('navigation.home') },
    { href: "/about", label: t('navigation.about') },
    { href: "/services", label: t('navigation.services') },
    { href: "/contact", label: t('navigation.contact') },
  ];


  return (
    <motion.nav 
      variants={navVariants}
      initial="initial"
      animate="animate"
      className="nav-transition fixed top-1 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-4"
    >
      <motion.div 
        className={`relative rounded-large shadow-xl border transition-all duration-300 ${
          scrolled 
            ? 'bg-transparent backdrop-blur-md border-neutral-light shadow-2xl' 
            : 'bg-transparent backdrop-blur-sm border-neutral-light'
        }`}
        whileHover={{ 
          boxShadow: "0 20px 40px rgba(0, 66, 37, 0.15)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="flex items-center justify-between px-6 py-3">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/"
              className="flex items-center gap-3"
              onClick={handleLinkClick}
            >
              <div className="relative w-10 h-10 bg-primary rounded-medium flex items-center justify-center group">
                <Scale className="w-5 h-5 text-white group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-primary rounded-medium opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <span className="text-lg font-bold font-heading text-foreground">
                Dr. Szomor Zsófia Anna
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((link, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(0, 66, 37, 0.05)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-neutral-dark hover:text-primary hover:bg-primary/5 rounded-medium transition-all duration-300 font-sans"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { delay: 0.8, duration: 0.6 }
            }}
          >
            {/* Nyelvválasztó opció */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleLanguageChange('hu')}
                className={`px-4 py-2 text-sm font-medium rounded-medium transition-all duration-300 font-sans ${
                  currentLanguage === 'hu'
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-neutral-light text-neutral-dark hover:bg-primary/10'
                }`}
                aria-label="Magyar nyelv"
                disabled={currentLanguage === 'hu'}
                type="button"
              >
                HU
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-4 py-2 text-sm font-medium rounded-medium transition-all duration-300 font-sans ${
                  currentLanguage === 'en'
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-neutral-light text-neutral-dark hover:bg-primary/10'
                }`}
                aria-label="English language"
                disabled={currentLanguage === 'en'}
                type="button"
              >
                EN
              </button>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-neutral-dark hover:text-primary hover:bg-primary/5 rounded-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden border-t border-neutral-light"
            >
              <div className="px-6 py-4 space-y-2">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1, duration: 0.4 }
                    }}
                    whileHover={{ x: 8 }}
                  >
                    <Link
                      href={link.href}
                      className="block w-full text-left px-4 py-3 text-sm font-medium text-neutral-dark hover:bg-primary/5 hover:text-primary rounded-medium transition-all duration-300 font-sans"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.8, duration: 0.4 }
                  }}
                  className="pt-4"
                >
                  {/* Nyelvválasztó gomb */}
                  <div className="w-full flex justify-center">
                    <div className="relative w-full max-w-[180px]">
                      <select
                        className="appearance-none w-full bg-primary text-white font-semibold py-2.5 px-4 rounded-medium transition-all duration-300 shadow-lg font-sans cursor-pointer hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark border border-primary/40"
                        value={currentLanguage || "hu"}
                        onChange={e => handleLanguageChange(e.target.value)}
                        aria-label="Nyelvválasztó"
                      >
                        <option value="hu">Magyar</option>
                        <option value="en">English</option>
                      </select>
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white text-xs">
                        ▼
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;