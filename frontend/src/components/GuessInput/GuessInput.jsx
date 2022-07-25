import "./GuessInput.css";

function GuessInput() {
  return (
    <div>
      <form className="guessnime-guess-form">
        <input
          type="text"
          name="guess"
          placeholder="🔎 Search an anime..."
          className="guessnime-guess-input"
          required
        />
        <button
          type="submit"
          className="btn btn-primary guessanime-guess-button"
        >
          GUESS!
        </button>
      </form>
    </div>
  );
}

export default GuessInput;
