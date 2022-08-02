import { useEffect } from "react";
import { activeAnime } from "../../slices/animeCoverSlice";
import { useDispatch, useSelector } from "react-redux";

import "./AnimeCover.css";

function AnimeCover() {
  const cover = useSelector((state) => state.animeCover);
  const dispatch = useDispatch();

  useEffect(() => {
    const url_api = "http://localhost:8080/anime-covers/1";
    fetch(url_api)
      .then((response) => response.json())
      .then((data) => dispatch(activeAnime(data)));
  }, []);

  return (
    <>
      <img
        className="img-fluid mx-auto d-block guessnime-animecover"
        src={cover.url0}
        alt="anime-cover"
      />
    </>
  );
}

export default AnimeCover;
