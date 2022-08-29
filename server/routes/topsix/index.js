import six from "../../DatesMusic/topSix.js"

const topsix = (req,res) => {
    const music = JSON.stringify(six)
    res.send(music)
}




const init = (router) => {
    router.get("/topsix", topsix)
}


export default init