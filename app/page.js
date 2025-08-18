'use client';

import { useLenisContext } from "@/components/LenisProvider";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import Home from "./home/page";

export default function page() {
  const { scrollToTop, scrollToBottom } = useLenisContext();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      
   <Home/>
    </div>
  );
}
