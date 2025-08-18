"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Home } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function Layout215_1() {
  const { t } = useLanguage();

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          {/* Image - Mobile: first, Desktop: first */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
            <div className="order-2 md:order-1">
              <img
                src="/images/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg"
                className="w-full h-[400px] md:h-[500px] rounded-medium object-cover shadow-lg"
                alt={t("realestate.imageAlt")}
                loading="lazy"
              />
            </div>
          </AnimatedGroup>
          
          {/* Content - Mobile: second, Desktop: second */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.15}>
            <div className="order-1 md:order-2">
              <div className="mb-5 md:mb-6">
                <Home className="size-12 text-primary" />
              </div>
              <h3 className="heading-h3 mb-5 font-bold md:mb-6 text-foreground">
                {t("realestate.title")}
              </h3>
              <p className="text-medium text-neutral-dark leading-relaxed mb-4">
                {t("realestate.paragraph1")}
              </p>
              
              <p className="text-medium text-neutral-dark leading-relaxed mb-4">
                {t("realestate.paragraph2")}
              </p>
              
              <p className="text-medium text-neutral-dark leading-relaxed">
                {t("realestate.paragraph3")}
              </p>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}