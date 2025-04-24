import express from "express";
import * as anggotaController from "../controllers/anggotaController.js";

const router = express.Router();

router.get("/", anggotaController.getAllAnggota);
router.get("/:id", anggotaController.getAnggotaById);
router.post("/", anggotaController.addAnggota);
router.put("/:id", anggotaController.updateAnggota);
router.delete("/:id", anggotaController.deleteAnggota);

export default router;
