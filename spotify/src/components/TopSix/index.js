
const TopSix = ({title,image, idcss}) => {
    return (
        <div className={`topsix ${idcss}`}>
           <img src={image} className="topsix-image"></img>
           <div className="topsix-title">
           <h3>{title}</h3>
           </div>
        </div>
    )
}

export default TopSix