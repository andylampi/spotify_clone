import express from "express";
import topsix from "./topsix/index.js";
import playlistInit from "./playlist/index.js"
import topsixInit from "./topsix/index.js"


const router = express.Router()

router.get("/", (req,res)=>{
    res.send("Ecco")
})
playlistInit(router);
topsixInit(router);

export default router