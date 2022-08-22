import express from "express";
import topsix from "./topsix/index.js";

const router = express.Router()

router.get("/", (req,res)=>{
    res.send("Ecco")
})
router.get("/topsix", topsix)

export default router