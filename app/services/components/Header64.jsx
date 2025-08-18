"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useLanguage } from "@/hooks/useLanguage";

export function Header64() {
  const { t } = useLanguage();

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.2}>
          <div>
            <h1 className="heading-h1 mb-5 font-bold md:mb-6 text-foreground">
              {t('services.title')}
            </h1>
          </div>
          
          <div>
            <p className="text-medium text-neutral-dark">
              {t('services.subtitle')}
            </p>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}