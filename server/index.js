import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

// ✅ Exported function (ye missing tha)
export const createServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use("/api/products", productRoutes);

  return app;
};

// ✅ Agar server.ts se run karna ho to yeh optional starter
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

if (process.env.BUILD !== "true") {
  if (!MONGO_URI) {
    console.error("❌ MONGO_URI is not defined in .env file");
    process.exit(1);
  }

  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("✅ MongoDB Atlas Connected Successfully");
      const app = createServer();
      app.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
      });
    })
    .catch((err) => {
      console.error("❌ MongoDB Connection Error:", err.message);
    });
}
