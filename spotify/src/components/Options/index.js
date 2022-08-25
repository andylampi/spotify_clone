import libreria from "../../assets/libreria.png"
import home from "../../assets/home.png"
import cerca from "../../assets/cerca.png"
import plus from "../../assets/plus.png"
import cuore from "../../assets/cuore.png"
import segnalibro from "../../assets/segnalibro.png"

const Options = () => {
    return (
        <>
            <div className="list-options">
                <img src={home} className="icon icon-up" alt="home"/>
                <h4 className="light-title">Home</h4>
            </div>
            <div className="list-options">
                <img src={cerca} className="icon icon-up" alt="cerca"/>
                <h4 className="light-title">Cerca</h4>
            </div>
            <div className="list-options">
                <img src={libreria} className="icon icon-up" alt="libreria"/>
                <h4 className="light-title">La tua li breria</h4>
            </div>
            <div className="other">
            <div className="list-options-other light">
                <img src={plus} className="icon playlist" alt="playlist"/>
                <h4>Crea playlist</h4>
            </div>
            <div className="list-options-other light">
                <img src={cuore} className="icon heart" alt="cuore"/>
                <h4 >Brani che ti piacciono</h4>
            </div>
            <div className="list-options-other light">
                <img src={segnalibro} className="icon bookmark" alt="segnalibro"/>
                <h4>I tuoi episodi</h4>
            </div>
            </div>
        </>
    )
}

export default Options