"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useLanguage } from "@/hooks/useLanguage";

export function Header44() {
  const { t } = useLanguage();

  const handleLearnMoreClick = () => {
    // Scroll to services section to show more about expertise
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
    <section id="about" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <AnimatedGroup preset="blur-slide" staggerDelay={0.2}>
            <div>
              <h2 className="heading-h1 mb-5 font-bold md:mb-6 text-foreground">
                {t('about.title')}
              </h2>
            </div>
            
            <div>
              <p className="text-medium text-neutral-dark mb-6 leading-relaxed">
                {t('about.description1')}
              </p>
              
              <p className="text-medium text-neutral-dark mb-6 leading-relaxed">
                {t('about.description2')}
              </p>
            </div>
            
            <div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 h-auto rounded-medium transition-all duration-200
                  onClick={handleLearnMoreClick}"
                  aria-label="További információ a szolgáltatásokról"
                >
                  {t('about.learnMoreButton')}
                </Button>
                <Button 
                  onClick={handleContactClick}
                  variant="outline"
                  className="border border-primary hover:bg-primary hover:text-white text-primary font-medium px-6 py-3 h-auto rounded-medium transition-all duration-200 bg-transparent"
                  aria-label="Kapcsolatfelvétel"
                >
                  {t('about.contactButton')}
                </Button>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}