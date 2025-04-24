import * as kategoriModels from "../models/Kategori.js";

export const addKategori = async (req, res) => {
  try {
    const { nama_kategori } = req.body;
    const result = await kategoriModels.addKategori(nama_kategori);
    res.status(201).json({ msg: "Kategori berhasil ditambahkan", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getKategoriById = async (req, res) => {
  try {
    const { id_kategori } = req.params;
    const kategori = await kategoriModels.getKategoriById(id_kategori);
    if (!kategori)
      return res.status(404).json({ msg: "Kategori tidak ditemukan" });
    res.status(200).json({ msg: kategori });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllKategori = async (req, res) => {
  try {
    const kategoriList = await kategoriModels.getAllKategori();
    res.status(200).json({ msg: kategoriList });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateKategori = async (req, res) => {
  try {
    const { id_kategori } = req.params;
    const { nama_kategori } = req.body;

    const result = await kategoriModels.updateKategori(
      id_kategori,
      nama_kategori
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ msg: "kategori tidak ditemukan" });

    res.status(200).json({ msg: "Kategori berhasil diperbarui, ", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteKategori = async (req, res) => {
  try {
    const { id_kategori } = req.params;
    const result = await kategoriModels.deleteKategori(id_kategori);
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Kategori tidak ditemukan" });
    }
    res.status(200).json({ msg: "Kategori berhasil di hapus", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
