import mix from "../../DatesMusic/Mix.js"

const topsix = (req,res) => {
    const music = JSON.stringify(mix)
    res.send(music)
}

export default topsix;