import Topsix from "./components/TopSix/index"
import Regard from "./components/Regard";
import User from "./components/user";
import Logo from "./components/Logo";
import Options from "./components/Options";
import Playlist from "./components/Playlist";



function App() {
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
        <Topsix />
        <div>
          <h3 className="prefer-mix">I tuoi mix preferiti</h3>
        </div>
        <Playlist />
      </div>
    </div>
  );
}

export default App;
