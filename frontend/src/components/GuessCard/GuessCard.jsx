import "./GuessCard.css";

function GuessCard(props) {
  return (
    <>
      <h4>You {props.guessResult}</h4>
      <p className="guessnime-info-card-answer">
        The answer is: {props.coverTitle}
      </p>
    </>
  );
}

export default GuessCard;
