import * as pengembalianModels from "../models/Pengembalian.js";

export const addPengembalian = async (req, res) => {
  try {
    const { id_peminjaman, tanggal_pengembalian, denda } = req.body;
    const result = await pengembalianModels.addPengembalian(
      id_peminjaman,
      tanggal_pengembalian,
      denda
    );
    res.status(201).json({ msg: "Pengembalian berhasil ditambahkan", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPengembalianById = async (req, res) => {
  try {
    const { id_pengembalian } = req.params;
    const pengembalian = await pengembalianModels.getPengembalianById(
      id_pengembalian
    );
    if (!pengembalian)
      return res.status(404).json({ msg: "Pengembalian tidak ditemukan" });
    res.status(200).json({ msg: pengembalian });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllPengembalian = async (req, res) => {
  try {
    const pengembalianList = await pengembalianModels.getAllPengembalian();
    res.status(200).json({ msg: pengembalianList });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePengembalian = async (req, res) => {
  try {
    const { id_pengembalian } = req.params;
    const { id_peminjaman, tanggal_pengembalian, denda } = req.body;

    const result = await pengembalianModels.updatePengembalian(
      id_pengembalian,
      id_peminjaman,
      tanggal_pengembalian,
      denda
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ msg: "Pengembalian tidak ditemukan" });

    res.status(200).json({ msg: "Pengembalian berhasil diperbarui, ", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePengembalian = async (req, res) => {
  try {
    const { id_pengembalian } = req.params;
    const result = await pengembalianModels.deletePengembalian(id_pengembalian);
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Pengembalian tidak ditemukan" });
    }
    res.status(200).json({ msg: "Pengembalian berhasil di hapus", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
