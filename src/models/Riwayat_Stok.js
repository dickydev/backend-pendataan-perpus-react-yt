import db from "../config/db.js";

// MENAMBAHKAN RIWAYAT PERUBAHAN STOK
export const addRiwayatStok = async (
  id_buku,
  perubahan,
  tanggal_perubahan,
  keterangan
) => {
  const [result] = await db.execute(
    "INSERT INTO Riwayat_Stok (id_buku,perubahan,tanggal_perubahan,keterangan",
    [id_buku, perubahan, tanggal_perubahan, keterangan]
  );

  return result;
};

// MENGAMBIL SEMUA RIWAYAT STOK
export const getAllRiwayatStok = async () => {
  const [rows] = await db.execute("SELECT * FROM Riwayat_Stok");
  return rows;
};
