"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

export function CTA25() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary">
      <div className="container max-w-lg text-center">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.2}>
          <div>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6 text-white">
              {t('home.ctaTitle')}
            </h2>
          </div>
          
          <div>
            <p className="text-medium text-white/90 mb-6 md:mb-8 leading-relaxed">
              {t('home.ctaDescription')}
            </p>
          </div>
          
          <div>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contact">
              <Button 
         
                className="bg-white hover:bg-neutral-lightest text-primary hover:text-primary-dark font-medium px-8 py-3 h-auto rounded-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                aria-label="Kapcsolatfelvétel Dr. Szomor Zsófia Anna ügyvéddel"
              >
                {t('home.ctaContactButton')}
              </Button>
              </Link>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}