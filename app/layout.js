import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Footer4 } from "./home/components/Footer4";
import Navbar from "./home/components/Navbar";
import CookieConsent from "@/components/CookieConsent";

// SEO-optimized metadata
export const metadata = {
  title: "Dr. Szomor Zsófia Anna | Ügyvédi Iroda – Polgári jog, családjog, ingatlanjog Budapesten",
  description:
    "Dr. Szomor Zsófia Anna ügyvédi irodája Budapesten. Személyre szabott jogi tanácsadás, polgári jog, családjog, ingatlanjog, peres és peren kívüli képviselet. Vegye fel velünk a kapcsolatot bizalommal!",
  keywords:
    "ügyvéd, jogi tanácsadás, polgári jog, családjog, ingatlanjog, ügyvédi iroda, Budapest, Dr. Szomor Zsófia Anna, jogi képviselet, peres ügyek, szerződés, jogász",
  authors: [{ name: "Dr. Szomor Zsófia Anna" }],
  creator: "Dr. Szomor Zsófia Anna",
  publisher: "Dr. Szomor Zsófia Anna Ügyvédi Iroda",
  openGraph: {
    title: "Dr. Szomor Zsófia Anna | Ügyvédi Iroda – Polgári jog, családjog, ingatlanjog Budapesten",
    description:
      "Személyre szabott jogi tanácsadás és képviselet Budapesten. Polgári jog, családjog, ingatlanjog, peres és peren kívüli ügyek. Vegye fel velünk a kapcsolatot!",
    url: "https://drszomorzsofia.hu",
    siteName: "Dr. Szomor Zsófia Anna Ügyvédi Iroda",
    images: [
      {
        url: "/images/6930F625-6A63-441B-BA7A-65C232D77FF9.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Szomor Zsófia Anna ügyvédi iroda",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Szomor Zsófia Anna | Ügyvédi Iroda – Polgári jog, családjog, ingatlanjog Budapesten",
    description:
      "Személyre szabott jogi tanácsadás és képviselet Budapesten. Polgári jog, családjog, ingatlanjog, peres és peren kívüli ügyek.",
    images: ["/images/6930F625-6A63-441B-BA7A-65C232D77FF9.jpeg"],
    creator: "@drszomorzsofia",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://drszomorzsofia.hu",
    languages: {
      "hu-HU": "https://drszomorzsofia.hu/hu",
      "en-US": "https://drszomorzsofia.hu/en",
    },
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative overflow-x-hidden bg-white`}
      >
        {/* Purple Glow Top Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background: "#ffffff",
            backgroundImage: `
              radial-gradient(
                circle at top center,
                rgba(173, 109, 244, 0.5),
                transparent 70%
              )
            `,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat",
          }}
        />

        <LanguageProvider>
          <LenisProvider>
            <main className="relative z-10">
              <Navbar />
              {children}
            </main>
            <Footer4 />
            <CookieConsent />
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}