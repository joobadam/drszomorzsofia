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

            {/* Telefonszám és email cím */}
            <div className="mt-6 mb-6 text-left">
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
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}