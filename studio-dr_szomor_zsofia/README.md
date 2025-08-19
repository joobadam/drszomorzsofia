# Dr. Szomor Zsófia - Sanity Studio

Ez a Sanity Studio a Dr. Szomor Zsófia Anna ügyvédi iroda tudástárának kezeléséhez.

## 🚀 Gyors indítás

```bash
# Függőségek telepítése
npm install

# Fejlesztői szerver indítása
npm run dev

# Build
npm run build

# Deploy
npm run deploy
```

## 📁 Projekt struktúra

```
studio-dr_szomor_zsofia/
├── schemas/           # Content típusok
│   ├── post.ts       # Blog cikkek
│   ├── category.ts   # Kategóriák
│   ├── author.ts     # Szerzők
│   └── blockContent.ts # Rich text tartalom
├── sanity.config.ts  # Sanity konfiguráció
├── sanity.cli.ts     # CLI konfiguráció
└── package.json      # Függőségek
```

## 🎯 Content típusok

### 1. **Post (Blog cikk)**
- Cím, slug, szerző
- Fő kép, kategóriák
- Kivonat, teljes tartalom
- SEO mezők, olvasási idő
- Publikálási dátum

### 2. **Category (Kategória)**
- Név, leírás, slug
- Szín, ikon
- Megjelenítési sorrend
- Kiemelt kategória

### 3. **Author (Szerző)**
- Név, biográfia
- Profi cím, szakterületek
- Kapcsolati információk
- Közösségi média

### 4. **BlockContent (Rich text)**
- Szöveg formázás (H1-H4, felsorolások)
- Képek, kód blokkok
- Táblázatok, linkek
- Belső hivatkozások

## 🔧 Konfiguráció

- **Project ID**: `0bk6d52j`
- **Dataset**: `production`
- **API Version**: `2024-01-01`

## 📝 Első lépések

1. **Indítsd el a Studio-t**: `npm run dev`
2. **Nyisd meg**: `http://localhost:3333`
3. **Hozz létre egy szerzőt** (Dr. Szomor Zsófia)
4. **Hozz létre kategóriákat**:
   - Polgári jog
   - Családjog
   - Ingatlanjog
   - Büntetőjog
   - Európai emberi jogok
5. **Hozz létre blog cikkeket**

## 🎨 Testreszabás

A Studio testreszabható a `sanity.config.ts` fájlban:
- Studio név és cím
- Pluginek (Vision, Desk)
- Egyéni komponensek

## 📱 Reszponzív design

A Studio automatikusan reszponzív és mobilbarát.

## 🔐 Biztonság

- API kulcsok `.env` fájlban
- CORS beállítások
- Felhasználói jogosultságok

## 📊 Analytics

A Vision plugin segítségével lekérdezéseket futtathatsz:
- Összes cikk
- Kategóriák szerint
- Szerzők szerint
- Publikálási dátumok

## 🚀 Deploy

```bash
npm run deploy
```

Ez feltölti a Studio-t a Sanity CDN-re és elérhető lesz a projekt beállításokban.
