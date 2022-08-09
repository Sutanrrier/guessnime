import "./Navbar.css";
import { FaInfoCircle, FaQuestionCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="guessnime-navbar-title navbar-brand">GUESSNIME</a>

        <div className="d-flex">
          <a className="guessnime-nav-link" href="#" title="How to play">
            <FaQuestionCircle />
          </a>
          <a className="guessnime-nav-link" href="#" title="Credits">
            <FaInfoCircle />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
