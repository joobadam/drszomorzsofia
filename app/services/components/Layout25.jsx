"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useLanguage } from "@/hooks/useLanguage";

export function Layout25() {
  const { t } = useLanguage();

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <AnimatedGroup preset="blur-slide" staggerDelay={0.15}>
            <div>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6 text-foreground">
                {t('services.europeanCourtTitle')}
              </h2>
              <p className="text-medium mb-6 md:mb-8 text-neutral-dark leading-relaxed">
                {t('services.europeanCourtDescription1')}
              </p>
              
              <p className="text-medium text-neutral-dark leading-relaxed">
                {t('services.europeanCourtDescription2')}
              </p>
            </div>
          </AnimatedGroup>
          
          <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
            <div>
              <img
                src="/images/christian-lue-8Yw6tsB8tnc-unsplash.jpg"
                className="w-full h-[400px] md:h-[500px] rounded-medium object-cover shadow-lg"
                alt="Európai Emberi Jogi Bíróság képviselet - nemzetközi jogi eljárások"
                loading="lazy"
              />
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}