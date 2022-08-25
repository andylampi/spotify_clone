import omino from "../../assets/omino.png"
import down from "../../assets/down.png"

let visibi="hidden";

const User = () => {
    
    return (
        <div className="user-menu">
            <div className="container-img">
                <img alt="music" src={omino} className="user-png" />
            </div>
            <h4>Andrea Lampitelli</h4>
            <img src={down} alt="down" className="user-down"></img>
            <div className="user-menu-list" style={{ visibility: `${visibi}` }}>
                <a>Account</a>
                <a>Account</a>
                <a>Assistenza</a>
                <a>Download</a>
                <a>Impostazioni</a>
            </div>
        </div>
    )
}

export default User