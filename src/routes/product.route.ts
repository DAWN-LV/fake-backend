import { Router } from "express"
import productController from "../controllers/product.controller"

const router = Router()

router.post("/users", (req) => productController.create(req.body))
router.get("/users", () => productController.findAll())

export default router