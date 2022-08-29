const Cardplaylist = ({ image, title, some_artist }) => {
    return (
        <div className="card-music">
            <img src={image} alt={title}></img>
            <div className="card-music-text">
                <h4>{title}</h4>
                <span>{some_artist} e altro</span>
            </div>
        </div>
    )
}
export default Cardplaylist;