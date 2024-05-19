import { Router } from "express"

// Router imports
import productRouter from "./product.route"

const router = Router()

router.use(productRouter)
// ...

export default router