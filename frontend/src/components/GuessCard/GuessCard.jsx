import "./GuessCard.css";

function GuessCard(props) {
  const classes = `guessnime-info-card ${props.isActive}`;

  return (
    <div className={classes}>
      <h4>You {props.guessResult}</h4>
      <p className="guessnime-info-card-answer">
        The answer is: {props.coverTitle}
      </p>
      <button className="btn btn-primary guessanime-guess-button">
        {props.buttonType}
      </button>
    </div>
  );
}

export default GuessCard;
