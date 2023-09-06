import { Router } from "express"
import { visiter } from "../controllers/visiter.controller.js";
const router=Router();

// Middleware for rate limiting

router.post('/',visiter)

export default router;
