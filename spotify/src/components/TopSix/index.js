import { useEffect, useState } from "react"
import getDate from "../../APIs/getDate"
import Load from "../Load/index"
import Cardtopsix from "./Cardtopsix"

const Topsix = () => {
    const [topsix, setTopsix] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getDate("topsix").then(el => {
            setTopsix(el)
            setLoading(false)
        })
    }, [])
    return (
        <div className="topsix-main">
            {
                !loading && topsix.map(el => {
                    return (
                     <Cardtopsix {...el} key={el.id} />
                    )
                })
            }
            {
                loading && <Load />
            }
        </div>

    )
}

export default Topsix