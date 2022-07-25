import AnimeCover from "./components/AnimeCover/AnimeCover";
import GuessInput from "./components/GuessInput/GuessInput";
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
      </div>
    </>
  );
}

export default App;
