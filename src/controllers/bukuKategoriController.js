import * as bukuKategoriModels from "../models/Buku_Kategori.js";

// MENAMBAHKAN KETEGORI BARU PADA BUKU
export const addBukuKategori = async (req, res) => {
  try {
    const { id_buku, id_kategori } = req.body;
    const result = await bukuKategoriModels.addBukuKategori(
      id_buku,
      id_kategori
    );

    res
      .status(201)
      .json({ message: "Kategori berhasil ditambahkan pada buku, ", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// MENDAPATKAN KETEGORI YANG DIMILIKI OLEH BUKU TERTENTU
export const getBukuKategoriByBukuId = async (req, res) => {
  try {
    const { id_buku } = req.params;
    const kategori = await bukuKategoriModels.getBukuKategoriByBukuId(id_buku);
    if (!kategori)
      return res
        .status(404)
        .json({ message: "Ketegori tidak ditemukan untuk buku ini" });
    res.status(200).json({ msg: kategori });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// MENDAPATKAN BUKUU YANG ADA DALAM KATEGORI TERTENTU
export const getBukuByKategoriId = async (req, res) => {
  try {
    const { id_kategori } = req.params;
    const buku = await getBukuByKategoriId(id_kategori);
    if (!buku)
      return res
        .status(404)
        .json({ msg: "Buku tidak ditemukan untuk kategori ini" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// MENDAPATKAN SEMUA DATA RELASI BUKU DAN KATEGORI
export const getAllBukuKategori = async (req, res) => {
  try {
    const bukuKategoriList = await bukuKategoriModels.getAllBukuKategori();
    res.status(200).json({ msg: bukuKategoriList });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// MENGHAPUS KATEGORI DARI BULU (MENGHAPUS RELASI BUKU DAN KATEGORI)
export const deleteKategoriFromBuku = async (req, res) => {
  try {
    const { id_buku, id_kategori } = req.params;
    const result = await bukuKategoriModels.deleteKategoriFromBuku(
      id_buku,
      id_kategori
    );
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Relasi buku dan ketegori tidak ditemukan" });
    }
    res.status(200).json({ msg: "kategori berhsail dihapus dari buku" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
