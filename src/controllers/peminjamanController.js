import * as peminjamanModels from "../models/Peminjaman.js";

export const addPeminjaman = async (req, res) => {
  try {
    const {
      id_anggota,
      id_buku,
      tanggal_peminjaman,
      tanggal_jatuh_tempo,
      status_pengembalian,
    } = req.body;
    const result = await peminjamanModels.addPeminjaman(
      id_anggota,
      id_buku,
      tanggal_peminjaman,
      tanggal_jatuh_tempo,
      status_pengembalian
    );
    res.status(201).json({ msg: "Peminjaman berhasil ditambahkan", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPeminjamanById = async (req, res) => {
  try {
    const { id_peminjaman } = req.params;
    const peminjaman = await peminjamanModels.getPeminjamanById(id_peminjaman);
    if (!peminjaman)
      return res.status(404).json({ msg: "Peminjaman tidak ditemukan" });
    res.status(200).json({ msg: peminjaman });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllPeminjaman = async (req, res) => {
  try {
    const peminjamanList = await peminjamanModels.getAllPeminjaman();
    res.status(200).json({ msg: peminjamanList });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePeminjaman = async (req, res) => {
  try {
    const { id_peminjaman } = req.params;
    const {
      id_anggota,
      id_buku,
      tanggal_peminjaman,
      tanggal_jatuh_tempo,
      status_pengembalian,
    } = req.body;

    const result = await peminjamanModels.updatePeminjaman(
      id_peminjaman,
      id_anggota,
      id_buku,
      tanggal_peminjaman,
      tanggal_jatuh_tempo,
      status_pengembalian
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ msg: "Peminjaman tidak ditemukan" });

    res.status(200).json({ msg: "Peminjaman berhasil diperbarui, ", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePeminjaman = async (req, res) => {
  try {
    const { id_peminjaman } = req.params;
    const result = await peminjamanModels.deletePeminjaman(id_peminjaman);
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Peminjaman tidak ditemukan" });
    }
    res.status(200).json({ msg: "Peminjaman berhasil di hapus", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
