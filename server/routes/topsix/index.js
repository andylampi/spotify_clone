import six from "../../DatesMusic/topSix.js"

const topsix = (req,res) => {
    const music = JSON.stringify(six)
    res.send(music)
}

export default topsix