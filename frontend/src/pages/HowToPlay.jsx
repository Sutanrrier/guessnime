import "./Pages.css";

import tutorial1 from "../assets/tutorial/tutorial1.jpg";
import tutorial2 from "../assets/tutorial/tutorial2.jpg";
import tutorial3 from "../assets/tutorial/tutorial3.jpg";
import tutorial4 from "../assets/tutorial/tutorial4.jpg";

import { FaArrowCircleRight } from "react-icons/fa";

function HowToPlay() {
  return (
    <div className="container">
      <div className="guessnime-tutorial-card">
        <h1 className="guessnime-tutorial-title">How to play</h1>
        <p className="guessnime-tutorial-text">
          A anime cover is presented to guess in the fewest attempts you can!
        </p>
        <div className="guessnime-tutorial-container">
          <img
            src={tutorial1}
            alt="tutorial-1"
            className="guessnime-tutorial-image"
          />
          <FaArrowCircleRight className="guessnime-tutorial-arrow" />
          <img
            src={tutorial2}
            alt="tutorial-2"
            className="guessnime-tutorial-image"
          />
          <FaArrowCircleRight className="guessnime-tutorial-arrow" />
          <img
            src={tutorial3}
            alt="tutorial-3"
            className="guessnime-tutorial-image"
          />
          <FaArrowCircleRight className="guessnime-tutorial-arrow" />
          <img
            src={tutorial4}
            alt="tutorial-4"
            className="guessnime-tutorial-image"
          />
        </div>
        <p className="guessnime-tutorial-text">
          Each incorrect attempt will be marked in red indicating that you have
          not succeeded and a new portion of the image will be discovered.
        </p>
        <p className="guessnime-tutorial-version">Actual Version: 1.0</p>
      </div>
    </div>
  );
}

export default HowToPlay;
