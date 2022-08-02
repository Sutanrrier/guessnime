import Game from "./components/Game/Game";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Game />
      </div>
    </>
  );
}

export default App;
