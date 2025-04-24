import db from "../config/db.js";

// UNTUK MENAMBAHKAN USER Buku BARU
export const addBuku = async (judul, penulis, penerbit, tahun_terbit, stok) => {
  const [result] = await db.execute(
    "INSERT INTO Buku (judul, penulis, penerbit, tahun_terbit, stok) VALUES (?,?,?,?,?)",
    [judul, penulis, penerbit, tahun_terbit, stok]
  );

  return result;
};

// MENGAMBIL DATA Buku BERDASARKAN ID
export const getBukuById = async (id) => {
  const [rows] = await db.execute("SELECT * FROM Buku WHERE id_buku = ?", [id]);
  return rows[0];
};

// MENGAMBIL SEMUA DATA Buku
export const getAllBuku = async () => {
  const [rows] = await db.execute("SELECT * FROM Buku");
  return rows;
};

// MENGUPDATE DATA Buku
export const updateBuku = async (
  id,
  judul,
  penulis,
  penerbit,
  tahun_terbit,
  stok
) => {
  const [result] = await db.execute(
    "UPDATE Buku SET judul = ?, penulis = ?, penerbit = ?, tahun_terbit = ?, stok = ? WHERE id_buku = ?",
    [judul, penulis, penerbit, tahun_terbit, stok, id]
  );

  return result;
};

// MENGHAPUS DATA Buku
export const deleteBuku = async (id) => {
  const [result] = await db.execute("DELETE FROM Buku WHERE id_buku = ?", [id]);

  return result;
};
