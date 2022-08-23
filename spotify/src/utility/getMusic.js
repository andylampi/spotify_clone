const getMusic = async() => {
    let req = await fetch("http://localhost:2000/topsix")
    let res = await req.json();
    return res
}
export default getMusic