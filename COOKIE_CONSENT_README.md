# Cookie Consent System

Ez a dokumentáció leírja, hogyan használható és testreszabható a cookie consent rendszer az alkalmazásban.

## Áttekintés

A cookie consent rendszer egy teljes körű megoldás, amely:
- Automatikusan megjelenik, amikor a felhasználó először látogatja meg az oldalt
- Lehetővé teszi a felhasználók számára, hogy testreszabják a süti beállításokat
- Támogatja a többnyelvűséget (angol és magyar)
- Responsive design-nal rendelkezik
- Framer Motion animációkat használ
- Tailwind CSS stílusozással rendelkezik

## Komponensek

### 1. CookieConsent.jsx
A fő cookie consent komponens, amely:
- Megjeleníti a cookie consent bannert
- Lehetővé teszi a süti típusok testreszabását
- Kezeli a felhasználói választásokat
- Automatikusan menti a beállításokat localStorage-ba

### 2. useCookieConsent.js
Egy custom hook, amely:
- Kezeli a cookie consent állapotot
- Biztosítja a süti típusok ellenőrzését
- Lehetővé teszi a consent frissítését
- Biztonságosan tárolja a beállításokat

### 3. Privacy Policy Page
Egy részletes adatvédelmi tájékoztató oldal, amely:
- Magyarázza a sütik használatát
- Leírja a különböző süti típusokat
- Biztosít útmutatást a beállítások kezeléséhez

## Használat

### Alapvető integráció

A cookie consent automatikusan megjelenik a layout.js fájlban:

```jsx
import CookieConsent from "@/components/CookieConsent";

// A layout komponensben
<CookieConsent />
```

### Hook használata más komponensekben

```jsx
import { useCookieConsent } from '@/hooks/useCookieConsent';

const MyComponent = () => {
  const { 
    consent, 
    canUseAnalytics, 
    canUseMarketing, 
    canUsePreferences 
  } = useCookieConsent();

  // Ellenőrizze a süti típusokat
  if (canUseAnalytics()) {
    // Analytics kód futtatása
  }

  if (canUseMarketing()) {
    // Marketing funkciók engedélyezése
  }

  return (
    <div>
      {/* Komponens tartalma */}
    </div>
  );
};
```

### Süti típusok ellenőrzése

```jsx
const { consent } = useCookieConsent();

// Ellenőrizze a specifikus süti típust
if (consent && consent.analytics) {
  // Analytics engedélyezve
}

// Vagy használja a helper függvényeket
if (canUseAnalytics()) {
  // Analytics engedélyezve
}
```

## Testreszabás

### Szövegek módosítása

A szövegek a `locales` mappában találhatók:

- `locales/en/common.json` - Angol szövegek
- `locales/hu/common.json` - Magyar szövegek

### Stílusok módosítása

A komponens Tailwind CSS osztályokat használ. A színeket és stílusokat a `CookieConsent.jsx` fájlban módosíthatja:

```jsx
// Színek módosítása
className="bg-purple-600 hover:bg-purple-700" // Fő szín
className="bg-green-600 hover:bg-green-700"   // Elfogadás gomb
className="bg-gray-100 hover:bg-gray-200"     // Elutasítás gomb
```

### Animációk módosítása

A Framer Motion animációkat a `CookieConsent.jsx` fájlban módosíthatja:

```jsx
<motion.div
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 100 }}
  // További animációs beállítások
>
```

## Süti típusok

### 1. Necessary Cookies (Szükséges sütik)
- **Leírás**: Alapvető weboldal funkcionalitáshoz szükséges
- **Állapot**: Mindig engedélyezett, nem kapcsolható ki
- **Használat**: Session kezelés, biztonság, alapvető funkciók

### 2. Analytics Cookies (Analitikai sütik)
- **Leírás**: Weboldal használatának elemzéséhez
- **Állapot**: Felhasználó választhat
- **Használat**: Google Analytics, forgalmi statisztikák

### 3. Marketing Cookies (Marketing sütik)
- **Leírás**: Reklámok és marketing célokra
- **Állapot**: Felhasználó választhat
- **Használat**: Facebook Pixel, Google Ads, remarketing

### 4. Preference Cookies (Preferencia sütik)
- **Leírás**: Felhasználói beállítások mentéséhez
- **Állapot**: Felhasználó választhat
- **Használat**: Nyelvi beállítások, témák, egyéni preferenciák

## GDPR megfelelőség

A rendszer GDPR megfelelő, mivel:
- Explicit consent kérése
- Granulált süti kezelés
- Könnyen elérhető beállítások
- Átlátható információt nyújtás
- Consent visszavonásának lehetősége

## Hibaelhárítás

### Cookie consent nem jelenik meg
1. Ellenőrizze, hogy a `CookieConsent` komponens importálva van-e
2. Ellenőrizze a localStorage-ban a `cookieConsent` kulcsot
3. Törölje a localStorage-t teszteléshez

### Nyelvi fájlok nem működnek
1. Ellenőrizze a `useLanguage` hook konfigurációját
2. Ellenőrizze a `locales` mappa struktúráját
3. Ellenőrizze a JSON fájlok szintaxisát

### Stílusok nem jelennek meg
1. Ellenőrizze a Tailwind CSS konfigurációt
2. Ellenőrizze a CSS importokat
3. Ellenőrizze a build folyamatot

## Fejlesztői megjegyések

- A komponens `'use client'` direktívával van megjelölve
- localStorage-t használ a consent tárolásához
- Framer Motion animációk vannak használva
- Responsive design Tailwind CSS-sel
- TypeScript támogatás könnyen hozzáadható

## Jövőbeli fejlesztések

- [ ] TypeScript támogatás
- [ ] Több süti típus
- [ ] Automatikus consent frissítés
- [ ] A/B tesztelés támogatása
- [ ] Consent analytics
- [ ] Cookie kategóriák bővítése
