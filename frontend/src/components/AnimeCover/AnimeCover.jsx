import { useState } from "react";
import { useEffect } from "react";

import "./AnimeCover.css";

function AnimeCover() {
  const [cover, setCover] = useState([]);

  useEffect(() => {
    const url_api = "http://localhost:8080/anime-covers/1";
    fetch(url_api)
      .then((response) => response.json())
      .then((data) => setCover(data));
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
