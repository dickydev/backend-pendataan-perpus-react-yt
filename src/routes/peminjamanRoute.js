import express from "express";
import * as peminjamanController from "../controllers/peminjamanController.js";

const router = express.Router();

router.get("/", peminjamanController.getAllPeminjaman);
router.get("/:id", peminjamanController.getPeminjamanById);
router.post("/", peminjamanController.addPeminjaman);
router.put("/:id", peminjamanController.updatePeminjaman);
router.delete("/:id", peminjamanController.deletePeminjaman);

export default router;
