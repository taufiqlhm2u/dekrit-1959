# Dekrit Presiden 5 Juli 1959 — Presentasi Interaktif

Project Next.js dengan scroll-animated video dan snap-scroll sections.

## Struktur File

```
dekrit-project/
├── app/
│   ├── globals.css          ← Tokens, font, animasi
│   ├── layout.tsx
│   └── page.tsx             ← Halaman utama (DemoOne)
├── components/
│   ├── ui/
│   │   └── scroll-animated-video.tsx   ← Komponen video hero
│   ├── sections/
│   │   ├── SectionLayout.tsx   ← Layout reusable tiap section
│   │   ├── HeroTitle.tsx       ← Halaman judul
│   │   ├── Pengertian.tsx      ← Bagian 1
│   │   ├── LatarBelakang.tsx   ← Bagian 2
│   │   ├── IsiDekrit.tsx       ← Bagian 3
│   │   ├── Tujuan.tsx          ← Bagian 4
│   │   ├── Dampak.tsx          ← Bagian 5
│   │   ├── Kesimpulan.tsx      ← Bagian 6
│   │   └── DaftarPustaka.tsx   ← Bagian 7
│   └── NavDots.tsx             ← Navigasi titik kanan layar
├── public/
│   └── videos/
│       └── hero.mp4     ← ⚠ TARUH FILE VIDEO .MP4 DI SINI
└── README.md
```

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Install komponen 21st.dev
npx shadcn@latest add https://21st.dev/r/lovesickfromthe6ix/scroll-animated-video

# 3. Taruh file video kamu
cp /path/to/video.mp4 public/videos/hero.mp4

# 4. Jalankan
npm run dev
```

## Alur Halaman

1. **HeroTitle** — Layar judul fullscreen dengan animasi masuk
2. **HeroScrollVideo** — Video yang digerakkan oleh scroll (500vh)
3. **Snap Sections** — 7 section konten dengan scroll snap:
   - Pengertian Dekrit
   - Latar Belakang
   - Isi Dekrit
   - Tujuan
   - Dampak
   - Kesimpulan
   - Daftar Pustaka

## Ganti Video

Edit `app/page.tsx`, ubah prop `media`:
```tsx
<HeroScrollVideo
  media="/videos/nama-file-kamu.mp4"
  ...
/>
```

## Desain

- Display font: **Playfair Display** (serif editorial)
- Body font: **Lora** (serif klasik)
- Mono font: **JetBrains Mono**
- Warna aksen: `#c8a96e` (emas tua)
- Background: `#1a1410` (tinta gelap)
