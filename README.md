
# DORO Website (GitHub Pages)

Minimal site untuk memenuhi persyaratan Google Play (Privacy Policy URL & Account Deletion).

## Struktur
- `/index.html` — Landing (ID)
- `/terms` — Ketentuan Layanan & Kebijakan Privasi (v1.2.1)
- `/delete` — Cara hapus akun
- `/assets/style.css` — Gaya sederhana
- `/robots.txt` & `/sitemap.xml`
- `CNAME` — custom domain: `dorokampus.com`

## Deploy (GitHub Pages)
1. Buat repo di GitHub: **dorokampus-site** (atau nama lain).
2. Upload semua file ini ke branch **main**.
3. Settings → Pages → **Deploy from a branch** → Branch: `main` / folder: `/ (root)` → Save.
4. Settings → Pages → **Custom domain**: `dorokampus.com` → Save (akan membuat file `CNAME`).

## DNS untuk `dorokampus.com`
- Tambahkan A record (apex) ke IP GitHub Pages (lihat dokumentasi terkini GitHub) **atau** gunakan CNAME flattening dari penyedia DNS Anda.
- Tambahkan `www` (optional) sebagai CNAME ke `USERNAME.github.io` jika ingin.

> Pastikan sertifikat HTTPS aktif (GitHub Pages akan provisioning otomatis).

## Google Play Console
- App content → Privacy policy: `https://dorokampus.com/terms`
- Account deletion support URL (jika diminta): `https://dorokampus.com/delete`

Kontak dukungan: `support@dorokampus.com`
