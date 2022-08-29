import mix from "../../DatesMusic/Mix.js"

const playlist = (req,res) => {
    const music = JSON.stringify(mix)
    res.send(music)
}



const init = (router) => {
    router.get("/playlist", playlist)
}


export default init;