import db from "../config/db.js";

// UNTUK MENAMBAHKAN USER BukuKategori BARU
export const addBukuKategori = async (id_buku, id_kategori) => {
  const [result] = await db.execute(
    "INSERT INTO Buku_Kategori (id_buku, id_kategori) VALUES (?,?)",
    [id_buku, id_kategori]
  );

  return result;
};

// MENGAMBIL SEMUA KATEGORI YANG DIMILIKI OLEH BUKU TERTENTU
export const getBukuKategoriByBukuId = async (id_buku) => {
  const [rows] = await db.execute(
    "SELECT Kategori.* FROM Kategori" +
      "JOIN Buku_Kategori ON Buku_Kategori.id_kategori = Kategori.id_kategori" +
      "WHERE Buku_Kategori.id_buku = ?",
    [id_buku]
  );
  return rows[0];
};

// MENGAMBIL SEMUA BUKU YANG ADA DALAM KETEGORI TERTENTU
export const getBukuByKategoriId = async (id_kategori) => {
  const [rows] = await db.execute(
    "SELECT Buku.* FROM Buku" +
      "JOIN Buku_Kategori ON Buku_Kategori.id_buku = Buku.id_buku" +
      "WHERE Buku_Kategori.id_kategori = ?",
    [id_kategori]
  );
  return rows[0];
};

// MENGAMBIL SEMUA DATA BukuKategori
export const getAllBukuKategori = async () => {
  const [rows] = await db.execute("SELECT * FROM Buku_Kategori");
  return rows;
};

// MENGHAPUS KATEGORI DARI BUKU (MENGHAPUS RELASI BUKU DAN KATEGORI)
export const deleteKategoriFromBuku = async (id_buku, id_kategori) => {
  const [result] = await db.execute(
    "DELETE FROM Buku_Kategori WHERE id_buku = ? AND id_kategori = ?",
    [id_buku, id_kategori]
  );

  return result;
};
