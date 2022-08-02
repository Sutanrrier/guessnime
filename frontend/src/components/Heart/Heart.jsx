import heart from "../../assets/heart.svg";

import "./Heart.css";

function Heart(props) {
  const classes = `guessnime-heart ${props.isActive}`;
  return <img src={heart} alt="heart" className={classes} />;
}

export default Heart;
