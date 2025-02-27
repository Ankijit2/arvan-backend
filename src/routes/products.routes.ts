import { Router } from 'express';
import productController from "../controllers/product.controller.js";

const router = Router();

// Create a new product
router.post("/", productController.addProduct);

// Add a color to an existing product
router.post("/color", productController.addColor);

// Add sizes & stock to a product color
router.post("/sizes", productController.addSizes);

// Update stock for a specific product variant (size)
router.put("/stock", productController.updateStock);

// Update product details
router.put("/:id", productController.updateProduct);

// Delete a product
router.delete("/:id", productController.deleteProduct);

// Delete a product color
router.delete("/color/:id", productController.deleteColor);

// Delete a product variant (size)
router.delete("/variant/:id", productController.deleteVariant);

// Delete an image
router.delete("/asset/:id", productController.deleteAsset);

// Get product details by ID
router.get("/:id", productController.getProduct);

// Get all products
router.get("/", productController.getAllProduct);

export default router;
