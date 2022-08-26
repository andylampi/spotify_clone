import { useEffect, useState } from "react"
import getDate from "../../utility/getDate"
import Load from "../Load/index"

const Topsix = () => {
    const [topsix, setTopsix] = useState()
    const [load, setLoad] = useState(false)
    useEffect(() => {
        getDate("topsix").then(el => {
            setTopsix(el)
            setLoad(true)
        })
    }, [])
    return (
        <div className="topsix-main">
            {
                load && topsix.map(el => {
                    return (
                        <div className="topsix">
                            <img src={el.image} alt={el.title} className="topsix-image"></img>
                            <div className="topsix-title">
                                <h3>{el.title}</h3>
                            </div>
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

export default Topsix