"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ChevronRight, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function Layout4() {
  const { t } = useLanguage();
  const phoneNumber = "+36309713467";
  const emailAddress = "drszomorzsofia@gmail.com";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}?subject=Jogi konzultáció kérése`;
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-black text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <AnimatedGroup preset="blur-slide" staggerDelay={0.15}>
            <div>
              <p className="mb-3 font-semibold md:mb-4 text-white">Kapcsolat</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6 text-white">
                {t('contact.contactTitle')}
              </h2>
              <p className="text-medium mb-6 md:mb-8 text-white leading-relaxed">
                {t('contact.contactSubtitle')}
              </p>
              
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Phone className="size-5 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h6 className="heading-h6 mb-3 font-bold md:mb-4 text-white">
                      {t('contact.phoneNumber')}
                    </h6>
                    <a 
                      href={`tel:${phoneNumber}`}
                      className="text-medium text-white hover:text-primary transition-colors duration-200"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="size-5 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h6 className="heading-h6 mb-3 font-bold md:mb-4 text-white">
                      {t('contact.emailAddress')}
                    </h6>
                    <a 
                      href={`mailto:${emailAddress}`}
                      className="text-medium text-white hover:text-primary transition-colors duration-200 break-all"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  onClick={handleCallClick}
                  className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 h-auto rounded-medium transition-all duration-200 hover:shadow-lg flex items-center"
                  aria-label="Ugrás a telefonhíváshoz"
                  type="button"
                >
                  <Phone className="size-4 mr-2" />
                  {t('contact.callButton')}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleEmailClick}
                  className="border border-neutral-dark hover:bg-neutral-light hover:text-foreground text-neutral-50 font-medium px-6 py-3 h-auto rounded-medium transition-all duration-200 bg-transparent flex items-center"
                  aria-label="Ugrás az email küldéshez"
                  type="button"
                >
                  <Mail className="size-4 mr-2" />
                  {t('contact.emailButton')}
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </AnimatedGroup>
          
          <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
            <div>
              <img
                src="/images/6930F625-6A63-441B-BA7A-65C232D77FF9.jpeg"
                className="w-full h-[400px] md:h-[500px] rounded-medium object-cover shadow-lg"
                alt="Dr. Szomor Zsófia Anna ügyvédi iroda - személyes konzultáció"
                loading="lazy"
                style={{ backgroundColor: "#222" }}
              />
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}