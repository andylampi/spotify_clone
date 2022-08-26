
const lucheroute = (req,res) => {
    res.sendFile("assets/luche_mix.jpeg", {root: "."})
}
const blancomix = (req,res) => {
    res.sendFile("assets/blanco.jpeg", {root: "."})
}
const mixallegro = (req,res) => {
    res.sendFile("assets/allegro.jpeg", {root: "."})
}
const mixchill = (req,res) => {
    res.sendFile("assets/chill.jpeg", {root: "."})
}
const mixlatino = (req,res) => {
    res.sendFile("assets/latin.jpeg", {root: "."})
}
const mixpop = (req,res) => {
    res.sendFile("assets/italy.jpeg", {root: "."})
}
const paul = (req,res) => {
    res.sendFile("assets/paul.jpeg", {root: "."})
}


export  { lucheroute, blancomix, mixallegro, mixchill, mixlatino, mixpop, paul}