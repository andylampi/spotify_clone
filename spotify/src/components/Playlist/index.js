const Playlist = ({title, image, some_artist}) => {
    return(
        <div className="card-music">
            <img src={image} alt={title}></img>
            <h4>{title}</h4>
            <span>{some_artist}</span>
        </div>
    )
}
export default Playlist 