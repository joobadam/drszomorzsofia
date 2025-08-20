"use client"
import { Scale, Shield, Briefcase, Heart, Home, Building2 } from "lucide-react"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { useLanguage } from "@/hooks/useLanguage"

const features = [
  {
    Icon: Scale,
    name: "services.civil.name",
    description: "services.civil.description",
    href: "/services",
    cta: "services.civil.cta",
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img 
          src="/images/lawyer2.jpg" 
          alt="Polgári jogi szolgáltatások - ügyvédi tanácsadás és képviselet"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    ),
  },
  {
    Icon: Shield,
    name: "services.criminal.name",
    description: "services.criminal.description",
    href: "/services",
    cta: "services.criminal.cta",
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img 
          src="/images/lawyer4.jpg" 
          alt="Büntetőjogi védelem és képviselet - ügyvédi szolgáltatások"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    ),
  },
  {
    Icon: Briefcase,
    name: "services.labor.name",
    description: "services.labor.description",
    href: "/services",
    cta: "services.labor.cta",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img 
          src="/images/lawyer1.jpg" 
          alt="Munkajogi ügyek és munkahelyi viták - szakértő jogi segítség"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    ),
  },
  {
    Icon: Heart,
    name: "services.family.name",
    description: "services.family.description",
    href: "/services",
    cta: "services.family.cta",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img 
          src="/images/patricia-prudente-6UyWK8mDcWo-unsplash.jpg" 
          alt="Családjogi ügyek és válóperek - empátiával és szakértelemmel"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    ),
  },
  {
    Icon: Home,
    name: "services.realestate.name",
    description: "services.realestate.description",
    href: "/services",
    cta: "services.realestate.cta",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img 
          src="/images/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg" 
          alt="Ingatlanjogi ügyek és ingatlantranzakciók - biztonságos jogi háttér"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    ),
  },
  {
    Icon: Building2,
    name: "services.corporate.name",
    description: "services.corporate.description",
    href: "/services",
    cta: "services.corporate.cta",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img 
          src="/images/lawyer5.png" 
          alt="Cégeljárások és társasági jogi tanácsadás - professzionális támogatás"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    ),
  },
]

export function Layout252() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
        <div>
          <h2 className="heading-h2 font-bold text-black mb-4 ">
            {t('home.servicesTitle')}
          </h2>
        </div>
        <div>
          <p className="text-medium mt-4 text-gray-600 leading-relaxed">
            {t('home.servicesDescription')}
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard
            key={feature.name}
            {...feature}
            name={t(feature.name)}
            description={t(feature.description)}
            cta={t(feature.cta)}
          />
        ))}
      </BentoGrid>
    </div>
  )
}