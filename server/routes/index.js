import express from "express";
import topsix from "./topsix/index.js";
import playlist from "./playlist/index.js"
import { lucheroute, blancomix, mixallegro, mixchill, mixlatino, mixpop, paul} from "./image/index.js";

const router = express.Router()

router.get("/", (req,res)=>{
    res.send("Ecco")
})
router.get("/topsix", topsix)
router.get("/playlist", playlist)
router.get("/playlist/luche", lucheroute)
router.get("/playlist/blanco", blancomix)
router.get("/playlist/mixallegro", mixallegro)
router.get("/playlist/mixchill", mixchill)
router.get("/playlist/mixlatino", mixlatino)
router.get("/playlist/mixpop", mixpop)
router.get("/playlist/paul", paul)


export default router