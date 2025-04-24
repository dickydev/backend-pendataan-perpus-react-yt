import db from "../config/db.js";

// UNTUK MENAMBAHKAN Peminjaan BARU
export const addPengembalian = async (
  id_peminjaman,
  tanggal_pengembalian,
  denda
) => {
  const [result] = await db.execute(
    "INSERT INTO Pengembalian (id_peminjaman, tanggal_pengembalian, denda) VALUES (?,?,?)",
    [id_peminjaman, tanggal_pengembalian, denda]
  );

  return result;
};

// MENGAMBIL DATA Pengembalian BERDASARKAN ID
export const getPengembalianById = async (id_pengembalian) => {
  const [rows] = await db.execute(
    "SELECT * FROM Pengembalian WHERE id_pengembalian = ?",
    [id_pengembalian]
  );
  return rows[0];
};

// MENGAMBIL SEMUA DATA Pengembalian
export const getAllPengembalian = async () => {
  const [rows] = await db.execute("SELECT * FROM Pengembalian");
  return rows;
};

// MENGUPDATE DATA Pengembalian
export const updatePengembalian = async (
  id_pengembalian,
  id_peminjaman,
  tanggal_pengembalian,
  denda
) => {
  const [result] = await db.execute(
    "UPDATE Pengembalian SET id_peminjaman = ?, tanggal_pengembalian = ?, denda = ?  WHERE id_pengembalian = ?",
    [id_peminjaman, tanggal_pengembalian, denda, id_pengembalian]
  );

  return result;
};

// MENGHAPUS DATA Pengembalian
export const deletePengembalian = async (id_pengembalian) => {
  const [result] = await db.execute(
    "DELETE FROM Pengembalian WHERE id_pengembalian = ?",
    [id_pengembalian]
  );

  return result;
};
