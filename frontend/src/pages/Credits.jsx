import "./Credits.css";

import logo from "../assets/credit-logo.png";

function Credits() {
  return (
    <div className="container">
      <div className="guessnime-credits-card">
        <img
          className="img-fluid mx-auto d-block guessnime-credits-logo"
          src={logo}
        />
        <h1 className="guessnime-credits-title">Hello!</h1>
        <p className="guessnime-credits-text">
          Guessnime is a game for anime fans created by me,
          <span className="guessnime-credits-author">Sutanrrier!</span>
        </p>
        <p className="guessnime-credits-text">
          Inspired by
          <a href="https://www.gamedle.wtf/" className="guessnime-credits-link">
            Gamedle
          </a>
          and
          <a href="https://framed.wtf/" className="guessnime-credits-link">
            Framed
          </a>
        </p>
        <p className="guessnime-credits-text">
          All rights go to the rightful owners - no copyright infringement
          intended.
        </p>
        <p className="guessnime-credits-text">
          You can follow me at
          <a
            href="https://twitter.com/Sutanrrier"
            className="guessnime-credits-link"
          >
            Twitter
          </a>
        </p>
      </div>
    </div>
  );
}

export default Credits;
