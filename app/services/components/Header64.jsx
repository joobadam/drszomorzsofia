"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useLanguage } from "@/hooks/useLanguage";

export function Header64() {
  const { t } = useLanguage();

  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28" role="banner">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-20 lg:items-center">
          {/* Text section */}
          <div className="order-2 lg:order-1">
            <AnimatedGroup preset="blur-slide" staggerDelay={0.15}>
              <div>
                <h1 className="heading-h1 mb-5 md:mb-6 text-foreground text-left font-bold">
                  {t('services.title')}
                </h1>
              </div>
              <div>
                <p className="text-medium text-neutral-dark mb-6 md:mb-8 text-left">
                  {t('services.subtitle')}
                </p>
              </div>
              {/* Telefonszám és email cím */}
              <div className="mb-6 md:mb-8 text-left">
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
          {/* Optionally, you can add an image or illustration here in the second column if needed */}
        </div>
      </div>
    </header>
  );
}