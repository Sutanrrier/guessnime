import "./GuessInput.css";

import { useForm } from "react-hook-form";
import { useState } from "react";

function GuessInput() {
  const { register, handleSubmit, setValue } = useForm();

  const [guess, setGuess] = useState("");
  const [covers, setCovers] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
  };

  function handleChangeInput(event) {
    const actualGuess = event.target.value;
    setGuess(actualGuess);

    if (actualGuess.length > 3) {
      const url = `http://localhost:8080/anime-covers/guess?title=${guess}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCovers(data);
        });
    } else {
      setCovers([]);
    }
  }

  return (
    <div>
      <ul className="guessnime-anime-list">
        {covers.map((data) => {
          return (
            <li
              key={data.id}
              id={data.id}
              className="guessnime-anime-list-item"
              onClick={() => {
                setGuess(data.title);
                setCovers([]);
                setValue("guess", data.title);
              }}
            >
              {data.title}
            </li>
          );
        })}
      </ul>
      <form className="guessnime-guess-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="guess"
          placeholder="🔎 Search an anime..."
          className="guessnime-guess-input"
          value={guess}
          {...register("guess")}
          onChange={handleChangeInput}
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
