import { Router } from "express";
import * as productCtrl from "../controller/products.controller.js";

const router = Router();

router.post("/", productCtrl.createProduct);

router.get("/", productCtrl.getProduct);

router.get("/:productId", productCtrl.getProduct);

router.put("/:productId", productCtrl.updateProductById);

router.delete("/:productId", productCtrl.deleteProductById);

export default router;
