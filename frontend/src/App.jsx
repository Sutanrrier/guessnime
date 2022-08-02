import Game from "./components/Game/Game";
import LifeHUD from "./components/LifeHUD/LifeHUD";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Game />
        <LifeHUD />
      </div>
    </>
  );
}

export default App;
