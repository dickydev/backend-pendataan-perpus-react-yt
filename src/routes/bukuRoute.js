import express from "express";
import * as bukuController from "../controllers/bukuController.js";

const router = express.Router();

router.get("/", bukuController.getAllBuku);
router.get("/:id", bukuController.getBukuById);
router.post("/", bukuController.addBuku);
router.put("/:id", bukuController.updateBuku);
router.delete("/:id", bukuController.deleteBuku);

export default router;
