import omino from "../../assets/omino.png"
import down from "../../assets/down.png"


const User = () => {
    
    return (
        <div className="user-menu">
            <div className="container-img">
                <img alt="music" src={omino} className="user-png" />
            </div>
            <h4>Andrea Lampitelli</h4>
            <img src={down} alt="down" className="user-down"></img>
            <div className="user-menu-list" style={{ visibility: `hidden` }}>
                <a href="#">Account</a>
                <a href="#">Account</a>
                <a href="#">Assistenza</a>
                <a href="#">Download</a>
                <a href="#"> Impostazioni</a>
            </div>
        </div>
    )
}

export default User