import { useState } from "react";
import Heart from "../Heart/Heart";

import "./LifeHUD.css";

function LifeHUD() {
  const [row, setRow] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="guessnime-life-hud">
      <div className="guessnime-lifes-image">
        {row.map((data) => {
          return <Heart key={data} />;
        })}
      </div>

      <div className="guessnime-life-text">
        <p>{row.length} lifes remaining</p>
      </div>
    </div>
  );
}

export default LifeHUD;
