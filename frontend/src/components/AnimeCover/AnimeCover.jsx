import "./AnimeCover.css";

function AnimeCover(props) {
  const classes = `img-fluid mx-auto d-block guessnime-animecover ${props.guessType}`;
  return (
    <>
      <img className={classes} src={props.image} alt="anime-cover" referrerPolicy="no-referrer" />
    </>
  );
}

export default AnimeCover;
