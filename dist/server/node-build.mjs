import path from "path";
import * as express from "express";
import express__default from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
const Product = mongoose.model("Product", productSchema);
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    const productWithId = {
      ...product.toObject(),
      id: product._id.toString()
    };
    res.status(201).json({ success: true, data: productWithId });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    const productWithId = {
      ...product.toObject(),
      id: product._id.toString()
    };
    res.status(200).json({ success: true, data: productWithId });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    const productsWithId = products.map((product) => ({
      ...product.toObject(),
      id: product._id.toString()
    }));
    res.status(200).json({ success: true, data: productsWithId });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Product.findByIdAndUpdate(id, req.body, {
      new: true
    });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    const productWithId = {
      ...updated.toObject(),
      id: updated._id.toString()
    };
    res.json({ success: true, data: productWithId });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.find({ category });
    const productsWithId = products.map((product) => ({
      ...product.toObject(),
      id: product._id.toString()
    }));
    res.json({ success: true, data: productsWithId });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getProductStats = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const inStock = await Product.countDocuments({ inStock: true });
    const outOfStock = await Product.countDocuments({ inStock: false });
    res.json({
      success: true,
      data: {
        total: totalProducts,
        inStock,
        outOfStock
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const router = express__default.Router();
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/category/:category", getProductsByCategory);
router.get("/stats", getProductStats);
const __filename = fileURLToPath(import.meta.url);
const __dirname$1 = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname$1, "../.env") });
const createServer = () => {
  const app2 = express__default();
  app2.use(cors());
  app2.use(express__default.json());
  app2.use("/api/products", router);
  return app2;
};
const PORT = process.env.PORT || 4e3;
const MONGO_URI = process.env.MONGO_URI;
if (process.env.BUILD !== "true") {
  if (!MONGO_URI) {
    console.error("❌ MONGO_URI is not defined in .env file");
    process.exit(1);
  }
  mongoose.connect(MONGO_URI).then(() => {
    console.log("✅ MongoDB Atlas Connected Successfully");
    const app2 = createServer();
    app2.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  }).catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
  });
}
const app = createServer();
const port = process.env.PORT || 3e3;
const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");
app.use(express.static(distPath));
app.get("*", (req, res) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }
  res.sendFile(path.join(distPath, "index.html"));
});
app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});
process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
//# sourceMappingURL=node-build.mjs.map
