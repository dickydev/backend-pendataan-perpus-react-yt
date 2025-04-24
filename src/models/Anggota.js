import db from "../config/db.js";

// UNTUK MENAMBAHKAN USER Anggota BARU
export const addAnggota = async (
  nama,
  alamat,
  telepon,
  email,
  tanggal_daftar
) => {
  const [result] = await db.execute(
    "INSERT INTO Anggota (nama, alamat, telepon, email, tanggal_daftar) VALUES (?,?,?,?,?)",
    [nama, alamat, telepon, email, tanggal_daftar]
  );

  return result;
};

// MENGAMBIL DATA Anggota BERDASARKAN ID
export const getAnggotaById = async (id) => {
  const [rows] = await db.execute(
    "SELECT * FROM Anggota WHERE id_anggota = ?",
    [id]
  );
  return rows[0];
};

// MENGAMBIL SEMUA DATA Anggota
export const getAllAnggota = async () => {
  const [rows] = await db.execute("SELECT * FROM Anggota");
  return rows;
};

// MENGUPDATE DATA Anggota
export const updateAnggota = async (
  id,
  nama,
  alamat,
  telepon,
  email,
  tanggal_daftar
) => {
  const [result] = await db.execute(
    "UPDATE Anggota SET nama = ?, alamat = ?, telepon = ?, email = ?, tanggal_daftar = ? WHERE id_anggota = ?",
    [nama, alamat, telepon, email, tanggal_daftar, id]
  );

  return result;
};

// MENGHAPUS DATA Anggota
export const deleteAnggota = async (id) => {
  const [result] = await db.execute(
    "DELETE FROM Anggota WHERE id_anggota = ?",
    [id]
  );

  return result;
};
