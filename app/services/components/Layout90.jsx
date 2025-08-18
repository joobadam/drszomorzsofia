"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useLanguage } from "@/hooks/useLanguage";

export function Layout90() {
  const { t } = useLanguage();

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 ">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
            <div>
              <h3 className="heading-h3 font-bold text-foreground">
                {t('services.criminalTitle')}
              </h3>
            </div>
          </AnimatedGroup>
          
          <AnimatedGroup preset="blur-slide" staggerDelay={0.15}>
            <div>
              <p className="text-medium text-neutral-dark leading-relaxed mb-4">
                {t('services.criminalDescription1')}
              </p>
              
              <p className="text-medium text-neutral-dark leading-relaxed mb-4">
                {t('services.criminalDescription2')}
              </p>
              
              <p className="text-medium text-neutral-dark leading-relaxed">
                <strong className="text-primary">{t('services.criminalSpecialty')}</strong> {t('services.criminalSpecialtyText')}
              </p>
            </div>
          </AnimatedGroup>
        </div>
        
        <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
          <div>
            <img
              src="/images/wesley-tingey-TdNLjGXVH3s-unsplash.jpg"
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-medium object-cover shadow-lg"
              alt="Büntetőjogi védelem és képviselet - tárgyalóterem és igazságszolgáltatás"
              loading="lazy"
            />
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}