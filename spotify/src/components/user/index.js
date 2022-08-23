import { useState } from "react"

let visibility="hidden";

const User = () => {
    const [isHidden, setIsHidden] = useState(false)
    if(isHidden) visibility="none"
    console.log(isHidden, visibility)
    return (
        <div className="user-menu">
            <div className="user-menu-title">
            <img src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/user.png" className="user-png"/>
                <h4 onClick={()=>{setIsHidden(true)}}>Steve Jobs</h4>
                <div className="user-menu-list" style={{visibility: `${visibility}`}}>
                    <a>Account</a>
                    <a>Account</a>
                    <a>Assistenza</a>
                    <a>Download</a>
                    <a>Impostazioni</a>
                </div>
            </div>
        </div>
    )
}

export default User