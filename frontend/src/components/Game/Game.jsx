import "./Game.css";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { activeAnime } from "../../slices/animeCoverSlice";

import AnimeCover from "../AnimeCover/AnimeCover";
import Heart from "../Heart/Heart";

function Game() {
  const { register, handleSubmit, setValue } = useForm(); //Manipula o formulario
  const cover = useSelector((state) => state.animeCover); //Pega as informações do state atual do Anime Cover
  const dispatch = useDispatch(); //Permite fazer alterações no state do anime Cover

  const [guess, setGuess] = useState(""); //Armazena o guess do usuário
  const [covers, setCovers] = useState([]); //Armazena os possiveis animes dado um input do usuário
  const [life, setLife] = useState(5); //Armazena a vida atual do usuário

  //Faz o GET do AnimeCover do banco e armazena ele no Reducer animeCover
  useEffect(() => {
    const url_api = "http://localhost:8080/anime-covers/1";
    fetch(url_api)
      .then((response) => response.json())
      .then((data) => dispatch(activeAnime(data)));
  }, []);

  //Compara o guess do usuário com a resposta
  const onSubmit = (data) => {
    const guess = data.guess;

    if (guess === cover.title) {
      alert("Acertou!");
    } else {
      if (life > 0) {
        setLife(life - 1);
      }
    }
  };

  //Lida com as mudanças no formulário
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

      <div className="guessnime-life-hud">
        <div className="guessnime-life-hearts">
          <Heart isActive={life >= 1 ? "" : "fill-black"} />
          <Heart isActive={life >= 2 ? "" : "fill-black"} />
          <Heart isActive={life >= 3 ? "" : "fill-black"} />
          <Heart isActive={life >= 4 ? "" : "fill-black"} />
          <Heart isActive={life >= 5 ? "" : "fill-black"} />
        </div>
        <div className="guessnime-life-text">
          <p> {life} lifes remaining</p>
        </div>
      </div>
    </>
  );
}

export default Game;
