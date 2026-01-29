# Sesi 4 – Integrasi Gemini AI (Node.js)

Project ini dibuat sebagai **tugas Sesi 4**, dengan tujuan
membuat REST API sederhana menggunakan **Google Gemini 2.5 Flash**
dan **Node.js + Express**.

## Tujuan Pembelajaran
- Memahami konsep REST API
- Mengintegrasikan API AI (Gemini)
- Mengirim request menggunakan Thunder Client
- Mengelola environment variable dengan dotenv

## Teknologi yang Digunakan
- Node.js
- Express.js
- Google Gemini 2.5 Flash
- dotenv
- Thunder Client

## Instalasi
```bash
npm install
Konfigurasi Environment
Buat file .env:

GEMINI_API_KEY=API_KEY_ANDA
PORT=3000
Menjalankan Server
node index.js
Server akan berjalan di:

http://localhost:3000
Endpoint API
Generate Text
POST /generate-text

Body (JSON):

{
  "prompt": "Jelaskan AI secara singkat"
}
Response:

{
  "success": true,
  "result": "..."
}
Catatan
API key tidak disertakan di repository

Project diuji menggunakan Thunder Client

Digunakan untuk keperluan pembelajaran (Sesi 4)

