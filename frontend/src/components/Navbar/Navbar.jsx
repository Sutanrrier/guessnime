import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/guessnime-logo.svg";

function GuessAnimeNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            GUESSNIME
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default GuessAnimeNavbar;
