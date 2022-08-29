import { useEffect, useState } from "react"
import getDate from "../../APIs/getDate"
import Load from "../Load"
import Cardplaylist from "./card"


const Playlist = () => {
    const [playlist, setPlaylist] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getDate("playlist").then(el => {
            setPlaylist(el)
            setLoading(false)
        })
    }, [])
    return (
        <div className="mix-prefer">
            {
                !loading && playlist.map(el => {
                    let  url_music  = `http://localhost:2000/${el.image}` 
                    return (
                       <Cardplaylist {...el} key={el.id} image={url_music}/>
                    )
                })
            }
            {
                loading && <Load />
            }
        </div>

    )
}
export default Playlist


