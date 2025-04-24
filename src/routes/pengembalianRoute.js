import express from "express";
import * as pengembalianController from "../controllers/pengembalianController.js";

const router = express.Router();

router.get("/", pengembalianController.getAllPengembalian);
router.get("/:id", pengembalianController.getPengembalianById);
router.post("/", pengembalianController.addPengembalian);
router.put("/:id", pengembalianController.updatePengembalian);
router.delete("/:id", pengembalianController.deletePengembalian);

export default router;
