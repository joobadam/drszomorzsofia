"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Building } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function Layout215() {
  const { t } = useLanguage();

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          {/* Image - Mobile: first, Desktop: first */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
            <div className="order-2 md:order-1">
              <img
                src="/images/lycs-architecture-U2BI3GMnSSE-unsplash.jpg"
                className="w-full h-[400px] md:h-[500px] rounded-medium object-cover shadow-lg"
                alt="Cégalapítás és cégjogi szolgáltatások - üzleti dokumentumok és szerződések"
                loading="lazy"
              />
            </div>
          </AnimatedGroup>
          
          {/* Content - Mobile: second, Desktop: second */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.15}>
            <div className="order-1 md:order-2">
              <div className="mb-5 md:mb-6">
                <Building className="size-12 text-primary" />
              </div>
              <h3 className="heading-h3 mb-5 font-bold md:mb-6 text-foreground">
                {t('services.corporateTitle')}
              </h3>
              <p className="text-medium text-neutral-dark leading-relaxed mb-4">
                {t('services.corporateDescription1')}
              </p>
              
              <p className="text-medium text-neutral-dark leading-relaxed mb-4">
                {t('services.corporateDescription2')}
              </p>
              
              <p className="text-medium text-neutral-dark leading-relaxed">
                {t('services.corporateDescription3')}
              </p>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}