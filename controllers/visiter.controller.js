import Visiter from "../models/visiter.model.js";
import { tryCatch } from "../utils/tryCatch.js";

export const visiter = tryCatch(async(req,res)=>{
    await Visiter.create({});
    res.status(200).json({ status: "success" });
})