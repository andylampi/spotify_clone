const Cardtopsix = ({title, image}) => {
    return (
        <div className="topsix">
        <img src={image} alt={title} className="topsix-image"></img>
        <div className="topsix-title">
            <h3>{title}</h3>
        </div>
    </div>
    )
}

export default Cardtopsix;