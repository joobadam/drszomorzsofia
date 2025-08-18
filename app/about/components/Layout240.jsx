"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useLanguage } from "@/hooks/useLanguage";

export function Layout240() {
  const { t } = useLanguage();

  const values = [
    {
      title: t('about.clientCenteredTitle'),
      text: t('about.clientCenteredText'),
      image: "/images/lawyer4.jpg",
      alt: "Ügyfélközpontú jogi szolgáltatás"
    },
    {
      title: t('about.communicationTitle'),
      text: t('about.communicationText'),
      image: "/images/lawyer5.png",
      alt: "Világos kommunikáció és átláthatóság"
    },
    {
      title: t('about.excellenceTitle'),
      text: t('about.excellenceText'),
      image: "/images/lawyer7.jpeg",
      alt: "Jogi kiválóság és szakmaiság"
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
          <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <h2 className="heading-h3 font-bold text-foreground">
              {t('about.valuesTitle')}
            </h2>
          </div>
        </AnimatedGroup>

        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {values.map((value, index) => (
            <AnimatedGroup 
              key={index} 
              preset="blur-slide" 
              staggerDelay={0.15}
            >
              <div className="flex w-full flex-col items-center text-center">
                <div className="mb-6 md:mb-8">
                  <img
                    src={value.image}
                    alt={value.alt}
                    className="w-full h-[200px] object-cover rounded-medium"
                    loading="lazy"
                  />
                </div>
                <h3 className="heading-h5 mb-3 font-bold md:mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-medium text-neutral-dark leading-relaxed">
                  {value.text}
                </p>
              </div>
            </AnimatedGroup>
          ))}
        </div>
      </div>
    </section>
  );
}