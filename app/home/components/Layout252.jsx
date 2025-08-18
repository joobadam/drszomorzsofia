"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

export function Layout252() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('home.criminalDefense'),
      subtitle: t('home.criminalDefenseSubtitle'),
      text: t('home.criminalDefenseText'),
      image: "/images/lawyer1.jpg",
      alt: "Büntetőjogi védelem - ügyvédi képviselet büntetőeljárásban"
    },
    {
      title: t('home.victimRepresentation'),
      subtitle: t('home.victimRepresentationSubtitle'),
      text: t('home.victimRepresentationText'),
      image: "/images/lawyer2.jpg",
      alt: "Sértetti képviselet - feljelentés és kártérítési igények"
    },
    {
      title: t('home.witnessSupport'),
      subtitle: t('home.witnessSupportSubtitle'),
      text: t('home.witnessSupportText'),
      image: "/images/malik-earnest-xgxzqRpK0UE-unsplash.jpg",
      alt: "Tanúk jogi támogatása - felkészítés meghallgatásokra"
    }
  ];

  const handleServiceClick = (serviceTitle) => {
    // Log service interest or navigate to detailed page
    console.log(`Service clicked: ${serviceTitle}`);
    // Could implement navigation to individual service pages
  };

  return (
    <section id="services" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Header Section */}
        <AnimatedGroup preset="fade-up" staggerDelay={0.1}>
          <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
            <div>
              <h2 className="heading-h3 font-bold text-foreground">
                {t('home.servicesTitle')}
              </h2>
            </div>
            <div>
              <p className="text-medium text-neutral-dark">
                {t('home.servicesDescription')}
              </p>
            </div>
          </div>
        </AnimatedGroup>

        {/* Services Cards */}
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          {services.map((service, index) => (
            <AnimatedGroup 
              key={index} 
              preset="blur-slide" 
              staggerDelay={0.15}
            >
              <motion.div 
                className="w-full group cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="mb-6 md:mb-8 overflow-hidden rounded-medium">
                  <motion.img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <h3 className="heading-h5 mb-3 font-bold md:mb-4 text-foreground group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                
                <h4 className="text-lg font-medium mb-3 text-primary">
                  {service.subtitle}
                </h4>
                
                <p className="text-medium text-neutral-dark mb-6 md:mb-8 leading-relaxed">
                  {service.text}
                </p>
                
                <div className="flex items-center gap-2">
                  <Link href="/services">
                  <Button
                    onClick={() => handleServiceClick(service.title)}
                    variant="ghost"
                    className="p-0 h-auto font-medium text-primary hover:text-primary-dark hover:bg-transparent group-hover:translate-x-1 transition-all duration-200"
                    aria-label={`További információ: ${service.title}`}
                  >
                    {t('home.readMore')}
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatedGroup>
          ))}
        </div>
      </div>
    </section>
  );
}