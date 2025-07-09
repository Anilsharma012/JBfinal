// server/routes/products.ts
import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  getProductStats,
} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

router.get("/category/:category", getProductsByCategory);
router.get("/stats", getProductStats);

export default router;
