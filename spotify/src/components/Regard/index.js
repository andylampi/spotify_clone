import {useState} from "react"

const date = new Date();
const hours = date.getHours();


const Regard = () => {
    if(hours >= 6 && hours <= 14) {
        return <h3 className="regard">Buon Giorno</h3>
    }
   if(hours >= 14 && hours <= 19){
    return <h3 className="regard">Buon Pomeriggio</h3>
   }
   else {
    return <h3 className="regard">Buona Sera</h3>
   }
}

export default  Regard;