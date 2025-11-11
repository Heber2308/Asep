# 🎸 Toko Gitar Heber - Node.js Server# 🎸 Toko Gitar Heber - Node.js Server



Aplikasi E-Commerce untuk Toko Gitar Heber dengan fitur login, registrasi, dan shopping cart menggunakan Node.js dan Express.Aplikasi E-Commerce untuk Toko Gitar Heber dengan fitur login, registrasi, dan shopping cart.



## 📋 Daftar Isi## 📋 Daftar Isi



- [Instalasi](#instalasi)- [Instalasi](#instalasi)

- [Menjalankan Server](#menjalankan-server)- [Menjalankan Server](#menjalankan-server)

- [Fitur Utama](#fitur-utama)- [Fitur Utama](#fitur-utama)

- [Akun Demo](#akun-demo)- [Akun Demo](#akun-demo)

- [Struktur Folder](#struktur-folder)- [Struktur Folder](#struktur-folder)

- [API Endpoints](#api-endpoints)- [API Endpoints](#api-endpoints)



## 🚀 Instalasi## 🚀 Instalasi



### Prerequisites### Prerequisites

- Node.js (v12 atau lebih tinggi) - [Download di sini](https://nodejs.org/)- Node.js (v12 atau lebih tinggi)

- npm (biasanya terinstal bersama Node.js)- npm (Node Package Manager)



### Langkah-langkah Instalasi### Langkah-langkah



1. **Buka Command Prompt / PowerShell di folder project**1. **Buka Command Prompt/Terminal di folder project**

   ```cmd   ```cmd

   cd c:\xampp\htdocs\kalkulator\Asep   cd c:\xampp\htdocs\kalkulator\Asep

   ```   ```



2. **Install semua dependencies**2. **Install dependencies**

   ```cmd   ```cmd

   npm install   npm install

   ```   ```



   Perintah ini akan menginstall:   Ini akan menginstall semua package yang diperlukan:

   - express (framework web)   - express

   - express-session (session management)   - express-session

   - body-parser (parsing request body)   - body-parser

   - ejs (template engine)   - ejs

   - nodemon (optional, untuk development)

## 🏃 Menjalankan Server

## 🏃 Menjalankan Server

### Cara 1: Menggunakan npm start (Production)

### Metode 1: Production Mode (npm start)```cmd

```cmdnpm start

npm start```

```

### Cara 2: Menggunakan npm dev (Development dengan hot-reload)

### Metode 2: Development Mode dengan Auto-Reload (npm run dev)```cmd

```cmdnpm run dev

npm run dev```

```

Setelah menjalankan salah satu perintah di atas, server akan berjalan di:

Setelah menjalankan salah satu perintah, server akan berjalan di:```

```http://localhost:3000

http://localhost:3000```

```

## ✨ Fitur Utama

Output terminal akan menunjukkan:

```✅ **Login & Registrasi** - Sistem autentikasi user  

==================================================✅ **Dashboard** - Halaman selamat datang setelah login  

Server Toko Gitar Heber berjalan di:✅ **Katalog Produk** - Lihat semua produk gitar  

http://localhost:3000✅ **Shopping Cart** - Tambah/hapus produk dari keranjang  

==================================================✅ **Checkout** - Proses pembelian  

✅ **Session Management** - Kelola sesi user  

User test:✅ **Responsive Design** - Kompatibel di semua device  

Email: admin@tokogiatar.com

Password: admin123## 👤 Akun Demo

==================================================

```### Admin Account

```

## ✨ Fitur UtamaEmail: admin@tokogiatar.com

Password: admin123

✅ **Sistem Login** - Login dengan email dan password  ```

✅ **Registrasi User** - Buat akun baru dengan validasi  

✅ **Session Management** - Session user yang aman  ### User Biasa

✅ **Dashboard** - Halaman selamat datang setelah login  ```

✅ **Katalog Produk** - Lihat semua produk gitar  Email: user@example.com

✅ **Shopping Cart** - Tambah/hapus produk dari keranjang  Password: user123

✅ **Checkout** - Proses pembelian  ```

✅ **Logout** - Keluar dari sistem dengan aman  

✅ **Responsive Design** - Kompatibel di semua device  Anda juga bisa membuat akun baru di halaman **Register**.



## 👤 Akun Demo## 📁 Struktur Folder



### Admin Account```

```Asep/

Email: admin@tokogiatar.com├── server.js                 # File server utama

Password: admin123├── package.json              # Konfigurasi npm

```├── README.md                 # File dokumentasi (ini)

├── img/                      # Folder untuk gambar

### User Biasa│   ├── gitar.jpg

```│   ├── gitar2.jpg

Email: user@example.com│   ├── gitar3.jpg

Password: user123│   ├── gitar4.jpg

```│   ├── ampli.jpg

│   └── kabel.jpg

**Catatan:** Anda juga bisa membuat akun baru di halaman **Register**.├── views/                    # Folder template EJS

│   ├── login.ejs             # Halaman login

## 📁 Struktur Folder│   ├── register.ejs          # Halaman registrasi

│   ├── dashboard.ejs         # Dashboard utama

```│   ├── products.ejs          # Halaman produk

Asep/│   └── 404.ejs               # Halaman 404

├── server.js                 # File server utama (express app)└── node_modules/             # Dependencies (auto-generated)

├── package.json              # Konfigurasi npm dan dependencies```

├── package-lock.json         # Lock file untuk dependencies

├── README.md                 # File dokumentasi ini## 🔌 API Endpoints

├── index.html                # Halaman statis (opsional)

├── img/                      # Folder untuk gambar produk### Authentication Routes

│   ├── gitar.jpg

│   ├── gitar2.jpg| Method | Route | Deskripsi |

│   ├── gitar3.jpg|--------|-------|-----------|

│   ├── gitar4.jpg| GET | `/` | Redirect ke dashboard/login |

│   ├── ampli.jpg| GET | `/login` | Halaman login |

│   └── kabel.jpg| POST | `/login` | Proses login |

├── views/                    # Folder template EJS| GET | `/register` | Halaman registrasi |

│   ├── login.ejs             # Halaman login| POST | `/register` | Proses registrasi |

│   ├── register.ejs          # Halaman registrasi| GET | `/logout` | Logout user |

│   ├── dashboard.ejs         # Dashboard user

│   ├── products.ejs          # Halaman produk & shopping cart### Protected Routes (Memerlukan Login)

│   └── 404.ejs               # Halaman not found

└── node_modules/             # Dependencies (auto-generated, jangan diedit)| Method | Route | Deskripsi |

```|--------|-------|-----------|

| GET | `/dashboard` | Halaman dashboard |

## 🔌 API Endpoints| GET | `/products` | Halaman katalog produk |

| POST | `/api/checkout` | API checkout (JSON) |

### Authentication Routes

## 🔒 Keamanan

| Method | Route | Deskripsi |

|--------|-------|-----------|- Session-based authentication

| GET | `/` | Redirect ke dashboard/login |- Password validation

| GET | `/login` | Halaman login form |- Email uniqueness check

| POST | `/login` | Proses login user |- Protected routes (middleware `isLoggedIn`)

| GET | `/register` | Halaman registrasi form |

| POST | `/register` | Proses registrasi user baru |## 📝 Catatan Pengembangan

| GET | `/logout` | Logout dan destroy session |

- Data user saat ini disimpan dalam array (in-memory)

### Protected Routes (Memerlukan Login)- Untuk production, gunakan database seperti MongoDB atau MySQL

- Password sebaiknya di-hash menggunakan bcrypt

| Method | Route | Deskripsi |- Implementasikan HTTPS untuk keamanan lebih baik

|--------|-------|-----------|

| GET | `/dashboard` | Halaman dashboard |## 🛠️ Troubleshooting

| GET | `/products` | Halaman katalog produk |

| POST | `/api/checkout` | API checkout (JSON response) |### Error: Port 3000 sudah digunakan

Ubah PORT di server.js:

## 🔒 Keamanan```javascript

const PORT = 3001; // atau port lain yang tersedia

- ✅ Session-based authentication```

- ✅ Password validation

- ✅ Email uniqueness check### Module not found error

- ✅ Protected routes dengan middlewareJalankan ulang:

- ✅ Session timeout (24 jam)```cmd

npm install

## 📝 Catatan Penting```



### Development vs Production### Session tidak bekerja

- Gunakan `npm start` untuk productionPastikan browser support cookies dan jangan gunakan private/incognito mode.

- Gunakan `npm run dev` untuk development (auto-reload)

## 📞 Kontak

### Database

- Saat ini data user disimpan dalam memory (array)- Instagram: [@kyy_eyo](https://www.instagram.com/kyy_eyo)

- Untuk production, gunakan database seperti:- WhatsApp: [+62 822-3081-6380](https://wa.me/+6282230816380)

  - MongoDB- Facebook: [Heber](https://www.facebook.com/share/1Enj2iBi6e/)

  - MySQL

  - PostgreSQL## 📄 Lisensi



### Security Improvements untuk ProductionISC

- Hash password menggunakan `bcrypt`

- Gunakan HTTPS bukan HTTP---

- Implementasi CSRF protection

- Gunakan database yang proper**Dibuat dengan ❤️ untuk Toko Gitar Heber**

- Set `cookie.secure = true` saat menggunakan HTTPS

## 🛠️ Troubleshooting

### Error: Port 3000 sudah digunakan
Ubah PORT di server.js:
```javascript
const PORT = 3001; // atau port lain yang tersedia
```

### Error: npm install gagal
```cmd
npm cache clean --force
npm install
```

### Module 'express' not found
```cmd
npm install express express-session body-parser ejs
```

### Session tidak bekerja
- Pastikan browser support cookies
- Jangan gunakan private/incognito mode untuk testing
- Clear browser cookies dan refresh page

## 📞 Support

Jika mengalami masalah, silakan hubungi:
- Instagram: [@kyy_eyo](https://www.instagram.com/kyy_eyo)
- WhatsApp: [+62 822-3081-6380](https://wa.me/+6282230816380)
- Facebook: [Heber](https://www.facebook.com/share/1Enj2iBi6e/)

## 📄 Lisensi

ISC

---

**Dibuat dengan ❤️ untuk Toko Gitar Heber**

**Terakhir diupdate:** 12 November 2025
