"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useLanguage } from "@/hooks/useLanguage";

export function Layout89() {
  const { t } = useLanguage();

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="help"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-black"
    >
      <div className="container">
        <AnimatedGroup preset="fade-up" staggerDelay={0.2}>
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <h2 className="heading-h2 font-bold text-white">
                {t('home.helpTitle')}
              </h2>
            </div>
            <div>
              <p className="text-medium text-white mb-6 md:mb-8">
                {t('home.helpDescription')}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  onClick={handleContactClick}
                  variant="outline"
                  className="border border-white hover:bg-white hover:text-black text-white font-medium px-6 py-3 h-auto rounded-medium transition-all duration-200 bg-transparent"
                  aria-label="Kapcsolatfelvétel Dr. Szomor Zsófia Anna ügyvéddel"
                >
                  {t('home.helpContactButton')}
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.img
              src="/images/handshake.jpg"
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-medium object-cover shadow-lg"
              alt="Professzionális jogi segítségnyújtás - kézfogás üzleti környezetben"
              loading="lazy"
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
            />
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 rounded-medium bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}