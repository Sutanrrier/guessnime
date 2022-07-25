import "./GuessInput.css";

import { useForm } from "react-hook-form";

function GuessInput() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form className="guessnime-guess-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="guess"
          placeholder="🔎 Search an anime..."
          className="guessnime-guess-input"
          {...register("guess", { required: true })}
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
