import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";

// IMPORT SEMUA ROUTES
import adminRoutes from "./src/routes/adminRoute.js";
import anggotaRoutes from "./src/routes/anggotaRoute.js";
import bukuKategoriRoutes from "./src/routes/bukuKategoriRoute.js";
import bukuRoutes from "./src/routes/bukuRoute.js";
import kategoriRoutes from "./src/routes/kategoriRoute.js";
import peminjamanRoutes from "./src/routes/peminjamanRoute.js";
import pengembalianRoutes from "./src/routes/pengembalianRoute.js";
import riwayatStokRoutes from "./src/routes/riwayatStokRoute.js";

import db from "./src/config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "SECRETBEBAS",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Jika sudah masuk production maka gunakan secure : true (untuk https)
  })
);

app.use(cors());

// KONEKSI TES
(async () => {
  try {
    await db.getConnection();
    console.log("Koneksi ke database berhasil!!");
  } catch (error) {
    console.error("Koneksi ke database gagal!!", error);
  }
})();

app.get("/", (req, res) => {
  res.status(200).json({
    code: 200,
    status: "success", // Menambahkan kode status HTTP
    message: "Sistem pendataan perpustakaan berjalan dengan baik",
  });
});

app.use("/api/admin", adminRoutes);
app.use("/api/anggota", anggotaRoutes);
app.use("/api/buku-kategori", bukuKategoriRoutes);
app.use("/api/buku", bukuRoutes);
app.use("/api/kategori", kategoriRoutes);
app.use("/api/peminjaman", peminjamanRoutes);
app.use("/api/pengembalian", pengembalianRoutes);
app.use("/api/riwayat-stok", riwayatStokRoutes);

// JALANKAN SERVER
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
