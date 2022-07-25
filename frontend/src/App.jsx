import "bootstrap/dist/css/bootstrap.min.css";
import GuessAnimeNavbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="guessnime-navbar">
        <GuessAnimeNavbar />
      </div>
      <div className="guessnime-content">
        <h1>Teste</h1>
      </div>
    </>
  );
}

export default App;
