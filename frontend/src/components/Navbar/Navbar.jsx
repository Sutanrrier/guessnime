import "./Navbar.css";
import { FaInfoCircle, FaQuestionCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <NavLink className="guessnime-navbar-title navbar-brand" to="/">
          GUESSNIME
        </NavLink>

        <div className="d-flex">
          <NavLink
            className="guessnime-nav-link"
            to="/howtoplay"
            title="How to Play"
          >
            <FaQuestionCircle />
          </NavLink>
          <NavLink className="guessnime-nav-link" to="/credits" title="Credits">
            <FaInfoCircle />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
