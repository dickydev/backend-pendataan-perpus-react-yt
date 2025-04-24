import express from "express";
import * as bukuKategoriController from "../controllers/bukuKategoriController.js";

const router = express.Router();

router.get("/", bukuKategoriController.getAllBukuKategori);
router.get("/kategori/:id", bukuKategoriController.getBukuByKategoriId);
router.get("/buku/:id", bukuKategoriController.getBukuKategoriByBukuId);
router.post("/", bukuKategoriController.addBukuKategori);
router.delete("/:id", bukuKategoriController.deleteKategoriFromBuku);

export default router;
