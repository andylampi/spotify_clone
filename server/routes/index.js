import express from "express";
import topsix from "./topsix/index.js";
import playlist from "./playlist/index.js"

const router = express.Router()

router.get("/", (req,res)=>{
    res.send("Ecco")
})
router.get("/topsix", topsix)
router.get("/playlist", playlist)

export default router