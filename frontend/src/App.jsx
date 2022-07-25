import AnimeCover from "./components/AnimeCover/AnimeCover";
import GuessInput from "./components/GuessInput/GuessInput";
import LifeHUD from "./components/LifeHUD/LifeHUD";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="guessnime-navbar">
        <Navbar />
      </div>
      <div className="container-fluid">
        <AnimeCover />
        <GuessInput />
        <LifeHUD />
      </div>
    </>
  );
}

export default App;
