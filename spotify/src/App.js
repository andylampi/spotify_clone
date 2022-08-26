import TopSix from "./components/TopSix/index"
import getTopsix from "./utility/getTopsix/index";
import getPlaylist from "./utility/getPlaylist";
import { useState } from "react"
import Load from "./components/Load";
import Regard from "./components/Regard";
import User from "./components/user";
import Logo from "./components/Logo";
import Options from "./components/Options";
import Playlist from "./components/Playlist"


function App() {
  const path = ["topsix", "playlist"]
  const [Topsix, setTopsix] = useState(false)
  const [PlayList, setPlayList] = useState(false)
  const topsix = getTopsix(path[0], setTopsix)
  const playlist = getPlaylist(path[1], setPlayList)
  return (
    <div className="principal">
      <div className="menu">
        <div className="container-logo">
          <Logo />
        </div>
        <div className="options">
          <Options />
        </div>
        <div className="divide"></div>
      </div>
      <div className="main">
        <div className="user">
          <User />
        </div>
        <Regard />
        <div className="topsix-main">
          {
            Topsix && topsix.map(el => {
              return <TopSix {...el} key={el.id} idcss={`music-${el.id}`} />
            })
          }
          {
            !Topsix && <Load />
          }
        </div>
          <div>
            <h3 className="prefer-mix">I tuoi mix preferiti</h3>
          </div>
          <div className="mix-prefer">
            {
              PlayList && playlist.map(el => {
                return <Playlist {...el} key={el.id} idcss={`music-${el.id}`} />
              })
            }
            {
              !Topsix && <Load />
            }
          </div>
      </div>
    </div>
  );
}

export default App;
