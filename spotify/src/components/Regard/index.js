
const date = new Date();
const hours = date.getHours();


const Regard = () => {
    if(hours >= 6 && hours <= 14) {
        return <h3 className="regard">Buongiorno</h3>
    }
   if(hours >= 14 && hours <= 19){
    return <h3 className="regard">Buon pomeriggio</h3>
   }
   else {
    return <h3 className="regard">Buona sera</h3>
   }
}

export default  Regard;