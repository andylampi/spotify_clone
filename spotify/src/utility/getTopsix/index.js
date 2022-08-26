import getDate from "../getDate"

let arr;
const getTopsix = (path, setTopsix) => {
    getDate(path).then(mus => {
      arr = mus;
      setTopsix(true)
      })
      return arr;
}

export default getTopsix