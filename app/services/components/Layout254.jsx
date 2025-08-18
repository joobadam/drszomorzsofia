"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Scale, Users, Building, Home } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function Layout254() {
  const { t } = useLanguage();

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Scale,
      title: t('services.criminalDefenseService'),
      description: t('services.criminalDefenseServiceDescription')
    },
    {
      icon: Users,
      title: t('services.familyLawService'), 
      description: t('services.familyLawServiceDescription')
    },
    {
      icon: Building,
      title: t('services.corporateService'),
      description: t('services.corporateServiceDescription')
    },
    {
      icon: Home,
      title: t('services.realEstateService'),
      description: t('services.realEstateServiceDescription')
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-black">
      <div className="container">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="heading-h2 mb-5 font-bold md:mb-6 text-white">
                {t('services.comprehensiveTitle')}
              </h2>
              <p className="text-medium text-white/80">
                {t('services.comprehensiveSubtitle')}
              </p>
            </div>
          </div>
        </AnimatedGroup>

        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          {/* Left Column */}
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            {services.slice(0, 2).map((service, index) => (
              <AnimatedGroup key={index} preset="blur-slide" staggerDelay={0.15}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-5 md:mb-6">
                    <service.icon className="size-12 text-white" />
                  </div>
                  <h3 className="heading-h5 mb-3 font-bold md:mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-medium text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedGroup>
            ))}
          </div>

          {/* Center Image */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.2}>
            <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
              <img
                src="/images/law2.jpg"
                alt="Professzionális jogi szolgáltatások - Dr. Szomor Zsófia Anna ügyvéd"
                className=" w-full h-[400px] md:h-[400px] lg:h-[400px] object-cover rounded-medium shadow-lg"
                loading="lazy"
              />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 rounded-medium bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            </div>
          </AnimatedGroup>

          {/* Right Column */}
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            {services.slice(2, 4).map((service, index) => (
              <AnimatedGroup key={index + 2} preset="blur-slide" staggerDelay={0.15}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-5 md:mb-6">
                    <service.icon className="size-12 text-white" />
                  </div>
                  <h3 className="heading-h5 mb-3 font-bold md:mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-medium text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedGroup>
            ))}
          </div>
        </div>

        <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button 
              onClick={handleContactClick}
              variant="outline"
              className="border border-white hover:bg-white hover:text-black text-white font-medium px-8 py-3 h-auto rounded-medium transition-all duration-200 bg-transparent"
              aria-label="Kapcsolatfelvétel Dr. Szomor Zsófia Anna ügyvéddel"
            >
              {t('services.contactButton')}
            </Button>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}