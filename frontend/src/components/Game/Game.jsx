import "./Game.css";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { activeAnime } from "../../slices/animeCoverSlice";
import { addScore, resetScore } from "../../slices/userSlice";
import { makeCoverList } from "../../slices/coverListSlice";

import AnimeCover from "../AnimeCover/AnimeCover";
import Heart from "../Heart/Heart";
import WrongItem from "../WrongItem/WrongItem";
import GuessCard from "../GuessCard/GuessCard";
import { toast } from "react-toastify";

function Game() {
  const BASE_URL = "http://localhost:8080"; //URL Base de acesso a API.
  const NUM_COVERS = 10; //Quantidade total de animes na API
  const PLAYER_LIFE = 5; //Quantidade de vidas do jogador

  const cover = useSelector((state) => state.animeCover); //Pega as informações do state atual do Anime Cover
  const user = useSelector((state) => state.user); //Pega as informações do state atual do User
  const coverList = useSelector((state) => state.coverList.covers); //Pega as informações do state atual de Cover List

  const dispatch = useDispatch(); //Permite fazer alterações no state do anime Cover
  const { register, handleSubmit, setValue } = useForm(); //Manipula o formulario

  const [wrongGuesses, setWrongGuesses] = useState(["", "", "", "", ""]); //Armazena os guesses errados do usuário
  const [guess, setGuess] = useState(""); //Armazena o guess do usuário
  const [covers, setCovers] = useState([]); //Armazena os possiveis animes dado um input do usuário
  const [life, setLife] = useState(PLAYER_LIFE); //Armazena a vida atual do usuário
  const [imageLevel, setImageLevel] = useState(""); //Armazena o estado atual da capa do anime
  const [isGameRunning, setIsGameRunning] = useState(false); //Armazena se a rodada está ativa.
  const [roundWin, setRoundWin] = useState(false); //Armazena se o usuario venceu a rodada
  const [coversPlayed, setCoversPlayed] = useState([]); //Armazena ids de animes já jogados nesta partida.

  //Faz GET de todos os AnimeCover do banco, guarda em um Reducer e inicia uma nova rodada
  useEffect(() => {
    const urlApi = `${BASE_URL}/anime-covers`;

    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => {
        dispatch(makeCoverList(data));

        if (!isGameRunning) {
          handleNewRound();
        }
      });
  }, []);

  //Lida com as mudanças do nivel da imagem
  useEffect(() => {
    if (life === 4) {
      setImageLevel(cover.url1);
    }
    if (life === 3) {
      setImageLevel(cover.url2);
    }
    if (life === 2) {
      setImageLevel(cover.url3);
    }
    if (life === 1) {
      setImageLevel(cover.url4);
    }
    if (life === 0) {
      setIsGameRunning(false);
      setRoundWin(false);
      setImageLevel(cover.urlCover);
    }
  }, [life]);

  //Compara o guess do usuário com a resposta
  const onSubmit = (data) => {
    const guess = data.guess;

    //Checa se o guess é de anime que existe na coverList ou não. (Existe-> >=0 | Não existe-> -1)
    const index = coverList.findIndex((val) => val.title == guess);

    if (life > 0 && index >= 0 && guess == cover.title && isGameRunning) {
      dispatch(addScore());
      setIsGameRunning(false);
      setRoundWin(true);
      setGuess("");
      setImageLevel(cover.urlCover);
    } else if (life > 0 && index >= 0 && isGameRunning) {
      setLife(life - 1);
      setGuess("");
      setValue("guess", "");
      setWrongGuesses(...[wrongGuesses], (wrongGuesses[life - 1] = guess));
    }
  };

  //Lida com as mudanças no formulário
  function handleChangeFormInput(event) {
    const actualGuess = event.target.value;
    setGuess(actualGuess);

    if (actualGuess.length > 1) {
      const animeOptions = coverList.filter((item) =>
        item.title.toLowerCase().includes(actualGuess.toLowerCase())
      );

      setCovers(animeOptions);
    } else {
      setCovers([]);
    }
  }

  //Lida com o botão de gerar nova rodada
  function handleNewRound() {
    const idAnime = Math.floor(Math.random() * NUM_COVERS) + 1;

    if (!coversPlayed.includes(idAnime)) {
      const urlApi = `${BASE_URL}/anime-covers/${idAnime}`;

      fetch(urlApi)
        .then((response) => response.json())
        .then((data) => {
          dispatch(activeAnime(data));
          setImageLevel(data.url0);
          setLife(PLAYER_LIFE);
          setWrongGuesses(["", "", "", "", ""]);
          setCovers([]);
          setValue("guess", "");
          setCoversPlayed(...[coversPlayed], coversPlayed.push(idAnime));
          setIsGameRunning(true);

          //Reseta o score caso a rodada não tenha sido ganha
          if (!roundWin) {
            dispatch(resetScore());
          }
        });
    } else if (coversPlayed.length == NUM_COVERS) {
      toast.success("You finished all current animes! Congratulations!");
    } else {
      handleNewRound();
    }
  }

  return (
    <>
      <div className="guessnime-score-hud">
        <p>
          <span className="guessnime-score"> SCORE: {user.score}</span>
          <span className="guessnime-maxscore">
            BEST SCORE: {user.maxScore}
          </span>
        </p>
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
          style={!isGameRunning ? { display: "none" } : null}
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
            autoComplete="off"
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

      <div
        className="guessnime-wrong-guesses-container"
        style={!isGameRunning ? { display: "none" } : null}
      >
        <ul className="guessnime-wrong-list">
          <WrongItem
            name={wrongGuesses[4]}
            isActive={life > 4 ? "li-not-visible" : ""}
          />
          <WrongItem
            name={wrongGuesses[3]}
            isActive={life > 3 ? "li-not-visible" : ""}
          />
          <WrongItem
            name={wrongGuesses[2]}
            isActive={life > 2 ? "li-not-visible" : ""}
          />
          <WrongItem
            name={wrongGuesses[1]}
            isActive={life > 1 ? "li-not-visible" : ""}
          />
        </ul>
      </div>

      <div
        className="guessnime-info-card"
        style={isGameRunning ? { display: "none" } : null}
      >
        <GuessCard
          isActive={isGameRunning ? "card-not-visible" : ""}
          guessResult={life == 0 ? "Failed!" : "Win"}
          coverTitle={cover.title}
        />
        <button
          className="btn btn-primary guessanime-guess-button"
          onClick={handleNewRound}
        >
          {roundWin ? "Continue" : "Reset"}
        </button>
      </div>
    </>
  );
}

export default Game;
