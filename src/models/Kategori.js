import db from "../config/db.js";

// UNTUK MENAMBAHKAN Kategori BARU
export const addKategori = async (nama_kategori) => {
  const [result] = await db.execute(
    "INSERT INTO Kategori (nama_kategori) VALUES (?)",
    [nama_kategori]
  );

  return result;
};

// MENGAMBIL DATA Kategori BERDASARKAN ID
export const getKategoriById = async (id_kategori) => {
  const [rows] = await db.execute(
    "SELECT * FROM Kategori WHERE id_kategori = ?",
    [id_kategori]
  );
  return rows[0];
};

// MENGAMBIL SEMUA DATA Kategori
export const getAllKategori = async () => {
  const [rows] = await db.execute("SELECT * FROM Kategori");
  return rows;
};

// MENGUPDATE DATA Kategori
export const updateKategori = async (id_kategori, nama_kategori) => {
  const [result] = await db.execute(
    "UPDATE Kategori SET nama_kategori = ? WHERE id_kategori = ?",
    [nama_kategori, id_kategori]
  );

  return result;
};

// MENGHAPUS DATA Kategori
export const deleteKategori = async (id_kategori) => {
  const [result] = await db.execute(
    "DELETE FROM Kategori WHERE id_kategori = ?",
    [id_kategori]
  );

  return result;
};
