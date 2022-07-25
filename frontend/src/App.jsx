import AnimeCover from "./components/AnimeCover/AnimeCover";
import GuessInput from "./components/GuessInput/GuessInput";
import LifeHUD from "./components/LifeHUD/LifeHUD";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <AnimeCover />
        <GuessInput />
        <LifeHUD />
      </div>
    </>
  );
}

export default App;
