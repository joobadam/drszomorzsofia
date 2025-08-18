"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

export function Footer4() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="px-[5%] py-12 md:py-18 lg:py-20 ">
      <div className="container">
        <AnimatedGroup preset="fade-up" staggerDelay={0.1}>
          <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
            {/* Logo */}
            <div className="lg:justify-self-start">
              <button
                onClick={handleHomeClick}
                className="flex items-center gap-3 group"
                aria-label="Vissza a főoldalra"
              >
                <img
                  src="/images/logo1.png"
                  alt="Szomor Zsófia Anna logó"
                  className="h-28 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                
                  loading="lazy"
                />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
              <Link 
                href="/"
                className="font-semibold text-foreground hover:text-primary transition-colors duration-200"
              >
                {t('footer.home')}
              </Link>
              <Link 
                href="/about"
                className="font-semibold text-foreground hover:text-primary transition-colors duration-200"
              >
                {t('footer.about')}
              </Link>
              <Link
                href="/services"
                className="font-semibold text-foreground hover:text-primary transition-colors duration-200"
              >
                {t('footer.services')}
              </Link>
              <Link 
                href="/contact"
                className="font-semibold text-foreground hover:text-primary transition-colors duration-200"
              >
                {t('footer.contact')}
              </Link>
            </nav>

            {/* Social Links */}
            <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
              <Link 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-medium hover:bg-primary/10 transition-colors duration-200"
                aria-label={t('footer.facebook')}
              >
                <Facebook className="size-5 text-foreground hover:text-primary transition-colors duration-200" />
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-medium hover:bg-primary/10 transition-colors duration-200"
                aria-label={t('footer.instagram')}
              >
                <Instagram className="size-5 text-foreground hover:text-primary transition-colors duration-200" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-medium hover:bg-primary/10 transition-colors duration-200"
                aria-label={t('footer.linkedin')}
              >
                <Linkedin className="size-5 text-foreground hover:text-primary transition-colors duration-200" />
              </Link>
            </div>
          </div>

          {/* Separator */}
          <div className="h-px w-full bg-border" />

          {/* Bottom Section */}
          <div className="flex flex-col-reverse items-center justify-center justify-items-center pt-6 pb-4 md:flex-row md:gap-x-6 md:pt-8 md:pb-0">
            <div className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
              <p className="text-sm text-neutral-dark mt-8 md:mt-0">
                {t('footer.copyright').replace('{year}', currentYear)}
              </p>
              <Link 
                href="/impressum" 
                className="text-sm text-neutral-dark hover:text-primary underline transition-colors duration-200"
              >
                {t('footer.impressum')}
              </Link>
              <Link 
                href="/legal-notice" 
                className="text-sm text-neutral-dark hover:text-primary underline transition-colors duration-200"
              >
                {t('footer.legalNotice')}
              </Link>
              <Link 
                href="/privacy-policy" 
                className="text-sm text-neutral-dark hover:text-primary underline transition-colors duration-200"
              >
                {t('footer.cookieSettings')}
              </Link>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </footer>
  );
}



