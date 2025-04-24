import * as bukuModels from "../models/Buku.js";

// MENAMBAHKAN BUKU BARU
export const addBuku = async (req, res) => {
  try {
    const { judul, penulis, penerbit, tahun_terbit, stok } = req.body;
    const result = await bukuModels.addBuku(
      judul,
      penulis,
      penerbit,
      tahun_terbit,
      stok
    );

    res.status(201).json({ msg: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// MENDAPATKAN BUKU BERDASARKAN ID
export const getBukuById = async (req, res) => {
  try {
    const { id } = req.params;
    const buku = await bukuModels.getBukuById(id);
    if (!buku) return res.status(404).json({ message: "buku not found" });
    res.status(200).json({ msg: buku });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// MENDAPATKAN SEMUA DATA BUKU
export const getAllBuku = async (req, res) => {
  try {
    const buku = await buku.getAllBuku();
    res.status(200).json({ msg: buku });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// MEMPERBARUI (UPDATE) BUKU BERDASARKAN ID
export const updateBuku = async (req, res) => {
  try {
    const { id } = req.params;
    const { judul, penulis, penerbit, tahun_terbit, stok } = req.body;
    const updateAnggota = await bukuModels.updateBuku(id, {
      judul,
      penulis,
      penerbit,
      tahun_terbit,
      stok,
    });
    if (!updateAnggota)
      return res.status(404).json({ message: "anggota not found" });
    res.status(200).json({ msg: updateAnggota });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// MENGHAPUS anggota BERDASARKAN ID
export const deleteBuku = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBuku = await anggotaModels.deleteAnggota(id);
    if (!deleteBuku)
      return res.status(404).json({ message: "anggota not found" });
    res.status(200).json({ msg: ["anggota deleted successfully", deleteBuku] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
