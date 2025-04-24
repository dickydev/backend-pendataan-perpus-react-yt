import express from "express";
import * as riwayatStokController from "../controllers/riwayatStokController.js";

const router = express.Router();

router.get("/", riwayatStokController.getAllRiwayatStok);
router.post("/", riwayatStokController.addRiwayatStok);

export default router;
