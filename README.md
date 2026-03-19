# Dekrit Presiden 5 Juli 1959 — Presentasi Interaktif

Presentasi sejarah **Dekrit Presiden 5 Juli 1959** yang dibuat menggunakan **Next.js** dan **shadcn/ui**.  
Project ini menampilkan materi sejarah dalam bentuk **website interaktif berbasis scroll** dengan animasi, video hero, dan elemen kartu interaktif.

---

## Link

<a href="https://taufiqlhm-dekrit.netlify.app" target="_blank">https://taufiqlhm-dekrit.netlify.app</a>
---

## Struktur File

```
dekrit-project/
├── app/
│   ├── globals.css          ← Tokens, font, animasi global
│   ├── layout.tsx
│   └── page.tsx             ← Halaman utama (DemoOne)
│
├── components/
│   ├── ui/
│   │   └── scroll-animated-video.tsx   ← Komponen video hero
│   │
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
│
│   └── NavDots.tsx             ← Navigasi titik kanan layar
│
├── public/
│   └── videos/
│       └── hero.mp4            ← ⚠ TARUH FILE VIDEO .MP4 DI SINI
│
└── README.md
```

---

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Install komponen dari 21st.dev

```bash
npx shadcn@latest add https://21st.dev/r/lovesickfromthe6ix/scroll-animated-video
```

### 3. Jalankan project

```bash
npm run dev
```

Buka di browser:

```
http://localhost:3000
```

---

## Navigasi

Presentasi menggunakan **scroll sebagai navigasi utama**.

- Scroll ke bawah untuk lanjut ke bagian berikutnya
- Scroll ke atas untuk kembali ke bagian sebelumnya
- Setiap bagian **otomatis berhenti di tengah layar**
- Terdapat **navigasi titik di sisi kanan layar** untuk menunjukkan posisi halaman

---

## Bagian Materi (7 Halaman)

Materi presentasi dibagi menjadi 7 bagian:

1. **Pengertian**
2. **Latar Belakang**
3. **Isi Dekrit**
4. **Tujuan**
5. **Dampak**
6. **Kesimpulan**
7. **Daftar Pustaka**

Setiap bagian ditampilkan sebagai **section full screen** agar nyaman dibaca saat presentasi.

---

## Fitur Video

Pada bagian awal terdapat **video hero interaktif**.

Fitur:

- Video **membesar saat scroll ke bawah**
- Video diputar secara **loop**
- Kontrol menggunakan keyboard:

| Tombol | Fungsi |
|------|------|
| `\` (Backslash) | Suara ON / OFF |
| `/` (Slash) | Pause / Play video |

⚠ **Catatan:**  
Kontrol video hanya tersedia untuk **laptop / PC**.

---

## Fitur Interaktif

Website ini memiliki beberapa elemen interaktif:

### Kartu 3D
Beberapa kartu memiliki efek:

- **Berputar mengikuti gerakan mouse**
- Memberikan efek **3D tilt**

### Hover Interaction
Beberapa kartu akan:

- **Berubah tampilan saat mouse hover**
- Menampilkan animasi atau informasi tambahan

---

## Catatan

- Tampilan dirancang khusus untuk **laptop / komputer**
- **Mobile tidak direkomendasikan**

## Teknologi

- **Next.js**
- **React**
- **shadcn/ui**
- **Tailwind CSS**
- **21st.dev Components**