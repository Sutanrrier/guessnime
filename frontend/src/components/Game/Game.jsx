import "./Game.css";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { activeAnime } from "../../slices/animeCoverSlice";
import { addScore, setMaxScore, resetScore } from "../../slices/userSlice";

import AnimeCover from "../AnimeCover/AnimeCover";
import Heart from "../Heart/Heart";
import WrongItem from "../WrongItem/WrongItem";

function Game() {
  const { register, handleSubmit, setValue } = useForm(); //Manipula o formulario
  const cover = useSelector((state) => state.animeCover); //Pega as informações do state atual do Anime Cover
  const user = useSelector((state) => state.user); //Pega as informações do state atual do User
  const dispatch = useDispatch(); //Permite fazer alterações no state do anime Cover

  const [wrongGuesses, setWrongGuesses] = useState(["", "", "", "", ""]); //Armazena os guesses errados do usuário
  const [guess, setGuess] = useState(""); //Armazena o guess do usuário
  const [covers, setCovers] = useState([]); //Armazena os possiveis animes dado um input do usuário
  const [life, setLife] = useState(5); //Armazena a vida atual do usuário
  const [imageLevel, setImageLevel] = useState(""); //Armazena o estado atual da capa do anime

  //Faz o GET do AnimeCover do banco e armazena ele no Reducer animeCover
  useEffect(() => {
    const urlApi = "http://localhost:8080/anime-covers/1";
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => {
        dispatch(activeAnime(data));
        setImageLevel(data.url0);
      });
  }, []);

  //Lida com as mudanças do nivel da imagem
  useEffect(() => {
    if (life == 4) {
      setImageLevel(cover.url1);
    }
    if (life == 3) {
      setImageLevel(cover.url2);
    }
    if (life == 2) {
      setImageLevel(cover.url3);
    }
    if (life == 1) {
      setImageLevel(cover.url4);
    }
    if (life == 0) {
      setImageLevel(cover.urlCover);
      alert("Você perdeu!");
      dispatch(setMaxScore());
      dispatch(resetScore());
    }
  }, [life]);

  //Compara o guess do usuário com a resposta
  const onSubmit = (data) => {
    const guess = data.guess;

    if (guess === cover.title) {
      alert("Acertou!");
      dispatch(addScore());
    } else {
      if (life > 0) {
        setLife(life - 1);
        setWrongGuesses(...[wrongGuesses], (wrongGuesses[life - 1] = guess));
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
      <div className="guessnime-score-hud">
        <p>SCORE: {user.score}</p>
        <p>MAX SCORE: {user.maxScore}</p>
      </div>

      <div className="guessanime-anime-container">
        <AnimeCover
          image={imageLevel}
          guessType={life > 0 ? "cover-guess" : "cover-wrong"}
        />
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

      <div className="guessnime-wrong-guesses-container">
        <ul className="guessnime-wrong-list">
          <WrongItem
            name={wrongGuesses[4]}
            isActive={life <= 4 ? "li-visible" : "li-not-visible"}
          />
          <WrongItem
            name={wrongGuesses[3]}
            isActive={life <= 3 ? "li-visible" : "li-not-visible"}
          />
          <WrongItem
            name={wrongGuesses[2]}
            isActive={life <= 2 ? "li-visible" : "li-not-visible"}
          />
          <WrongItem
            name={wrongGuesses[1]}
            isActive={life <= 1 ? "li-visible" : "li-not-visible"}
          />
          <WrongItem
            name={wrongGuesses[0]}
            isActive={life === 0 ? "li-visible" : "li-not-visible"}
          />
        </ul>
      </div>
    </>
  );
}

export default Game;
