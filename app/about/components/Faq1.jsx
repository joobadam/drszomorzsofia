"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/useLanguage";

export function Faq1() {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('about.faq1Question'),
      answer: t('about.faq1Answer')
    },
    {
      question: t('about.faq2Question'),
      answer: t('about.faq2Answer')
    },
    {
      question: t('about.faq3Question'),
      answer: t('about.faq3Answer')
    },
    {
      question: t('about.faq4Question'),
      answer: t('about.faq4Answer')
    },
    {
      question: t('about.faq5Question'),
      answer: t('about.faq5Answer')
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="heading-h2 mb-5 font-bold md:mb-6 text-foreground">
              {t('about.faqTitle')}
            </h2>
            <p className="text-medium text-neutral-dark leading-relaxed">
              {t('about.faqSubtitle')}
            </p>
          </div>
        </AnimatedGroup>

        <AnimatedGroup preset="blur-slide" staggerDelay={0.15}>
          <div>
            <Accordion type="multiple" className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-medium md:py-5 text-left hover:text-primary transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="md:pb-6 text-neutral-dark leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedGroup>

        <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
          <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
            <h4 className="heading-h4 mb-3 font-bold md:mb-4 text-foreground">
              {t('about.moreQuestionsTitle')}
            </h4>
            <p className="text-medium text-neutral-dark">
              {t('about.moreQuestionsText')}
            </p>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}