import TopSix from "./components/TopSix/index"
import getMusic from "./utility/getMusic";
import { useState } from "react"
import Load from "./components/Load";
import Regard from "./components/Regard";
import User from "./components/user";
import Logo from "./components/Logo";
import Options from "./components/Options";

const music = []

function App() {
  const [Music, setMusic] = useState(false)
  getMusic().then(mus => {
    music.push(mus)
    setMusic(true)
  })
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
            Music && music[0].map(el => {
              return <TopSix {...el} key={el.id} idcss={`music-${el.id}`} />
            })
          }
          {
            !Music && <Load />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
