"use client"
import { Scale, Shield, Briefcase, Heart, Home, Building2 } from "lucide-react"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { useLanguage } from "@/hooks/useLanguage"

const features = [
  {
    Icon: Scale,
    name: "civil.name",
    description: "civil.description",
    href: "/services/civil",
    cta: "civil.cta",
    background: (
      <div className="absolute -right-20 -top-20 opacity-20">
        <Scale className="h-32 w-32 text-blue-500" />
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Shield,
    name: "criminal.name",
    description: "criminal.description",
    href: "/services/criminal",
    cta: "criminal.cta",
    background: (
      <div className="absolute -right-20 -top-20 opacity-20">
        <Shield className="h-32 w-32 text-red-500" />
      </div>
    ),
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Briefcase,
    name: "labor.name",
    description: "labor.description",
    href: "/services/labor",
    cta: "labor.cta",
    background: (
      <div className="absolute -right-20 -top-20 opacity-20">
        <Briefcase className="h-32 w-32 text-green-500" />
      </div>
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: Heart,
    name: "family.name",
    description: "family.description",
    href: "/services/family",
    cta: "family.cta",
    background: (
      <div className="absolute -right-20 -top-20 opacity-20">
        <Heart className="h-32 w-32 text-pink-500" />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Home,
    name: "realestate.name",
    description: "realestate.description",
    href: "/services/realestate",
    cta: "realestate.cta",
    background: (
      <div className="absolute -right-20 -top-20 opacity-20">
        <Home className="h-32 w-32 text-orange-500" />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Building2,
    name: "corporate.name",
    description: "corporate.description",
    href: "/services/corporate",
    cta: "corporate.cta",
    background: (
      <div className="absolute -right-20 -top-20 opacity-20">
        <Building2 className="h-32 w-32 text-purple-500" />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
  },
]

export default function Layout252() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("services.title")}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">{t("services.subtitle")}</p>
      </div>

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
