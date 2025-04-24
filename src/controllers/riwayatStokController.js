import * as riwayatStokModels from "../models/Riwayat_Stok.js";

export const addRiwayatStok = async (req, res) => {
  try {
    const { id_buku, perubahan, tanggal_perubahan, keterangan } = req.body;
    const result = await riwayatStokModels.addRiwayatStok(
      id_buku,
      perubahan,
      tanggal_perubahan,
      keterangan
    );
    res.status(201).json({ msg: "Riwayat Stok berhasil ditambahkan", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllRiwayatStok = async (req, res) => {
  try {
    const riwayatStokList = await riwayatStokModels.getAllRiwayatStok();
    res.status(200).json({ msg: riwayatStokList });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
