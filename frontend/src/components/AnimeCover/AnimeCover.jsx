import "./AnimeCover.css";

function AnimeCover(props) {
  return (
    <>
      <img
        className="img-fluid mx-auto d-block guessnime-animecover"
        src={props.image}
        alt="anime-cover"
      />
    </>
  );
}

export default AnimeCover;
