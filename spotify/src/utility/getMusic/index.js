import getDate from "../getDate"

const music = [];
const getMusic = (path, setMusic) => {
    getDate(path).then(mus => {
        music.push(mus)
        setMusic(true)
      })
      return music
}

export default getMusic