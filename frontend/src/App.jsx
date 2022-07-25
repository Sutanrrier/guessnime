import "bootstrap/dist/css/bootstrap.min.css";
import AnimeCover from "./components/AnimeCover/AnimeCover";
import GuessInput from "./components/GuessInput/GuessInput";
import GuessAnimeNavbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="guessnime-navbar">
        <GuessAnimeNavbar />
      </div>
      <div className="container">
        <AnimeCover />
        <GuessInput />
      </div>
    </>
  );
}

export default App;
