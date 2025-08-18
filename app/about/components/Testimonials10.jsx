"use client";

import React, { useEffect, useState } from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `relative mx-[3px] inline-block size-2 rounded-full transition-colors duration-200 ${
      current === index + 1 ? "bg-white" : "bg-white/30"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Testimonials10() {
  const { t } = useLanguage();
  const carouselState = useCarousel();

  const testimonials = [
    {
      text: t('about.testimonial1'),
      name: "Nagy Péter",
      role: t('about.client'),
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256&facepad=2"
    },
    {
      text: t('about.testimonial2'),
      name: "Kovács Anna",
      role: t('about.client'), 
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&facepad=2"
    }
  ];

  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-primary">
      <div className="container">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
          <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <h2 className="heading-h3 font-bold text-white mb-4">
              {t('about.testimonialsTitle')}
            </h2>
            <p className="text-medium text-white/80">
              {t('about.testimonialsSubtitle')}
            </p>
          </div>
        </AnimatedGroup>

        <AnimatedGroup preset="blur-slide" staggerDelay={0.15}>
          <div>
            <Carousel
              setApi={carouselState.setApi}
              opts={{ loop: true, align: "start" }}
              className="overflow-hidden"
            >
              <div className="relative pb-12 md:pb-16 lg:px-8">
                <CarouselContent className="ml-0">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="pl-0 md:px-16 lg:px-6">
                      <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center text-center">
                        <div className="mb-6 flex md:mb-8">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className="size-6 text-white fill-white" 
                            />
                          ))}
                        </div>
                        <blockquote className="heading-h5 font-bold text-white mb-6 md:mb-8 leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="flex w-full flex-col items-center gap-3 text-center md:w-auto md:flex-row md:gap-5">
                          <div>
                            <img
                              src={testimonial.avatar}
                              alt={`${testimonial.name} profilképe`}
                              className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="mb-4 md:mb-0">
                            <p className="font-semibold text-white">{testimonial.name}</p>
                            <p className="text-white/80">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
                
                <div className="absolute right-0 bottom-0 left-0 z-20 flex h-7 justify-center pt-2.5">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={carouselState.handleDotClick(index)}
                      className={carouselState.dotClassName(index)}
                      aria-label={`Ugrás a ${index + 1}. véleményhez`}
                    />
                  ))}
                </div>
              </div>
            </Carousel>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}