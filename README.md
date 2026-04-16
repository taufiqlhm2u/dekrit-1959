# Dekrit Presiden 5 Juli 1959 — Presentasi Interaktif

Presentasi sejarah **Dekrit Presiden 5 Juli 1959** yang dibuat menggunakan **Next.js** dan **shadcn/ui**.  
Project ini menampilkan materi sejarah dalam bentuk **website interaktif berbasis scroll** dengan animasi, video hero, dan elemen kartu interaktif.

Link akses: <a href="https://taufiqlhm-dekrit.netlify.app" target="_blank">https://taufiqlhm-dekrit.netlify.app</a>

---

## Struktur File

```
dekrit-1959/
├── app/
│   ├── globals.css          ← Tokens, font, animasi global
│   ├── layout.tsx
│   └── page.tsx             ← Halaman utama
│
├── components/
│   ├── ui/
│   │   └── scroll-animated-video.tsx
│   │
│   └── sections/
│       ├── SectionLayout.tsx
│       ├── HeroTitle.tsx
│       ├── Pengertian.tsx
│       ├── LatarBelakang.tsx
│       ├── IsiDekrit.tsx
│       ├── Tujuan.tsx
│       ├── Dampak.tsx
│       ├── Kesimpulan.tsx
│       └── DaftarPustaka.tsx
│
├── public/
│   └── videos/
│       └── hero.mp4         ← ⚠ TARUH FILE VIDEO .MP4 DI SINI
│
├── server.js                ← Startup file untuk cPanel
├── next.config.mjs
├── package.json
├── .htaccess                ← Apache reverse proxy config
└── README.md
```

---

## Setup Lokal

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan di mode development

```bash
npm run dev
```

Buka di browser: `http://localhost:3000`

### 3. Build production (untuk testing lokal)

```bash
npm run build
npm run start
```

---

## 🚀 Deployment ke cPanel (Shared Hosting)

### Persyaratan

- cPanel dengan fitur **Setup Node.js App**
- Node.js **18** atau **20**
- Git sudah terhubung ke repository GitHub

---

### Langkah 1: Push project ke GitHub

Pastikan file berikut **TIDAK** ikut ter-push (sudah ada di `.gitignore`):

- `node_modules/`
- `.next/`
- `.env.local`

```bash
git add .
git commit -m "chore: prepare for cPanel deployment"
git push origin main
```

---

### Langkah 2: Buat Node.js App di cPanel

1. Login ke **cPanel** → cari menu **"Setup Node.js App"**
2. Klik **"Create Application"**
3. Isi form:

| Field | Value |
|---|---|
| Node.js version | `18.x` atau `20.x` |
| Application mode | `Production` |
| Application root | `dekrit-1959` (folder project di server) |
| Application URL | `app.yourdomain.com` atau subdomain tujuan |
| Application startup file | `server.js` ⬅ **WAJIB** |

4. Klik **"Create"**

---

### Langkah 3: Pull kode dari GitHub di cPanel

Bisa via **Git Version Control** di cPanel, atau via **Terminal**:

```bash
cd ~/dekrit-1959
git pull origin main
```

---

### Langkah 4: Install dependencies di server

Di cPanel Terminal atau SSH:

```bash
cd ~/dekrit-1959
npm install --omit=dev
```

> ⚠ **Jangan** jalankan `npm install` tanpa `--omit=dev` di shared hosting untuk menghemat resource dan waktu.

---

### Langkah 5: Build project di server

```bash
cd ~/dekrit-1959
npm run build
```

Pastikan folder `.next/` berhasil dibuat setelah build selesai.

> ⚠ **Jika build gagal:**
> - Cek versi Node.js: `node -v` (harus ≥ 18)
> - Pastikan `NODE_ENV` = `production`
> - Pastikan tidak ada file `.env` yang hilang

---

### Langkah 6: Set environment variable NODE_ENV

Di cPanel → **Setup Node.js App** → pilih app → bagian **Environment Variables**:

```
NODE_ENV = production
```

> PORT akan diset otomatis oleh Passenger — tidak perlu diisi manual.

---

### Langkah 7: Restart Node.js App

1. Di cPanel → **Setup Node.js App**
2. Pilih aplikasi yang sudah dibuat
3. Klik **"Restart"**

Atau via Terminal:

```bash
# Menggunakan virtual environment Passenger
cd ~/dekrit-1959
source /home/USERNAME/nodevenv/dekrit-1959/18/bin/activate
node server.js
```

---

### Langkah 8: Verifikasi

Buka subdomain di browser: `https://app.yourdomain.com`

Jika berhasil, aplikasi Next.js akan tampil dengan benar.

---

## Workflow Update (setelah deploy pertama)

Setiap kali ada perubahan kode:

```bash
# Di lokal
git add .
git commit -m "update: deskripsi perubahan"
git push origin main

# Di server (via cPanel Terminal atau SSH)
cd ~/dekrit-1959
git pull origin main
npm install --omit=dev
npm run build

# Lalu restart app di cPanel → Setup Node.js App → Restart
```

---

## Troubleshooting

### ❌ Build gagal: `Cannot find module 'next'`

```bash
npm install
```

### ❌ Port sudah digunakan

Passenger mengelola port otomatis. Jika menggunakan port manual, ubah `PORT` di environment variable cPanel.

### ❌ `.next` folder tidak ada setelah deploy

Berarti `npm run build` belum dijalankan di server. Build **HARUS** dijalankan di server, bukan push dari lokal.

### ❌ `NODE_ENV` bukan `production`

Set di cPanel → Setup Node.js App → Environment Variables:
```
NODE_ENV = production
```

### ❌ Node.js version salah

cPanel → Setup Node.js App → ubah versi ke `18.x` atau `20.x`.

### ❌ Halaman 404 / tidak routing dengan benar

Pastikan **startup file** di cPanel diset ke `server.js` (bukan `app.js` atau `index.js`).

---

## Fitur Website

### Navigasi

- Scroll ke bawah untuk lanjut ke bagian berikutnya  
- Scroll ke atas untuk kembali  
- Navigasi titik di sisi kanan layar menunjukkan posisi halaman

### Bagian Materi (7 Halaman)

1. **Pengertian**
2. **Latar Belakang**
3. **Isi Dekrit**
4. **Tujuan**
5. **Dampak**
6. **Kesimpulan**
7. **Daftar Pustaka**

### Fitur Video Hero

- Video membesar saat scroll ke bawah
- Loop otomatis
- Kontrol keyboard: `\` (Suara ON/OFF) · `/` (Pause/Play)

> ⚠ Kontrol keyboard hanya tersedia di laptop/PC.

---

## Teknologi

- **Next.js 15+**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Framer Motion**
- **GSAP**
- **AOS**