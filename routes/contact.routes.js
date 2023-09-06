import { Router } from "express"
import rateLimit from 'express-rate-limit'; 
import { saveMessage } from "../controllers/contact.controller.js";
const router=Router();

// Middleware for rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 3,
  handler: (req, res) => {
      res.json({status:"Waiting for a while"}); 
  }
});

router.post('/',limiter,saveMessage)
export default router;
