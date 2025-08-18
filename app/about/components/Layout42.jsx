"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useLanguage } from "@/hooks/useLanguage";

export function Layout42() {
  const { t } = useLanguage();

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-black">
      <div className="container">
        <div className="grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <AnimatedGroup preset="blur-slide" staggerDelay={0.2}>
            <div>
              <h3 className="heading-h3 font-bold text-white">
                {t('about.dedicatedTitle')}
              </h3>
            </div>
          </AnimatedGroup>
          
          <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
            <div>
              <p className="text-medium text-white leading-relaxed">
                {t('about.dedicatedText')}
              </p>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}