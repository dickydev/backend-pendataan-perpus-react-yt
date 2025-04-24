import * as anggotaModels from "../models/Anggota.js";

// MENAMBAHKAN anggota BARU
export const addAnggota = async (req, res) => {
  try {
    const { nama, alamat, telepon, email, tanggal_daftar } = req.body;
    const result = await anggotaModels.addAnggota(
      nama,
      alamat,
      telepon,
      email,
      tanggal_daftar
    );

    res.status(201).json({ msg: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// MENDAPATKAN anggota BERDASARKAN ID
export const getAnggotaById = async (req, res) => {
  try {
    const { id } = req.params;
    const anggota = await anggotaModels.getAnggotaById(id);
    if (!anggota) return res.status(404).json({ message: "anggota not found" });
    res.status(200).json({ msg: anggota });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// MENDAPATKAN SEMUA DATA anggota
export const getAllAnggota = async (req, res) => {
  try {
    const anggota = await anggotaModels.getAllAnggota();
    res.status(200).json({ msg: anggota });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// MEMPERBARUI (UPDATE) anggota BERDASARKAN ID
export const updateAnggota = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, alamat, telepon, email, tanggal_daftar } = req.body;
    const updateAnggota = await anggotaModels.updateAnggota(
      id,
      nama,
      alamat,
      telepon,
      email,
      tanggal_daftar
    );
    if (!updateAnggota)
      return res.status(404).json({ message: "anggota not found" });
    res.status(200).json({ msg: updateAnggota });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// MENGHAPUS anggota BERDASARKAN ID
export const deleteAnggota = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAnggota = await anggotaModels.deleteAnggota(id);
    if (!deleteAnggota)
      return res.status(404).json({ message: "anggota not found" });
    res
      .status(200)
      .json({ msg: ["anggota deleted successfully", deleteAnggota] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
