import { useEffect, useState } from "react"
import getDate from "../../utility/getDate"
import Load from "../Load"

const Playlist = () => {
    const [playlist, setPlaylist] = useState()
    const [load, setLoad] = useState(false)
    useEffect(() => {
        getDate("playlist").then(el => {
            setPlaylist(el)
            setLoad(true)
        })
    }, [])
    return (
        <div className="mix-prefer">
            {
                load && playlist.map(el => {
                    return (
                        <div className="card-music">
                            <img src={el.image} alt={el.title}></img>
                            <h4>{el.title}</h4>
                            <span>{el.some_artist} e altro</span>
                        </div>
                    )
                })
            }
            {
                !load && <Load />
            }
        </div>

    )
}
export default Playlist


