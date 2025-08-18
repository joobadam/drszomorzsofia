"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useLanguage } from "@/hooks/useLanguage";

export function Header49() {
  const { t } = useLanguage();

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <AnimatedGroup preset="blur-slide" staggerDelay={0.2}>
            <div>
              <h1 className="heading-h1 mb-5 font-bold md:mb-6 text-foreground">
                {t('contact.title')}
              </h1>
            </div>
            
            <div>
              <p className="text-medium text-neutral-dark leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}