# 7-sonli umumta'lim maktabi — Landing Page

7-sonli umumta'lim maktabi uchun zamonaviy, minimalist va responsive landing page.

## Texnologik Stak

- **Freymvork:** Next.js 16 (App Router, JavaScript)
- **Stil:** Tailwind CSS
- **Ikonkalar:** `lucide-react`
- **Animatsiyalar:** `framer-motion`
- **Rasmlar:** `next/image` (optimizatsiya bilan)

## Dizayn Palitra

| Rang | Kod |
| --- | --- |
| Slate/Dark Neutral (`ink`) | `#0F172A` |
| Pure White | `#FFFFFF` |
| Light Gray (`surface`) | `#F8FAFC` |
| Accent Blue (`accent`) | `#2563EB` |

> Gradiyentlar ishlatilmaydi — toza va minimalist UI.

## O'rnatish

```bash
npm install
npm install lucide-react framer-motion
```

## Ishga tushirish

```bash
npm run dev      # rivojlantirish rejimi
npm run build    # production build
npm run start    # production serverni ishga tushirish
npm run lint     # ESLint tekshiruvi
```

## Loyiha Tuzilishi

```
src/
├── app/
│   ├── layout.js          # Root layout va metadata
│   ├── page.js            # Bo'limlar yig'ilishi
│   └── globals.css        # Tailwind direktivalari va base uslublar
├── data/
│   └── mockData.js        # Maktab, o'qituvchilar va aloqa ma'lumotlari
└── components/
    ├── Header.jsx         # Sticky nav + mobil burger menyu
    ├── Hero.jsx           # Sarlavha, CTA va asosiy rasm
    ├── About.jsx          # Matn, statistika va fotogalereya
    ├── Teachers.jsx       # O'qituvchilar kartochkalari
    ├── MapContact.jsx     # Google Maps + aloqa ma'lumotlari
    └── Footer.jsx         # Minimalist footer
```

## Ma'lumotlarni Sozlash

Barcha kontent `src/data/mockData.js` faylida bitta joyda saqlanadi — maktab
manzili, telefon, email, o'qituvchilar ro'yxati va suratlar shu yerda
o'zgartiriladi.