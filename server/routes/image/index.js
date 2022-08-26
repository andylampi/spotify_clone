
const lucheroute = (req,res) => {
    res.sendFile("assets/luche_mix.png", {root: "."})
}
const blancomix = (req,res) => {
    res.sendFile("assets/Blanco_mix.png", {root: "."})
}
const mixallegro = (req,res) => {
    res.sendFile("assets/Mix_allegro.png", {root: "."})
}
const mixchill = (req,res) => {
    res.sendFile("assets/Mix_chill.png", {root: "."})
}
const mixlatino = (req,res) => {
    res.sendFile("assets/Mix_latino.png", {root: "."})
}
const mixpop = (req,res) => {
    res.sendFile("assets/Mix_pop.png", {root: "."})
}
const paul = (req,res) => {
    res.sendFile("assets/Paul_Kalkbrenner_mix.png", {root: "."})
}


export  { lucheroute, blancomix, mixallegro, mixchill, mixlatino, mixpop, paul}