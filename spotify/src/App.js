import TopSix from "./components/TopSix/index"
import getMusic from "./utility/getMusic/index";
import { useState } from "react"
import Load from "./components/Load";
import Regard from "./components/Regard";
import User from "./components/user";
import Logo from "./components/Logo";
import Options from "./components/Options";
import Playlist from "./components/Playlist";


function App() {
  const path = ["topsix", "playlist"]
  const [Topsix, setTopSix] = useState(false)
  const [Playlist, setPlaylist] = useState(false)
  const topsix = getMusic(path[0], setTopSix)
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
            TopSix && topsix[0].map(el => {
              return <TopSix {...el} key={el.id} idcss={`music-${el.id}`} />
            })
          }
          {
            !TopSix && <Load />
          }
        </div>
        <div>
          <h3 className="prefer-mix">I tuoi mix preferiti</h3>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default App;
