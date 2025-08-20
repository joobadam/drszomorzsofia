"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";

export function Header44() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <AnimatedGroup preset="blur-slide" staggerDelay={0.2}>
            <div>
              <h2 className="heading-h1 mb-5 font-bold md:mb-6 text-foreground">
                {t('about.title')}
              </h2>
            </div>
            
            <div>
              <p className="text-medium text-neutral-dark mb-6 leading-relaxed">
                {t('about.description1')}
              </p>
              
              <p className="text-medium text-neutral-dark mb-6 leading-relaxed">
                {t('about.description2')}
              </p>
            </div>

            {/* Telefonszám és email cím */}
            <div className="mb-6 text-left">
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
            
            <div>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" passHref legacyBehavior>
                  <Button
                    as="a"
                    className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 h-auto rounded-medium transition-all duration-200"
                    aria-label="További információ a szolgáltatásokról"
                  >
                    {t('about.learnMoreButton')}
                  </Button>
                </Link>
                <Link href="/contact" passHref legacyBehavior>
                  <Button
                    as="a"
                    variant="outline"
                    className="border border-primary hover:bg-primary hover:text-white text-primary font-medium px-6 py-3 h-auto rounded-medium transition-all duration-200 bg-transparent"
                    aria-label="Kapcsolatfelvétel"
                  >
                    {t('about.contactButton')}
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}