import "./Game.css";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { activeAnime } from "../../slices/animeCoverSlice";
import AnimeCover from "../AnimeCover/AnimeCover";

function Game() {
  const { register, handleSubmit, setValue } = useForm(); //Manipula o formulario
  const cover = useSelector((state) => state.animeCover); //Pega as informações do state atual do Anime Cover
  const dispatch = useDispatch(); //Permite fazer alterações no state do anime Cover

  const [guess, setGuess] = useState(""); //Armazena o guess do usuário
  const [covers, setCovers] = useState([]); //Armazena os possiveis animes dado um input do usuário

  //Faz o GET do AnimeCover do banco e armazena ele no Reducer animeCover
  useEffect(() => {
    const url_api = "http://localhost:8080/anime-covers/1";
    fetch(url_api)
      .then((response) => response.json())
      .then((data) => dispatch(activeAnime(data)));
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };

  function handleChangeFormInput(event) {
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
    <>
      <div className="guessanime-anime-container">
        <AnimeCover image={cover.url0} />
      </div>
      <div className="guessanime-guess-container">
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
        <form
          className="guessnime-guess-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            name="guess"
            placeholder="🔎 Search an anime..."
            className="guessnime-guess-input"
            value={guess}
            {...register("guess")}
            onChange={handleChangeFormInput}
          />
          <button
            type="submit"
            className="btn btn-primary guessanime-guess-button"
          >
            GUESS!
          </button>
        </form>
      </div>
    </>
  );
}

export default Game;
