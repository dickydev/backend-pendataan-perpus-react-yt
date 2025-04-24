import db from "../config/db.js";

// UNTUK MENAMBAHKAN Peminjaan BARU
export const addPeminjaman = async (
  id_anggota,
  id_buku,
  tanggal_peminjaman,
  tanggal_jatuh_tempo,
  status_pengembalian
) => {
  const [result] = await db.execute(
    "INSERT INTO Peminjaman (id_anggota, id_buku, tanggal_peminjaman, tanggal_jatuh_tempo, status_pengembalian) VALUES (?,?,?,?,?)",
    [
      id_anggota,
      id_buku,
      tanggal_peminjaman,
      tanggal_jatuh_tempo,
      status_pengembalian,
    ]
  );

  return result;
};

// MENGAMBIL DATA Peminjaman BERDASARKAN ID
export const getPeminjamanById = async (id_peminjaman) => {
  const [rows] = await db.execute(
    "SELECT * FROM Peminjaman WHERE id_peminjaman = ?",
    [id_peminjaman]
  );
  return rows[0];
};

// MENGAMBIL SEMUA DATA Peminjaman
export const getAllPeminjaman = async () => {
  const [rows] = await db.execute("SELECT * FROM Peminjaman");
  return rows;
};

// MENGUPDATE DATA Peminjaman
export const updatePeminjaman = async (
  id_peminjaman,
  id_anggota,
  id_buku,
  tanggal_peminjaman,
  tanggal_jatuh_tempo,
  status_pengembalian
) => {
  const [result] = await db.execute(
    "UPDATE Peminjaman SET id_anggota = ?, id_buku = ?, tanggal_peminjaman = ?, tanggal_jatuh_tempo = ? , status_pengembalian = ?  WHERE id_peminjaman = ?",
    [
      id_anggota,
      id_buku,
      tanggal_peminjaman,
      tanggal_jatuh_tempo,
      status_pengembalian,
      id_peminjaman,
    ]
  );

  return result;
};

// MENGHAPUS DATA Peminjaman
export const deletePeminjaman = async (id_peminjaman) => {
  const [result] = await db.execute(
    "DELETE FROM Peminjaman WHERE id_peminjaman = ?",
    [id_peminjaman]
  );

  return result;
};
