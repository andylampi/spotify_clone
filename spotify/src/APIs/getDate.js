const BASE_URL = "http://localhost:2000/"


const getDate = async(url) => {
    let req = await fetch(`${BASE_URL}${url}`)
    let res = await req.json();
    return res
}
export default getDate
