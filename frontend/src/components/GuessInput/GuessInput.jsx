function GuessInput() {
  return (
    <div className="guessnime-form-guess">
      <form className="input-group mb-3">
        <input
          type="text"
          name="guess"
          className="form-control"
          placeholder="🔎 Search an anime..."
          required
        />
        <button>GUESS</button>
      </form>
    </div>
  );
}

export default GuessInput;
