"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useLanguage } from "@/hooks/useLanguage";

export function Header1() {
  const { t } = useLanguage();

  const handleServicesClick = () => {
    // Scroll to services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28" role="banner">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-20 lg:items-center">
          {/* Mobile: Image first, Desktop: Text first */}
          <div className="order-2 lg:order-1">
            <AnimatedGroup preset="blur-slide" staggerDelay={0.15}>
              <div>
                <h1 className="heading-h1 mb-5 md:mb-6 text-foreground text-left">
                  {t('home.title')}
                </h1>
              </div>
              <div>
                <p className="text-medium text-neutral-dark mb-6 md:mb-8 text-left">
                  {t('home.subtitle')}
                </p>
              </div>
              {/* Telefonszám és email cím */}
              <div className="mb-6 md:mb-8 text-left">
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+36309713467"
                    className="text-base text-primary font-semibold hover:underline w-fit"
                    aria-label="Telefon: +36 30 971 3467"
                  >
                    +36 30 971 3467
                  </a>
                  <a
                    href="mailto:drszomorzsofia@gmail.com"
                    className="text-base text-primary font-semibold hover:underline w-fit"
                    aria-label="Email: drszomorzsofia@gmail.com"
                  >
                    drszomorzsofia@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={handleServicesClick}
                    className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 h-auto rounded-medium transition-all duration-200 hover:shadow-lg"
                    aria-label="Ugrás a szolgáltatások szekcióhoz"
                  >
                    {t('home.servicesButton')}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleContactClick}
                    className="border border-neutral-dark hover:bg-neutral-light hover:text-foreground text-foreground font-medium px-6 py-3 h-auto rounded-medium transition-all duration-200 bg-transparent"
                    aria-label="Ugrás a kapcsolat szekcióhoz"
                  >
                    {t('home.contactButton')}
                  </Button>
                </div>
              </div>
            </AnimatedGroup>
          </div>
          
          {/* Mobile: Image first, Desktop: Image second */}
          <div className="order-1 lg:order-2">
            <AnimatedGroup preset="scale-fade" staggerDelay={0.1}>
              <div className="relative">
                <img
                  src="/images/6930F625-6A63-441B-BA7A-65C232D77FF9.jpeg"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-medium object-cover shadow-lg"
                  alt="Dr. Szomor Zsófia Anna ügyvéd portréja"
                  loading="eager"
                  
                />
                {/* Decorative gradient overlay for visual enhancement */}
                <div className="absolute inset-0 rounded-medium bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
              </div>
            </AnimatedGroup>
          </div>
        </div>
      </div>
    </header>
  );
}