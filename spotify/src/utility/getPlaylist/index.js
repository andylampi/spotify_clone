import getDate from "../getDate"

let arr;
const getPlaylist = (path, setTopsix) => {
    getDate(path).then(mus => {
      arr = mus;
      setTopsix(true)
      })
      return arr;
}

export default getPlaylist